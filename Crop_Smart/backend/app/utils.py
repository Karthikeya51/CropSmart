
import numpy as np
import pickle
import os

# Define paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "models", "crop_model.pkl")
SCALER_PATH = os.path.join(BASE_DIR, "models", "scaler.pkl")
ENCODER_PATH = os.path.join(BASE_DIR, "models", "label_encoder.pkl")

# Load model
with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

# Load scaler
with open(SCALER_PATH, "rb") as f:
    scaler = pickle.load(f)

# Load label encoder
with open(ENCODER_PATH, "rb") as f:
    label_encoder = pickle.load(f)

# Main prediction function
def predict_crop(data: dict) -> str:
    """
    data: dict with keys - N, P, K, temperature, humidity, ph, rainfall
    returns: str (predicted crop name)
    """
    features = np.array([[data["N"], data["P"], data["K"],
                          data["temperature"], data["humidity"],
                          data["ph"], data["rainfall"]]])
    
    # Scale input
    scaled = scaler.transform(features)

    # Predict
    prediction = model.predict(scaled)

    # Decode label
    crop_name = label_encoder.inverse_transform(prediction)[0]

    return crop_name
