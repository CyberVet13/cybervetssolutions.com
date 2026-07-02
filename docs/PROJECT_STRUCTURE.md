# 📁 New Project Structure Overview

Visual guide to the reorganized CyberVets Solutions workspace.

---

## Complete Directory Tree

```
cybervetssolutions.com/
│
├─ 📖 DOCUMENTATION (at root)
│  ├─ README.md                          ← Start here (GitHub main page)
│  ├─ CHANGELOG.md                       ← Version history
│  ├─ CONTRIBUTING.md                    ← How to contribute
│  ├─ CLEANUP_GUIDE.md                   ← Where docs moved
│  ├─ OPTIONAL_CLEANUP.md                ← How to clean up root
│  └─ WORKSPACE_CLEANUP_SUMMARY.md       ← This cleanup summary
│
├─ 🔧 PROJECT CONFIG (at root)
│  ├─ package.json                       ← Dependencies & scripts
│  ├─ tsconfig.json                      ← TypeScript config
│  ├─ .eslintrc.json                     ← Linting rules
│  ├─ .prettierrc.json                   ← Code formatting
│  ├─ .gitignore                         ← Git exclusions
│  ├─ .env.example                       ← Environment template
│  ├─ .dockerignore                      ← Docker exclusions
│  ├─ project-guidelines.instructions.md ← Code standards
│  ├─ setup.sh                           ← Automated setup
│  └─ knexfile.ts                        ← Database config
│
├─ 🐳 DEPLOYMENT
│  └─ docker-compose.yml                 ← Container orchestration
│
├─ 📚 docs/ (ALL DOCUMENTATION)          ← DOCUMENTATION HUB ⭐
│  │
│  ├─ INDEX.md                           ← START HERE! Main entry point
│  ├─ README.md                          ← Docs folder overview
│  ├─ DOCKER.md                          ← Complete Docker guide (600+ lines)
│  ├─ DOCKER_CHEATSHEET.md               ← Docker command reference
│  ├─ KLDY_STYLE_GUIDE.md                ← Design system specs
│  ├─ FOLDER_STRUCTURE.md                ← Project layout explanation
│  ├─ WHATS_INCLUDED.md                  ← Generated files reference
│  │
│  ├─ guides/ (Step-by-step guides)
│  │  ├─ QUICK_START.md                  ← 5-min beginner guide
│  │  ├─ SETUP.md                        ← 30-min full setup
│  │  ├─ WORKFLOW.md                     ← Development workflows
│  │  ├─ CONTRIBUTING.md                 ← Code contribution
│  │  ├─ DOCKER_GETTING_STARTED.md       ← Docker quickstart
│  │  └─ KLDY_ADOPTION.md                ← Style guide adoption
│  │
│  ├─ architecture/ (Design & decisions)
│  │  ├─ DECISIONS.md                    ← Architecture decisions
│  │  ├─ AGENTS.md                       ← AI agent modes
│  │  └─ CLAUDE.md                       ← Claude setup guide
│  │
│  └─ images/                            ← Screenshots & diagrams
│
├─ 💻 frontend/ (React Dashboard)
│  ├─ src/
│  │  ├─ components/                     ← Kldy-styled UI components
│  │  │  ├─ shared/                      ← Button, Card, Input
│  │  │  └─ domain/                      ← LeadCard, EmailComposer
│  │  ├─ pages/                          ← Page routes
│  │  ├─ services/                       ← API clients
│  │  ├─ hooks/                          ← Custom React hooks
│  │  ├─ types/                          ← TypeScript types
│  │  ├─ state/                          ← State management
│  │  ├─ utils/                          ← Utilities
│  │  ├─ App.tsx                         ← Root component
│  │  ├─ main.tsx                        ← Entry point
│  │  └─ index.css                       ← Global styles (Kldy)
│  ├─ public/                            ← Static assets
│  ├─ package.json                       ← Dependencies
│  ├─ Dockerfile                         ← Docker build
│  ├─ nginx.conf                         ← Nginx config
│  ├─ vite.config.ts                     ← Build config
│  ├─ vitest.config.ts                   ← Test config
│  ├─ tailwind.config.ts                 ← Kldy design tokens
│  ├─ postcss.config.js                  ← CSS processing
│  └─ README.md                          ← Frontend guide
│
├─ 🔌 backend/ (Node.js API)
│  ├─ src/
│  │  ├─ routes/                         ← API endpoints
│  │  ├─ services/                       ← Business logic
│  │  ├─ models/                         ← Data models
│  │  ├─ middleware/                     ← Auth, logging
│  │  ├─ agents/                         ← AI orchestration
│  │  ├─ types/                          ← TypeScript types
│  │  └─ index.ts                        ← Server entry
│  ├─ database/
│  │  ├─ migrations/                     ← Schema changes
│  │  └─ seeds/                          ← Test data
│  ├─ package.json                       ← Dependencies
│  ├─ Dockerfile                         ← Docker build
│  ├─ .env.example                       ← Environment template
│  └─ README.md                          ← Backend guide
│
├─ 🔬 services/ (Python Microservices)
│  ├─ lead-scorer/                       ← ML lead qualification
│  ├─ comp-analyzer/                     ← Market analysis
│  ├─ nlp-email/                         ← Email generation
│  └─ docker-compose.yml                 ← Service orchestration
│
├─ 💾 database/
│  ├─ README.md                          ← Database guide
│  ├─ migrations/                        ← Schema versions
│  ├─ seeds/                             ← Test data
│  └─ queries/                           ← SQL examples
│
├─ 🤖 .github/
│  ├─ workflows/                         ← CI/CD pipelines
│  │  ├─ test.yml                        ← Run tests on PR
│  │  ├─ lint.yml                        ← Check code quality
│  │  ├─ security.yml                    ← Vulnerability scan
│  │  ├─ deploy-staging.yml              ← Auto-deploy to staging
│  │  └─ deploy-prod.yml                 ← Production deployment
│  └─ CONTRIBUTING.md                    ← GitHub template
│
├─ ☸️ kubernetes/                         ← K8s manifests (production)
│  ├─ frontend.yaml
│  ├─ backend.yaml
│  ├─ postgres.yaml
│  ├─ redis.yaml
│  └─ README.md
│
├─ 📊 monitoring/                        ← Observability & alerting
│  ├─ prometheus.yml                     ← Metrics collection
│  ├─ grafana-dashboards/                ← Visualizations
│  └─ README.md
│
├─ 🧪 testing/                           ← Test utilities
│  ├─ fixtures/                          ← Test data
│  ├─ mocks/                             ← Mock objects
│  └─ README.md
│
└─ 📝 ROOT FILES (Essential)
   ├─ .git/                              ← Git repository
   ├─ .gitignore                         ← Git exclusions
   ├─ .env.example                       ← Environment template
   ├─ CNAME                              ← Domain name
   ├─ index.html                         ← Static HTML
   ├─ knexfile.ts                        ← Database config
   ├─ tsconfig.json                      ← TypeScript config
   ├─ skills.manifest.json               ← AI skills manifest
   └─ setup.sh                           ← Setup script
```

