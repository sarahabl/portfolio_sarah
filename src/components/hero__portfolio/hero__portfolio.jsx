import React from 'react';
import './hero__portfolio.css';
import BigTitle from '../title/big_title/big_title';
import Avatar from '../avatar/avatar';
import { Container, Row, Col } from 'react-bootstrap';

const HeroPortfolio = () => {
  return (
    <Container className="hero-portfolio-container">
      <Row className="hero-portfolio-content">
        <Col xs={12} className="d-flex flex-column align-items-center text-center">
          <BigTitle 
            primaryText="Bienvenue dans mon" 
            secondaryText={<span>portfolio <Avatar className="inline-avatar" /></span>} 
            showHighlight={false} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroPortfolio;
