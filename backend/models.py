from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional
from datetime import datetime, timezone
import uuid


class BookingCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    eventDate: str
    serviceRequired: str
    message: Optional[str] = None


class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    eventDate: str
    serviceRequired: str
    message: Optional[str] = None
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "pending"  # pending, contacted, booked, cancelled
