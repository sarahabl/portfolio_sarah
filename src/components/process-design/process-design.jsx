import React, { useState, useEffect } from 'react';
import './process-design.css';
import SmallTitle from '../title/small_title/small_title';
import PropTypes from 'prop-types';
import Tag from '../tags/tags';

const ProcessDesign = ({ steps, tagContent, title, backgroundColor }) => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSteps((prev) => (prev < steps.length ? prev + 1 : prev));
    }, 700); // Délai pour contrôler la vitesse d'apparition

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="process-design-container" style={{ backgroundColor: backgroundColor }}>
      {tagContent && <Tag content={tagContent} />}
      {title && (
        <SmallTitle 
          primaryText={title.primaryText} 
          secondaryText={title.secondaryText} 
        />
      )}
      {steps && steps.length > 0 && (
        <div className="process-steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step step-${index + 1} ${index < visibleSteps ? 'visible' : ''}`}
            >
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
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
  })).isRequired,
  tagContent: PropTypes.string,
  title: PropTypes.shape({
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
  }),
  backgroundColor: PropTypes.string,
};

export default ProcessDesign;
