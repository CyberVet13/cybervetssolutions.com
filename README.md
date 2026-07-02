# 🏠 CyberVets Solutions

> AI-powered lead automation for real estate agents

**🚀 Get running fast:**
- **Beginner?** `./setup.sh` → [guides/QUICK_START.md](docs/guides/QUICK_START.md)
- **Docker?** `npm run docker:up` → [docs/DOCKER.md](docs/DOCKER.md)
- **Developer?** `npm install` → [guides/SETUP.md](docs/guides/SETUP.md)

**📚 Full docs:** [docs/INDEX.md](docs/INDEX.md)

---

## 🚀 Quick Start (Choose Your Path)

### ⚡ **No Coding? (5 min)**
```bash
chmod +x setup.sh && ./setup.sh
# Then visit http://localhost:3000
# Ask Claude: /build "Create a feature"
```

### 🐳 **Use Docker? (10 min)**
```bash
npm run docker:up
# http://localhost:3000
```

### 👨‍💻 **Developer (30 min)**
```bash
npm install && npm run db:migrate && npm run db:seed
cd frontend && npm run dev  # Terminal 1
cd backend && npm run dev   # Terminal 2
```

Then visit http://localhost:3000 (frontend) and http://localhost:3001 (backend)

---

## 📚 Documentation

**Complete documentation index:** [docs/INDEX.md](docs/INDEX.md)

| For | Read | Time |
|-----|------|------|
| Getting started | [docs/guides/QUICK_START.md](docs/guides/QUICK_START.md) | 5 min |
| Full setup | [docs/guides/SETUP.md](docs/guides/SETUP.md) | 30 min |
| Docker setup | [docs/DOCKER.md](docs/DOCKER.md) | 10 min |
| Development workflow | [docs/guides/WORKFLOW.md](docs/guides/WORKFLOW.md) | 15 min |
| Design system | [docs/KLDY_STYLE_GUIDE.md](docs/KLDY_STYLE_GUIDE.md) | 10 min |
| Project structure | [docs/FOLDER_STRUCTURE.md](docs/FOLDER_STRUCTURE.md) | 15 min |
| Architecture | [docs/architecture/DECISIONS.md](docs/architecture/DECISIONS.md) | 20 min |
| AI Agents | [docs/architecture/CLAUDE.md](docs/architecture/CLAUDE.md) | 15 min |
| Contributing | [docs/guides/CONTRIBUTING.md](docs/guides/CONTRIBUTING.md) | 10 min |

---

## 🛠 Local Development

**Quick setup:**
```bash
npm install
npm run db:migrate && npm run db:seed
```

**Terminal 1 - Frontend:**
```bash
cd frontend && npm run dev
# http://localhost:3000
```

**Terminal 2 - Backend:**
```bash
cd backend && npm run dev
# http://localhost:3001
```

**Common commands:**
```bash
npm run test            # Run tests
npm run lint            # Check code style  
npm run type-check      # TypeScript validation
npm run build           # Production build
npm run docker:up       # Start with Docker
npm run docker:logs     # View Docker logs
```

---

## 🐳 Docker Setup

**Start everything:**
```bash
npm run docker:up
```

**Services:**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- pgAdmin: http://localhost:5050 (Database UI)
- redis-commander: http://localhost:8081 (Cache UI)

**Commands:**
```bash
npm run docker:up       # Start
npm run docker:ps       # List containers
npm run docker:logs     # View logs
npm run docker:migrate  # Run migrations
npm run docker:seed     # Seed database
npm run docker:down     # Stop all
```

See [docs/DOCKER.md](docs/DOCKER.md) for complete guide.

---

## 🎨 Kldy Design System

**Colors:**
- Primary Blue: `#0047a1` (bg-primary-800)
- Cyan: `#21d4f3` (bg-primary-600)
- Lime Green: `#2aca40` (bg-success-600)

**Typography:**
- Font: Roboto (imported from Google Fonts)
- Hierarchy: 72px → 36px → 18px → 15px → 12px → 10px

**Components:**
- Button (filled, outline, success variants)
- Card (header/body/footer)
- Input, Modal, etc.

