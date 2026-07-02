# Docker Setup Guide

> Build and run the entire CyberVets app in Docker containers.

---

## 📦 What's Included

Docker containers for:

| Service | Purpose | Port | Built From |
|---------|---------|------|------------|
| **frontend** | React UI (Nginx) | 3000 | frontend/Dockerfile |
| **backend** | Node.js API | 3001 | backend/Dockerfile |
| **postgres** | Database | 5432 | postgres:15-alpine |
| **redis** | Cache/Sessions | 6379 | redis:7-alpine |
| **pgAdmin** | DB Admin UI | 5050 | pgAdmin:latest |
| **redis-commander** | Redis Admin UI | 8081 | redis-commander:latest |

---

## 🚀 Quick Start

### 1. Build & Start All Services

```bash
# Navigate to project root
cd cybervetssolutions.com

# Start all containers (builds if needed)
docker-compose up -d

# Wait 30-40 seconds for startup...
# Then visit:
# - Frontend: http://localhost:3000
# - Backend: http://localhost:3001
# - Database: http://localhost:5050 (pgAdmin)
# - Redis: http://localhost:8081 (redis-commander)
```

### 2. View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

### 3. Stop All Services

```bash
docker-compose down
```

### 4. Stop & Remove All Data

```bash
docker-compose down -v
# Removes containers, volumes (database/cache cleared)
# Use with caution!
```

---

## 🔧 Common Commands

### Rebuild Containers

```bash
# Rebuild all images (useful after code changes)
docker-compose up -d --build

# Rebuild only backend
docker-compose up -d --build backend

# Rebuild only frontend
docker-compose up -d --build frontend
```

### Run One-off Commands

```bash
# Database migration
docker-compose exec backend npm run db:migrate

# Database seeding
docker-compose exec backend npm run db:seed

# Backend tests
docker-compose exec backend npm test

# Frontend tests
docker-compose exec frontend npm test
```

### Access Container Shell

```bash
# Backend shell
docker-compose exec backend sh

# Frontend shell
docker-compose exec frontend sh

# Database shell
docker-compose exec postgres psql -U cybervet -d cybervet_dev
```

### View Container Stats

```bash
# CPU, memory, network usage
docker stats

# Pretty format
docker stats --format "table {{.Container}}\t{{.MemUsage}}\t{{.CPUPerc}}"
```

---

## 🐛 Troubleshooting

### Containers won't start

```bash
# Check logs
docker-compose logs

# Restart services
docker-compose restart

# Nuclear option: rebuild everything
docker-compose down -v
docker-compose up -d --build
```

### Port already in use

Edit `docker-compose.yml` and change the port mapping:

```yaml
# Change from "3000:3000" to "3333:3000"
# (host_port:container_port)
ports:
  - "3333:3000"  # Access on http://localhost:3333
```

Then restart:
```bash
docker-compose up -d
```

### Database connection fails

```bash
# Wait for PostgreSQL to be healthy
docker-compose ps

# Should show: postgres ... (healthy)
```

Then run migrations:
```bash
docker-compose exec backend npm run db:migrate
```

### Frontend/Backend can't communicate

```bash
# Check Docker network
docker network inspect cybervetssolutions.com_cybervet_network

# Restart both services
docker-compose restart frontend backend
```

---

## 📝 Accessing Services

### Frontend
- **URL:** http://localhost:3000
- **What:** React UI (Kldy styled)
- **Access:** Direct from browser

### Backend API
- **URL:** http://localhost:3001
- **Endpoints:** http://localhost:3001/health (health check)
- **Docs:** http://localhost:3001/api/docs (Swagger)

### pgAdmin (Database UI)
- **URL:** http://localhost:5050
- **Login:** admin@admin.com / admin
- **Add Server:**
  - Hostname: postgres
  - Username: cybervet
  - Password: dev_password
  - Database: cybervet_dev

### redis-commander (Cache UI)
- **URL:** http://localhost:8081
- **Automatically connected** to Redis
- **Browse:** Cache keys, values, expiration

---

## 🏗️ How Dockerfiles Work

### Frontend Dockerfile (`frontend/Dockerfile`)

**Multi-stage build:**
1. **Stage 1 (Builder):** Node.js container
   - Install dependencies: `npm ci`
   - Build React app with Vite: `npm run build`
   - Output: `frontend/dist/` (optimized HTML/JS/CSS)

