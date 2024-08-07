import './index.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation des styles Bootstrap
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';

// Pages
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



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
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
      </Route>
    </Routes>
  </BrowserRouter>
);
