import { Router } from 'express';
import { isSupabaseConfigured } from '../config/env.js';

const router = Router();

// GET /api/health
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Abiraj K Portfolio REST API',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: {
      supabase_configured: isSupabaseConfigured(),
      target_table: 'contact_messages'
    },
    version: '1.0.0'
  });
});

export default router;
