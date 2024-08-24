import React from 'react';
import Tag from '../../tags/tags';
import './section__img-left.css';

const SectionImgLeft = ({ tag, title, text, imageSrc }) => {
  return (
    <div className="section-img-left">
      <div className="image-content">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="text-content">
        <Tag content={tag} />
        <h3>{title}</h3>
        <div className="section-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export default SectionImgLeft;
