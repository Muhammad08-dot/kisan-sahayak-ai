# Architecture Documentation: Kisan Sahayak AI

## Overview
Kisan Sahayak AI is built as a microservice-ready modular monolith featuring an async FastAPI backend, a LangGraph Multi-Agent workflow system, a Qdrant Vector Store for Agricultural RAG, and a Next.js 15 SSR frontend.

## Data Flow Diagram

```
User Leaf Upload / Query
         │
         ▼
+─────────────────+      Async API Call      +─────────────────+
|   Next.js 15    | ───────────────────────> |  FastAPI Async  |
| Frontend Client |                          |   App Server    |
+─────────────────+                          +────────┬────────+
                                                      │
                                                      ▼
                                             +─────────────────+
                                             | LangGraph State |
                                             |  Workflow Graph |
                                             +────────┬────────+
                                                      │
                       ┌──────────────────────────────┼──────────────────────────────┐
                       │                              │                              │
                       ▼                              ▼                              ▼
             +──────────────────+           +──────────────────+           +──────────────────+
             | Vision Model     |           | Qdrant Vector DB |           | PostgreSQL DB    |
             | (ViT Disease)    |           | (Agri Knowledge) |           | (User Diagnostic)|
             +──────────────────+           +──────────────────+           +──────────────────+
```

## Security & Observability
- **Authentication:** OAuth2 with Password Bearer Tokens (JWT).
- **Monitoring:** Prometheus FastAPI Instrumentator exposing `/metrics` scraped by Prometheus.
- **LLM Tracing:** LangSmith integration for evaluating LLM agent latency and token expenditure.
