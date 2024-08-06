// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

// Import des pages de services
import Branding from './pages/services/Branding';
import DesignSystem from './pages/services/DesignSystem';
import Facilitation from './pages/services/Facilitation';
import ProductDesign from './pages/services/ProductDesign';
import SiteInternet from './pages/services/SiteInternet';

// Import des pages de portfolio
import Bodachella from './pages/portfolio/Bodachella';
import MethodeE2R from './pages/portfolio/MethodeE2R';
import Talia from './pages/portfolio/Talia';
import Wenabi from './pages/portfolio/Wenabi';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        {/* Routes pour les services */}
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/design-system" element={<DesignSystem />} />
        <Route path="/services/facilitation" element={<Facilitation />} />
        <Route path="/services/product-design" element={<ProductDesign />} />
        <Route path="/services/site-internet" element={<SiteInternet />} />
        {/* Routes pour les projets de portfolio */}
        <Route path="/portfolio/bodachella" element={<Bodachella />} />
        <Route path="/portfolio/methode-e2r" element={<MethodeE2R />} />
        <Route path="/portfolio/talia" element={<Talia />} />
        <Route path="/portfolio/wenabi" element={<Wenabi />} />
        {/* Supprimer la ligne suivante qui référence ContactPage */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
