import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css';
import logo from 'C:/Users/Utilisateur/Simplon/portfolio/src/assets/logo.svg';
import linkedinIcon from 'C:/Users/Utilisateur/Simplon/portfolio/src/assets/linkedin.svg';
import barsIcon from 'C:/Users/Utilisateur/Simplon/portfolio/src/assets/bars.svg';
import Buttons from 'C:/Users/Utilisateur/Simplon/portfolio/src/components/buttons/buttons.jsx';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')}>
        <img src={barsIcon} alt="Menu" className="navbar-burger-icon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-links">
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="/services/branding">Branding</NavDropdown.Item>
            <NavDropdown.Item href="/services/designsystem">Design System</NavDropdown.Item>
            <NavDropdown.Item href="/services/facilitation">Facilitation</NavDropdown.Item>
            <NavDropdown.Item href="/services/productdesign">Product Design</NavDropdown.Item>
            <NavDropdown.Item href="/services/siteinternet">Site Internet</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/about">À propos</Nav.Link>
          <Nav.Link href="https://www.linkedin.com">
            <img src={linkedinIcon} alt="LinkedIn" className="navbar-linkedin-icon" />
          </Nav.Link>
          <Buttons text="Contactez-moi !" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
