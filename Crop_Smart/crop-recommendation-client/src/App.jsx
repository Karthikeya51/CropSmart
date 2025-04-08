import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recommend from './pages/Recommend';
import Products from './pages/Products';
import About from './pages/About';
import CropForm from './components/CropForm';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CropDetail from './pages/CropDetail';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<CropForm />} />
          <Route path="/info" element={<CropDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
