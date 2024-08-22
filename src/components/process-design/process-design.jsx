import React from 'react';
import './process-design.css';
import SmallTitle from '../title/small_title/small_title';

const ProcessDesign = ({ steps }) => {
  return (
    <div className="process-design-container">
      <SmallTitle primaryText="Mon" secondaryText="process" />
      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className={`process-step step-${index + 1}`}>
            <h3>{step.title}</h3>
            <p className="process-description">{step.description}</p>
            <p className="duration">{step.duration}</p>
          </div>
        ))}
      </div
    </div>
  );
};

export default ProcessDesign;
