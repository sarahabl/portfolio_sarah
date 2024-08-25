import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="custom-footer">
      <Container>
        <Row className="align-items">
          <Col md={3} className="footer-logo">
            <img src={logo} alt="Logo" className="footer-logo-img" onClick={handleNavClick} />
          </Col>
          <Col md={3} className="footer-col footer-services d-none d-md-block">
            <ul>
              <LinkContainer to="/services/branding" onClick={handleNavClick}>
                <li><a>Branding</a></li>
              </LinkContainer>
              <LinkContainer to="/services/design-system" onClick={handleNavClick}>
                <li><a>Design System</a></li>
              </LinkContainer>
              <LinkContainer to="/services/facilitation" onClick={handleNavClick}>
                <li><a>Facilitation</a></li>
              </LinkContainer>
              <LinkContainer to="/services/product-design" onClick={handleNavClick}>
                <li><a>Product Design</a></li>
              </LinkContainer>
              <LinkContainer to="/services/site-internet" onClick={handleNavClick}>
                <li><a>Site Internet</a></li>
              </LinkContainer>
            </ul>
          </Col>
          <Col md={3} className="footer-col footer-pages d-none d-md-block">
            <ul>
              <LinkContainer to="/portfolio" onClick={handleNavClick}>
                <li><a>Portfolio</a></li>
              </LinkContainer>
              <LinkContainer to="/about" onClick={handleNavClick}>
                <li><a>À propos</a></li>
              </LinkContainer>
            </ul>
          </Col>
          <Col md={3} className="footer-col footer-links">
            <ul>
              <li><a href="https://www.linkedin.com/in/sarah-ablonet/" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>LinkedIn</a></li>
              <li><a href="https://tenors.app/speakers/AbsX2Ozr1afcBRYAEBz6XW1eXHq1" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>Tenors</a></li>
              <li><a href="https://www.malt.fr/profile/sarahablonet" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>Malt</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
