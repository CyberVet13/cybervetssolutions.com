# Docker Cheat Sheet

Quick reference for common Docker commands.

---

## 🚀 Start/Stop

```bash
# Start all containers (build if needed)
npm run docker:up
# or: docker-compose up -d

# Stop all containers
npm run docker:down
# or: docker-compose down

# Build & start (rebuild images)
npm run docker:build
# or: docker-compose up -d --build

# Total rebuild (remove everything, rebuild)
npm run docker:rebuild
# or: docker-compose down -v && docker-compose up -d --build
```

---

## 📊 Monitor

```bash
# View all containers
npm run docker:ps
# or: docker-compose ps

# View logs (all services)
npm run docker:logs
# or: docker-compose logs -f

# View logs (specific service)
npm run docker:logs:backend
npm run docker:logs:frontend
npm run docker:logs:db

# View CPU/Memory usage
npm run docker:stats
```

---

## 🗄️ Database

```bash
# Run migrations
npm run docker:migrate
# or: docker-compose exec backend npm run db:migrate

# Seed database
npm run docker:seed
# or: docker-compose exec backend npm run db:seed

# Access PostgreSQL shell
npm run docker:shell:db
# or: docker-compose exec postgres psql -U cybervet -d cybervet_dev
```

---

## 🧪 Testing

```bash
# Run backend tests in Docker
npm run docker:test
# or: docker-compose exec backend npm test

# Run frontend tests
docker-compose exec frontend npm test
```

---

## 💻 Shell Access

```bash
# Backend shell
npm run docker:shell:backend
# or: docker-compose exec backend sh

# Frontend shell
npm run docker:shell:frontend
# or: docker-compose exec frontend sh

# Database shell
npm run docker:shell:db
# or: docker-compose exec postgres psql -U cybervet -d cybervet_dev
```

---

## 🔧 Useful Docker Commands

```bash
# View container details
docker inspect <container_name>

# View container environment variables
docker exec <container_name> env

# Run custom command in container
docker-compose exec backend <command>

# Copy file from container
docker cp <container>:/path/to/file ./local/path

# View image size
docker images

# Clean up unused images/containers/volumes
docker system prune -a
```

---

## 📍 Service URLs

Once running with `docker-compose up -d`:

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:3001 |
| pgAdmin | http://localhost:5050 |
| redis-commander | http://localhost:8081 |
| PostgreSQL | localhost:5432 |
| Redis | localhost:6379 |

---

## 🐛 Troubleshooting

**Containers won't start?**
```bash
# Check logs
npm run docker:logs

# Rebuild everything
npm run docker:rebuild
```

**Port already in use?**
Edit `docker-compose.yml` and change ports, then restart.

**Database connection fails?**
```bash
# Wait for containers to be healthy (check docker:ps)
# Then run migrations
npm run docker:migrate
```

**Can't find Docker?**
```bash
# Check if Docker is installed
docker --version

# If not, install from: https://www.docker.com/
```

---

## 📚 Full Docs

See [docs/DOCKER.md](../docs/DOCKER.md) for complete Docker documentation.

---

## 💡 Pro Tips

1. **Rebuild on code changes:** `npm run docker:build`
2. **Check health:** `npm run docker:ps` (look for healthy status)
3. **Debug errors:** `npm run docker:logs:<service>`
4. **Run migrations:** `npm run docker:migrate`
5. **Access database UI:** Open http://localhost:5050
