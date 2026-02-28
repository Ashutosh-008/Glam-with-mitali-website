from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import Booking, BookingCreate
from typing import List


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Routes
@api_router.get("/")
async def root():
    return {"message": "Blush with Mitali - Booking API"}


@api_router.post("/bookings", response_model=Booking)
async def create_booking(booking_data: BookingCreate):
    """
    Create a new booking inquiry
    """
    try:
        # Create booking object
        booking = Booking(**booking_data.model_dump())
        
        # Convert to dict and serialize datetime for MongoDB
        doc = booking.model_dump()
        doc['createdAt'] = doc['createdAt'].isoformat()
        
        # Insert into MongoDB
        result = await db.bookings.insert_one(doc)
        
        # Log the booking for admin notification
        logging.info(f"New booking from {booking.name} ({booking.email}) for {booking.serviceRequired} on {booking.eventDate}")
        
        return booking
        
    except Exception as e:
        logging.error(f"Error creating booking: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create booking")


@api_router.get("/bookings", response_model=List[Booking])
async def get_bookings():
    """
    Get all bookings (for admin use)
    """
    try:
        bookings = await db.bookings.find({}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for booking in bookings:
            if isinstance(booking['createdAt'], str):
                from datetime import datetime
                booking['createdAt'] = datetime.fromisoformat(booking['createdAt'])
        
        return bookings
    except Exception as e:
        logging.error(f"Error fetching bookings: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch bookings")


@api_router.get("/bookings/{booking_id}", response_model=Booking)
async def get_booking(booking_id: str):
    """
    Get a specific booking by ID
    """
    booking = await db.bookings.find_one({"id": booking_id}, {"_id": 0})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    # Convert ISO string timestamp back to datetime
    if isinstance(booking['createdAt'], str):
        from datetime import datetime
        booking['createdAt'] = datetime.fromisoformat(booking['createdAt'])
    
    return booking


@api_router.patch("/bookings/{booking_id}/status")
async def update_booking_status(booking_id: str, status: str):
    """
    Update booking status (for admin use)
    """
    valid_statuses = ["pending", "contacted", "booked", "cancelled"]
    if status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {valid_statuses}")
    
    result = await db.bookings.update_one(
        {"id": booking_id},
        {"$set": {"status": status}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    return {"message": "Status updated successfully"}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
