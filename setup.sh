#!/bin/bash

# 📦 One-Command Setup Script
# 
# What does this do?
# Runs all the setup steps automatically so you don't have to type them all.
#
# Usage: chmod +x setup.sh && ./setup.sh

set -e  # Exit if any command fails

echo "🚀 CyberVets Solutions - Automatic Setup"
echo "========================================"
echo ""

# Check prerequisites
echo "✓ Checking prerequisites..."
if ! command -v node &> /dev/null; then
  echo "❌ Node.js not installed. Visit: https://nodejs.org/"
  exit 1
fi
if ! command -v docker &> /dev/null; then
  echo "❌ Docker not installed. Visit: https://docker.com/"
  exit 1
fi
echo "✅ Prerequisites check passed"
echo ""

# Install dependencies
echo "📦 Installing dependencies (this may take a few minutes)..."
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
echo "✅ Dependencies installed"
echo ""

# Start Docker services
echo "🐳 Starting Docker services (PostgreSQL, Redis)..."
docker-compose up -d
echo "✅ Services started (waiting 10s for PostgreSQL to boot...)"
sleep 10
echo ""

# Run migrations
echo "💾 Setting up database..."
cd backend
npm run migrate
npm run seed
cd ..
echo "✅ Database ready with sample data"
echo ""

# Show next steps
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Open 3 terminal windows"
echo "2. Terminal 1: cd frontend && npm run dev"
echo "3. Terminal 2: cd backend && npm run dev"
echo "4. Terminal 3: Keep open for commands"
echo ""
echo "Then visit:"
echo "  • Frontend: http://localhost:3000"
echo "  • Backend:  http://localhost:3001"
echo "  • Database: http://localhost:5050 (pgAdmin)"
echo "  • Cache:    http://localhost:8081 (Redis Commander)"
echo ""
echo "Run tests: npm run test"
echo "Happy coding! 🎉"
