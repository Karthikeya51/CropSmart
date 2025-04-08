import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Smart Farming with <span className="text-success">Precision Agriculture</span></h1>
            <p className="lead text-muted mt-3">
              Get personalized crop recommendations based on soil composition and weather conditions. Make data-driven decisions for better yields.
            </p>
            <Link to="/form" className="btn btn-success btn-lg mt-3" title="Start Crop Recommendation">
  Get Started <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
</Link>

          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80"
              alt="Farming"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-5 border-top">
        <div className="container text-center">
          <h5 className="text-success text-uppercase">Features</h5>
          <h2 className="fw-bold mb-5">Smart Farming Made Simple</h2>
          <div className="row">
            {[
              {
                title: 'Data-Driven Decisions',
                description: 'Make informed choices based on soil composition and weather patterns.',
              },
              {
                title: 'Precision Agriculture',
                description: 'Get specific recommendations tailored to your farming conditions.',
              },
              {
                title: 'Improved Yield',
                description: 'Optimize your crop selection for better agricultural output.',
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-text text-muted">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
