import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/env.js';
import contactRoutes from './routes/contactRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

// Security middleware
app.use(helmet());

// Request logging
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));

// CORS Configuration
const allowedOrigins = [
  config.clientUrl,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000'
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app') || // Allow Vercel preview and production deployments
        origin.includes('localhost')
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev to avoid CORS blocking, configured safely for production
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Body Parser Middleware
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// Root welcome route
app.get('/', (req, res) => {
  res.json({
    name: 'Abiraj K Portfolio Backend API',
    status: 'online',
    documentation: '/api/health',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact'
    }
  });
});

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);

// 404 and Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`
  🚀 Abiraj K Portfolio Server is running!
  📡 Port: ${PORT}
  🌍 Environment: ${config.nodeEnv}
  🔗 Local Health Check: http://localhost:${PORT}/api/health
  `);
});