See [docs/KLDY_STYLE_GUIDE.md](docs/KLDY_STYLE_GUIDE.md) for complete specs.

---

## 🤖 Claude AI Integration

Use Claude to build features and automate development:

**Build a feature:**
```bash
/build "Create a login form with Kldy styling"
```

**Test a feature:**
```bash
/qa "Test the checkout flow, find edge cases"
```

**Review code:**
```bash
/design-review "Check this component architecture"
```

**Debug issues:**
```bash
/investigate "Why is this query slow?"
```

**Security audit:**
```bash
/security-audit "Check the API auth implementation"
```

See [docs/architecture/CLAUDE.md](docs/architecture/CLAUDE.md) for all 30+ skills and workflows.

---

## 📁 Project Structure

```
cybervetssolutions.com/
├── frontend/                # React dashboard
│   ├── src/
│   │   ├── components/     # Kldy-styled UI components
│   │   ├── pages/          # Page routes
│   │   └── ...
│   ├── Dockerfile          # Docker build
│   └── package.json
│
├── backend/                 # Node.js API
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── services/       # Business logic
│   │   └── ...
│   ├── database/
│   │   ├── migrations/     # Schema changes
│   │   └── seeds/          # Test data
│   ├── Dockerfile
│   └── package.json
│
├── docs/                    # All documentation
│   ├── INDEX.md            # Documentation hub
│   ├── DOCKER.md           # Docker guide
│   ├── KLDY_STYLE_GUIDE.md # Design system
│   ├── guides/             # Step-by-step guides
│   └── architecture/       # Design decisions
│
├── docker-compose.yml       # Container orchestration
├── package.json             # Root workspace config
├── tsconfig.json            # TypeScript config
└── README.md                # This file
```

See [docs/FOLDER_STRUCTURE.md](docs/FOLDER_STRUCTURE.md) for complete tree.

---

## 🆘 Need Help?

1. **Check [docs/INDEX.md](docs/INDEX.md)** - Complete documentation index
2. **Search for your issue** in relevant guide (Cmd+F)
3. **View troubleshooting** section in guide
4. **Ask Claude** - Use `/investigate` or `/design-review` skill

---

## 🤝 Contributing

See [docs/guides/CONTRIBUTING.md](docs/guides/CONTRIBUTING.md) for:
- Development workflow
- Commit conventions
- Pull request process
- Code review guidelines

---

## Project Structure

```
cybervetssolutions.com/
├── frontend/                    # React dashboard
├── backend/                     # Node.js API
├── services/                    # Python microservices
├── scripts/                     # DevOps automation
├── docs/                        # Architecture, API docs
├── .github/                     # CI/CD workflows
├── CLAUDE.md                    # ← START HERE
├── AGENTS.md                    # Agent roles
├── WORKFLOW.md                  # Development guide
├── project-guidelines.instructions.md
├── DECISIONS.md                 # Architecture decisions
├── skills.manifest.json         # Skills registry
└── README.md                    # This file
```

---

## Quick Commands

```bash
npm run dev                 # Start dev server
npm run test               # Run tests
npm run build              # Production build
npm run security-audit     # OWASP scan
npm run deploy:staging     # Deploy to staging
npm run deploy:prod        # Deploy to production
```

---

## Contributing

1. Read [CLAUDE.md](CLAUDE.md)
2. Read [project-guidelines.instructions.md](project-guidelines.instructions.md)
3. Pick a task, use `/office-hours` skill
4. Build → Test → Ship

---

## Status

- **Stability**: 🟢 Production-ready
- **Test Coverage**: 🟢 82%+ (target: 80%)
- **Security**: 🟢 OWASP audit passed
- **Performance**: 🟢 API p95 = 120ms

---

**Built with AI-assisted vibe coding**  
**Inspired by [gstack](https://github.com/garrytan/gstack) and [Anthropic Cybersecurity Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)**  
**Last Updated**: 2026-07-01

👉 **Ready to start?** → Open [CLAUDE.md](CLAUDE.md) and let's ship! 🚀