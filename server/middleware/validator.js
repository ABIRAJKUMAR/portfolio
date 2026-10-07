// Helper to sanitize strings and strip HTML tags
const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
};

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateContactInput = (req, res, next) => {
  const { name, email, subject, message } = req.body || {};
  const errors = {};

  // Sanitize inputs
  const cleanName = sanitizeString(name);
  const cleanEmail = sanitizeString(email).toLowerCase();
  const cleanSubject = sanitizeString(subject);
  const cleanMessage = sanitizeString(message);

  // Validate name
  if (!cleanName) {
    errors.name = 'Full name is required.';
  } else if (cleanName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  } else if (cleanName.length > 100) {
    errors.name = 'Name cannot exceed 100 characters.';
  }

  // Validate email
  if (!cleanEmail) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_REGEX.test(cleanEmail)) {
    errors.email = 'Please provide a valid email address.';
  } else if (cleanEmail.length > 255) {
    errors.email = 'Email cannot exceed 255 characters.';
  }

  // Validate subject
  if (!cleanSubject) {
    errors.subject = 'Subject is required.';
  } else if (cleanSubject.length < 2) {
    errors.subject = 'Subject must be at least 2 characters long.';
  } else if (cleanSubject.length > 200) {
    errors.subject = 'Subject cannot exceed 200 characters.';
  }

  // Validate message
  if (!cleanMessage) {
    errors.message = 'Message content is required.';
  } else if (cleanMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  } else if (cleanMessage.length > 5000) {
    errors.message = 'Message cannot exceed 5000 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please check the provided fields.',
      errors,
    });
  }

  // Attach sanitized data to request
  req.sanitizedBody = {
    name: cleanName,
    email: cleanEmail,
    subject: cleanSubject,
    message: cleanMessage,
  };

  next();
};
