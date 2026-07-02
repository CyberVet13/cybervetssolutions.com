# 📚 Documentation Index

Complete guide to CyberVets Solutions project structure, setup, and development.

---

## 🚀 Getting Started (Pick One)

### ⚡ **Quick Start (5 minutes)** 
→ [guides/QUICK_START.md](guides/QUICK_START.md)  
For anyone who wants to run the app immediately. Plain English, no jargon.

### 📖 **Complete Setup Guide (30 minutes)**
→ [guides/SETUP.md](guides/SETUP.md)  
Full walkthrough with explanations. For developers setting up locally.

### 🐳 **Docker Setup (10 minutes)**
→ [DOCKER.md](DOCKER.md)  
Run everything in containers. No local dependencies needed.

---

## 📖 Reference Guides

### Architecture & Design
- [AGENTS.md](architecture/AGENTS.md) — AI agent modes and workflows
- [DECISIONS.md](architecture/DECISIONS.md) — Why we made these architectural choices
- [CLAUDE.md](architecture/CLAUDE.md) — Claude AI agent reference
- [WORKFLOW.md](guides/WORKFLOW.md) — Daily development workflows

### Styling & Design System
- [KLDY_STYLE_GUIDE.md](KLDY_STYLE_GUIDE.md) — Complete design system reference
- [guides/KLDY_ADOPTION.md](guides/KLDY_ADOPTION.md) — How we adopted Kldy

### Project Structure
- [FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md) — Directory organization
- [WHATS_INCLUDED.md](WHATS_INCLUDED.md) — All generated files

### Contribution
- [guides/CONTRIBUTING.md](guides/CONTRIBUTING.md) — How to contribute
- [PROJECT_GUIDELINES.md](../project-guidelines.instructions.md) — Code standards

### Docker (App Containerization)
- [DOCKER.md](DOCKER.md) — Complete Docker guide
- [guides/DOCKER_GETTING_STARTED.md](guides/DOCKER_GETTING_STARTED.md) — 30-second Docker quickstart

---

## 💻 Quick Reference

| Need | Go To |
|------|-------|
| Run the app now | [guides/QUICK_START.md](guides/QUICK_START.md) |
| Set up locally | [guides/SETUP.md](guides/SETUP.md) |
| Use Docker | [DOCKER.md](DOCKER.md) |
| Understand architecture | [architecture/DECISIONS.md](architecture/DECISIONS.md) |
| Build a feature | [guides/WORKFLOW.md](guides/WORKFLOW.md) |
| Design system colors/fonts | [KLDY_STYLE_GUIDE.md](KLDY_STYLE_GUIDE.md) |
| Understand folder structure | [FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md) |
| Contribute code | [guides/CONTRIBUTING.md](guides/CONTRIBUTING.md) |
| Check what was generated | [WHATS_INCLUDED.md](WHATS_INCLUDED.md) |

---

## 📁 Directory Organization

```
docs/
├── INDEX.md                          ← You are here
├── DOCKER.md                         → Docker setup & reference
├── KLDY_STYLE_GUIDE.md               → Design system specs
├── FOLDER_STRUCTURE.md               → Project layout
├── WHATS_INCLUDED.md                 → What was generated
│
├── architecture/                     → Design decisions
│   ├── AGENTS.md                     → AI agent modes
│   ├── CLAUDE.md                     → Claude reference
│   └── DECISIONS.md                  → Architecture decisions
│
├── guides/                           → Step-by-step guides
│   ├── QUICK_START.md                → 5-minute startup
│   ├── SETUP.md                      → Full setup (30 min)
│   ├── WORKFLOW.md                   → Daily workflows
│   ├── CONTRIBUTING.md               → How to contribute
│   ├── DOCKER_GETTING_STARTED.md     → Docker quickstart
│   └── KLDY_ADOPTION.md              → How we adopted Kldy
│
├── images/                           → Screenshots & diagrams
│
└── README.md                         → This folder overview
```

---

## 🎯 By Role

### 👶 **No Coding Experience**
1. Read: [guides/QUICK_START.md](guides/QUICK_START.md) (10 min)
2. Run: `./setup.sh` (5 min)
3. Ask Claude: `/build "Create a feature"`

### 👨‍💻 **Developer**
1. Read: [guides/SETUP.md](guides/SETUP.md) (30 min)
2. Run: `npm install && npm run dev`
3. Reference: [architecture/DECISIONS.md](architecture/DECISIONS.md)
4. Build: Use `/build` Claude skill

### 🏗️ **Architect**
1. Study: [architecture/DECISIONS.md](architecture/DECISIONS.md)
2. Review: [FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md)
3. Design: [CLAUDE.md](CLAUDE.md) → `/design-review` skill

### 🐳 **Docker User**
1. Read: [DOCKER.md](DOCKER.md) (or quickstart [guides/DOCKER_GETTING_STARTED.md](guides/DOCKER_GETTING_STARTED.md))
2. Run: `npm run docker:up`
3. Visit: http://localhost:3000

### 🎨 **Designer/UI Developer**
1. Study: [KLDY_STYLE_GUIDE.md](KLDY_STYLE_GUIDE.md)
2. Review: [guides/KLDY_ADOPTION.md](guides/KLDY_ADOPTION.md)
3. Build: Use Kldy classes in React components

---

## 🔍 Search Tips

**Looking for...**
- "How do I run this?" → [guides/QUICK_START.md](guides/QUICK_START.md)
- "What's this folder?" → [FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md)
- "Why did we build it this way?" → [architecture/DECISIONS.md](architecture/DECISIONS.md)
- "What commands do I have?" → [guides/WORKFLOW.md](guides/WORKFLOW.md)
- "How do I style a button?" → [KLDY_STYLE_GUIDE.md](KLDY_STYLE_GUIDE.md)
- "I want to contribute" → [guides/CONTRIBUTING.md](guides/CONTRIBUTING.md)
- "Docker isn't working" → [DOCKER.md](DOCKER.md) → Troubleshooting

---

## 📞 Need Help?

1. **Read the relevant guide** from the table above
2. **Search this index** (Ctrl+F / Cmd+F)
3. **Check the troubleshooting** section in relevant guide
4. **Ask Claude** with `/design-review` or `/investigate` skill

---

## 🚀 Common Starting Points

```bash
# I want to run the app now
→ guides/QUICK_START.md

# I want to use Docker
→ DOCKER.md

# I want to understand the codebase
→ FOLDER_STRUCTURE.md + architecture/DECISIONS.md

# I want to build a feature
→ guides/WORKFLOW.md

# I want to style something
→ KLDY_STYLE_GUIDE.md

# I want to contribute
→ guides/CONTRIBUTING.md
```

---

**Last Updated:** July 1, 2026  
**Maintained by:** AI Agent  
**All guides are in plain English with code examples**
