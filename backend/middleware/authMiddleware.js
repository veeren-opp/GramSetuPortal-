const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getJwtSecret = () => {
  return process.env.JWT_SECRET || 'gramsetu_production_jwt_secret_key_change_in_production_2026';
};

/**
 * Verifies JWT token and attaches authenticated user to req.user
 */
const authenticateToken = async (req, res, next) => {
  try {
    let token = null;

    // Check Authorization Header: "Bearer <token>"
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {
      // Support HTTP-only cookie
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. No session token provided.'
      });
    }

    // Verify Token
    let decoded;
    try {
      decoded = jwt.verify(token, getJwtSecret());
    } catch (jwtErr) {
      if (jwtErr.name === 'TokenExpiredError') {
        return res.status(401).json({
          success: false,
          message: 'Your session has expired. Please sign in again.'
        });
      }
      return res.status(401).json({
        success: false,
        message: 'Invalid session token. Please sign in again.'
      });
    }

    // Load user record from MongoDB
    const user = await User.findById(decoded.id)
      .populate('state', 'name code')
      .populate('district', 'name')
      .populate('taluka', 'name')
      .populate('region', 'name code pincode')
      .populate('ward', 'name wardNumber');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Account associated with this token no longer exists.'
      });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

/**
 * Enforces Citizen Role
 */
const requireCitizen = (req, res, next) => {
  if (!req.user || req.user.role !== 'citizen') {
    return res.status(403).json({
      success: false,
      message: 'Access denied: Citizen credentials required.'
    });
  }
  next();
};

/**
 * Enforces Regional or Super Admin Role
 */
const requireAdmin = (req, res, next) => {
  if (!req.user || (req.user.role !== 'regional_admin' && req.user.role !== 'super_admin')) {
    return res.status(403).json({
      success: false,
      message: 'Access denied: Official Regional Administrator privileges required.'
    });
  }
  next();
};

module.exports = {
  authenticateToken,
  requireCitizen,
  requireAdmin
};
