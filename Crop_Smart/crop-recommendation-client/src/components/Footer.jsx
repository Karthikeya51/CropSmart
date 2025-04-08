import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light border-top py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 text-muted">
          © 2025 <strong>Crop Recommender System</strong>. All rights reserved.
        </p>

        <div className="d-flex align-items-center gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
            style={{ textDecoration: 'none' }}
          >
            <i className="bi bi-github" style={{ fontSize: '1.25rem' }}></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
            style={{ textDecoration: 'none' }}
          >
            <i className="bi bi-linkedin" style={{ fontSize: '1.25rem' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
