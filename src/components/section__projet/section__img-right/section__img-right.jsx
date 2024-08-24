import React from 'react';
import Tag from '../../tags/tags';
import './section__img-right.css';

const SectionImgRight = ({ tag, title, text, imageSrc }) => {
  return (
    <div className="section-img-right">
      <div className="text-content">
        <Tag content={tag} />
        <h3>{title}</h3>
        <div className="section-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className="image-content">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default SectionImgRight;
