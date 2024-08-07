import React from 'react';
import PropTypes from 'prop-types';
import './small_title.css';
import highlightImg from '../../../assets/Highlight.svg';

const SmallTitle = ({ primaryText, secondaryText }) => {
  return (
    <div className="title-container">
      <div className="title-text">
        <h2 className="title-primary-small">
          {primaryText} <span className="title-secondary">{secondaryText}</span>
        </h2>
      </div>
      <div className="title-highlight">
        <img src={highlightImg} alt="Highlight" />
      </div>
    </div>
  );
};

SmallTitle.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

export default SmallTitle;
