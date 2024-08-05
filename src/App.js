import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
// Importe les autres composants ici
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
// Ajoute ici les nouvelles pages si nécessaire
import ContactPage from './pages/ContactPage'; // Exemple

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        {/* Ajoute d'autres routes ici */}
        <Route path="/contact" element={<ContactPage />} /> {/* Exemple */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
