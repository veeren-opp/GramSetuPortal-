const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendOtp, verifyOtp } = require('../services/otpService');

const getJwtSecret = () => {
  return process.env.JWT_SECRET || 'gramsetu_production_jwt_secret_key_change_in_production_2026';
};

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      region: user.region ? user.region.toString() : null
    },
    getJwtSecret(),
    { expiresIn: '7d' }
  );
};

/**
 * POST /api/auth/register
 * Step 1: Creates an unverified citizen record and dispatches mobile OTP
 */
exports.register = async (req, res, next) => {
  try {
    const {
      name,
      mobile,
      email,
      password,
      confirmPassword,
      state,
      district,
      taluka,
      region,
      ward
    } = req.body;

    // Validation
    if (!name || !mobile || !password || !region) {
      return res.status(400).json({
        success: false,
        message: 'Name, 10-digit mobile number, password, and Gram Panchayat region are required.'
      });
    }

    if (!/^\d{10}$/.test(mobile.toString().trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit Indian mobile number.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters in length.'
      });
    }

    if (confirmPassword && password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match. Please re-enter.'
      });
    }

    const cleanMobile = mobile.toString().trim();

    // Check if account already exists
    const existingUser = await User.findOne({ mobile: cleanMobile });

    if (existingUser && existingUser.isVerified) {
      return res.status(409).json({
        success: false,
        message: 'A verified citizen account with this mobile number already exists. Please sign in.'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    if (existingUser && !existingUser.isVerified) {
      // Update unverified user record
      existingUser.name = name.trim();
      existingUser.email = (email || '').trim().toLowerCase();
      existingUser.passwordHash = passwordHash;
      existingUser.state = state || null;
      existingUser.district = district || null;
      existingUser.taluka = taluka || null;
      existingUser.region = region;
      existingUser.ward = ward || null;
      await existingUser.save();
    } else {
      // Create new user
      await User.create({
        name: name.trim(),
        mobile: cleanMobile,
        email: (email || '').trim().toLowerCase(),
        passwordHash,
        role: 'citizen',
        state: state || null,
        district: district || null,
        taluka: taluka || null,
        region,
        ward: ward || null,
        isVerified: false
      });
    }

    // Generate & send OTP
    const otpResult = await sendOtp(cleanMobile);

    res.status(201).json({
      success: true,
      message: 'Registration initiated. Verification OTP has been sent to your mobile number.',
      mobile: cleanMobile,
      expiresIn: otpResult.expiresIn,
      devOtp: otpResult.devOtp // Only present in development mode
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/send-otp
 * Dispatches or resends a 6-digit OTP
 */
exports.resendOtp = async (req, res, next) => {
  try {
    const { mobile } = req.body;

    if (!mobile || !/^\d{10}$/.test(mobile.toString().trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit mobile number.'
      });
    }

    const cleanMobile = mobile.toString().trim();
    const result = await sendOtp(cleanMobile);

    res.json({
      success: true,
      message: 'New OTP has been sent successfully.',
      expiresIn: result.expiresIn,
      devOtp: result.devOtp
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/verify-otp
 * Step 2: Validates OTP, activates citizen account, and issues JWT session
 */
exports.verifyOtpHandler = async (req, res, next) => {
  try {
    const { mobile, otp } = req.body;

    if (!mobile || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Mobile number and 6-digit OTP are required.'
      });
    }

    const cleanMobile = mobile.toString().trim();
    const verifyResult = await verifyOtp(cleanMobile, otp.toString().trim());

    if (!verifyResult.success) {
      return res.status(400).json({
        success: false,
        message: verifyResult.message
      });
    }

    // Activate citizen user
    const user = await User.findOne({ mobile: cleanMobile })
      .populate('state', 'name code')
      .populate('district', 'name')
      .populate('taluka', 'name')
      .populate('region', 'name code pincode')
      .populate('ward', 'name wardNumber');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User record not found.'
      });
    }

    user.isVerified = true;
    await user.save();

    const token = generateToken(user);

    // Optional: set secure cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      success: true,
      message: 'Mobile number verified and account activated successfully.',
      token,
      user
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/login
 * Authenticates citizen or admin with mobile/email + password
 */
exports.login = async (req, res, next) => {
  try {
    const { mobile, email, password } = req.body;
    const identifier = (mobile || email || '').toString().trim();

    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide mobile number / email and password.'
      });
    }

    // Search by mobile number or email
    const isMobile = /^\d{10}$/.test(identifier);
    const query = isMobile ? { mobile: identifier } : { email: identifier.toLowerCase() };

    const user = await User.findOne(query)
      .populate('state', 'name code')
      .populate('district', 'name')
      .populate('taluka', 'name')
      .populate('region', 'name code pincode')
      .populate('ward', 'name wardNumber');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials. No registered account matches the provided details.'
      });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid mobile number or password.'
      });
    }

    // Check verification status (citizens must be mobile verified)
    if (user.role === 'citizen' && !user.isVerified) {
      return res.status(403).json({
        success: false,
        isVerified: false,
        mobile: user.mobile,
        message: 'Your mobile number is not yet verified. Please complete OTP verification.'
      });
    }

    const token = generateToken(user);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      token,
      user
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/logout
 */
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.json({
    success: true,
    message: 'Signed out successfully.'
  });
};

/**
 * GET /api/auth/me
 */
exports.getMe = (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
};
