import React from 'react';
import './buttons.css'; // Import du fichier CSS pour les styles

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
