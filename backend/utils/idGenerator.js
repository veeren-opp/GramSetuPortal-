const Complaint = require('../models/Complaint');

/**
 * Generates sequential, unique complaint IDs like CMP-2026-000001
 */
const generateComplaintId = async () => {
  const currentYear = new Date().getFullYear();
  const yearPrefix = `CMP-${currentYear}-`;

  // Find the most recent complaint for this year
  const lastComplaint = await Complaint.findOne({
    complaintId: new RegExp(`^${yearPrefix}`)
  })
    .sort({ createdAt: -1 })
    .select('complaintId')
    .lean();

  let nextSequence = 1;

  if (lastComplaint && lastComplaint.complaintId) {
    const parts = lastComplaint.complaintId.split('-');
    if (parts.length === 3) {
      const parsedSeq = parseInt(parts[2], 10);
      if (!isNaN(parsedSeq)) {
        nextSequence = parsedSeq + 1;
      }
    }
  }

  // Format with 6-digit zero padding
  const paddedSeq = String(nextSequence).padStart(6, '0');
  const generatedId = `${yearPrefix}${paddedSeq}`;

  // Double check uniqueness in case of race condition
  const existing = await Complaint.findOne({ complaintId: generatedId }).select('_id').lean();
  if (existing) {
    // Fallback: append high entropy timestamp suffix
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    return `CMP-${currentYear}-${randomSuffix}`;
  }

  return generatedId;
};

module.exports = {
  generateComplaintId
};
