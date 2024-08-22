import React from 'react';
import PropTypes from 'prop-types';
import './big_title.css';

const BigTitle = ({ primaryText, secondaryText, description, showHighlight = true }) => {
  return (
    <div className="big-title-container">
      <div className="title-text">
        <h1 className="title-primary">
          {primaryText} <span className="title-secondary">{secondaryText}</span>
        </h1>
        {description && <p className="title-description">{description}</p>}
      </div>
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
