import React from 'react';
import './hero__about.css';
import BigTitle from '../title/big_title/big_title';
import Avatar from '../avatar/avatar';
import Button from '../buttons/buttons';
import { Container, Row, Col } from 'react-bootstrap';

const HeroAbout = () => {
  return (
    <Container className="hero-about-container">
      <Row className="hero-about-content">
        {/* Colonne de gauche */}
        <Col md={6} className="hero-about-title">
          <div className="d-flex align-items-center">
            <BigTitle 
              primaryText="Hello, je suis" 
              secondaryText={<span>Sarah <Avatar className="inline-avatar" /></span>} 
              showHighlight={false} 
            />
          </div>
        </Col>

        {/* Colonne de droite */}
        <Col md={6}>
          <p className="hero-about-paragraph">
          Passionnée par la technologie, l’art et les expériences utilisateur fluides, je combine créativité et compétences techniques pour donner vie à vos idées en produits numériques. Mon parcours est varié : après des études en marketing digital, j’ai travaillé à l’étranger pendant 3 ans au Myanmar et presque 1 an à Madagascar. De retour en France, je me suis lancée dans le design UX/UI en 2019, et j’ai décroché mon premier poste en 2020. Aujourd’hui, je suis product designer, toujours prête pour de nouveaux défis !
          </p>
          <Button
            text="Voir mon portfolio"
            onClick={() => window.location.href = '/portfolio'}
            className="hero-about-button"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroAbout;
