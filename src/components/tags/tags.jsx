import React from 'react';
import PropTypes from 'prop-types';
import './tags.css';

const Tag = ({ content, fontSize = '16px', rotation = 0 }) => {
  const tagStyle = {
    fontSize, // Utilise la taille de police passée en prop ou la valeur par défaut
    transform: `rotate(${rotation}deg)`, // Applique la rotation passée en prop ou la valeur par défaut
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

export default Tag;
