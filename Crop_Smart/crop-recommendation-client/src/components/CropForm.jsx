import React, { useState } from 'react';
import axios from 'axios';
import { Send } from 'lucide-react';
import CropExplanation from './CropExplanation';

export default function CropForm() {
  const [formData, setFormData] = useState({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
    temperature: 0,
    humidity: 0,
    ph: 7,
    rainfall: 0,
  });

  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', {
        N: formData.nitrogen,
        P: formData.phosphorus,
        K: formData.potassium,
        temperature: formData.temperature,
        humidity: formData.humidity,
        ph: formData.ph,
        rainfall: formData.rainfall,
      });

      setResult(response.data.recommended_crop);
    } catch (error) {
      console.error(error);
      setResult('❌ Failed to get recommendation. Please try again.');
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value === '' ? '' : parseFloat(value),
    }));
  };
  

  const inputFields = [
    { id: 'nitrogen', label: 'Nitrogen (N)', min: 0, max: 500 },
    { id: 'phosphorus', label: 'Phosphorus (P)', min: 0, max: 500 },
    { id: 'potassium', label: 'Potassium (K)', min: 0, max: 500 },
    { id: 'temperature', label: 'Temperature (°C)', min: -10, max: 60 },
    { id: 'humidity', label: 'Humidity (%)', min: 0, max: 100 },
    { id: 'ph', label: 'pH Level', min: 0, max: 14 },
    { id: 'rainfall', label: 'Rainfall (mm)', min: 0, max: 1000 },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4 fw-bold">🌿 Crop Recommendation Form</h2>

          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {inputFields.map(({ id, label, min, max }) => (
                    <div
                      className={id === 'rainfall' ? 'col-md-12' : 'col-md-6'}
                      key={id}
                    >
                      <label htmlFor={id} className="form-label">{label}</label>
                      <input
                        type="number"
                        name={id}
                        id={id}
                        step="0.01"
                        required
                        min={min}
                        max={max}
                        className="form-control"
                        value={formData[id]}
                        onChange={handleChange}
                        placeholder={`Enter ${label.toLowerCase()} (${min}–${max})`}
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-success d-inline-flex align-items-center px-4 py-2"
                    disabled={loading}
                  >
                    <Send size={18} className="me-2" />
                    {loading ? 'Processing...' : 'Get Recommendation'}
                  </button>
                </div>
              </form>

              {result && (
                <>
                  <div className="alert alert-success mt-4" role="alert">
                    <h5 className="alert-heading">🌾 Recommended Crop</h5>
                    <p className="mb-0">{result}</p>
                  </div>

                  <CropExplanation cropData={formData} predictedCrop={result} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
