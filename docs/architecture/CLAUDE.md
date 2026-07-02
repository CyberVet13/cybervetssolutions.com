# CyberVets Solutions — Claude Code Setup

> **Mission**: Accelerate AI automation for real estate agents. Transform manual workflows into intelligent, scalable systems that close more deals.

---

## Project Context

**Domain**: Real Estate + AI Automation + Security-First Infrastructure  
**Team Size**: Solo shipping (vibe coding mode)  
**Shipping Speed Target**: Move like a small team  
**Quality Gate**: Every feature ships with tests, security audit, and user-facing documentation  

### What We're Building

- **Lead Follow-up Automation**: Multi-channel outreach that doesn't feel robotic
- **Market Intelligence**: Automated reports, comparable analyses, trend detection
- **Client Communication**: AI-powered email, SMS, calendar management
- **Backend**: Python/Node.js microservices, secure agent workflows, audit trails
- **Frontend**: React dashboard for agents to monitor + override AI decisions

---

## Core Workflows — Pick Your Flavor

Run these slash commands to shift into focused modes. Each one writes decision artifacts that feed into the next step.

### 🏃 Fast Lane (When You're In Flow)

**You know exactly what to build.** Ship it fast.

```
/sprint-mode        → Bypass planning, jump to implementation
/build              → Code generation with atomic commits
/verify             → Run tests, verify functionality
/ship               → Push to production with automated checks
```

### 🧠 Thinking Mode (When You Need To Figure It Out First)

**You have an idea but need to validate assumptions.** Think before code.

```
/office-hours       → Reframe the idea: pain points, scope, alternatives
/design-review      → Check UX/API/architecture against best practices
/security-audit     → OWASP + data-privacy review before building
/plan                → Write the spec: endpoints, schema, error cases
```

### 🔄 Iteration Mode (When You're Refining)

**The feature works but needs polish.** Make it production-grade.

```
/qa                 → Test real flows, find edge cases, fix bugs
/refactor           → Clean up tech debt, improve architecture
/documentation      → Write guides that actually help users
/performance        → Baseline, profile, optimize
```

### 🚨 Production Mode (When Something's Wrong)

**Bugs in prod, security issue, customer impact.** Respond fast.

```
/investigate        → Root-cause debugging (trace → hypothesis → test)
/incident-response  → Severity triage → containment → communication → fix
/hotfix             → Fast track to production with safety guardrails
```

---

## Available Skills

Each skill is a focused mode with specific rules, guardrails, and output expectations.

### Planning & Discovery

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/office-hours` | "I want to build..." | Reframe ideas: pain points, scope, risks, implementation strategies |
| `/plan` | "Write the spec for..." | Executable spec: endpoints, schema, errors, tests, data flow |
| `/design-review` | "Check this design..." | UX/API/architecture audit against industry best practices |
| `/security-audit` | "Audit this code..." | OWASP Top 10 + real estate data-privacy review + threat model |
| `/research` | "Find best practices for..." | Competitive analysis, pattern search across the web |

### Building

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/sprint-mode` | "Build fast" | Minimal ceremony, maximum velocity. Atomic commits, skip plan docs |
| `/build` | "Implement [feature]" | Code generation with inline comments, error handling, logging |
| `/pair` | "Help me code..." | Real-time collaboration mode, suggests patterns, catches bugs as you type |
| `/refactor` | "Clean this up" | Architecture improvements, tech debt reduction, test coverage |

### Quality Assurance

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/qa` | "Test this feature" | Live QA: run the app, click through flows, find bugs, fix with atomic commits |
| `/test-coverage` | "Check test gaps" | Analyze code, identify untested paths, generate regression tests |
| `/performance` | "Optimize [component]" | Baseline metrics, profile hot paths, recommend fixes |
| `/accessibility` | "Audit a11y" | WCAG 2.1 AA compliance, screen reader testing, ARIA annotations |

### Security & Compliance

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/security-audit` | "Security check" | OWASP + STRIDE threat model + real estate data-handling review |
| `/api-security` | "Secure the API" | Auth flows, rate limiting, input validation, CORS, secret management |
| `/data-privacy` | "Privacy audit" | GDPR/CCPA compliance, data retention, consent flows, encryption |
| `/threat-model` | "What could go wrong?" | STRIDE analysis: Spoofing, Tampering, Repudiation, Information Disclosure, Denial, Elevation |

