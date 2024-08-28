import React from 'react';
import PropTypes from 'prop-types';
import './tags.css';

const Tag = ({ content, fontSize, rotation }) => {
  const tagStyle = {
    fontSize: fontSize, // Utilise la taille de police passée en prop
    transform: `rotate(${rotation}deg)`, // Applique la rotation passée en prop
  };

  return (
    <div className="tag" style={tagStyle}>
      {content}
    </div>
  );
};

Tag.propTypes = {
  content: PropTypes.string.isRequired, // Le contenu du tag doit être une chaîne de caractères et est obligatoire
  fontSize: PropTypes.string, // La taille de la police est une chaîne de caractères, optionnelle
  rotation: PropTypes.number, // La rotation est un nombre, optionnel
};

Tag.defaultProps = {
  fontSize: '16px', // Taille de police par défaut
  rotation: 0, // Pas de rotation par défaut
};

export default Tag;
