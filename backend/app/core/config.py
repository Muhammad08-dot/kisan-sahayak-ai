"""
Application Configuration and Settings Schema
Powered by Pydantic v2 Settings Management
"""
from typing import List, Optional
from pydantic import AnyHttpUrl
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Kisan Sahayak AI"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    # Security
    SECRET_KEY: str = "dev_secret_key_change_in_production_998877"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:8000"]
    
    # Database Settings
    DATABASE_URL: str = "postgresql+asyncpg://kisan:kisan_secret_123@localhost:5432/kisan_db"
    REDIS_URL: str = "redis://localhost:6379/0"
    QDRANT_URL: str = "http://localhost:6333"
    
    # AI & LangChain
    OPENAI_API_KEY: Optional[str] = None
    LANGCHAIN_TRACING_V2: str = "false"
    LANGCHAIN_API_KEY: Optional[str] = None
    LANGCHAIN_PROJECT: str = "kisan-sahayak-ai"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )


settings = Settings()
