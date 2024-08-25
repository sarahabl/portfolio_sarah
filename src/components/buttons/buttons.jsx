import React from 'react';
import './buttons.css';

const Button = ({ text, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`custom-button ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
