// src/components/hero__accueil_services/hero__accueil_services.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './hero__accueil_services.css';
import Title from '../title/title';
import Button from '../buttons/buttons';

const HeroAccueilServices = ({ primaryText, secondaryText, description, buttonText, buttonLink, imageUrl, textContent }) => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <Title primaryText={primaryText} secondaryText={secondaryText} description={description} />
        <p className="hero-text">{textContent}</p>
        <Button text={buttonText} link={buttonLink} />
      </div>
      <div className="hero-right">
        <img src={imageUrl} alt="Hero" />
      </div>
    </div>
  );
};

HeroAccueilServices.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};

export default HeroAccueilServices;
