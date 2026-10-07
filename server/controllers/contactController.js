import { saveContactMessage } from '../services/contactService.js';

export const handleContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.sanitizedBody;
    
    // Extract client IP and User Agent for logging & security
    const ipAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;

    const result = await saveContactMessage({
      name,
      email,
      subject,
      message,
      ipAddress,
      userAgent,
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been sent successfully.',
      data: {
        id: result.data.id,
        name: result.data.name,
        created_at: result.data.created_at,
        storage_mode: result.storage
      }
    });
  } catch (error) {
    next(error);
  }
};
