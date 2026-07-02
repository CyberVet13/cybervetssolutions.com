# Database — PostgreSQL Schema

Database schema, migrations, and seed data for CyberVets.

## Quick Start

```bash
# Run migrations
npm run migrate

# Seed development data
npm run seed

# Rollback last migration
npm run migrate:rollback
```

## Schema Overview

### Core Tables

**agents** — Real estate agents
```sql
id, email, name, phone, mls_number, settings, created_at, updated_at
```

**leads** — Potential clients
```sql
id, agent_id, name, email, phone, budget, location, property_type,
timeline, qualification_score, status, source, notes, created_at, updated_at
```

**emails** — Email history
```sql
id, lead_id, agent_id, subject, body, template_name, sent_at, opened_at,
clicked_at, status, error_message, created_at
```

**market_data** — Market intelligence
```sql
id, location, property_type, avg_price, median_price, days_on_market,
price_per_sqft, trend, last_updated
```

**audit_logs** — Compliance + audit trail
```sql
id, user_id, action, resource, resource_id, changes, ip_address,
created_at
```

## Migrations

Create new migration:
```bash
npm run knex -- migrate:make add_new_column_to_leads
```

Edit file in `migrations/[timestamp]_add_new_column_to_leads.ts`:
```typescript
export async function up(knex: Knex) {
  return knex.schema.table('leads', (table) => {
    table.string('source').defaultTo('website');
  });
}

export async function down(knex: Knex) {
  return knex.schema.table('leads', (table) => {
    table.dropColumn('source');
  });
}
```

Run migration:
```bash
npm run migrate
```

## Seeds

Development data for local testing:
```bash
npm run seed
```

Files in `seeds/`:
- `01_agents.ts` — Test agents
- `02_leads.ts` — Sample leads
- `03_emails.ts` — Email history

## Useful Queries

See `queries/` directory for common SQL operations:
- `lead_metrics.sql` — Lead count, avg score, by agent
- `email_engagement.sql` — Open rate, click rate by template
- `market_analysis.sql` — Price trends by location

## Data Protection

- **PII Encryption** — Emails, phone numbers encrypted at rest
- **Audit Logging** — All data changes logged
- **GDPR Compliance** — Right to deletion, data retention policies

## Backup & Recovery

```bash
# Backup
npm run db:backup    # Creates backup_[timestamp].sql

# Restore
npm run db:restore backup_20260701.sql
```

## Next Steps

1. **Setup replication** for production DB
2. **Index optimization** for query performance
3. **Partitioning** for large tables (emails, audit_logs)
4. **Read replicas** for analytics queries

---

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development workflow.
