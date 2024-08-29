import React from 'react';
import PropTypes from 'prop-types';
import './section__mon-role.css';

const SectionMonRole = ({ roleContent }) => {
  return (
    <div className="section-mon-role section-mon-role--container">
      <h4 className="section-mon-role__title">Mon rôle</h4>
      <div className="section-mon-role__content">
        <p dangerouslySetInnerHTML={{ __html: roleContent }} />
      </div>
    </div>
  );
};

SectionMonRole.propTypes = {
  roleContent: PropTypes.string.isRequired, // Le contenu est obligatoire et doit être une chaîne de caractères
};

export default SectionMonRole;
