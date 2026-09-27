const streamifier = require('streamifier');
const path = require('path');
const fs = require('fs');
const { cloudinary, isCloudinaryConfigured } = require('../config/cloudinary');

/**
 * Upload an image buffer to Cloudinary (folder: gramsetu/complaints)
 * Or fallback to local disk storage if Cloudinary keys are not yet configured in .env
 */
const uploadComplaintImage = async (fileBuffer, originalName = 'complaint.jpg') => {
  if (isCloudinaryConfigured()) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'gramsetu/complaints',
          resource_type: 'image',
          allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
          transformation: [
            { width: 1200, height: 1200, crop: 'limit' },
            { quality: 'auto:good' }
          ]
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary Stream Upload Error:', error);
            return reject(new Error('Cloud image upload failed: ' + error.message));
          }
          resolve({
            imageUrl: result.secure_url,
            imagePublicId: result.public_id
          });
        }
      );

      // Stream memory buffer directly to Cloudinary
      const bufferStream = streamifier.createReadStream(fileBuffer);
      bufferStream.pipe(uploadStream);
    });
  } else {
    // Local fallback: write to backend/uploads
    const uploadsDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const ext = path.extname(originalName) || '.jpg';
    const filename = `complaint_${Date.now()}_${Math.round(Math.random() * 1e9)}${ext}`;
    const filePath = path.join(uploadsDir, filename);

    fs.writeFileSync(filePath, fileBuffer);
    console.log(`📁 Local Image Stored: ${filePath}`);

    const serverPort = process.env.PORT || 5000;
    return {
      imageUrl: `http://localhost:${serverPort}/uploads/${filename}`,
      imagePublicId: `local/${filename}`
    };
  }
};

/**
 * Delete image from Cloudinary
 */
const deleteComplaintImage = async (imagePublicId) => {
  if (!imagePublicId || imagePublicId.startsWith('local/')) return;
  try {
    if (isCloudinaryConfigured()) {
      await cloudinary.uploader.destroy(imagePublicId);
    }
  } catch (err) {
    console.warn(`Failed to delete Cloudinary asset ${imagePublicId}:`, err.message);
  }
};

module.exports = {
  uploadComplaintImage,
  deleteComplaintImage
};
