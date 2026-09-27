const Complaint = require('../models/Complaint');
const { generateComplaintId } = require('../utils/idGenerator');
const { uploadComplaintImage } = require('../services/cloudinaryService');

/**
 * POST /api/complaints
 * Citizen grievance submission with real photo upload
 * SECURITY: Derives region, state, district, taluka strictly from req.user
 */
exports.submitComplaint = async (req, res, next) => {
  try {
    const { title, category, description, location } = req.body;

    if (!title || !category || !description || !location) {
      return res.status(400).json({
        success: false,
        message: 'Title, category, description, and location details are all required.'
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Photographic evidence is required. Please capture or upload an image.'
      });
    }

    // Citizen must have a configured Gram Panchayat region
    const citizen = req.user;
    if (!citizen.region) {
      return res.status(400).json({
        success: false,
        message: 'Your profile is missing a registered Gram Panchayat region. Please update your profile.'
      });
    }

    // Upload file to Cloudinary (folder: gramsetu/complaints)
    const { imageUrl, imagePublicId } = await uploadComplaintImage(
      req.file.buffer,
      req.file.originalname
    );

    // Generate sequential ticket ID
    const complaintId = await generateComplaintId();

    const regionId = citizen.region._id || citizen.region;
    const wardId = citizen.ward ? (citizen.ward._id || citizen.ward) : null;

    const complaint = await Complaint.create({
      complaintId,
      citizen: citizen._id,
      citizenName: citizen.name,
      citizenMobile: citizen.mobile,
      title: title.trim(),
      category,
      description: description.trim(),
      location: location.trim(),
      // SECURE LOCATION DERIVATION (Immune to client tampering)
      state: citizen.state ? (citizen.state._id || citizen.state) : null,
      district: citizen.district ? (citizen.district._id || citizen.district) : null,
      taluka: citizen.taluka ? (citizen.taluka._id || citizen.taluka) : null,
      region: regionId,
      ward: wardId,
      imageUrl,
      imagePublicId,
      status: 'Submitted',
      adminRemark: '',
      assignedOfficer: '',
      statusHistory: [
        {
          status: 'Submitted',
          changedBy: citizen.name,
          remarks: 'Grievance ticket created with site photographic evidence.',
          timestamp: new Date()
        }
      ]
    });

    const populatedComplaint = await Complaint.findById(complaint._id)
      .populate('region', 'name code')
      .populate('ward', 'name wardNumber');

    res.status(201).json({
      success: true,
      message: `Grievance ticket ${complaintId} lodged successfully.`,
      complaint: populatedComplaint
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/complaints
 * Returns complaints submitted by the authenticated citizen
 */
exports.getCitizenComplaints = async (req, res, next) => {
  try {
    const { search, status, category } = req.query;
    const query = { citizen: req.user._id };

    if (status && status !== 'ALL') {
      query.status = status;
    }

    if (category && category !== 'ALL') {
      query.category = category;
    }

    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), 'i');
      query.$or = [
        { complaintId: regex },
        { title: regex },
        { description: regex },
        { location: regex }
      ];
    }

    const complaints = await Complaint.find(query)
      .sort({ createdAt: -1 })
      .populate('region', 'name code')
      .populate('ward', 'name wardNumber');

    res.json({
      success: true,
      count: complaints.length,
      complaints
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/complaints/:id
 * Returns single complaint details (accessible by citizen owner or assigned regional admin)
 */
exports.getComplaintById = async (req, res, next) => {
  try {
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

    // Role-based Access Verification
    const isCitizenOwner = req.user.role === 'citizen' && complaint.citizen._id.toString() === req.user._id.toString();
    const isAdminOfRegion = (req.user.role === 'regional_admin' || req.user.role === 'super_admin') && 
      (req.user.role === 'super_admin' || (req.user.region && complaint.region && complaint.region._id.toString() === req.user.region._id.toString()));

    if (!isCitizenOwner && !isAdminOfRegion) {
      return res.status(403).json({
        success: false,
        message: 'Access denied: You are not authorized to view this grievance record.'
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
