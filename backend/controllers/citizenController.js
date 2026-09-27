const Complaint = require('../models/Complaint');
const User = require('../models/User');

/**
 * GET /api/citizen/dashboard
 * Aggregates real-time complaint metrics for the logged-in citizen
 */
exports.getDashboard = async (req, res, next) => {
  try {
    const citizenId = req.user._id;

    const [
      total,
      submitted,
      underReview,
      inProgress,
      resolved,
      rejected,
      recentComplaints
    ] = await Promise.all([
      Complaint.countDocuments({ citizen: citizenId }),
      Complaint.countDocuments({ citizen: citizenId, status: 'Submitted' }),
      Complaint.countDocuments({ citizen: citizenId, status: 'Under Review' }),
      Complaint.countDocuments({ citizen: citizenId, status: 'In Progress' }),
      Complaint.countDocuments({ citizen: citizenId, status: 'Resolved' }),
      Complaint.countDocuments({ citizen: citizenId, status: 'Rejected' }),
      Complaint.find({ citizen: citizenId })
        .sort({ createdAt: -1 })
        .limit(5)
        .populate('region', 'name code')
        .populate('ward', 'name wardNumber')
    ]);

    res.json({
      success: true,
      stats: {
        total,
        submitted,
        underReview,
        inProgress,
        resolved,
        rejected
      },
      recentComplaints
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/citizen/profile
 */
exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('state', 'name code')
      .populate('district', 'name')
      .populate('taluka', 'name')
      .populate('region', 'name code pincode')
      .populate('ward', 'name wardNumber');

    res.json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/citizen/profile
 */
exports.updateProfile = async (req, res, next) => {
  try {
    const { name, email, ward } = req.body;
    const user = await User.findById(req.user._id);

    if (name && name.trim()) {
      user.name = name.trim();
    }
    if (typeof email === 'string') {
      user.email = email.trim().toLowerCase();
    }
    if (ward) {
      user.ward = ward;
    }

    await user.save();

    const updatedUser = await User.findById(user._id)
      .populate('state', 'name code')
      .populate('district', 'name')
      .populate('taluka', 'name')
      .populate('region', 'name code pincode')
      .populate('ward', 'name wardNumber');

    res.json({
      success: true,
      message: 'Profile updated successfully.',
      user: updatedUser
    });
  } catch (error) {
    next(error);
  }
};
