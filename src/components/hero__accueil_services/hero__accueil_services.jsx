import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero__accueil_services.css';
import Title from '../title/big_title/big_title';
import Buttons from '../buttons/buttons';
import { useNavigate } from 'react-router-dom';

const HeroAccueilServices = ({
  primaryText,
  secondaryText,
  description,
  paragraphText,
  buttonText,
  bgImage  // Add bgImage prop to pass background image URL
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <Container fluid>
        <Row className="hero-content">
          <Col lg={6} md={12} className="hero-left">
            <Title primaryText={primaryText} secondaryText={secondaryText} description={description} />
            <p className="hero-paragraph">{paragraphText}</p>
            <Buttons text={buttonText} onClick={handleButtonClick} />
          </Col>
          <Col lg={6} md={12} className="hero-right" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* Background image set dynamically */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroAccueilServices;