### Release & Operations

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/ship` | "Deploy this" | Merge PR, run tests, audit, push to staging, verify health |
| `/land-and-deploy` | "Go live" | Production deployment, smoke tests, rollback procedure, monitoring setup |
| `/hotfix` | "Fix prod bug" | Emergency mode: fast track with safety rails, skip approval gates |
| `/rollback` | "Revert that change" | Safe rollback: restore state, verify data integrity, post-incident review |

### Documentation

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/docs` | "Write docs for..." | Generate guides: README, API reference, troubleshooting, deployment |
| `/api-docs` | "Document this API" | OpenAPI spec, examples, error codes, rate limits, SDKs |
| `/runbook` | "Create runbook for..." | Incident response procedure, step-by-step troubleshooting, escalation matrix |

### Debugging & Diagnostics

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/investigate` | "Debug this..." | Systematic root-cause analysis: trace execution, test hypotheses, prevent recurring bugs |
| `/logs` | "Analyze logs" | Parse logs, correlate events, extract timeline, identify anomalies |
| `/trace` | "Trace this request" | End-to-end request tracing, latency breakdown, dependency analysis |

### Real Estate Domain Skills

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/lead-flow` | "Design lead workflow" | Map lead lifecycle: capture → nurture → conversion → retention |
| `/mls-integration` | "Integrate with [MLS]" | Connect to regional MLS data sources, normalize fields, handle updates |
| `/comp-analysis` | "Generate comps for..." | Automated comparable market analysis, valuation, trend detection |
| `/email-template` | "Create template for..." | Real estate email templates: follow-up, open house, price change, etc. |
| `/automation-audit` | "Where can we automate?" | Identify manual workflows in agent processes, prioritize by ROI |

---

## Rules & Guardrails

### Always Do This

- **Atomic commits**: One logical change per commit. Include context in messages.
- **Error handling**: No silent failures. Log clearly, retry with backoff, escalate gracefully.
- **Tests first**: For every feature, write tests that verify behavior. Aim for 80%+ coverage.
- **Security by default**: Input validation, output encoding, secrets not in code, HTTPS everywhere.
- **Data protection**: PII (names, emails, phone) encrypted at rest, masked in logs, GDPR-compliant deletion.
- **Documentation**: README updates, API docs, deployment guide, troubleshooting. Keep it current.

### Never Do This

- **Hard-coded secrets**: API keys, DB passwords, tokens in source code. Use env vars + secrets manager.
- **Skipping tests**: Every PR must pass tests. If CI fails, stop and fix.
- **Ignoring errors**: No `try { ... } catch (e) {}` without handling or logging.
- **Manual testing only**: Automate regression tests. Clicks alone aren't proof.
- **Shipping without security audit**: Run `/security-audit` before `/ship`.
- **Leaving TODOs behind**: Fix them, document them with a ticket, or remove them.

---

## Local Development Setup

### Prerequisites

```bash
node --version        # v18+
python --version      # 3.10+
git --version
docker --version      # For local services
```

### Quick Start

```bash
# 1. Clone and install
git clone https://github.com/CyberVet13/cybervetssolutions.com.git
cd cybervetssolutions.com
npm install && pip install -r requirements.txt

# 2. Environment setup
cp .env.example .env
# Fill in: DATABASE_URL, MLS_API_KEY, SENDGRID_API_KEY, AWS_CREDENTIALS

# 3. Database
npm run db:migrate
npm run db:seed

# 4. Start dev server
npm run dev
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
# Docs: http://localhost:3000/api/docs
```

### Commands You'll Use Daily

```bash
npm run dev              # Start dev server (auto-reload)
npm run test            # Run test suite
npm run test:watch      # Watch mode
npm run build           # Production build
npm run lint            # Check code style
npm run type-check      # TypeScript validation
npm run security-audit  # OWASP dependency scan
```

---

## Architecture at a Glance

```
┌─────────────────────────────────────────────────────────┐
│  Frontend (React Dashboard)                             │
│  - Agent activity monitor                               │
│  - Lead pipeline views                                  │
│  - Email/SMS composer with AI suggestions               │
│  - Settings + agent overrides                           │
└──────────────┬──────────────────────────────────────────┘
               │ HTTPS + JWT
┌──────────────▼──────────────────────────────────────────┐
│  Backend (Node.js / Python)                             │
│  - REST API + WebSockets                                │
│  - Orchestration layer (AI agent coordination)          │
│  - Workflow engine (lead follow-up, nurturing)          │
│  - MLS data sync                                        │
│  - Email/SMS gateway                                    │
└──────────────┬──────────────────────────────────────────┘
               │
  ┌────────────┼────────────┬──────────────┐
  │            │            │              │
  ▼            ▼            ▼              ▼
PostgreSQL  Redis        S3/Cloud    External APIs
(Data)    (Cache/Queues) (Files)     (MLS, Email, SMS)
```

