import React from 'react';
import './bandeau.css';

const Bandeau = () => {
  return (
    <div className="bandeau-container">
      <div className="bandeau-content">
        <span className="bandeau-text">Mot 1</span>
        <span className="bandeau-text">Mot 2</span>
        <span className="bandeau-text">Mot 3</span>
        <span className="bandeau-text">Mot 4</span>
        {/* Ajoute plus de mots si nécessaire */}
      </div>
    </div>
  );
};

export default Bandeau;
