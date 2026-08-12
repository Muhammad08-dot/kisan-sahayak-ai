"""
Unit Tests for Crop Diagnostic Workflow & LangGraph Agent Nodes
"""
import pytest
from app.agents.agri_expert_agent import vision_diagnosis_node, rag_knowledge_node


def test_vision_diagnosis_node():
    state = {
        "user_query": "Diagnose wheat leaf",
        "image_bytes": b"test",
        "detected_disease": "",
        "confidence": 0.0,
        "treatment_plan": "",
        "language": "Urdu",
        "final_response": ""
    }
    result = vision_diagnosis_node(state)
    assert result["detected_disease"] == "Yellow Rust (Puccinia striiformis)"
    assert result["confidence"] > 90.0


def test_rag_knowledge_node():
    state = {
        "detected_disease": "Yellow Rust",
        "treatment_plan": ""
    }
    result = rag_knowledge_node(state)
    assert "Propiconazole" in result["treatment_plan"]
