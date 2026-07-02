# Contributing to CyberVets Solutions

Welcome! We're building AI automation for real estate agents. Here's how to contribute effectively.

---

## First Time? Start Here

1. **Read [CLAUDE.md](CLAUDE.md)** — Project context and available skills
2. **Read [project-guidelines.instructions.md](project-guidelines.instructions.md)** — Coding standards
3. **Read [WORKFLOW.md](WORKFLOW.md)** — How to develop using vibe coding
4. **Pick a task** from [issues](../../issues) marked `good-first-issue`
5. **Open the task in Claude Code** → Run `/office-hours` → Let Claude guide you

---

## Development Setup

### Prerequisites

```bash
# Check versions
node --version      # v18+
python --version    # 3.10+
git --version
docker --version    # For local services (optional)
```

### Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/cybervet13/cybervetssolutions.com.git
cd cybervetssolutions.com

# 2. Install dependencies
npm install
pip install -r requirements.txt

# 3. Setup environment
cp .env.example .env
# Edit .env with your values

# 4. Initialize database
npm run db:migrate
npm run db:seed

# 5. Start development server
npm run dev

# Frontend: http://localhost:3000
# Backend: http://localhost:3001
# Docs: http://localhost:3000/api/docs
```

---

## Workflow: How to Ship a Feature

### Step 1: Understand the Problem

**Use Claude Code with `/office-hours` skill**

```
You: "I want to add email templates for follow-up."

Claude: /office-hours
Claude: "Let me ask some questions:
  - How many templates? (1 generic or agent can create custom?)
  - Who edits them? (admin only or per-agent?)
  - What about personalization? (merge fields for name, property, etc?)
  - Where in the flow do they get used?
  - What's the pain today without this feature?"

You: *Answers questions*

Claude: "Based on your answers, here's what I think you're actually building:
  [Summary + recommendations + alternatives]"
```

### Step 2: Write the Specification

**Use `/plan` skill**

```
You: "Write the spec for email templates feature."

Claude: /plan
Claude: *Writes detailed spec including:
  - API endpoints
  - Database schema
  - Error cases
  - Test scenarios
  - Deployment considerations*
```

### Step 3: Implement

**Use `/build` skill**

```
You: "Implement the email templates API."

Claude: /build
Claude: *Writes:
  - Routes + controllers
  - Service layer
  - Database models
  - Unit tests
  - Error handling
  - Commits code with atomic commits*
```

### Step 4: Test Thoroughly

**Use `/qa` skill**

```
You: "Test the email templates feature end-to-end."

Claude: /qa
Claude: *Runs live testing:
  - Happy path (create, edit, delete)
  - Edge cases (empty templates, special chars)
  - Finds bugs + fixes them
  - Adds regression tests*
```

### Step 5: Security Review

**Use `/security-audit` skill**

```
You: "Audit the security of this feature."

Claude: /security-audit
Claude: *Checks:
  - Input validation
  - SQL injection prevention
  - XSS protection
  - Auth checks
  - Data privacy*
```

### Step 6: Ship It

**Use `/ship` skill**

```
You: "Deploy to production."

Claude: /ship
Claude: *Handles:
  - Merge PR
  - Run tests on CI
  - Deploy to staging
  - Verify health
  - Deploy to production
  - Setup monitoring*
```

---

## Commit Guidelines

### Branch Naming

```
feature/email-templates           # New feature
fix/template-parsing-bug          # Bug fix
refactor/email-service-cleanup    # Cleanup
docs/email-api-reference          # Docs
```

### Commit Messages

**Format**: `type(scope): description`

```
✅ Good:
feat(api): add POST /email-templates endpoint
fix(email): handle special characters in template body
refactor(service): extract email validation logic
docs(api): add template creation example

❌ Bad:
fixed stuff
updated email
changes
wip
```

### Commit Best Practices

- **One logical change per commit** (not 10 unrelated changes)
- **Include context in message** (why, not just what)
- **Tests in same commit** (feature + tests together)
- **Commit frequently** (small commits easier to debug)

```bash
git checkout -b feature/email-templates
git commit -m "feat(api): add POST /email-templates endpoint"
git commit -m "test(api): add tests for template creation"
git commit -m "docs(api): add template creation example"
git push origin feature/email-templates
# → Opens PR automatically
```

---

## Pull Request Process

### Before Opening PR

```bash
# 1. Run tests locally
npm run test

