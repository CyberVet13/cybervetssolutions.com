# Multi-stage Dockerfile for React + Vite frontend
# Stage 1: Build the React app
# Stage 2: Serve with Nginx

# ============================================
# Stage 1: Builder
# ============================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN npm ci

# Copy source code
COPY frontend ./frontend
COPY tsconfig.json ./

# Build the app (Vite creates dist/)
RUN npm run --prefix frontend build

# ============================================
# Stage 2: Runtime (Nginx)
# ============================================
FROM nginx:alpine

# Copy built app from builder stage
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

# Copy Nginx config for React routing
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
