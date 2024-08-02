import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/buttons';
import logo from '../../assets/logo.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import './navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">À propos</Link>
        <a href="https://www.linkedin.com/in/sarah-ablonet/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="navbar-icon" />
        </a>
      </div>
      <Button text="Contact" className="navbar-button" onClick={() => alert('Contactez-moi!')} />
    </nav>
  );
};

export default NavBar;
