import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CropExplanation = ({ cropData, predictedCrop }) => {
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE_URL = "https://cropsmart-3xn0.onrender.com";
    const fetchExplanation = async () => {
      try {
        const response =await axios.post(`${API_BASE_URL}/explain_crop`,  {
            N: cropData.nitrogen,
            P: cropData.phosphorus,
            K: cropData.potassium,
            temperature: cropData.temperature,
            humidity: cropData.humidity,
            ph: cropData.ph,
            rainfall: cropData.rainfall,
            crop: predictedCrop, // ✅ correct key for backend
          });
          
        setExplanation(response.data.explanation);
      } catch (error) {
        setExplanation("Sorry, couldn't fetch explanation.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExplanation();
  }, [cropData, predictedCrop]);

  return (
    <div className="mt-4 p-3 bg-white rounded shadow-sm">
      <h5 className="text-success">Why {predictedCrop}?</h5>
      {loading ? (
        <p className="text-muted">Generating explanation...</p>
      ) : (
        <p>{explanation}</p>
      )}
    </div>
  );
};

export default CropExplanation;
