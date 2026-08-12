# 🌾 Kisan Sahayak AI - Farmer's Production AI Advisor

[![CI/CD Pipeline](https://github.com/Muhammad08-dot/kisan-sahayak-ai/actions/workflows/ci.yml/badge.svg)](https://github.com/Muhammad08-dot/kisan-sahayak-ai/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)

Production-Grade AI Platform providing real-time Crop Disease Diagnosis (Vision Transformer), Multilingual Speech Interaction (Urdu/Roman Urdu Whisper), Weather-Integrated Smart Irrigation, and Market Price Forecasting.

---

## 🏗️ System Architecture

```
                                +-------------------+
                                |   Next.js 15 UI   |
                                +---------+---------+
                                          |
                                    HTTPS / WebSockets
                                          |
                                +---------v---------+
                                |  FastAPI Gateway  |
                                +----+----+----+----+
                                     |    |    |
        +----------------------------+    |    +----------------------------+
        |                                 |                                 |
+-------v-------+                 +-------v-------+                 +-------v-------+
|  PostgreSQL   |                 | Qdrant Vector |                 | Redis Stream  |
|  (App State)  |                 | (Agri RAG DB) |                 | (Cache/Task)  |
+---------------+                 +---------------+                 +---------------+
                                          |
                                +---------v---------+
                                | LangGraph Multi-  |
                                |   Agent Engine    |
                                +-------------------+
```

---

## 🚀 Quick Start (Development)

```bash
# 1. Clone repository
git clone https://github.com/Muhammad08-dot/kisan-sahayak-ai.git
cd kisan-sahayak-ai

# 2. Setup Environment Variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

# 3. Launch Development Cluster with Docker Compose
docker compose -f infrastructure/docker/docker-compose.dev.yml up --build
```

---

## 🧪 Running Tests

```bash
# Backend unit & integration tests
cd backend && pytest tests/ --cov=app

# Frontend unit & E2E tests
cd frontend && npm test && npx playwright test
```

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for details.
