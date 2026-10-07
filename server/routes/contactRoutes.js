import { Router } from 'express';
import { handleContactForm } from '../controllers/contactController.js';
import { validateContactInput } from '../middleware/validator.js';

const router = Router();

// POST /api/contact
router.post('/', validateContactInput, handleContactForm);

export default router;
