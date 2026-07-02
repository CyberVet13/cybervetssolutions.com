# CyberVets Solutions — Development Workflow Guide

> How to work effectively on this codebase using AI-assisted vibe coding

---

## What Is "Vibe Coding"?

Vibe coding = flow state with AI. You have an idea, you think through it with an AI agent, you build it together. Minimal friction between thought and execution.

Think of Claude Code as your pair programmer:
- **You**: High-level thinking, judgment calls, design decisions
- **Claude Code**: Implementation, testing, debugging, documentation
- **Together**: Ship faster, safer, with better code

---

## Daily Workflow

### Morning: Plan Your Day

Before diving into code, spend 5 minutes on planning:

```
You: "What should I work on today?"

Claude: *reads DECISIONS.md, open issues, recent PRs*
Claude: "Looks like lead-scorer edge cases are high impact. Or payment integration 
         testing. Both are roughly same effort. Which feels more urgent?"

You: "Lead scorer. It's affecting qualification accuracy."

Claude: "Got it. Here's the plan:
         1. /office-hours — understand the edge cases better
         2. /plan — write test cases covering them
         3. /build — fix the scorer
         4. /qa — verify fixes
         5. /ship — deploy with confidence
         Want to start?"

You: "Yes. Do /office-hours."
```

### Mid-Day: Build With Confidence

When building, let Claude handle the boilerplate:

```
You: "Implement the lead quality score endpoint."

Claude: "Got it. Here's what I'll do:
         1. Create GET /api/v1/leads/:id/quality-score endpoint
         2. Call lead-scorer service
         3. Cache result (Redis, 1 hour TTL)
         4. Add tests (happy path + edge cases)
         5. Update API.md
         
         Start?"

You: "Go for it. And make sure it handles missing leads gracefully."

Claude: *writes endpoint, tests, docs, commits*
Claude: "Done. Tests pass, 85% coverage. PR branch ready for review."
```

### Afternoon: Test & Verify

QA happens as you build, not after:

```
You: "Test this feature end-to-end."

Claude: /qa skill activates
Claude: "I found 2 issues:
         1. Edge case: lead with no properties crashes scorer
         2. Performance: Redis query timing out on large agent portfolios
         
         Fixing both now."

Claude: *writes fixes + regression tests*
Claude: "Fixed. Ready to ship?"

You: "Run security-audit first."

Claude: /security-audit
Claude: "Security audit passed. Encryption, rate limiting, input validation all good."

You: "Ship it."

Claude: /ship
Claude: "Deployed to production. Monitoring setup. All systems green."
```

### End of Day: Reflect & Document

Spend 10 minutes wrapping up:

```
You: "What did we ship today?"

Claude: "3 features shipped:
         1. Lead quality score endpoint (new)
         2. Email template variants (improved)
         3. Agent onboarding flow (new)
         
         Tests: 89% coverage (up from 85%)
         Performance: API p95 = 120ms (target: <200ms) ✅
         Security: 0 vulnerabilities (audit passed)
         
         Should I update DECISIONS.md for the edge case fix?"

You: "Yes. Also add a quick note to CHANGELOG."

Claude: *updates docs*
Claude: "Done. Ready for tomorrow."
```

---

## Command Reference

### Planning Mode

```bash
# Understand the problem
/office-hours

# Get the full spec
/plan

# Check architecture
/design-review

# Think about security + privacy
/security-audit

# Research best practices
/research
```

### Building Mode

```bash
# Implement something
/build

# Quick and simple (skip ceremony)
/sprint-mode

# Work together in real-time
/pair

# Clean up tech debt
/refactor
```

### Testing & Quality

```bash
# Live testing + bug fixes
/qa

# Find test gaps
/test-coverage

# Speed up performance
/performance

# Check accessibility
/accessibility
```

### Security & Compliance

```bash
# OWASP + STRIDE audit
/security-audit

# Auth, rate limiting, CORS
/api-security

# GDPR, CCPA, PII handling
/data-privacy

# What could go wrong?
/threat-model
```

### Shipping

```bash
# Deploy to production
/ship

# Go live (merge + deploy)
/land-and-deploy

# Emergency hotfix
/hotfix

# Rollback (if needed)
/rollback
```

### Documentation

```bash
# Write guides
/docs

# Generate API reference
/api-docs

# Create incident response procedures
/runbook
```

### Debugging

```bash
# Root cause analysis
/investigate

# Parse and analyze logs
/logs

# End-to-end tracing
/trace
```

### Domain-Specific Skills

```bash
# Design lead workflows
/lead-flow

# Connect to MLS
/mls-integration

# Generate market analysis
/comp-analysis

# Create email templates
/email-template

# Find automation opportunities
/automation-audit
```

---

## Common Scenarios

### Scenario 1: "I Have an Idea But Don't Know Where to Start"

```
You: "I want agents to get daily market updates about their active listings."

1. Run /office-hours
   → Claude reframes: "Why daily? What info actually changes daily? What's the 
                      real pain? Are daily emails the solution or just obvious?"

2. Run /plan
   → Claude: "Here's the spec: which MLS fields to track, which agents get this 
              (paid tier?), how to handle unsubscribes, where does data come from?"

3. Run /design-review
   → Claude: "Email could be async job (better performance), or sync in API 
              endpoint (simpler). Let's go with async job + Redis caching."

4. You pick the direction

5. Run /build
   → Implementation starts
```

### Scenario 2: "The Feature Works But Feels Slow"

