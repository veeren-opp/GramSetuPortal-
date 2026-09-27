const Complaint = require('../models/Complaint');
const User = require('../models/User');

/**
 * GET /api/admin/dashboard
 * Regional dashboard statistics strictly partitioned by req.user.region
 */
exports.getDashboard = async (req, res, next) => {
  try {
    const admin = req.user;
    const adminRegionId = admin.region ? (admin.region._id || admin.region) : null;

    if (!adminRegionId) {
      return res.status(403).json({
        success: false,
        message: 'Administrative account is missing an assigned Gram Panchayat region.'
      });
    }

    const baseFilter = { region: adminRegionId };

    const [
      total,
      submitted,
      underReview,
      inProgress,
      resolved,
      rejected,
      recentComplaints
    ] = await Promise.all([
      Complaint.countDocuments(baseFilter),
      Complaint.countDocuments({ ...baseFilter, status: 'Submitted' }),
      Complaint.countDocuments({ ...baseFilter, status: 'Under Review' }),
      Complaint.countDocuments({ ...baseFilter, status: 'In Progress' }),
      Complaint.countDocuments({ ...baseFilter, status: 'Resolved' }),
      Complaint.countDocuments({ ...baseFilter, status: 'Rejected' }),
      Complaint.find(baseFilter)
        .sort({ createdAt: -1 })
        .limit(5)
        .populate('ward', 'name wardNumber')
    ]);

    res.json({
      success: true,
      region: admin.region,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        mobile: admin.mobile,
        designation: admin.designation,
        role: admin.role
      },
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
 * GET /api/admin/complaints
 * Lists complaints STRICTLY within the admin's assigned Gram Panchayat
 * Security: req.user.region is strictly enforced; query params cannot override region.
 */
exports.getComplaints = async (req, res, next) => {
  try {
    const admin = req.user;
    const adminRegionId = admin.region ? (admin.region._id || admin.region) : null;

    if (!adminRegionId) {
      return res.status(403).json({
        success: false,
        message: 'No administrative jurisdiction assigned to this account.'
      });
    }

    const {
      search,
      status,
      category,
      ward,
      page = 1,
      limit = 20,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Strict regional partition
    const query = { region: adminRegionId };

    if (status && status !== 'ALL') {
      query.status = status;
    }

    if (category && category !== 'ALL') {
      query.category = category;
    }

    if (ward && ward !== 'ALL') {
      query.ward = ward;
    }

    if (search && search.trim()) {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { complaintId: searchRegex },
        { title: searchRegex },
        { description: searchRegex },
        { location: searchRegex },
        { citizenName: searchRegex },
        { citizenMobile: searchRegex }
      ];
    }

    const pageNum = Math.max(1, parseInt(page, 10));
    const pageLimit = Math.max(1, Math.min(100, parseInt(limit, 10)));
    const skip = (pageNum - 1) * pageLimit;

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

    const [complaints, totalCount] = await Promise.all([
      Complaint.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(pageLimit)
        .populate('ward', 'name wardNumber')
        .populate('region', 'name code'),
      Complaint.countDocuments(query)
    ]);

    res.json({
      success: true,
      region: admin.region,
      pagination: {
        total: totalCount,
        page: pageNum,
        limit: pageLimit,
        pages: Math.ceil(totalCount / pageLimit)
      },
      complaints
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/admin/complaints/:id
 * Single complaint lookup with regional jurisdiction check
 */
exports.getComplaintById = async (req, res, next) => {
  try {
    const admin = req.user;
    const adminRegionId = admin.region ? (admin.region._id || admin.region).toString() : null;
    const { id } = req.params;

    const isIdString = id.startsWith('CMP-');
    const query = isIdString ? { complaintId: id } : { _id: id };

    const complaint = await Complaint.findOne(query)
      .populate('citizen', 'name mobile email')
      .populate('state', 'name')
      .populate('district', 'name')
      .populate('taluka', 'name')
      .populate('region', 'name code pincode')
      .populate('ward', 'name wardNumber');

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: 'Grievance record not found.'
      });
    }

    // Enforce Regional Isolation
    const complaintRegionId = complaint.region ? (complaint.region._id || complaint.region).toString() : '';

    if (admin.role !== 'super_admin' && complaintRegionId !== adminRegionId) {
      return res.status(403).json({
        success: false,
        message: `Jurisdiction Violation: Complaint ${complaint.complaintId} belongs to a different Gram Panchayat.`
      });
    }

    res.json({
      success: true,
      complaint
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /api/admin/complaints/:id
 * Update status, assigned officer, and official administrative remarks
 */
exports.updateComplaint = async (req, res, next) => {
  try {
    const admin = req.user;
    const adminRegionId = admin.region ? (admin.region._id || admin.region).toString() : null;
    const { id } = req.params;
    const { status, adminRemark, assignedOfficer } = req.body;

    const validStatuses = ['Submitted', 'Under Review', 'In Progress', 'Resolved', 'Rejected'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status: '${status}'. Allowed statuses: ${validStatuses.join(', ')}`
      });
    }

    const isIdString = id.startsWith('CMP-');
    const query = isIdString ? { complaintId: id } : { _id: id };

    const complaint = await Complaint.findOne(query);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: 'Grievance record not found.'
      });
    }

    // Regional boundary check
    const complaintRegionId = (complaint.region._id || complaint.region).toString();
    if (admin.role !== 'super_admin' && complaintRegionId !== adminRegionId) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: You cannot modify grievances outside your assigned Gram Panchayat.'
      });
    }

    const prevStatus = complaint.status;
    if (status) {
      complaint.status = status;
      if (status === 'Resolved') {
        complaint.resolvedAt = new Date();
      }
    }

    if (typeof adminRemark === 'string') {
      complaint.adminRemark = adminRemark.trim();
    }

    if (typeof assignedOfficer === 'string') {
      complaint.assignedOfficer = assignedOfficer.trim();
    }

    // Audit trail
    complaint.statusHistory.push({
      status: complaint.status,
      changedBy: `${admin.name} (${admin.designation || 'Regional Officer'})`,
      remarks: adminRemark || `Status transitioned from '${prevStatus}' to '${complaint.status}'.`,
      timestamp: new Date()
    });

    await complaint.save();

    const updated = await Complaint.findById(complaint._id)
      .populate('citizen', 'name mobile email')
      .populate('ward', 'name wardNumber')
      .populate('region', 'name code');

    res.json({
      success: true,
      message: `Grievance ${complaint.complaintId} updated successfully.`,
      complaint: updated
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/admin/profile
 */
exports.getProfile = async (req, res, next) => {
  try {
    const admin = await User.findById(req.user._id)
      .populate('region', 'name code pincode')
      .populate('district', 'name')
      .populate('taluka', 'name')
      .populate('state', 'name');

    res.json({
      success: true,
      admin
    });
  } catch (error) {
    next(error);
  }
};
