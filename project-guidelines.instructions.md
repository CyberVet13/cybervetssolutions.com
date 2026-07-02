# CyberVets Solutions — Project Guidelines & Coding Standards

## Project Charter

**Organization**: CyberVets Solutions  
**Mission**: AI automation for real estate agents  
**Scope**: Lead management, market intelligence, client communication  
**Quality Bar**: Production-grade, security-first, testable  
**Shipping Model**: Atomic features, continuous deployment (after tests pass)

---

## Coding Standards

### TypeScript / JavaScript

```typescript
// ✅ DO
- Use strict mode, enable `"strict": true` in tsconfig.json
- Explicit return types on functions
- Use interfaces over type aliases (for clarity)
- Error handling: never ignore exceptions
- Async/await preferred over `.then()` chains
- Use const by default, let for reassignment, avoid var

// ✅ Example
interface Lead {
  id: string;
  email: string;
  phone: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
  createdAt: Date;
}

async function getLeadByEmail(email: string): Promise<Lead | null> {
  try {
    const lead = await db.query(
      'SELECT * FROM leads WHERE email = $1',
      [email]
    );
    return lead || null;
  } catch (error) {
    logger.error('Failed to fetch lead', { email, error });
    throw new Error('Database query failed');
  }
}

// ❌ DON'T
- `any` types (use `unknown` then narrow)
- Unhandled promise rejections
- Magic numbers (use named constants)
- Side effects in pure functions
- Comments that say "this is obvious" (code should be readable)
```

### Python

```python
# ✅ DO
- Type hints on all functions
- Docstrings with Args/Returns/Raises
- Use pathlib.Path over os.path
- Context managers for resources (with statements)
- Logging, not print()
- Unit tests with pytest

# ✅ Example
from typing import Optional
from pathlib import Path
import logging

logger = logging.getLogger(__name__)

def analyze_comps(
    property_id: str,
    radius_miles: float = 1.0
) -> dict:
    """
    Analyze comparable properties for a given property.

    Args:
        property_id: MLS property ID
        radius_miles: Search radius in miles

    Returns:
        Dictionary with price trends, comparable listings, valuation estimate

    Raises:
        ValueError: If property_id is invalid
        APIError: If MLS API call fails
    """
    if not property_id:
        raise ValueError("property_id cannot be empty")
    
    try:
        comps = mls_client.get_comps(property_id, radius_miles)
        analysis = calculate_valuation(comps)
        logger.info(f"Analyzed comps for {property_id}", 
                    extra={'count': len(comps)})
        return analysis
    except APIError as e:
        logger.error(f"MLS API failed", exc_info=True)
        raise

# ❌ DON'T
- Bare except clauses
- Global state without clear lifecycle
- print() instead of logging
- Duck typing without type hints
```

### React Components

```typescript
// ✅ DO
- Functional components with hooks
- Clear prop types (TypeScript interfaces)
- Lift state up when needed
- Use custom hooks for shared logic
- Memoize expensive computations (useMemo, useCallback)
- Proper dependency arrays in useEffect

// ✅ Example
interface LeadCardProps {
  lead: Lead;
  onEdit: (lead: Lead) => void;
  isLoading?: boolean;
}

export const LeadCard: React.FC<LeadCardProps> = ({
  lead,
  onEdit,
  isLoading = false,
}) => {
  const statusColor = getStatusColor(lead.status);

  return (
    <div className="lead-card">
      <h3>{lead.name}</h3>
      <p>{lead.email}</p>
      <span className={`badge badge-${statusColor}`}>
        {lead.status}
      </span>
      <button 
        onClick={() => onEdit(lead)}
        disabled={isLoading}
      >
        Edit
      </button>
    </div>
  );
};

// ❌ DON'T
- Class components (unless absolutely needed)
- useState for complex state (use useReducer)
- Prop drilling (use context or custom hooks)
- Inline arrow functions in JSX (use useCallback)
```

### API Design