```
You: "The comps page is sluggish."

1. Run /performance
   → Claude profiles: "Query takes 3s (should be <100ms). Redis not working. 
                      Frontend renders 500 comps instead of 20."

2. Run /investigate
   → Claude traces end-to-end: "MLS API returns 500 results, we should paginate. 
                               Redis cache key typo = cache misses."

3. Run /build
   → Fixes: add pagination, fix Redis key, lazy load table

4. Run /qa
   → Re-test: "Now 500ms (much better!). All tests pass."

5. Run /ship
```

### Scenario 3: "Something's Broken In Production"

```
1. Assess severity (how many users affected? revenue impact?)

2. Run /incident-response
   → Claude: "Severity: High (10% of agents, lead qualification offline). 
              Impact: ~$5k lost revenue. Time to fix: ~30 min."

3. Run /investigate
   → Find root cause: "MLS API rate limit hit. Service falling back to stale cache 
                      (24h old). Cache expired + no fallback = errors."

4. Run /hotfix
   → Quick patch: increase rate limit buffer, improve cache TTL logic

5. Run /ship
   → Deploy emergency fix

6. Postmortem:
   - Why did we hit rate limit? (leads being synced more than expected)
   - Why no fallback? (bug in cache expiry logic)
   - Prevention: add alerting for rate limit warnings, improve cache strategy

7. Run /build
   → Proper long-term fix
```

### Scenario 4: "I Need to Review Someone's PR"

```
You: "Review this lead-scorer PR."

Claude: /review (specialized review mode)
Claude: "I found 3 issues:
         1. Test coverage missing for null lead case (line 45)
         2. Error message doesn't help user debug (line 72)
         3. Performance: should cache scorer model (loads on every call)
         
         Comments posted. Ready to iterate?"

You: *reviews comments, discusses if needed*

Claude: *watches for updates, re-reviews when code changes*

Claude: "Updated and approved!"
```

---

## Tips for Effective Vibe Coding

### ✅ DO

- **Use the skills**. Each `/skill` is designed for a specific problem. Use the right tool.
- **Ask clarifying questions**. Claude will ask if something's unclear. Answer fully.
- **Show preference**. "I prefer option 2 because..." helps Claude align with your style.
- **Review before shipping**. Read the code before hitting `/ship`. Claude isn't perfect.
- **Update docs**. When you ship code, update relevant docs (README, API.md, RUNBOOK.md).
- **Commit frequently**. Small commits are easier to debug and revert if needed.

### ❌ DON'T

- **Skip testing**. "It looks right" isn't enough. Run tests.
- **Ignore security**. Always run `/security-audit` before shipping.
- **Leave TODOs**. Fix it now or file a ticket and close the loop.
- **Assume Claude knows domain context**. Tell it about MLS fields, real estate constraints, agent workflows.
- **Commit untested code**. Every commit should pass tests locally before pushing.
- **Ship without reading your own PR**. You're the author. Make sure it's good.

---

## Async Collaboration

If you're working in teams (not solo), use this pattern:

```
Day 1:
- You: /build feature on branch `feature/lead-scorer-v2`
- Claude: Tests pass, commits clean, opens PR

Day 2:
- Reviewer: Pulls PR, runs /review
- Reviewer: Posts comments on GitHub
- Claude: Reads comments, suggests fixes
- You: Review, approve fixes or discuss

Day 3:
- Reviewer: Approves
- You: Merge + `/ship`
```

---

## Troubleshooting

### "I'm Blocked"

```
Problem: Don't know how to fix something

Solution:
1. Run /investigate
2. Ask Claude to trace execution
3. If still stuck, take a break, come back fresh
4. Or ask for `/pair` mode (real-time coding)
```

### "Tests Keep Failing"

```
Problem: New code breaks existing tests

Solution:
1. Read the failing test message carefully
2. Run the test locally: npm run test -- path/to/test
3. If test is brittle (flaky), fix the test
4. If test caught a real bug, fix the code
5. Always understand why the test failed (don't just silence it)
```

### "Performance Degraded"

```
Problem: Feature shipped but now everything is slow

Solution:
1. Run /performance to baseline
2. Run /trace to find bottleneck
3. Is it frontend (rendering), API (query), or database (indexing)?
4. Fix the right layer
5. Verify with /performance again
```

### "I Don't Trust the Code"

```
Problem: Claude wrote code that feels wrong

Solution:
1. Trust your instinct
2. Ask Claude to explain the logic
3. If still unsure, ask for alternative implementation
4. Review the tests (do they cover what you're worried about?)
5. Always read code before deploying

Rule: You're responsible for what ships. If you don't understand it, don't ship it.
```

---

## Metrics & Feedback

We measure success by:

- **Velocity**: Features per sprint (we target 3-5 significant features/week in solo mode)
- **Quality**: Test coverage (target ≥80%), bugs caught in production (target <2/week)
- **Security**: Vulnerabilities (target 0), security audit pass rate (100%)
- **Performance**: API latency (target <200ms p95), page load (target <3s TTI)
- **Happiness**: Does vibe coding feel natural? Are we shipping things we're proud of?

---

## Next Steps

1. **Read CLAUDE.md** — High-level project context
2. **Read project-guidelines.instructions.md** — Coding standards
3. **Read AGENTS.md** — Understand different agent modes
4. **Read DECISIONS.md** — See why the codebase is shaped the way it is
5. **Pick something to build** → Run `/office-hours` → Ship it

---

## Questions?

- **"How do I get started?"** → Pick a task, run `/office-hours`, let Claude ask clarifying questions
- **"What's this error?"** → Run `/investigate`, Claude will trace it
- **"Is this the right approach?"** → Run `/design-review`, get feedback
- **"Ready to ship?"** → Run `/security-audit`, `/qa`, then `/ship`

---

**Last Updated**: 2026-07-01  
**Vibe Coding Activated**: Yes  
**Ready to Ship**: Let's go!

