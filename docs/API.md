# API Documentation: Kisan Sahayak AI

## Authentication Endpoints (`/api/v1/auth`)

### `POST /api/v1/auth/register`
Creates a new farmer user account.

**Request Body:**
```json
{
  "email": "farmer@example.com",
  "password": "StrongPassword123",
  "full_name": "Muhammad Ali",
  "region": "Punjab"
}
```

### `POST /api/v1/auth/login`
Obtains a JWT Access Token.

---

## Crop Diagnostic Endpoints (`/api/v1/crops`)

### `POST /api/v1/crops/diagnose`
Submits a leaf photo or crop parameters for Vision Transformer & LangGraph Diagnosis.

**Form Data:**
- `crop_name`: (string) e.g., "Gandum (Wheat)"
- `language`: (string) "Urdu" | "Roman Urdu" | "English"
- `image`: (file) Multipart image binary

**Response (200 OK):**
```json
{
  "id": 1,
  "crop_name": "Gandum (Wheat)",
  "disease_detected": "Yellow Rust (Puccinia striiformis)",
  "confidence_score": 96.8,
  "treatment_recommendation": "Spray Propiconazole 25% EC at 200 ml/acre...",
  "language_used": "Urdu",
  "created_at": "2026-08-11T22:00:00Z"
}
```
