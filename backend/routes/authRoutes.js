const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Citizen registration (initiates account & dispatches OTP)
router.post('/register', authController.register);

// Send / Resend OTP
router.post('/send-otp', authController.resendOtp);

// Verify OTP & activate account
router.post('/verify-otp', authController.verifyOtpHandler);

// Multi-role login
router.post('/login', authController.login);

// Session logout
router.post('/logout', authController.logout);

// Session check
router.get('/me', authenticateToken, authController.getMe);

module.exports = router;
