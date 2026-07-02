/**
 * Database Migration: Create Initial Schema
 * 
 * What is a migration?
 * A migration is a step-by-step instruction for building your database.
 * Migrations help teams stay in sync (everyone has same schema).
 * 
 * This migration creates these tables:
 * - agents (real estate agents)
 * - leads (potential clients)
 * - emails (email send history)
 * - audit_logs (who changed what)
 * 
 * To run this:
 * npm run migrate
 * 
 * To rollback (undo):
 * npm run migrate:rollback
 */

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Create agents table
  // An agent is a real estate professional using our app
  await knex.schema.createTable('agents', (table) => {
    table.increments('id').primary(); // Auto-incrementing ID (1, 2, 3...)
    table.string('email').unique().notNullable(); // Email must be unique
    table.string('name').notNullable(); // Agent's name
    table.string('phone'); // Phone number (optional)
    table.string('mls_number').unique(); // MLS identification
    table.json('settings').defaultTo('{}'); // Custom settings (stored as JSON)
    table.timestamps(true, true); // created_at and updated_at columns
  });

  // Create leads table
  // A lead is a potential client (person interested in real estate)
  await knex.schema.createTable('leads', (table) => {
    table.increments('id').primary();
    table.integer('agent_id').unsigned().notNullable(); // Which agent owns this lead
    table.string('name').notNullable(); // Lead's name
    table.string('email'); // Lead's email (optional)
    table.string('phone'); // Lead's phone (optional)
    table.integer('budget'); // Budget in dollars (optional)
    table.string('location'); // City/location interested in
    table.string('property_type'); // Single family, condo, multi-unit, etc.
    table.string('timeline'); // When they want to buy/sell (urgent, 3mo, 6mo, etc.)
    table.decimal('qualification_score', 3, 2).defaultTo(0); // AI qualification (0.0 to 1.0)
    table.string('status').defaultTo('new'); // new, contacted, qualified, closed, etc.
    table.string('source'); // Where lead came from (website, referral, cold call, etc.)
    table.text('notes'); // Agent's notes
    table.timestamps(true, true);

    // Foreign key: lead.agent_id must exist in agents.id
    table.foreign('agent_id').references('agents.id').onDelete('CASCADE');
    
    // Index for faster queries
    table.index('agent_id');
    table.index('status');
    table.index('qualification_score');
  });

  // Create emails table
  // Track every email sent to leads (for engagement tracking)
  await knex.schema.createTable('emails', (table) => {
    table.increments('id').primary();
    table.integer('lead_id').unsigned().notNullable(); // Which lead received email
    table.integer('agent_id').unsigned().notNullable(); // Which agent sent email
    table.string('subject').notNullable(); // Email subject line
    table.text('body').notNullable(); // Email body/content
    table.string('template_name'); // Which template was used (follow_up, open_house, etc.)
    table.timestamp('sent_at'); // When email was sent
    table.timestamp('opened_at'); // When email was opened (if tracked)
    table.timestamp('clicked_at'); // When link was clicked (if tracked)
    table.string('status').defaultTo('pending'); // pending, sent, failed, bounced
    table.text('error_message'); // If failed, what went wrong
    table.timestamps(true, true);

    // Foreign keys
    table.foreign('lead_id').references('leads.id').onDelete('CASCADE');
    table.foreign('agent_id').references('agents.id').onDelete('CASCADE');
    
    // Indexes for faster queries
    table.index(['lead_id', 'sent_at']);
    table.index('status');
  });

  // Create audit_logs table
  // Track all important changes (who deleted what, when)
  // Required for compliance (GDPR, etc.)
  await knex.schema.createTable('audit_logs', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned(); // Which agent made the change (optional, for system actions)
    table.string('action').notNullable(); // create, update, delete, export, etc.
    table.string('resource').notNullable(); // leads, emails, agents, etc.
    table.integer('resource_id'); // ID of the resource that changed
    table.json('changes'); // What changed (old vs new values)
    table.string('ip_address'); // IP address that made the change
    table.timestamps(true, true);

    // Index for fast queries
    table.index('resource');
    table.index('created_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  // Delete tables in reverse order (because of foreign keys)
  await knex.schema.dropTableIfExists('audit_logs');
  await knex.schema.dropTableIfExists('emails');
  await knex.schema.dropTableIfExists('leads');
  await knex.schema.dropTableIfExists('agents');
}
