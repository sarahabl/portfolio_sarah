import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';
import logo from '../../assets/logo.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import barsIcon from '../../assets/bars.svg';
import closeIcon from '../../assets/close.svg'; // Ajoutez une icône de fermeture
import Buttons from '../buttons/buttons.jsx';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  // Fonction pour fermer le menu si on est en mode mobile
  const handleNavClick = () => {
    if (window.innerWidth < 992) {
      setExpanded(false);
    }
  };

  return (
    <Navbar expanded={expanded} expand="lg" className={`custom-navbar ${expanded ? 'expanded' : ''}`}>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        onClick={() => setExpanded(!expanded)}
      >
        <img src={barsIcon} alt="Menu" className="navbar-burger-icon" />
      </Navbar.Toggle>

      <div className={`navbar-overlay ${expanded ? 'show' : ''}`}>
        <div className="navbar-overlay-content">
          <button className="navbar-close" onClick={() => setExpanded(false)}>
            <img src={closeIcon} alt="Close" />
          </button>
          <Nav className="navbar-links">
            <LinkContainer to="/" onClick={handleNavClick}>
              <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Services" id="basic-nav-dropdown" onClick={handleNavClick}>
              <LinkContainer to="/services/branding" onClick={handleNavClick}>
                <NavDropdown.Item>Branding</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/services/design-system" onClick={handleNavClick}>
                <NavDropdown.Item>Design System</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/services/facilitation" onClick={handleNavClick}>
                <NavDropdown.Item>Facilitation</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/services/product-design" onClick={handleNavClick}>
                <NavDropdown.Item>Product Design</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/services/site-internet" onClick={handleNavClick}>
                <NavDropdown.Item>Site Internet</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/portfolio" onClick={handleNavClick}>
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" onClick={handleNavClick}>
              <Nav.Link>À propos</Nav.Link>
            </LinkContainer>
            <Nav.Link href="https://www.linkedin.com/in/sarah-ablonet/" target="_blank" onClick={handleNavClick}>
              <img src={linkedinIcon} alt="LinkedIn" className="navbar-linkedin-icon" />
            </Nav.Link>
            <Buttons text="Contactez-moi !" />
          </Nav>
        </div>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
