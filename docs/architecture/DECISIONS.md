# DECISIONS.md — Architectural Decision Log

> Record of major decisions: what was decided, why, and what changed as a result.

Use this format when making architectural choices. Include it in PRs, reference it when explaining the codebase to new team members.

---

## ADR Template

```markdown
## ADR-NNN: [Decision Title]

**Date**: YYYY-MM-DD  
**Status**: Proposed | Accepted | Deprecated | Superseded by ADR-XYZ  
**Author(s)**: @username  

### Context

Why are we making this decision now? What's the problem we're solving?

### Problem Statement

What specifically needs to be decided?

### Options Considered

**Option 1: [Name]**
- Pros: ...
- Cons: ...
- Effort: ...

**Option 2: [Name]**
- Pros: ...
- Cons: ...
- Effort: ...

### Decision

We choose **Option [N]** because...

### Rationale

Why this option over the others?

### Consequences

- ✅ Benefits: What good things happen?
- ⚠️ Risks: What could go wrong?
- 📝 Action items: What do we need to do to make this work?

### Alternatives Considered

Why we didn't pick the others.

### Review & Evolution

**Next Review Date**: YYYY-MM-DD  
**Superseded By**: (if applicable)  
**Lessons Learned**: (fill in after 3-6 months of using this decision)
```

---

## Decisions (Chronological)

### ADR-001: PostgreSQL + Node.js for Backend

**Date**: 2026-07-01  
**Status**: Accepted  
**Author(s)**: @CyberVet13  

**Context**: Building lead management system for real estate agents. Need to store: leads, emails, activities, agent metadata, MLS data. Require ACID transactions, relational queries, audit logs.

**Problem**: Pick database + primary backend language.

**Options Considered**:

**Option 1: PostgreSQL + Node.js (Express)**
- ✅ Pros: Strong schema, transactions, proven at scale, good for startups, team familiar
- ❌ Cons: Less horizontal scaling (need expertise), requires connection pooling, full schema planning upfront
- 📊 Effort: Medium

**Option 2: MongoDB + Node.js**
- ✅ Pros: Flexible schema (iterate fast), horizontal scaling easier, JSON-native
- ❌ Cons: Weak transactional guarantees (pre-v4), no schema validation, team less familiar, harder to reason about data relationships
- 📊 Effort: Medium

**Option 3: DynamoDB + Python (Lambda)**
- ✅ Pros: Serverless (no ops), scales automatically, pay-per-request
- ❌ Cons: Expensive at scale, limited query patterns, hard to maintain consistent schema, team no experience
- 📊 Effort: High

**Decision**: PostgreSQL + Node.js

**Rationale**:
1. **Data is relational**: Leads relate to agents, emails, activities. Transactions matter (create lead + send welcome email atomically).
2. **Maturity**: PostgreSQL proven at scale (Airbnb, Spotify, Instagram). Largest adoption in startup world.
3. **Team velocity**: Node.js faster iteration than Python for API. Both team members familiar.
4. **Cost**: PostgreSQL scales to millions of records without exponential cost.
5. **Query flexibility**: SQL is more powerful than MongoDB queries for reporting + analytics.

**Consequences**:
- ✅ Clear schema, strong validation, transactions work
- ✅ Good for reporting (SQL queries)
- ⚠️ Schema changes require migrations (manageable with tools like Knex)
- ⚠️ Scaling to 100M+ records needs sharding strategy (fine for now, plan for later)
- 📝 Set up Postgres (local dev + RDS in prod), Knex for migrations, pgBouncer for connection pooling

**Alternatives Rejected**:
- MongoDB: Flexibility tempting but relational data demands too strict schemas anyway
- DynamoDB: Too expensive for what we need, adds operational complexity

**Review Date**: 2026-12-01  
**Lessons Learned**: (To be filled in after 6 months in production)

---

### ADR-002: React + TypeScript for Frontend

**Date**: 2026-07-01  
**Status**: Accepted  
**Author(s)**: @CyberVet13  

**Context**: Building agent dashboard to monitor lead pipeline, view market analysis, compose personalized emails. Require: real-time updates, responsive design, offline-capable.

**Problem**: Frontend framework + language choice.

**Options Considered**:

**Option 1: React + TypeScript**
- ✅ Pros: Largest ecosystem, team familiarity, mature tooling (Create React App, Vite), TypeScript catches bugs, excellent performance libs
- ❌ Cons: Large dependency tree, build complexity, need webpack/Vite knowledge
- 📊 Effort: Low (team knows this well)

**Option 2: Vue 3 + TypeScript**
- ✅ Pros: Simpler learning curve, smaller bundle, great docs
- ❌ Cons: Smaller ecosystem, fewer UI component libraries, less job market demand
- 📊 Effort: Medium

**Option 3: Svelte**
- ✅ Pros: Best bundle size, compiler approach, really smooth reactivity
- ❌ Cons: Tiny ecosystem, harder to find developers, less tested in production
- 📊 Effort: High

**Decision**: React + TypeScript

**Rationale**:
1. **Team skill**: We know React well, don't want to learn new framework now
2. **Ecosystem**: Huge number of UI libraries, state management, testing tools
3. **Hiring**: If we grow, React devs are easy to find
4. **Mature patterns**: Testing, error boundaries, context API, hooks all mature
5. **Enterprise adoption**: Real estate SaaS companies use React (proven in this domain)

