# 🚀 Quick Start Guide for Beginners

You've never coded before? No problem! This guide explains everything in simple terms.

## What is this project?

**CyberVets Solutions** is an app that helps real estate agents manage leads automatically. Think of it like:
- A filing cabinet for potential clients (leads)
- An email assistant that sends follow-ups
- A smart system that ranks which leads are most likely to buy
- A dashboard to see everything at a glance

## Three main parts:

```
Frontend (What you see)
   ↓ (sends requests to)
Backend (The brain)
   ↓ (stores data in)
Database (The filing cabinet)
```

## 📋 Prerequisites (5 min)

Before you start, make sure you have these installed:

```bash
# Check Node.js (should be v18 or newer)
node --version

# Check npm (Node Package Manager - like an app store for code)
npm --version

# Check Docker (runs services like databases)
docker --version
```

If you're missing any, download from:
- **Node.js**: https://nodejs.org/ (v18+ LTS)
- **Docker**: https://www.docker.com/products/docker-desktop

## 🎯 Phase 1: Install Everything (5 min)

```bash
# 1. Navigate to project folder
cd cybervetssolutions.com

# 2. Install all code dependencies (this takes a few minutes)
npm install

# That's it! You now have all the code libraries installed.
# Think of it like installing apps on your phone.
```

## 🗄️ Phase 2: Start Services (3 min)

You need a database (PostgreSQL) and cache (Redis) running. Docker handles this:

```bash
# Start PostgreSQL and Redis
docker-compose up -d

# Verify they're running
docker ps
# You should see "postgres" and "redis" listed

# Wait 10 seconds for PostgreSQL to fully start...
```

## 💾 Phase 3: Setup Database (2 min)

```bash
# Create database tables
cd backend
npm run migrate

# Add sample data
npm run seed

# Done! Database is ready with test data.
```

## 🎬 Phase 4: Start the Servers (3 min)

Open **3 terminal windows**:

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
# Opens http://localhost:3000 automatically
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
# Runs on http://localhost:3001
```

**Terminal 3 - Keep for commands:**
```bash
# Just keep this open for running commands
```

## ✅ You're Running!

Visit these URLs in your browser:

- **Frontend**: http://localhost:3000 ✅ You should see the dashboard
- **Backend Health**: http://localhost:3001/health ✅ Should show `{"status": "ok"}`
- **Database Admin**: http://localhost:5050 ✅ pgAdmin UI
  - Login: admin@admin.com / admin
  - Add server: hostname=postgres, user=cybervet, password=dev_password
- **Redis Admin**: http://localhost:8081 ✅ Redis Commander UI

## 🧪 Running Tests

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test

# If all pass ✅ = everything is working!
```

## 🛠️ Common Commands

```bash
# Development
npm run dev                 # Start all dev servers

# Testing
npm run test               # Run tests
npm run test:watch         # Re-run tests when code changes
npm run test:coverage      # Show code coverage %

# Code quality
npm run lint               # Check for code issues
npm run format             # Auto-format code

# Database
npm run db:migrate         # Run migrations
npm run db:seed            # Add sample data
npm run db:check           # Verify database works

# Docker
docker-compose up -d       # Start services
docker-compose down        # Stop services
docker ps                  # List running services
docker logs postgres       # View PostgreSQL logs
```

## 🤔 What's Next?

Now you're running! Here's how to add features:

1. **Understand what to build** → Ask Claude: `/office-hours what should I build?`
2. **Get detailed plan** → Ask Claude: `/plan implement [feature]`
3. **Build it** → Ask Claude: `/build implement [feature]`
4. **Test it** → Ask Claude: `/qa test the feature`
5. **Ship it** → Ask Claude: `/ship deploy to production`

## 🆘 Troubleshooting

### "Cannot connect to database"
```bash
# Check if PostgreSQL is running
docker ps | grep postgres

# If not running, start it
docker-compose up -d

# Wait 10 seconds, then try again
```

### "Frontend shows blank page"
```bash
# Check browser console for errors (F12 → Console tab)
# Check Terminal 1 for errors
# Restart frontend: Ctrl+C, then npm run dev
```

### "npm install fails"
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### "Port 3000 already in use"
```bash
# Change port in frontend/vite.config.ts
# Or kill process using port:
lsof -ti:3000 | xargs kill -9
```

## 📚 Key Files Explained

| File | What it does |
|------|-------------|
| `frontend/src/` | React code (what you see) |
| `backend/src/` | Node.js code (the logic) |
| `database/migrations/` | Database schema changes |
| `.github/workflows/` | Automated tests & deployment |
| `docker-compose.yml` | Local services (PostgreSQL, Redis) |
| `package.json` | Project dependencies (like a recipe) |

## 💡 Key Concepts

**TypeScript** - JavaScript + types (catches mistakes early)  
**React** - Front-end library (what user clicks on)  
**Express** - Backend framework (handles requests)  
**PostgreSQL** - Database (stores data permanently)  
**Docker** - Containerization (isolate services)  
**Git/GitHub** - Version control (track code changes)  

## 🎓 Learning Resources

- TypeScript Handbook: https://www.typescriptlang.org/docs/
- React Docs: https://react.dev/
- Express Guide: https://expressjs.com/
- PostgreSQL Docs: https://www.postgresql.org/docs/

## 🚀 Next Steps

1. ✅ Complete Phase 1-4 above
2. ✅ Run npm test to verify everything
3. 📖 Read CLAUDE.md to understand AI agent skills
4. 💻 Ask Claude: `/build create a simple lead list component`
5. 🚢 When ready: Ask Claude: `/ship deploy to production`

---

**Stuck?** Don't worry! Ask Claude any question. The AI agents handle the hard parts.

**Need help?** Check TROUBLESHOOTING.md or ask in Slack.

**Ready to code?** Move to CONTRIBUTING.md for development workflow.

Good luck! 🍀