```javascript
// ✅ REST Conventions
- GET /api/v1/leads              → List leads (with pagination)
- POST /api/v1/leads             → Create lead
- GET /api/v1/leads/:id          → Get single lead
- PATCH /api/v1/leads/:id        → Update lead
- DELETE /api/v1/leads/:id       → Delete lead
- GET /api/v1/leads/:id/emails   → Get emails for lead

// ✅ Responses
{
  "data": [...],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}

// ✅ Errors
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "reason": "required" }
    ]
  }
}

// ❌ DON'T
- Inconsistent naming (camelCase for fields, snake_case elsewhere)
- Deeply nested responses
- Mixing data and errors in same response
- HTTP 200 for errors (use appropriate status codes)
```

---

## Testing Requirements

### Unit Tests

- **Target Coverage**: 80%+
- **Tools**: Jest (JS), pytest (Python)
- **Rule**: Write tests before or alongside code
- **Naming**: `describe('LeadService', () => { it('...') })`

```typescript
describe('LeadService', () => {
  it('should return null for non-existent lead', async () => {
    const result = await leadService.getLeadByEmail('fake@test.com');
    expect(result).toBeNull();
  });

  it('should throw ValueError for invalid email', async () => {
    await expect(
      leadService.getLeadByEmail('')
    ).rejects.toThrow(ValueError);
  });
});
```

### Integration Tests

- **Trigger**: After PRs that touch multiple services
- **Tools**: Supertest (API), Playwright (E2E)
- **Database**: Use test database, reset between runs
- **Duration**: Keep <5s per test

### E2E Tests

- **Coverage**: Critical user flows only
- **Examples**: Lead creation → email send → follow-up
- **Tools**: Playwright
- **Run**: Pre-production only (or nightly)

---

## Git & Commits

### Branch Naming

```
feature/lead-scorer-v2
fix/email-template-parsing
docs/api-reference
refactor/service-layer-cleanup
```

### Commit Messages

```
✅ Good:
fix(api): handle missing MLS data in comps endpoint

- Gracefully return empty array instead of 500 error
- Add test for edge case
- Log warning for diagnostics

❌ Bad:
fixed stuff
bug fix
changes
```

### Pull Request Workflow

```
1. Create branch: git checkout -b feature/my-feature
2. Commit regularly: git commit -m "message"
3. Push: git push origin feature/my-feature
4. Open PR (auto-run tests, security audit)
5. Pass all checks: tests, linting, security
6. Squash + merge (keep history clean)
```

---

## Security Checklist

### Before Every Deploy

- [ ] Run `/security-audit`
- [ ] No hardcoded secrets
- [ ] Input validation on all endpoints
- [ ] Auth tokens use secure cookies (httpOnly, sameSite)
- [ ] Database queries use parameterized queries (never string concat)
- [ ] Sensitive logs redacted (PII, tokens)
- [ ] HTTPS only (or localhost)
- [ ] Rate limiting enabled on public APIs
- [ ] CORS configured correctly (whitelist, not *)

### Data Handling

- **PII (names, emails, phones)**: Encrypted at rest, masked in logs
- **API Keys**: Environment variables, never in code
- **Passwords**: Bcrypt with cost factor 12+
- **Auth Tokens**: JWT, exp ≤ 24h, refresh tokens ≤ 7d
- **Deletion**: GDPR-compliant right-to-be-forgotten (hard delete after 30d)

### Dependency Security

```bash
npm audit                    # Weekly
npm audit fix                # After review
# Commit lock files even if no fixes
pip check                    # Python equivalent
```

---

## Database

### Schema Design

- **Always** include: `id` (UUID primary key), `createdAt`, `updatedAt`
- **Migrations**: Use tools (Knex, Alembic), version control them
- **Indexes**: Index foreign keys and frequently queried fields
- **Constraints**: NOT NULL, UNIQUE, FOREIGN KEY with ON DELETE CASCADE

```sql
-- ✅ Good
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20),
  status VARCHAR(50) NOT NULL DEFAULT 'new',
  agent_id UUID NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_leads_agent_id ON leads(agent_id);
CREATE INDEX idx_leads_status ON leads(status);
```

### Query Practices

- **Parameterized queries**: Always (prevent SQL injection)
- **N+1 Prevention**: Eager load relationships
- **Pagination**: Never skip LIMIT and OFFSET
- **Transactions**: For multi-step operations (lead create + welcome email)

---

## Logging & Observability

### Structured Logging