---

## Project Structure

```
cybervetssolutions.com/
├── frontend/                 # React dashboard
│   ├── src/
│   │   ├── components/       # Reusable UI
│   │   ├── pages/            # Page routes
│   │   ├── services/         # API clients
│   │   └── hooks/            # Custom React hooks
│   ├── tests/                # Jest + React Testing Library
│   └── package.json
│
├── backend/                  # Node.js + Express
│   ├── src/
│   │   ├── routes/           # API endpoints
│   │   ├── services/         # Business logic
│   │   ├── models/           # Data schemas
│   │   ├── middleware/       # Auth, logging, error handling
│   │   └── agents/           # AI agent orchestration
│   ├── tests/
│   ├── migrations/           # Database migrations
│   └── package.json
│
├── services/                 # Microservices (Python)
│   ├── lead-scorer/          # ML-based lead qualification
│   ├── comp-analyzer/        # Comparable market analysis
│   ├── nlp-email/            # Email generation + personalization
│   └── docker-compose.yml    # Local service stack
│
├── scripts/                  # Deployment, seeding, backups
├── docs/                     # Architecture, API reference, runbooks
├── .github/                  # CI/CD workflows (GitHub Actions)
└── CLAUDE.md                 # This file
```

---

## Decision Log — How to Proceed

### When You're Blocked

1. **Run `/investigate`** — Trace the issue systematically
2. **Check DECISIONS.md** — What was decided, and why?
3. **Search the codebase** — Grep for similar patterns
4. **Ask in this file** — Add a question, let Claude pick the skill

### When You Need To Make An Architecture Call

1. **Document the tradeoff** in `DECISIONS.md` (what, why, alternatives, consequences)
2. **Run `/design-review`** — Get a second opinion
3. **Commit the decision** — File a PR, get team approval if needed

### When Something Feels Slow Or Brittle

1. **Run `/performance`** — Baseline, profile, optimize
2. **Run `/refactor`** — Clean up patterns that don't scale
3. **Run `/test-coverage`** — Find gaps

---

## Success Metrics — How We Know It's Working

- **Ship velocity**: 2-3 features per day (atomic, tested)
- **Test coverage**: ≥80% (aim for 85%+)
- **Security**: Zero known vulnerabilities, quarterly audits
- **Performance**: Frontend <3s TTI, API p95 <200ms
- **Production stability**: >99.9% uptime, <1% error rate
- **User adoption**: Active agent users, feature engagement
- **Data quality**: <0.5% lead data errors, real-time MLS sync

---

## Quick Reference — Common Patterns

### New Feature Checklist

```
☐ /office-hours         Create spec + get feedback
☐ /plan                 Write design document
☐ /security-audit       Review data/auth flows
☐ /build                Implement with tests
☐ /qa                   Test edge cases
☐ /documentation        Write user guide
☐ /ship                 Deploy to production
☐ Add to CHANGELOG      Document the release
```

### Bug Fix Checklist

```
☐ /investigate          Find root cause
☐ /build                Implement fix + test
☐ /qa                   Verify fix, check for regressions
☐ /hotfix               Fast track to production
☐ Add to runbook        Document if it might happen again
```

### Incident Response Checklist

```
☐ /incident-response    Assess severity, scope, impact
☐ /investigate          Root cause analysis
☐ /hotfix               Quick patch if needed
☐ /build                Permanent fix + tests
☐ /land-and-deploy      Production deployment
☐ Postmortem            What went wrong, how to prevent next time
```

---

## Getting Help

- **Architecture questions**: Run `/design-review` or `/research`
- **Security concerns**: Run `/security-audit` or `/threat-model`
- **Performance issues**: Run `/performance` or `/trace`
- **Stuck on a bug**: Run `/investigate` to systematize your debugging
- **Need to refactor**: Run `/refactor` to identify tech debt
- **Ready to ship**: Run `/ship` with confidence

---

## Ethos

This is **vibe coding** mode — AI working alongside you to amplify your thinking, not replace it.

- **You decide** what to build. Claude helps you build it better, faster, safer.
- **Structured thinking** beats heroic coding. Use the workflows.
- **Quality is speed**. Tests, docs, and security reviews are force multipliers, not obstacles.
- **Automation scales**. The agent handles the boilerplate; you handle the judgment calls.
- **Shipping is the goal**. Every PR that lands teaches us something. Every bug fixed makes us more resilient.

---

**Last updated**: 2026-07-01  
**Maintained by**: AI Agent (vibe coding mode)  
**Next review**: When you feel friction in the workflow

