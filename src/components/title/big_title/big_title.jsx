import React from 'react';
import PropTypes from 'prop-types';
import './big_title.css';
import highlightImg from '../../../assets/Highlight.svg';

const BigTitle = ({ primaryText, secondaryText, description, showHighlight = true }) => {
  return (
    <div className="title-container">
      <div className="title-text">
        <h1 className="title-primary">
          {primaryText} <span className="title-secondary">{secondaryText}</span>
        </h1>
        {description && <p className="title-description">{description}</p>}
      </div>
      {showHighlight && (
        <div className="title-highlight">
          <img src={highlightImg} alt="Highlight" />
        </div>
      )}
    </div>
  );
};

BigTitle.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  description: PropTypes.string,
  showHighlight: PropTypes.bool,
};

export default BigTitle;