```javascript
logger.info('Lead created', {
  leadId: lead.id,
  agentId: lead.agentId,
  source: 'web_form',
  timestamp: new Date().toISOString(),
});

// ❌ Don't:
console.log('New lead: ' + JSON.stringify(lead));
```

### Log Levels

- **ERROR**: Something failed, customer is impacted, alert ops
- **WARN**: Degraded but working (slow API, retrying, partial failure)
- **INFO**: Normal operations (user signup, email sent, feature flag enabled)
- **DEBUG**: Development only, verbose details

### Metrics

- **RED**: Request rate, errors, duration (every API endpoint)
- **USE**: Utilization, saturation, errors (CPU, memory, queue depth)
- **Custom**: Leads qualified/day, email open rate, agent adoption

---

## Documentation

### Every Project Needs

1. **README.md**
   - What does this do?
   - How to get it running locally?
   - How to deploy?
   - Where to find more docs?

2. **API.md** (for backend services)
   - Endpoints (with curl examples)
   - Error codes
   - Authentication
   - Rate limits

3. **ARCHITECTURE.md**
   - System diagram
   - Data flow
   - Key components
   - Deployment architecture

4. **RUNBOOK.md**
   - Common issues + how to fix them
   - Deployment steps
   - Rollback procedure
   - Who to contact if things break

### Update Docs When

- You add a feature
- You change an API
- You fix a bug that confused people before
- You deploy to production

---

## Development Workflow (Vibe Coding)

```
Day 1 — Plan
├── /office-hours      (Why are we building this?)
├── /plan              (What, exactly?)
└── /design-review     (Architecture look good?)

Day 2-3 — Build
├── /build             (Code with tests)
├── /test-coverage     (Fill gaps)
└── /refactor          (Clean it up)

Day 4 — Verify
├── /qa                (Real-world testing)
├── /security-audit    (Is it safe?)
└── /documentation     (Can users understand it?)

Day 5 — Ship
└── /ship              (Deploy to production)
```

---

## Performance Targets

| Component | Target | How We Measure |
|-----------|--------|---------------|
| Frontend TTI | <3s on 4G | Lighthouse, real user monitoring |
| API p95 latency | <200ms | APM (DataDog, New Relic) |
| Database query | <100ms | Slow query log, query plan analysis |
| Email send | <5s | MQ latency, SendGrid API metrics |
| Page load (comps view) | <2s | Lighthouse, Core Web Vitals |

### Optimization Checklist

- [ ] Compress images, optimize assets
- [ ] Code split React bundles
- [ ] Cache API responses (Redis for 5min, browser cache for 1day)
- [ ] Database query optimization (indexes, eager loading)
- [ ] CDN for static assets
- [ ] Lazy load non-critical components

---

## Monitoring & Alerts

### Critical Alerts (Page Ops)

- Database connection pool exhausted
- API error rate >5%
- Email/SMS send failure >1%
- Auth failures spike >10x normal
- Payment processing failures
- Lead data sync lag >1 hour

### Informational Dashboards

- Daily leads created / qualified
- Email engagement (open rate, click rate)
- API latency trends
- Deployment frequency, lead time for changes
- Test coverage trend
- Security scan results

---

## Decision Record Format

When making architectural decisions, log them in `DECISIONS.md`:

```markdown
## Decision: Use PostgreSQL over MongoDB

**Date**: 2026-07-01  
**Context**: Need to store lead data, email history, agent activity

**Options**:
1. PostgreSQL (RDBMS) — Strong schemas, transactions, proven at scale
2. MongoDB (NoSQL) — Flexible schemas, horizontal scaling
3. DynamoDB — Serverless, scales automatically

**Decision**: PostgreSQL

**Rationale**:
- Leads have structured, relational data (leads → emails → activities)
- Need ACID transactions for lead creation + welcome email in one unit
- PostgreSQL proven at scale for B2B SaaS
- Team has more PostgreSQL experience

**Consequences**:
- Must plan schema upfront (less flexible if requirements change)
- Scaling requires careful sharding strategy if >1M leads
- Backup/recovery procedures needed

**Alternatives Considered**: See Options

**Review Date**: 2026-12-01
```

---

**Last Updated**: 2026-07-01  
**Maintains**: Coding velocity without sacrificing quality  
**Next Review**: After first production incident or when we feel friction

