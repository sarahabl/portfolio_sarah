import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero-service.css';
import Title from '../title/big_title/big_title';
import Buttons from '../buttons/buttons';
import Tag from '../tags/tags';
import { useNavigate } from 'react-router-dom';

const HeroService = ({
  primaryText,
  secondaryText,
  description,
  paragraphText,
  buttonText,
  tagText,  // Nouveau prop pour le texte du tag
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hero-container-service">
      <Container fluid>
        <Row className="hero-content-service">
          {/* Colonne gauche avec le tag et le titre */}
          <Col lg={6} md={12} className="hero-left-service">
            <Tag content={tagText} className="hero-tag" /> {/* Ajout du tag */}
            <Title primaryText={primaryText} secondaryText={secondaryText} description={description} />
          </Col>
          {/* Colonne droite avec le paragraphe et le bouton */}
          <Col lg={6} md={12} className="hero-right-service">
            <p className="hero-paragraph">{paragraphText}</p>
            <Buttons text={buttonText} onClick={handleButtonClick} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroService;