---

## 🎯 Key Locations

### For Getting Started
```
docs/INDEX.md                    ← Documentation hub (START HERE!)
docs/guides/QUICK_START.md       ← Beginner guide (5 min)
docs/guides/SETUP.md             ← Full setup (30 min)
docs/guides/DOCKER_GETTING_STARTED.md  ← Docker (10 min)
```

### For Development
```
frontend/src/                    ← React code
backend/src/                     ← Node.js code
backend/database/                ← Migrations & seeds
docs/guides/WORKFLOW.md          ← Development workflow
```

### For Reference
```
docs/KLDY_STYLE_GUIDE.md        ← Design system (colors, fonts)
docs/architecture/DECISIONS.md   ← Why we built it this way
docs/FOLDER_STRUCTURE.md         ← This tree explained
docs/DOCKER.md                   ← Docker complete guide
docs/DOCKER_CHEATSHEET.md        ← Docker commands
```

### For Deployment
```
docker-compose.yml               ← Local Docker setup
kubernetes/                      ← Production K8s configs
.github/workflows/               ← CI/CD pipelines
monitoring/                      ← Observability setup
```

---

## 📊 File Organization Principles

### ✅ What's at Root
- **Essential only:** package.json, docker-compose.yml, tsconfig.json
- **Configuration:** .eslintrc.json, .prettierrc.json, .gitignore
- **Setup:** setup.sh, knexfile.ts
- **README:** Main project README

