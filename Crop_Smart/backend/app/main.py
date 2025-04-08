import google.generativeai as genai
from fastapi import FastAPI,Request
from pydantic import BaseModel
from app.utils import predict_crop
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# ✅ Create FastAPI app only once
app = FastAPI(title="🌾 Crop Recommendation API")

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash")


# ✅ Add CORS middleware to the existing app instance
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Define input data model
class CropInput(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

# ✅ Welcome route
@app.get("/")
def read_root():
    return {"message": "Welcome to the Crop Recommendation API 🌱"}

# ✅ Prediction route
@app.post("/predict")
def get_crop_recommendation(input: CropInput):
    data = input.dict()
    result = predict_crop(data)
    return {"recommended_crop": result}

class ExplainInput(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float
    crop: str  # ✅ changed from predicted_crop to crop


@app.post("/explain_crop")
async def explain_crop(data: ExplainInput):
    prompt = f"""
You are an expert in agriculture and crop science. 
Given the following soil and environmental data, and the recommended crop, write a concise, beginner-friendly explanation in a fun and clear tone.

Data:
- Nitrogen: {data.N}
- Phosphorus: {data.P}
- Potassium: {data.K}
- Temperature: {data.temperature}°C
- Humidity: {data.humidity}%
- pH: {data.ph}
- Rainfall: {data.rainfall}mm

Recommended Crop: {data.crop}

Your explanation should:
- Be short (under 150 words)
- Use simple language
- Use bullet points if helpful
- Optionally include light emojis to make it more engaging
- End with a positive summary (e.g., "This makes {data.crop} a great fit!")

Avoid sounding too formal or academic.
"""
    try:
        response = model.generate_content(prompt)
        return {"explanation": response.text}
    except Exception as e:
        return {"error": str(e)}

class CropRequest(BaseModel):
    crop_name: str

@app.post("/gemini")
async def get_crop_info(data: CropRequest):
    crop = data.crop_name
    try:
        prompt = f"""
        Provide a detailed explanation about the crop or vegetable called "{crop}".
        Return the answer in well-formatted HTML. Include sections like:

        - Crop Type and Description
        - Ideal Climate, Soil, Season
        - Water Needs, Pests, Diseases
        - Nutritional Value
        - Major Producing Regions
        - Special Farming Techniques

        Use <h2>, <h3>, <ul>, <li>, <strong>, and <p> where appropriate.
        Keep it visually structured and easy to style.
        """


        response = model.generate_content(prompt)
        return {"result": response.text.strip()}
    except Exception as e:
        return {"error": str(e)}