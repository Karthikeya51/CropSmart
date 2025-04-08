
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Info, Grid, FileSpreadsheet, Menu } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active text-success' : 'nav-link text-dark';
  };

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Sprout className="me-2 text-success" />
          <span className="fw-semibold">CropSmart</span>
        </Link>

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={isActive('/')} to="/" onClick={() => setIsCollapsed(true)}>
                <Sprout size={18} className="me-1" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/about')} to="/about" onClick={() => setIsCollapsed(true)}>
                <Info size={18} className="me-1" />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/products')} to="/products" onClick={() => setIsCollapsed(true)}>
                <Grid size={18} className="me-1" />
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/form')} to="/form" onClick={() => setIsCollapsed(true)}>
                <FileSpreadsheet size={18} className="me-1" />
                Crop Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/info')} to="/info" onClick={() => setIsCollapsed(true)}>
              <Info size={18} className="me-1" />
                Crop Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

