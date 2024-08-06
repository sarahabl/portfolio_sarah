import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './footer.css';
import logo from 'C:/Users/Utilisateur/Simplon/portfolio/src/assets/logo.svg';

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
              <li><a href="/services/branding">Branding</a></li>
              <li><a href="/services/designsystem">Design System</a></li>
              <li><a href="/services/facilitation">Facilitation</a></li>
              <li><a href="/services/productdesign">Product Design</a></li>
              <li><a href="/services/siteinternet">Site Internet</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col footer-pages d-none d-md-block">
            <ul>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">À propos</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col footer-links">
            <ul>
              <li><a href="https://www.linkedin.com/in/sarah-ablonet/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://tenors.app/speakers/AbsX2Ozr1afcBRYAEBz6XW1eXHq1" target="_blank" rel="noopener noreferrer">Tenors</a></li>
              <li><a href="https://www.malt.fr/profile/sarahablonet" target="_blank" rel="noopener noreferrer">Malt</a></li>
            </ul>
            <Button className="contact-button d-block d-md-none">Contactez-moi !</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
