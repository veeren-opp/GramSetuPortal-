const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Otp = require('../models/Otp');

const OTP_EXPIRY_MINUTES = 5;
const MAX_VERIFY_ATTEMPTS = 5;

/**
 * Generate a cryptographically random 6-digit OTP
 */
const generateRandomOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

/**
 * Send an OTP to a mobile number
 */
const sendOtp = async (mobile) => {
  // Check if an unexpired OTP was recently requested (cooldown check)
  const existingOtp = await Otp.findOne({ mobile });
  if (existingOtp) {
    const elapsedSeconds = (Date.now() - new Date(existingOtp.createdAt).getTime()) / 1000;
    if (elapsedSeconds < 45) {
      const waitTime = Math.ceil(45 - elapsedSeconds);
      throw new Error(`Please wait ${waitTime} seconds before requesting a new OTP.`);
    }
    // Remove previous OTP record
    await Otp.deleteMany({ mobile });
  }

  const plainOtp = generateRandomOtp();
  const salt = await bcrypt.genSalt(10);
  const otpHash = await bcrypt.hash(plainOtp, salt);

  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

  await Otp.create({
    mobile,
    otpHash,
    attempts: 0,
    expiresAt,
    createdAt: new Date()
  });

  const isDevMode = (process.env.OTP_MODE || 'development').toLowerCase() === 'development';

  if (isDevMode) {
    console.log(`=======================================================`);
    console.log(`📱 [SMS SERVICE DEV SIMULATION]`);
    console.log(`📲 To Mobile: +91 ${mobile}`);
    console.log(`🔑 Verification OTP: ${plainOtp} (Valid for ${OTP_EXPIRY_MINUTES} mins)`);
    console.log(`=======================================================`);
  } else {
    // In production, integrate with SMS gateway (Twilio, Fast2SMS, MSG91, etc.)
    console.log(`[SMS PROD] Sent OTP to +91 ${mobile} via provider: ${process.env.OTP_PROVIDER || 'default'}`);
  }

  return {
    success: true,
    expiresIn: OTP_EXPIRY_MINUTES * 60,
    devOtp: isDevMode ? plainOtp : undefined
  };
};

/**
 * Verify an OTP entered by the user
 */
const verifyOtp = async (mobile, enteredOtp) => {
  const otpRecord = await Otp.findOne({ mobile });

  if (!otpRecord) {
    return {
      success: false,
      message: 'OTP has expired or was not requested. Please request a new code.'
    };
  }

  // Check maximum attempts
  if (otpRecord.attempts >= MAX_VERIFY_ATTEMPTS) {
    await Otp.deleteMany({ mobile });
    return {
      success: false,
      message: 'Maximum verification attempts exceeded. Please request a new OTP.'
    };
  }

  // Verify hash
  const isMatch = await bcrypt.compare(enteredOtp.toString(), otpRecord.otpHash);

  if (!isMatch) {
    otpRecord.attempts += 1;
    await otpRecord.save();
    const remaining = MAX_VERIFY_ATTEMPTS - otpRecord.attempts;
    return {
      success: false,
      message: `Invalid OTP. ${remaining} attempt(s) remaining.`
    };
  }

  // Successful verification - clear OTP
  await Otp.deleteMany({ mobile });

  return {
    success: true,
    message: 'Mobile number verified successfully.'
  };
};

module.exports = {
  sendOtp,
  verifyOtp
};
