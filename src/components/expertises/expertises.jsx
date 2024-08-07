import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SmallTitle from '../title/small_title/small_title';
import './expertises.css';
import uxDesignImg from '../../assets/UX_design.svg';
import uiDesignImg from '../../assets/UI_design.svg';

const Expertises = () => {
  return (
    <div className="expertises-container">
      <SmallTitle
        primaryText="Mes"
        secondaryText="expertises"
        description=""
      />
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <div className="expertise-item">
              <img src={uxDesignImg} alt="UX Design" />
              <h3 className="expertise-title">UX Design</h3>
              <p className="expertise-text">
                Un parcours utilisateur pensé pour vos besoins, avec une priorisation des fonctionnalités alignée aux enjeux de votre produit.
              </p>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <div className="expertise-item">
              <img src={uiDesignImg} alt="UI Design" />
              <h3 className="expertise-title">UI Design</h3>
              <p className="expertise-text">
                Une interface utilisateur sur mesure, détaillée et livrée de manière réaliste pour une intégration parfaite avec l'équipe de développement.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Expertises;
