import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navv from './component/Navv';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navv />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pages/about' element={<AboutPage />} />
        <Route path='/pages/services' element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
