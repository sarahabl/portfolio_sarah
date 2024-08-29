import React from 'react';
import './process-design.css';
import SmallTitle from '../title/small_title/small_title';
import Tag from '../tags/tags';

const ProcessDesign = ({ steps, tagContent }) => {
  return (
    <div className="process-design-container">
      {tagContent && <Tag content={tagContent} />}
      <SmallTitle primaryText="Mon" secondaryText="process" />
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

export default ProcessDesign;
