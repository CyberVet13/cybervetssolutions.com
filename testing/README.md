# Testing Utilities

Shared fixtures, mocks, and factories for consistent testing across frontend and backend.

## Contents

### Fixtures
Reusable test data (JSON files):
- `agents.json` — Test agent data
- `leads.json` — Sample lead records
- `emails.json` — Email templates
- `users.json` — User accounts

Usage:
```typescript
import agentFixture from '../fixtures/agents.json';
// Use in tests
```

### Mocks
Mock external services:
- `mls-api.ts` — Mock MLS API responses
- `sendgrid.ts` — Mock email service
- `aws.ts` — Mock S3, SQS

Usage:
```typescript
import { mockMLSApi } from '../mocks/mls-api';
// Patch API calls in tests
mockMLSApi.get('/listings').reply(200, [...]);
```

### Factories
Object builders for creating test data:
- `leadFactory.ts` — Build lead objects
- `agentFactory.ts` — Build agent objects
- `emailFactory.ts` — Build email objects

Usage:
```typescript
import { leadFactory } from '../factories/leadFactory';

const lead = leadFactory.build({
  budget: 500000,
  status: 'qualified'
});
```

## Best Practices

✅ **Use factories** for complex objects  
✅ **Use fixtures** for static data  
✅ **Use mocks** to isolate services  
✅ **Keep tests DRY** — share setup logic  
✅ **Aim for 80%+ coverage** on core logic  

## Running Tests

```bash
# Frontend
cd frontend
npm run test              # Run all tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report

# Backend
cd backend
npm run test              # Run all tests
npm run test:watch
npm run test:coverage

# Microservices
cd services/lead-scorer
make test
```

---

See individual README files for setup instructions.
