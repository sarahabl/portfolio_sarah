import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero__projet.css';
import BigTitle from '../title/big_title/big_title';

const HeroProjet = ({ titlePrimary, titleSecondary, description, buttonText, buttonLink, imageSrc, leftImageSrc }) => {
  const handleButtonClick = () => {
    window.location.href = buttonLink;
  };

  return (
    <Container fluid className="hero-projet-container">
      <Row className="align-items-center">
        <Col lg={6} className="hero-projet-left">
          {leftImageSrc && (
            <img src={leftImageSrc} alt="Logo du projet" className="hero-projet-left-image" />
          )}
          <BigTitle 
            primaryText={titlePrimary} 
            secondaryText={titleSecondary} 
            description={null} /* Suppression de la description ici */
          />
          <p className="hero-projet-description">{description}</p>
        </Col>
        <Col lg={6} className="hero-projet-right">
          <img src={imageSrc} alt="Projet" className="hero-projet-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroProjet;