### ✅ What's in `/docs/`
- **Guides:** How-to docs for getting started, setup, workflow
- **Architecture:** Design decisions and system design
- **Reference:** Kldy design system, project structure, etc.
- **Entry point:** INDEX.md to find anything

### ✅ What's in `/frontend/` and `/backend/`
- **Source code:** src/ directory
- **Config:** Package.json, tsconfig, Dockerfile
- **Build artifacts:** dist/, node_modules/ (gitignored)

### ✅ What's in `/database/`
- **Migrations:** Schema changes over time
- **Seeds:** Sample/test data
- **Queries:** Example SQL queries

---

## 🗺️ Navigation Guide

### "Where is X?"

**Where is the getting started guide?**  
→ `docs/guides/QUICK_START.md`

**Where is the Docker setup?**  
→ `docs/guides/DOCKER_GETTING_STARTED.md` or `docs/DOCKER.md`

**Where are the design colors?**  
→ `docs/KLDY_STYLE_GUIDE.md`

**Where is the React code?**  
→ `frontend/src/components/`

**Where is the API code?**  
→ `backend/src/routes/` and `backend/src/services/`

**Where are database migrations?**  
→ `backend/database/migrations/`

**Where do I add a new page?**  
→ `frontend/src/pages/` (create a new file)

**Where do I add a new API endpoint?**  
→ `backend/src/routes/` (create a new file)

**Where is the deployment config?**  
→ `kubernetes/` (K8s) or `docker-compose.yml` (local)

**Where is CI/CD configured?**  
→ `.github/workflows/`

---

## 📈 Scalability

This structure supports:

✅ **Single developer** - Everything visible and organized  
✅ **Small team** - Clear role boundaries (frontend, backend, data science)  
✅ **Microservices** - Services/ has separate docker-compose  
✅ **Enterprise** - kubernetes/ for scaling, monitoring/  for observability  
✅ **Multiple environments** - staging and production configs  

---

## 🔄 Common Workflows

### Adding a New Feature
```
1. Read requirements
2. Design in docs/architecture/
3. Create frontend component in frontend/src/components/
4. Create backend endpoint in backend/src/routes/
5. Add database changes in backend/database/migrations/
6. Test in frontend and backend
7. Deploy via .github/workflows/
```

### Setting Up Locally
```
1. Clone repo
2. Read docs/guides/SETUP.md or docs/guides/DOCKER_GETTING_STARTED.md
3. Run setup.sh or docker-compose up -d
4. npm run db:migrate && npm run db:seed
5. Start frontend/backend in separate terminals
```

### Deploying to Production
```
1. Merge PR (CI/CD runs automated tests)
2. Push to main
3. GitHub Actions automatically deploys via kubernetes/
4. Monitor via monitoring/ dashboards
```

---

## 📝 Notes

- All documentation is in `/docs/` with clear structure
- Root directory kept clean with only essential files
- Project is organized for both local and cloud deployment
- Clear separation of concerns (frontend, backend, services, infra)

---

**Status:** ✅ Project structure organized and documented  
**Entry Point:** Start with `README.md`, then `docs/INDEX.md`  
**Next:** Choose your role above and follow the path!  

---

See [docs/INDEX.md](docs/INDEX.md) for complete documentation.
