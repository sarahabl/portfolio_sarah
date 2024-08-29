import React from 'react';
import './process-design.css';
import SmallTitle from '../title/small_title/small_title';
import Tag from '../tags/tags';
import PropTypes from 'prop-types';

const ProcessDesign = ({ steps, tagContent, backgroundColor }) => {
  return (
    <div className="process-design-container" style={{ backgroundColor: backgroundColor }}>
      {tagContent && <Tag content={tagContent} />}
      {steps && steps.length > 0 && (
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className={`process-step step-${index + 1}`}>
              {step.title && <h3>{step.title}</h3>}
              {step.description && <p className="process-description">{step.description}</p>}
              {step.duration && <p className="duration">{step.duration}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ProcessDesign.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  tagContent: PropTypes.string,
  backgroundColor: PropTypes.string, // Ajout de la prop pour la couleur de fond
};

ProcessDesign.defaultProps = {
  backgroundColor: '#FFFFFF', // Couleur de fond par défaut (blanc)
};

export default ProcessDesign;
