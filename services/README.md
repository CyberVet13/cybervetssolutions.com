# Microservices — Python FastAPI

Specialized services for ML-based lead scoring, market analysis, and email generation.

## Services Overview

### 1. lead-scorer
ML-based lead qualification (predicts likelihood to convert)

```bash
cd lead-scorer
python -m pip install -r requirements.txt
python main.py
# http://localhost:8001/docs (API docs)
```

**API Endpoints:**
- `POST /score` — Score a single lead
- `POST /score/batch` — Score multiple leads
- `GET /model/info` — Model metadata + version

**Input:**
```json
{
  "budget": 500000,
  "location": "San Francisco, CA",
  "property_type": "single_family",
  "timeline": "urgent"
}
```

**Output:**
```json
{
  "score": 0.87,
  "confidence": 0.92,
  "reasoning": ["High budget", "Urgent timeline"],
  "model_version": "v1.2.0"
}
```

### 2. comp-analyzer
Comparable market analysis (find similar properties for valuation)

```bash
cd comp-analyzer
python main.py
# http://localhost:8002/docs
```

**API Endpoints:**
- `POST /comps` — Find comparable properties
- `POST /valuation` — Estimate property value
- `GET /market-trends` — Market trend analysis

### 3. nlp-email
Email template generation + personalization

```bash
cd nlp-email
python main.py
# http://localhost:8003/docs
```

**API Endpoints:**
- `POST /generate` — Generate personalized email
- `POST /templates/list` — List available templates
- `POST /validate` — Check email for spam triggers

## Project Structure

```
service-name/
├── Dockerfile           # Container definition
├── requirements.txt     # Python dependencies
├── main.py              # FastAPI app entry
├── Makefile             # Build, test, run commands
│
├── app/
│   ├── api.py          # FastAPI routes
│   └── models.py       # Pydantic request/response models
│
├── service/            # Business logic
│   ├── __init__.py
│   └── engine.py       # Core algorithm
│
├── data/               # Models, configuration
│   ├── models/         # Trained ML models (.pkl, .h5)
│   └── config.json     # Service configuration
│
└── tests/
    ├── test_api.py
    └── test_service.py
```

## Common Commands

```bash
# Development
make dev                 # Start dev server
make test               # Run tests
make lint               # Check code style

# Production
make build              # Build Docker image
make run                # Run container
make push               # Push to registry

# Utilities
make shell              # Python REPL with app context
make logs               # View service logs
```

## Environment Setup

Create `.env`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/cybervet
MLS_API_KEY=your_key
LOG_LEVEL=INFO
MODEL_PATH=/data/models/lead-scorer-v1.pkl
```

## Testing

```python
# tests/test_service.py
import pytest
from app.api import app
from fastapi.testclient import TestClient

client = TestClient(app)

def test_score_lead():
    response = client.post("/score", json={
        "budget": 500000,
        "location": "SF",
        "property_type": "single_family"
    })
    assert response.status_code == 200
    assert "score" in response.json()
```

## Docker Compose (Local Development)

```bash
# Root directory
docker-compose -f services/docker-compose.yml up

# Runs all services + PostgreSQL + Redis
# lead-scorer:   http://localhost:8001
# comp-analyzer: http://localhost:8002
# nlp-email:     http://localhost:8003
```

## Integration with Backend

```typescript
// backend/services/leadService.ts
async function scoreLead(lead: Lead) {
  const response = await axios.post('http://lead-scorer:8001/score', lead);
  return response.data;
}
```

## Next Steps

1. **Deploy services to Kubernetes** (see `/kubernetes`)
2. **Setup monitoring** (Prometheus, Grafana)
3. **Add request queuing** (Bull/Celery for async work)
4. **Version management** for ML models

---

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development workflow.
