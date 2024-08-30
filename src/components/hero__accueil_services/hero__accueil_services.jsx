import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero__accueil_services.css';
import Title from '../title/big_title/big_title';
import Buttons from '../buttons/buttons';
import { useNavigate } from 'react-router-dom';

// Importer les images
import image1 from '../../assets/hero-image-branding.svg';
import image2 from '../../assets/hero-image-integration_web.svg';
import image3 from '../../assets/hero-image-product_design.svg';

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
            <img src={image3} alt="Image 3" className="hero-image-top-left" />
            <img src={image2} alt="Image 2" className="hero-image-top-right" />
            <img src={image1} alt="Image 1" className="hero-image-bottom-left" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroAccueilServices;
