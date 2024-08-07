import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './footer.css';
import logo from '../../assets/logo.svg'; // Chemin relatif

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="align-items">
          <Col md={3} className="footer-logo">
            <img src={logo} alt="Logo" className="footer-logo-img" />
          </Col>
          <Col md={3} className="footer-col footer-services d-none d-md-block">
            <ul>
              <LinkContainer to="/services/branding">
                <li><a>Branding</a></li>
              </LinkContainer>
              <LinkContainer to="/services/design-system">
                <li><a>Design System</a></li>
              </LinkContainer>
              <LinkContainer to="/services/facilitation">
                <li><a>Facilitation</a></li>
              </LinkContainer>
              <LinkContainer to="/services/product-design">
                <li><a>Product Design</a></li>
              </LinkContainer>
              <LinkContainer to="/services/site-internet">
                <li><a>Site Internet</a></li>
              </LinkContainer>
            </ul>
          </Col>
          <Col md={3} className="footer-col footer-pages d-none d-md-block">
            <ul>
              <LinkContainer to="/portfolio">
                <li><a>Portfolio</a></li>
              </LinkContainer>
              <LinkContainer to="/about">
                <li><a>À propos</a></li>
              </LinkContainer>
            </ul>
          </Col>
          <Col md={3} className="footer-col footer-links">
            <ul>
              <li><a href="https://www.linkedin.com/in/sarah-ablonet/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://tenors.app/speakers/AbsX2Ozr1afcBRYAEBz6XW1eXHq1" target="_blank" rel="noopener noreferrer">Tenors</a></li>
              <li><a href="https://www.malt.fr/profile/sarahablonet" target="_blank" rel="noopener noreferrer">Malt</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
