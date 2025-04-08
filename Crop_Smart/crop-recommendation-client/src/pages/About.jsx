import React from 'react';
import { Brain, Database, LineChart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="container text-center">
        <h2 className="text-success text-uppercase fw-bold">About Us</h2>
        <h3 className="mt-3 fw-bold">Intelligent Crop Recommendation</h3>
        <p className="lead text-muted mt-3">
          A machine learning-based system that recommends the best crop using soil nutrients and weather inputs.
        </p>

        <div className="row mt-5">
          {/* Data Collection */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-start text-start">
              <div className="bg-success text-white rounded-circle p-3 me-3">
                <Database size={24} aria-hidden="true" />
              </div>
              <div>
                <h5 className="fw-bold">Data Collection</h5>
                <p className="text-muted">
                  We analyze soil composition, including N, P, K values, pH levels, and local weather conditions.
                </p>
              </div>
            </div>
          </div>

          {/* ML Processing */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-start text-start">
              <div className="bg-success text-white rounded-circle p-3 me-3">
                <Brain size={24} aria-hidden="true" />
              </div>
              <div>
                <h5 className="fw-bold">ML Processing</h5>
                <p className="text-muted">
                  Our advanced machine learning algorithms process the data to determine optimal crop choices.
                </p>
              </div>
            </div>
          </div>

          {/* Results Analysis */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-start text-start">
              <div className="bg-success text-white rounded-circle p-3 me-3">
                <LineChart size={24} aria-hidden="true" />
              </div>
              <div>
                <h5 className="fw-bold">Results Analysis</h5>
                <p className="text-muted">
                  Get detailed recommendations and insights for better agricultural decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-5 px-md-5">
          <h4 className="fw-bold">Our Mission</h4>
          <p className="text-muted fs-5">
            We aim to empower farmers with data-driven insights to optimize crop selection and improve agricultural
            productivity while promoting sustainable farming practices.
          </p>
        </div>
      </div>
    </div>
  );
}
