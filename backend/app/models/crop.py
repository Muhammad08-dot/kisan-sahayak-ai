"""
SQLAlchemy Models for Crop Diagnostics and Advisory Records
"""
from datetime import datetime, timezone
from sqlalchemy import String, DateTime, Integer, Float, Text, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column
from app.models.user import Base


class CropDiagnostic(Base):
    __tablename__ = "crop_diagnostics"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), nullable=False)
    crop_name: Mapped[str] = mapped_column(String(100), nullable=False)
    disease_detected: Mapped[str] = mapped_column(String(200), nullable=False)
    confidence_score: Mapped[float] = mapped_column(Float, nullable=False)
    treatment_recommendation: Mapped[str] = mapped_column(Text, nullable=False)
    image_url: Mapped[str] = mapped_column(String(500), nullable=True)
    language_used: Mapped[str] = mapped_column(String(20), default="Urdu")
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
