import React from 'react';
import './section__last.css';

const SectionLast = ({ imageSrc }) => {
  return (
    <div className="section-last">
      <img src={imageSrc} alt="Section Last" className="section-last-image" />
    </div>
  );
};

export default SectionLast;
