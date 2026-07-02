# Dockerfile for Node.js + Express backend
# Multi-stage: build TypeScript → run in Node container

# ============================================
# Stage 1: Builder
# ============================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install dependencies
RUN npm ci

# Copy source code
COPY backend ./backend
COPY tsconfig.json ./
COPY knexfile.ts ./

# Build TypeScript → JavaScript
RUN npm run --prefix backend build

# ============================================
# Stage 2: Runtime
# ============================================
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built app from builder stage
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/backend/database ./backend/database
COPY backend/database ./backend/database
COPY knexfile.ts ./

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

# Expose port 3001
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start backend
CMD ["node", "backend/dist/index.js"]
