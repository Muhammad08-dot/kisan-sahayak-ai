"""
API v1 Router Registration
"""
from fastapi import APIRouter
from app.api.v1.endpoints import auth, crop_disease

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(crop_disease.router, prefix="/crops", tags=["crops"])