**Consequences**:
- ✅ Fast development, team productive from day 1
- ✅ Easy to hire React devs later
- ⚠️ Larger bundle (but Vite + code splitting mitigates)
- 📝 Use Vite (not Create React App, it's faster), set up eslint + prettier, use react-query for server state

**Alternatives Rejected**:
- Vue: Nothing wrong with Vue, just team velocity matters more right now
- Svelte: Compelling but ecosystem too young, would slow us down

**Review Date**: 2026-12-01  

---

### ADR-003: Real Estate Domain: Lead Qualification Automated

**Date**: 2026-07-01  
**Status**: Proposed  
**Author(s)**: @CyberVet13  

**Context**: Real estate agents get 50-200 leads per week from various sources. Many are unqualified (out of market, unserious, etc.). Manual qualification = 5-10 hours/week per agent.

**Problem**: How much of lead qualification should be automated vs human?

**Options Considered**:

**Option 1: Full automation (AI makes the call)**
- ✅ Reduces manual work to ~0
- ❌ Risk: Qualify out good leads, agents lose trust, liability if wrong
- 📊 Effort: High (need ML model, validation)

**Option 2: AI scores, agent reviews (this ADR)**
- ✅ AI handles 90% (flagging obvious qualified), human judgment on borderline
- ✅ Agents stay in control, build trust gradually
- ⚠️ Doesn't fully automate (still 1-2 hours/week agent time)
- 📊 Effort: Medium

**Option 3: No automation, manual only**
- ✅ Zero risk of errors
- ❌ Defeats the purpose (automate the drudgery)
- 📊 Effort: Low (but bad for users)

**Decision**: Option 2 — AI scores, agent reviews + overrides

**Rationale**:
1. **Trust**: Agents own their leads. AI assists, doesn't replace.
2. **Learning**: We learn from overrides (when AI says "qualified" but agent says "no"), improve model.
3. **Liability**: Human-in-the-loop means we're compliant with FTC guidance on AI in real estate.
4. **Feature creep**: Can evolve to more automation later if data supports it.

**Consequences**:
- ✅ Agents see AI as helpful tool, not threat
- ✅ Transparent scoring (auditable, defensible)
- ⚠️ Still requires some manual work (but 80% reduction from status quo)
- ⚠️ Need to build good scoring model (garbage in = garbage out)
- 📝 Build lead scoring service (Python ML), API that returns score + reasoning, UI that shows score + agent override option

**Alternatives Rejected**:
- Full automation: Too risky, agents would reject
- No automation: Defeats the point (we exist to save agent time)

**Review Date**: 2026-12-01  

---

### ADR-004: Security: MLS Data Handling & PII Protection

**Date**: 2026-07-01  
**Status**: Accepted  
**Author(s)**: @CyberVet13  

**Context**: Store real estate leads (names, emails, phone numbers = PII). Comply with GDPR, CCPA, state privacy laws. Breach = fines + reputation damage + customer churn.

**Problem**: How to handle PII safely?

**Decision**:
1. **Encryption at rest**: AES-256 for names, emails, phone (encrypted columns in Postgres)
2. **Encryption in transit**: HTTPS only, TLS 1.3+, no insecure fallback
3. **Access control**: Role-based (agent sees only their leads, admin sees all for support)
4. **Audit logs**: Every access to PII is logged (who, what, when)
5. **Deletion**: GDPR right-to-be-forgotten: hard delete after agent confirms
6. **Data minimization**: Don't store unnecessary PII (e.g., don't save SSN)

**Consequences**:
- ✅ Compliant with GDPR, CCPA, state laws
- ✅ Auditable (log every access)
- ⚠️ Performance overhead (encryption/decryption), use caching
- 📝 Use AWS KMS or HashiCorp Vault for key management, implement audit logging, create GDPR response procedures

---

### ADR-005: Deployment: Staging Before Production

**Date**: 2026-07-01  
**Status**: Accepted  
**Author(s)**: @CyberVet13  

**Context**: Ship features fast but don't break production. Need safe feedback loop.

**Decision**:
- All PRs deploy to staging automatically (if CI passes)
- Manual approval to deploy staging → production
- Canary deploys: 10% → 50% → 100% traffic (watch metrics)
- Automatic rollback if error rate spikes >5%

**Consequences**:
- ✅ Catch bugs before customers
- ✅ Real-world testing (staging = prod infrastructure)
- ⚠️ Staging must stay in sync with prod (discipline needed)
- 📝 Set up GitHub Actions for auto-deploy to staging, manual trigger for prod

---

## Template for New Decisions

When you need to make a decision, copy this and fill it in:

```markdown
## ADR-NNN: [Title]

**Date**: 2026-07-DD  
**Status**: Proposed  
**Author(s)**: @username  

**Context**:

**Problem**:

**Options Considered**:

**Decision**:

**Rationale**:

**Consequences**:

**Alternatives Rejected**:

**Review Date**: 2026-12-01  
```

---

## How to Use This File

1. **Before architecture decisions**: Draft an ADR
2. **In PR discussions**: Link to relevant ADR ("See ADR-003 for why we automated lead scoring like this")
3. **Onboarding**: New team members read this to understand why the system is shaped the way it is
4. **Retrospectives**: After 3-6 months, update the "Lessons Learned" section
5. **Evolving decisions**: If an ADR becomes outdated, mark it "Superseded by ADR-XYZ" and create new one

---

**Last Updated**: 2026-07-01  
**Next Review**: When we make major architectural changes  
**Maintainer**: @CyberVet13

