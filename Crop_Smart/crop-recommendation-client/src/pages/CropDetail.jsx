

import React, { useState } from 'react';
import axios from 'axios';
import './CropDetail.css';

export default function CropDetail() {
  const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
  const [cropName, setCropName] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchDetails = async () => {
    setLoading(true);
    setError('');
    setResult('');

    try {
const response = await axios.post(`${API_BASE_URL}/gemini`, {
        crop_name: cropName,
      });

      let cleanText = response.data.result
        .replace(/^```html\s*/i, '')
        .replace(/```$/, '')
        .trim();

      setResult(cleanText);
    } catch (err) {
      setError('Failed to fetch details. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const isFallback = result.toLowerCase().includes('is not a recognized crop');

  // Optional: Only show from valid crop section onward
  const extractValidCropInfo = (text) => {
    const match = text.match(/([A-Z][a-z]+\s\([A-Za-z\s]+\))/);
    if (match) {
      return text.slice(text.indexOf(match[0])).trim();
    }
    return text;
  };

    // Helper to detect fictional responses
    const isFictional = result.toLowerCase().includes("fictional research") || result.toLowerCase().includes("not a recognized crop");

    // Optionally prevent showing fictional info
    const displayResult = !isFictional
    ? extractValidCropInfo(result)
    : '';


  return (
    <div className="container my-5 min-vh-100">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Explore Detailed Crop Information</h2>
        <p className="text-muted fs-5">
          Search for any crop or vegetable and get in-depth insights powered by Gemini AI
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group shadow-sm rounded border">
            <input
              type="text"
              value={cropName}
              onChange={(e) => setCropName(e.target.value)}
              className="form-control border-0 py-3"
              placeholder="e.g., Rice, Tomato, Wheat..."
            />
            <button className="btn btn-success px-4" onClick={handleFetchDetails}>
              Search
            </button>
          </div>

          {loading && (
            <div className="alert alert-info mt-4 text-center" role="alert">
              Fetching data from Gemini...
            </div>
          )}

          {error && (
            <div className="alert alert-danger mt-4 text-center" role="alert">
              {error}
            </div>
          )}

            {result && (
            <div className="mt-4">
                <h4 className="mb-4">
                🌱 Details about <strong>{cropName}</strong>
                </h4>

                {isFictional ? (
                <div className="alert alert-warning text-center">
                    <strong>{cropName}</strong> does not seem to be a real crop or vegetable. Please check the spelling or try another one.
                </div>
                ) : (
                <div className="card p-4 shadow-sm border-0">
                    <div
                    className="crop-details"
                    dangerouslySetInnerHTML={{ __html: displayResult }}
                    />
                </div>
                )}
            </div>
            )}

        </div>
      </div>
    </div>
  );
}

