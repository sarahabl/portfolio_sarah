import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tags/tags';
import Button from '../buttons/buttons';
import './hero__projet.css';

const HeroProjet = ({ title, tags, intro, imageSrc }) => {
  return (
    <div className="hero-projet">
      <div className="hero-projet__content">
        <h1 className="hero-projet__title">{title}</h1>
        <div className="hero-projet__tags">
          {tags.map((tag, index) => (
            <Tag key={index} content={tag} />
          ))}
        </div>
        <p className="hero-projet__intro">{intro}</p>
        <Button text="Discutons ensemble de votre projet !" />
      </div>
      <div
