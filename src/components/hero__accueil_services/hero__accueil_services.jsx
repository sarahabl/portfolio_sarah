import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero__accueil_services.css';
import Title from '../title/big_title/big_title';
import Buttons from '../buttons/buttons';
import heroImage from '../../assets/hero__projet.png'; // Utilisez un chemin relatif ici

const HeroAccueilServices = ({ primaryText, secondaryText, description, paragraphText, buttonText }) => {
  return (
    <div className="hero-container">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="hero-left">
            <Title primaryText={primaryText} secondaryText={secondaryText} description={description} />
            <p className="hero-paragraph">{paragraphText}</p>
            <Buttons text={buttonText} />
          </Col>
          <Col lg={5} className="hero-right">
            <img src={heroImage} alt="Hero" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroAccueilServices;
