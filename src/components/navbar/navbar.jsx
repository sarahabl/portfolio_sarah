import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';
import logo from '../../assets/logo.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import barsIcon from '../../assets/bars.svg';
import Buttons from '../buttons/buttons.jsx';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className="custom-navbar">
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')}>
        <img src={barsIcon} alt="Menu" className="navbar-burger-icon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-links">
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <LinkContainer to="/services/branding">
              <NavDropdown.Item>Branding</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/design-system">
              <NavDropdown.Item>Design System</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/facilitation">
              <NavDropdown.Item>Facilitation</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/product-design">
              <NavDropdown.Item>Product Design</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/site-internet">
              <NavDropdown.Item>Site Internet</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/portfolio">
            <Nav.Link>Portfolio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>À propos</Nav.Link>
          </LinkContainer>
          <Nav.Link href="https://www.linkedin.com/in/sarah-ablonet/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" className="navbar-linkedin-icon" />
          </Nav.Link>
          <Buttons text="Contactez-moi !" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
