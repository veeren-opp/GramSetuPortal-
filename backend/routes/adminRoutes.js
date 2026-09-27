const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');
const { authenticateToken, requireAdmin } = require('../middleware/authMiddleware');

// Public Admin Login endpoint
router.post('/login', authController.login);

// Guard remaining admin routes strictly
router.use(authenticateToken, requireAdmin);

// Regional Dashboard KPIs
router.get('/dashboard', adminController.getDashboard);

// Regional Complaints List with search, filtering & pagination
router.get('/complaints', adminController.getComplaints);

// View single complaint within assigned region
router.get('/complaints/:id', adminController.getComplaintById);

// Update status and remarks for a complaint within assigned region
router.patch('/complaints/:id', adminController.updateComplaint);

// Admin Profile
router.get('/profile', adminController.getProfile);

module.exports = router;
