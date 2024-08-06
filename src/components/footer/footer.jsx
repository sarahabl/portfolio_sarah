// src/components/footer/footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <Link to="/services/product-design" className="footer-link">Product Design</Link>
          <Link to="/services/design-system" className="footer-link">Design System</Link>
          <Link to="/services/facilitation" className="footer-link">Facilitation</Link>
          <Link to="/services/site-internet" className="footer-link">Site Internet</Link>
          <Link to="/services/branding" className="footer-link">Branding</Link>
        </div>
        <div className="footer-column">
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
          <Link to="/about" className="footer-link">À propos</Link>
        </div>
        <div className="footer-column">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://www.tenors.com" target="_blank" rel="noopener noreferrer" className="footer-link">Tenors</a>
          <a href="https://www.malt.com" target="_blank" rel="noopener noreferrer" className="footer-link">Malt</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
