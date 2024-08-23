import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero__projet.css';
import BigTitle from '../title/big_title/big_title';
import Tag from '../tags/tags';
import Button from '../buttons/buttons';

const HeroProjet = ({ titlePrimary, titleSecondary, description, tags, buttonText, imageSrc }) => {
  return (
    <Container fluid className="hero-projet-container">
      <Row className="align-items-center">
        <Col lg={6} className="hero-projet-left">
          <BigTitle 
            primaryText={titlePrimary} 
            secondaryText={titleSecondary} 
            description={null} /* Suppression de la description ici */
          />
          <div className="hero-projet-tags">
            {tags.map((tag, index) => (
              <Tag key={index} content={tag} />
            ))}
          </div>
          <p className="hero-projet-description">{description}</p> {/* Affichage d'une seule description ici */}
          <Button text={buttonText} className="custom-button" />
        </Col>
        <Col lg={6} className="hero-projet-right">
          <img src={imageSrc} alt="Projet" className="hero-projet-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroProjet;