2. **Stage 2 (Runtime):** Nginx container
   - Copy built app from Stage 1
   - Serve with Nginx (super fast static file server)
   - Proxy `/api/*` calls to backend
   - Handle React Router (SPA routing)

**Result:** Small, fast, production-ready image (~50MB)

### Backend Dockerfile (`backend/Dockerfile`)

**Multi-stage build:**
1. **Stage 1 (Builder):** Node.js container
   - Install all dependencies: `npm ci`
   - Build TypeScript → JavaScript: `npm run build`
   - Output: `backend/dist/` (compiled JS)

2. **Stage 2 (Runtime):** Node.js container
   - Copy built app from Stage 1
   - Install **only production** dependencies: `npm ci --omit=dev`
   - Run as non-root user (security)
   - Start Express server

**Result:** Small, secure, production-ready image (~200MB)

---

## 🔐 Security Notes

### Development
- Secrets are in environment variables (docker-compose.yml)
- JWT_SECRET is hardcoded for development (change for production!)
- Database credentials are weak (for development only)

### Production
- Use Docker secrets or external secret management
- Use strong passwords for database
- Use environment-specific configuration
- Don't commit `.env` files
- Run as non-root user (backends already do this)
- Enable security headers in Nginx
- Use HTTPS/SSL certificates

---

## 📊 Docker Compose Architecture

```
┌─────────────────────────────────────────┐
│         Docker Network                  │
│      (cybervet_network)                 │
└─────────────────────────────────────────┘
    │                │              │
    │                │              │
  ┌─▼──┐        ┌────▼──┐      ┌───▼───┐
  │    │        │       │      │       │
┌─┴────┴──────┬─┴──┬    │    ┌─┴──┐    │
│ PostgreSQL  │    │    │    │    │    │
│ :5432       │    │    │    │    │    │
└─────────────┘    │    │    │    │    │
                   │    │    │    │    │
             ┌─────▼────▼─┐  │    │    │
             │  Backend   │  │    │    │
             │  :3001     │  │    │    │
             └─────┬──────┘  │    │    │
                   │         │    │    │
            ┌──────▼─────┐   │    │    │
            │  Frontend  │   │    │    │
            │  :3000     │   │    │    │
            └────────────┘   │    │    │
                             │    │    │
                          ┌──▼────▼┐   │
                          │ Redis  │   │
                          │ :6379  │   │
                          └────────┘   │
                                       │
                          ┌─────────────▼──┐
                          │  redis-cmd    │
                          │  :8081        │
                          └────────────────┘
                                    
                          (pgAdmin external)
```

---

## 📚 Files Overview

| File | Purpose |
|------|---------|
| **docker-compose.yml** | Define all containers and networking |
| **frontend/Dockerfile** | Build React app with Nginx |
| **frontend/nginx.conf** | Nginx configuration for SPA routing |
| **backend/Dockerfile** | Build Node.js API server |
| **.dockerignore** | Exclude files from Docker build context |

---

## 🎯 Next Steps

1. **Run locally:** `docker-compose up -d`
2. **Visit:** http://localhost:3000
3. **Monitor:** `docker-compose logs -f`
4. **Test:** `docker-compose exec backend npm test`
5. **Deploy:** Push images to registry (AWS ECR, Docker Hub, etc.)

---

## 💡 Tips

### Development with Hot Reload

The docker-compose.yml mounts your source code for development:

```yaml
volumes:
  - ./backend/src:/app/backend/src
  - ./frontend/src:/app/frontend/src
```

**For backend:** Changes to `backend/src` trigger auto-reload (via tsx watch)  
**For frontend:** Nginx serves static files (rebuild with `docker-compose up -d --build`)

### Debugging in Container

```bash
# View environment inside container
docker-compose exec backend env

# Run custom command
docker-compose exec backend npm run db:migrate

# View network connectivity
docker-compose exec backend curl http://postgres:5432
```

### Optimization

- Images are built in stages to minimize size
- Production dependencies only in runtime container
- Multi-stage builds reduce final image size by 70%+
- Nginx serves frontend 10x faster than Node.js

---

**Ready?** Run `docker-compose up -d` and visit http://localhost:3000! 🚀
