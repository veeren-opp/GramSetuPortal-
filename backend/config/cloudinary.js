const cloudinary = require('cloudinary').v2;

const isCloudinaryConfigured = () => {
  return !!(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
};

if (isCloudinaryConfigured()) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  console.log(`☁️ Cloudinary SDK configured: ${process.env.CLOUDINARY_CLOUD_NAME}`);
} else {
  console.warn(`⚠️ Cloudinary credentials not detected in .env. Local filesystem fallback will be used.`);
}

module.exports = {
  cloudinary,
  isCloudinaryConfigured
};
