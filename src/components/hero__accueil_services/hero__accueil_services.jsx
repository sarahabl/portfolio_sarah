import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero__accueil_services.css';
import Title from '../title/big_title/big_title';
import Buttons from '../buttons/buttons';
import { useNavigate } from 'react-router-dom';

const HeroAccueilServices = ({ primaryText, secondaryText, description, paragraphText, buttonText }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <Container>
        <Row className="hero-content">
          <Col lg={6} className="hero-left">
            <Title primaryText={primaryText} secondaryText={secondaryText} description={description} />
            <p className="hero-paragraph">{paragraphText}</p>
            <Buttons text={buttonText} onClick={handleButtonClick} />
          </Col>
          <Col lg={5} className="hero-right">
            {/* L'image sera utilisée comme arrière-plan via le CSS */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroAccueilServices;
