const multer = require('multer');

// Store file in memory buffer for direct stream piping to Cloudinary
const storage = multer.memoryStorage();

// Validate file type
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(`Unsupported file type '${file.mimetype}'. Only JPG, JPEG, PNG, and WEBP images are permitted.`),
      false
    );
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB maximum size
  },
  fileFilter
});

module.exports = upload;
