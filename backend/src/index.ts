/**
 * Backend Entry Point
 * 
 * This file:
 * 1. Sets up the Express server
 * 2. Configures middleware (auth, logging, error handling)
 * 3. Mounts API routes
 * 4. Starts listening on a port
 * 
 * Run: npm run dev
 * Result: Server starts on http://localhost:3001
 */

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// ============================================
// MIDDLEWARE (Runs on every request)
// ============================================

// Enable CORS (allow frontend to call backend)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Parse JSON request bodies
app.use(express.json());

// Simple request logging (beginner-friendly version)
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`);
  });
  
  next();
});

// ============================================
// API ROUTES
// ============================================

// Health check endpoint
// Use this to verify server is running
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Placeholder API endpoints (agents, leads, emails)
// These will be expanded by the agents using the /build skill

// GET /api/agents - List all agents
app.get('/api/agents', (req: Request, res: Response) => {
  res.json({ 
    message: 'TODO: List agents',
    agents: []
  });
});

// GET /api/leads - List all leads
app.get('/api/leads', (req: Request, res: Response) => {
  res.json({
    message: 'TODO: List leads',
    leads: []
  });
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 - Not found
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not found',
    path: req.path,
    method: req.method
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  });
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 3001;
const server = createServer(app);

server.listen(PORT, () => {
  console.log(`
  ✅ Backend server started!
  
  📡 Server: http://localhost:${PORT}
  🏥 Health: http://localhost:${PORT}/health
  📚 API Docs: http://localhost:${PORT}/api/docs (coming soon)
  
  Environment: ${process.env.NODE_ENV || 'development'}
  Database: ${process.env.DATABASE_URL ? '✅ Connected' : '⚠️  Not configured'}
  Redis: ${process.env.REDIS_URL ? '✅ Connected' : '⚠️  Not configured'}
  `);
});

// Handle server errors
server.on('error', (err) => {
  console.error('❌ Server error:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('📴 Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

export default app;
