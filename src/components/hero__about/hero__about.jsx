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
            Passionnée par la technologie, l’art et les expériences utilisateur simplifiées, je combine créativité et compétences techniques pour transformer vos idées en produits numériques réussis.
            J'ai un parcours riche et varié, initialement formée en marketing digital. Mon aventure professionnelle m'a menée à l’étranger : 3 ans au Myanmar, presque 1 an à Madagascar, avant de revenir en France et me reconvertir en UX/UI design en 2019. Depuis, je me suis plongée dans le monde du produit, décrochant mon premier poste en 2020. Aujourd’hui, je suis une product desi
