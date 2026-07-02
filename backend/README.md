# Backend — Node.js REST API

Express.js server with layered architecture (routes → controllers → services → models).

## Quick Start

```bash
cd backend
npm install
npm run dev
# http://localhost:3001
# Docs: http://localhost:3001/api/docs
```

## Project Structure

```
src/
├── routes/          # RESTful endpoints
├── controllers/     # Request handlers (parse input, call service)
├── services/        # Business logic (lead scoring, email, MLS)
├── models/          # Database models + schema
├── middleware/      # Auth, logging, error handling, validation
├── utils/           # Utilities (errors, logger, crypto)
├── config/          # Configuration (DB, Redis, env)
├── database/
│   ├── migrations/  # Knex database migrations
│   └── seeds/       # Development data
├── agents/          # AI agent orchestration
├── jobs/            # Background jobs (Bull queues)
├── types/           # TypeScript types
└── __tests__/       # Unit + integration tests
```

## Key Commands

```bash
npm run dev           # Start dev server (with auto-reload)
npm run build         # TypeScript compile
npm run start         # Run compiled code
npm run test          # Run tests (Jest)
npm run test:watch    # Watch mode
npm run lint          # ESLint check
npm run migrate       # Run database migrations
npm run seed          # Seed development data
```

## Architecture Pattern: Layers

### 1. Routes (HTTP Layer)
```typescript
// routes/leads.ts
router.get('/leads', authMiddleware, leadController.getLeads);
router.post('/leads', authMiddleware, leadController.createLead);
```

### 2. Controllers (Request Handling)
```typescript
// controllers/leadController.ts
export async function getLeads(req: Request, res: Response) {
  try {
    const leads = await leadService.getAllLeads();
    res.json(leads);
  } catch (error) {
    next(error); // → Global error handler
  }
}
```

### 3. Services (Business Logic)
```typescript
// services/leadService.ts
export async function getAllLeads() {
  const leads = await Lead.query().select('*');
  // Scoring, filtering, enrichment logic here
  return leads;
}
```

### 4. Models (Database Access)
```typescript
// models/Lead.ts
export class Lead extends Model {
  static tableName = 'leads';
  
  static get relationMappings() {
    return {
      agent: { relation: BelongsToOne, modelClass: Agent, join: { from: 'leads.agentId', to: 'agents.id' } }
    };
  }
}
```

## Database

- **PostgreSQL** (primary)
- **Redis** (cache, sessions, job queue)
- **Knex.js** for migrations
- **Objection.js** for ORM

### Create Migration
```bash
npm run knex -- migrate:make create_leads_table
# Edit database/migrations/[timestamp]_create_leads_table.ts
npm run migrate
```

### Create Seed
```bash
npm run knex -- seed:make 01_agents
# Edit database/seeds/01_agents.ts
npm run seed
```

## Authentication

- **JWT** tokens in Authorization header
- **Refresh tokens** in HTTP-only cookies
- **Rate limiting** by IP + user ID
- **Audit logging** for sensitive operations

```typescript
// middleware/auth.ts
export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Missing token' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

## Error Handling

Custom error classes for consistent error responses:

```typescript
// utils/errors.ts
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: any
  ) {
    super(message);
  }
}

// In controller
throw new AppError(400, 'Invalid lead data', { field: 'email' });

// Global error handler (middleware/errorHandler.ts)
(err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message, details: err.details });
  }
  // Unknown error
  return res.status(500).json({ error: 'Internal server error' });
}
```

## Testing

```typescript
// __tests__/unit/services/leadService.test.ts
describe('leadService', () => {
  it('should qualify high-value leads', async () => {
    const lead = { ...leadFixture, budget: 500000 };
    const score = await leadService.scoreLead(lead);
    expect(score).toBeGreaterThan(0.8);
  });
});

// __tests__/integration/leads.test.ts
describe('GET /leads', () => {
  it('should return paginated leads', async () => {
    const res = await request(app).get('/leads').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body).toHaveProperty('pagination');
  });
});
```

## Next Steps

1. **Setup TypeORM or Prisma** (cleaner than Objection.js for some)
2. **Add GraphQL** layer alongside REST
3. **Background jobs** (Bull) for async work
4. **Webhooks** for external service integrations
5. **API docs** with Swagger/OpenAPI

---

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development workflow.
