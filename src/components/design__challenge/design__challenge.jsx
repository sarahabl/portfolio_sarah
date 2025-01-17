import React from 'react';
import './design__challenge.css';

const DesignChallenge = ({ title, description }) => {
  return (
    <div className="design-challenge-container">
      <h2 className="design-challenge-title">{title}</h2>
    </div>
  );
};

export default DesignChallenge;
