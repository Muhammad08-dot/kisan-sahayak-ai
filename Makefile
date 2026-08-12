.PHONY: help build up down dev test lint clean

help:
	@echo "Kisan Sahayak AI Development Commands:"
	@echo "  make dev      - Start full stack in dev mode with Docker Compose"
	@echo "  make build    - Build all container images"
	@echo "  make up       - Start production containers"
	@echo "  make down     - Stop and remove containers"
	@echo "  make test     - Run backend and frontend test suites"
	@echo "  make lint     - Run linters for Python and TypeScript"
	@echo "  make clean    - Remove build artifacts and temporary files"

dev:
	docker compose -f infrastructure/docker/docker-compose.dev.yml up --build

build:
	docker compose -f infrastructure/docker/docker-compose.yml build

up:
	docker compose -f infrastructure/docker/docker-compose.yml up -d

down:
	docker compose -f infrastructure/docker/docker-compose.yml down -v

test:
	cd backend && pytest tests/ -v --cov=app
	cd frontend && npm test

lint:
	cd backend && ruff check . && mypy app
	cd frontend && npm run lint

clean:
	find . -type d -name "__pycache__" -exec rm -r {} +
	find . -type d -name ".pytest_cache" -exec rm -r {} +
	find . -type d -name ".next" -exec rm -r {} +
	find . -type d -name "node_modules" -exec rm -r {} +