# 2. Check coverage (target: ≥80%)
npm run coverage

# 3. Lint & format
npm run lint
npm run format

# 4. Run security audit
npm run security-audit
```

### PR Title & Description

**Title**: `feat(email): add template management API`

**Description**:
```markdown
## What
Added email template management system for real estate agents.

## Why
Agents need to customize follow-up emails. Currently no way to do this.

## How
- New API endpoints: POST /templates, PATCH /templates/:id, DELETE /templates/:id
- Database: templates table (schema in migration 20260701_001)
- Frontend: TemplateEditor component
- Tests: 85% coverage

## Testing
- Unit tests: 12 new tests (all passing)
- Integration: Tested template creation → email send flow
- Edge cases: Special chars, empty body, duplicate names

## Security
- Input validation: Template content length max 5000 chars
- Auth: Only template owner can edit
- Audit: All changes logged to audit_log table

## Performance
- New query doesn't impact API latency
- Templates cached (Redis, 1h TTL)
- No N+1 queries
```

### Review Process

1. **CI runs automatically**
   - Tests run (`npm run test`)
   - Coverage checked (≥80% required)
   - Linting checked
   - Security audit runs

2. **Code review**
   - At least 1 approval required
   - Reviewers check: correctness, style, security, tests

3. **Approval & Merge**
   - All checks pass ✅
   - Approved by reviewer ✅
   - Squash & merge

4. **Auto-Deploy**
   - Staging deployment automatic
   - Production requires manual approval

---

## Code Review (For Reviewers)

**When you review a PR, use `/review` skill**

```
Claude: /review
Claude: "I found 3 issues:
  1. Line 45: Potential SQL injection (use parameterized query)
  2. Line 72: Test missing for empty template case
  3. Line 120: Error message not helpful to user
  
  Posted as comments on PR. Ready to iterate?"
```

### Code Review Checklist

- ✅ **Correctness**: Does the code do what it claims?
- ✅ **Tests**: Are there tests? ≥80% coverage?
- ✅ **Style**: Follows [project-guidelines.instructions.md](project-guidelines.instructions.md)?
- ✅ **Security**: Input validation? No SQL injection? Auth checks?
- ✅ **Performance**: Any N+1 queries? Reasonable latency?
- ✅ **Docs**: README/API docs updated?

---

## Common Tasks

### "I found a bug"

1. Open an [issue](../../issues)
2. Include:
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment (OS, browser, node version)
   - Screenshots if UI bug

3. Once issue approved:
   ```bash
   git checkout -b fix/bug-description
   # Implement fix + tests
   git push origin fix/bug-description
   # → Opens PR
   ```

### "I want to improve performance"

1. Use `/performance` skill to baseline current state
2. Identify bottleneck
3. Implement optimization
4. Use `/performance` skill again to verify improvement
5. PR should include before/after metrics

### "I want to refactor something"

1. Ensure tests exist for that code
2. Refactor
3. Run tests (should all pass, same behavior)
4. Measure code coverage (shouldn't decrease)
5. PR title: `refactor(scope): description of improvement`

### "I want to add documentation"

1. Find the relevant file (README, API.md, docs/*, DECISIONS.md)
2. Edit it
3. PR title: `docs(scope): what was added/improved`
4. No tests needed, but check for accuracy

---

## Questions?

- **Architecture?** → Run `/design-review` in Claude Code
- **Security?** → Run `/security-audit`
- **How to structure code?** → See [project-guidelines.instructions.md](project-guidelines.instructions.md)
- **Git workflow?** → See this file (CONTRIBUTING.md)
- **Deployment?** → See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

---

## Code of Conduct

- **Respectful**: Treat others with respect, embrace diversity
- **Inclusive**: We welcome all backgrounds and skill levels
- **Collaborative**: Help others learn, review thoughtfully
- **Accountability**: Take responsibility for your work

---

## License

By contributing, you agree that your contributions are licensed under MIT license.

---

**Happy shipping!** 🚀

**Questions?** Open an [issue](../../issues) or reach out to @CyberVet13

