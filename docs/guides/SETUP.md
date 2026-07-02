# Project Setup Guide — Complete Walkthrough

Complete step-by-step guide to set up CyberVets Solutions locally.

## Prerequisites

```bash
node --version        # v18+
npm --version         # v9+
python --version      # 3.10+
git --version
docker --version      # For local services
```

## Phase 1: Initial Setup (5 min)

```bash
# 1. Clone repo
git clone https://github.com/CyberVet13/cybervetssolutions.com.git
cd cybervetssolutions.com

# 2. Install dependencies
npm install                   # Root workspace
cd frontend && npm install    # Frontend
cd ../backend && npm install  # Backend

# 3. Setup environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Fill in values:
# - DATABASE_URL (PostgreSQL connection)
# - API_URL (backend base URL)
# - MLS_API_KEY (from your MLS provider)
# - SENDGRID_API_KEY (for email)
```

## Phase 2: Database Setup (10 min)

```bash
# 1. Start PostgreSQL + Redis (Docker)
docker-compose up -d

# 2. Run migrations
cd backend
npm run migrate

# 3. Seed development data
npm run seed

# 4. Verify
npm run db:check     # Should show tables created
```

## Phase 3: Start Development Servers (3 min)

### Terminal 1: Frontend
```bash
cd frontend
npm run dev
# http://localhost:3000
```

### Terminal 2: Backend
```bash
cd backend
npm run dev
# http://localhost:3001
# API Docs: http://localhost:3001/api/docs
```

### Terminal 3: Microservices (optional)
```bash
cd services
docker-compose up
# lead-scorer:   http://localhost:8001
# comp-analyzer: http://localhost:8002
# nlp-email:     http://localhost:8003
```

## Phase 4: Verify Setup

```bash
# Check frontend
curl http://localhost:3000
# Should return HTML

# Check backend API
curl -H "Authorization: Bearer dummy_token" http://localhost:3001/health
# Should return { "status": "ok" }

# Check databases
npm run db:check
# Should list tables

# Run tests
npm run test      # Frontend + backend
cd services && make test  # Services
```

## Phase 5: Create Your First Feature

1. **Understand the requirement** → Run `/office-hours`
2. **Write the spec** → Run `/plan`
3. **Design + security review** → Run `/design-review`, `/security-audit`
4. **Implement** → Run `/build`
5. **Test** → Run `/qa`
6. **Deploy** → Run `/ship`

Example:
```bash
# In VS Code with Claude Code
/office-hours "Add lead status tracking"
# → Get clarification on requirements

/plan "Lead status tracking"
# → Write detailed spec

/build "Implement lead status tracking"
# → Generate code with tests

/qa "Test lead status tracking"
# → Find edge cases, fix bugs

/ship "Deploy lead status changes"
# → Push to production with safety gates
```

## Directory Quick Reference

| Directory | Purpose | Start Here |
|-----------|---------|-----------|
| `frontend/` | React dashboard | [frontend/README.md](frontend/README.md) |
| `backend/` | Node.js API | [backend/README.md](backend/README.md) |
| `services/` | Python microservices | [services/README.md](services/README.md) |
| `database/` | PostgreSQL schema | [database/README.md](database/README.md) |
| `docs/` | Documentation | [docs/README.md](docs/README.md) |
| `testing/` | Fixtures, mocks | [testing/README.md](testing/README.md) |
| `.github/workflows/` | CI/CD pipelines | Auto-runs on PR |
| `kubernetes/` | K8s manifests | For production deployment |

## Common Commands

```bash
# Development
npm run dev              # Start all dev servers
npm run test             # Run test suite
npm run lint             # Check code style

# Database
npm run migrate          # Run migrations
npm run seed             # Populate dev data
npm run db:backup        # Backup database
npm run db:restore       # Restore from backup

# Deployment
npm run build            # Production build
docker-compose up -d     # Start local services
kubectl apply -f kubernetes/  # Deploy to K8s
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/add-lead-scoring

# Make changes + commit (atomic commits!)
git add src/
git commit -m "feat: implement lead scoring algorithm"

# Push to GitHub
git push origin feature/add-lead-scoring

# Create PR on GitHub
# → Automated tests run
# → Security audit runs
# → Code review
# → Merge when green
```

## Troubleshooting

### "Cannot connect to database"
```bash
# Check PostgreSQL is running
docker ps | grep postgres

# Start if not running
docker-compose up -d postgres

# Check connection string in .env
echo $DATABASE_URL
```

### "API returns 401 Unauthorized"
```bash
# Backend might be running on different port
# Check backend .env:
grep PORT backend/.env

# Update frontend .env:
REACT_APP_API_URL=http://localhost:3001
```

### "Tests failing"
```bash
# Make sure databases are seeded
npm run seed

# Clear cache
npm run test -- --clearCache

# Run with verbose output
npm run test -- --verbose
```

### "Services not starting"
```bash
# Check Docker
docker ps -a

# Check logs
docker logs [container_id]

# Restart services
docker-compose down
docker-compose up
```

## Performance Optimization

```bash
# Frontend
npm run build       # Check bundle size
npm run analyze     # Analyze what's large

# Backend
npm run profile     # CPU profiling
npm run memcheck    # Memory profiling

# Database
npm run db:analyze  # Query plan analysis
```

## Monitoring

Once deployed:
- **Frontend metrics** → Sentry, Datadog
- **Backend metrics** → Prometheus, Grafana
- **Database metrics** → PostgreSQL monitoring
- **Error tracking** → Sentry dashboard

## Next Steps

1. ✅ Complete local setup (Phase 1-4 above)
2. ✅ Create a simple feature to understand workflow
3. 📖 Read [CONTRIBUTING.md](CONTRIBUTING.md)
4. 📖 Review [CLAUDE.md](CLAUDE.md) for agent skills
5. 🚀 Start shipping features!

---

**Need help?**
- Check [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)
- Ask in Discord/Slack
- File a GitHub issue

**Questions about architecture?**
- See [ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Review [DECISIONS.md](DECISIONS.md)

