const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  complaintId: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  citizen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  citizenName: {
    type: String,
    required: true
  },
  citizenMobile: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: [true, 'Complaint title is required'],
    trim: true,
    maxlength: [150, 'Title cannot exceed 150 characters']
  },
  category: {
    type: String,
    required: [true, 'Complaint category is required'],
    enum: [
      'Roads',
      'Street Lights',
      'Water Supply',
      'Sanitation',
      'Drainage',
      'Waste Management',
      'Electricity',
      'Public Infrastructure',
      'Other'
    ]
  },
  description: {
    type: String,
    required: [true, 'Complaint description is required'],
    trim: true,
    minlength: [15, 'Description must be at least 15 characters']
  },
  location: {
    type: String,
    required: [true, 'Location details are required'],
    trim: true
  },
  // Derived strictly from citizen profile for regional security
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State'
  },
  district: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'District'
  },
  taluka: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Taluka'
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
    required: true,
    index: true
  },
  ward: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ward'
  },
  // Cloudinary image properties
  imageUrl: {
    type: String,
    required: [true, 'Photographic evidence is required']
  },
  imagePublicId: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['Submitted', 'Under Review', 'In Progress', 'Resolved', 'Rejected'],
    default: 'Submitted',
    index: true
  },
  adminRemark: {
    type: String,
    default: ''
  },
  assignedOfficer: {
    type: String,
    default: ''
  },
  statusHistory: [
    {
      status: { type: String, required: true },
      changedBy: { type: String, required: true },
      remarks: { type: String, default: '' },
      timestamp: { type: Date, default: Date.now }
    }
  ],
  resolvedAt: {
    type: Date
  }
}, {
  timestamps: true
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
