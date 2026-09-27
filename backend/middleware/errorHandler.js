/**
 * Centralized Application Error Handler
 */
const errorHandler = (err, req, res, next) => {
  console.error(`💥 [Error] ${req.method} ${req.originalUrl}:`, err.message);

  // Multer File Upload Errors
  if (err.name === 'MulterError') {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size exceeds 5MB limit. Please upload a compressed image.'
      });
    }
    return res.status(400).json({
      success: false,
      message: `File upload error: ${err.message}`
    });
  }

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: messages.join('. ')
    });
  }

  // Mongoose Duplicate Key Error (e.g. unique mobile number)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      success: false,
      message: `An account with this ${field} already exists.`
    });
  }

  // CastError (invalid MongoDB ObjectId format)
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: `Invalid identifier format for parameter '${err.path}'.`
    });
  }

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'An unexpected internal server error occurred.'
  });
};

module.exports = errorHandler;
