// Knex Configuration - Database Setup
//
// What is Knex?
// Knex is a tool that helps manage your database:
// 1. Migrations (step-by-step schema changes)
// 2. Seeds (pre-populate test data)
// 3. Query building (type-safe database queries)
//
// This file tells Knex how to connect to your database.

import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',  // PostgreSQL database
    connection: process.env.DATABASE_URL || 'postgresql://cybervet:dev_password@localhost:5432/cybervet_dev',
    migrations: {
      directory: './database/migrations',
      extension: 'ts',
    },
    seeds: {
      directory: './database/seeds',
      extension: 'ts',
    },
  },
  
  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
      extension: 'ts',
    },
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
      extension: 'ts',
    },
    pool: {
      min: 5,
      max: 20,
    },
  },
};

module.exports = config;
