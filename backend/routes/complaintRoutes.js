const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');
const { authenticateToken, requireCitizen } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Citizen submits complaint with photographic evidence
router.post(
  '/',
  authenticateToken,
  requireCitizen,
  upload.single('photograph'),
  complaintController.submitComplaint
);

// Citizen gets list of their own submitted complaints
router.get(
  '/',
  authenticateToken,
  requireCitizen,
  complaintController.getCitizenComplaints
);

// Get single complaint details (accessible by citizen owner or assigned regional admin)
router.get(
  '/:id',
  authenticateToken,
  complaintController.getComplaintById
);

module.exports = router;
