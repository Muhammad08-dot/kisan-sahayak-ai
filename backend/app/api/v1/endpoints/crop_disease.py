"""
Crop Disease Diagnosis Endpoints Powered by Vision Transformer and LangGraph
"""
from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.agents.agri_expert_agent import agri_agent_graph
from app.models.crop import CropDiagnostic
from app.schemas.crop import CropDiagnosisResponse

router = APIRouter()


@router.post("/diagnose", response_model=CropDiagnosisResponse)
async def diagnose_crop_disease(
    crop_name: str = Form(...),
    language: str = Form("Urdu"),
    image: UploadFile = File(None),
    db: AsyncSession = Depends(get_db)
):
    image_bytes = await image.read() if image else b"placeholder_bytes"
    
    # Run LangGraph State Graph Workflow
    initial_state = {
        "user_query": f"Diagnose disease for {crop_name}",
        "image_bytes": image_bytes,
        "detected_disease": "",
        "confidence": 0.0,
        "treatment_plan": "",
        "language": language,
        "final_response": ""
    }
    
    result = agri_agent_graph.invoke(initial_state)

    # Save to Database
    record = CropDiagnostic(
        user_id=1,  # Mock current user for demo
        crop_name=crop_name,
        disease_detected=result["detected_disease"],
        confidence_score=result["confidence"],
        treatment_recommendation=result["final_response"],
        language_used=language
    )
    db.add(record)
    await db.commit()
    await db.refresh(record)

    return record
