"""
Pydantic v2 Schemas for Crop Diagnostics and Advisory Inputs/Outputs
"""
from typing import Optional
from datetime import datetime
from pydantic import BaseModel


class CropDiagnosisRequest(BaseModel):
    crop_name: str
    language: Optional[str] = "Urdu"
    user_notes: Optional[str] = None


class CropDiagnosisResponse(BaseModel):
    id: int
    crop_name: str
    disease_detected: str
    confidence_score: float
    treatment_recommendation: str
    language_used: str
    created_at: datetime

    class Config:
        from_attributes = True


class WeatherIrrigationRequest(BaseModel):
    location: str = "Faisalabad"
    crop: str = "Wheat"
    soil_type: str = "Loamy"


class WeatherIrrigationResponse(BaseModel):
    location: str
    recommendation: str
    precipitation_chance: str
    next_irrigation_days: int
