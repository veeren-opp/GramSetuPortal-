const express = require('express');
const router = express.Router();
const citizenController = require('../controllers/citizenController');
const { authenticateToken, requireCitizen } = require('../middleware/authMiddleware');

// Guard all citizen routes
router.use(authenticateToken, requireCitizen);

router.get('/dashboard', citizenController.getDashboard);
router.get('/profile', citizenController.getProfile);
router.put('/profile', citizenController.updateProfile);

module.exports = router;
