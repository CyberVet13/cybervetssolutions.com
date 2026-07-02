/**
 * Seed Data - Sample data for development
 * 
 * What is a seed?
 * A seed populates your database with test data so you have something to work with.
 * 
 * This creates:
 * - 3 sample agents
 * - 10 sample leads
 * 
 * To run this:
 * npm run seed
 * 
 * Then check database:
 * SELECT * FROM agents;
 * SELECT * FROM leads;
 */

import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // First, delete existing data (so we don't get duplicates)
  await knex('leads').del();
  await knex('agents').del();

  // Insert sample agents
  const agents = await knex('agents').insert([
    {
      id: 1,
      email: 'alice@example.com',
      name: 'Alice Johnson',
      phone: '555-0001',
      mls_number: 'MLS123456',
      settings: { language: 'en', timezone: 'America/Los_Angeles' },
    },
    {
      id: 2,
      email: 'bob@example.com',
      name: 'Bob Smith',
      phone: '555-0002',
      mls_number: 'MLS789012',
      settings: { language: 'en', timezone: 'America/New_York' },
    },
    {
      id: 3,
      email: 'carol@example.com',
      name: 'Carol Davis',
      phone: '555-0003',
      mls_number: 'MLS345678',
      settings: { language: 'en', timezone: 'America/Chicago' },
    },
  ]);

  console.log('✅ Created 3 sample agents');

  // Insert sample leads
  await knex('leads').insert([
    {
      agent_id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '555-1001',
      budget: 500000,
      location: 'San Francisco, CA',
      property_type: 'Single Family',
      timeline: 'urgent',
      qualification_score: 0.85,
      status: 'qualified',
      source: 'website',
      notes: 'First-time buyer, pre-approved for $500k',
    },
    {
      agent_id: 1,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '555-1002',
      budget: 750000,
      location: 'Palo Alto, CA',
      property_type: 'Condo',
      timeline: '3 months',
      qualification_score: 0.92,
      status: 'contacted',
      source: 'referral',
      notes: 'Tech worker, looking for investment property',
    },
    {
      agent_id: 2,
      name: 'Mike Brown',
      email: 'mike@example.com',
      phone: '555-1003',
      budget: 300000,
      location: 'Austin, TX',
      property_type: 'Multi-Family',
      timeline: '6 months',
      qualification_score: 0.65,
      status: 'new',
      source: 'cold call',
      notes: 'Investor looking at duplexes',
    },
    {
      agent_id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '555-1004',
      budget: 600000,
      location: 'Denver, CO',
      property_type: 'Single Family',
      timeline: 'urgent',
      qualification_score: 0.78,
      status: 'qualified',
      source: 'website',
      notes: 'Relocating for job, needs quick close',
    },
    {
      agent_id: 3,
      name: 'Robert Taylor',
      email: 'robert@example.com',
      phone: '555-1005',
      budget: 1200000,
      location: 'New York, NY',
      property_type: 'Condo',
      timeline: '2 months',
      qualification_score: 0.88,
      status: 'contacted',
      source: 'referral',
      notes: 'High-net-worth individual, needs premium property',
    },
    {
      agent_id: 3,
      name: 'Lisa Anderson',
      email: 'lisa@example.com',
      phone: '555-1006',
      budget: 450000,
      location: 'Boston, MA',
      property_type: 'Single Family',
      timeline: '4 months',
      qualification_score: 0.71,
      status: 'new',
      source: 'website',
      notes: 'First-time buyer, needs education on process',
    },
  ]);

  console.log('✅ Created 6 sample leads');
  console.log('💡 Run this query to see data: SELECT * FROM leads;');
}
