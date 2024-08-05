import React from 'react';
import PropTypes from 'prop-types';
import './tags.css';

const Tag = ({ content }) => {
  return (
    <div className="tag">
      {content}
    </div>
  );
};

Tag.propTypes = {
  content: PropTypes.string.isRequired, // Le contenu du tag doit être une chaîne de caractères et est obligatoire
};

export default Tag;
