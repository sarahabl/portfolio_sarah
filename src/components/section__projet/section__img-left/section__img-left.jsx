import React from 'react';
import Tag from '../../tags/tags';
import './section__img-left.css';
import Button from '../../buttons/buttons';

const SectionImgLeft = ({ tag, title, text, imageSrc, buttonText, buttonLink }) => {
  const handleButtonClick = () => {
    window.location.href = buttonLink;
  };

  return (
    <div className="section-img-left">
      <div className="image-content">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="text-content">
        {tag && <Tag content={tag} />}
        <h3>{title}</h3>
        <div className="section-text" dangerouslySetInnerHTML={{ __html: text }} />
        {buttonText && (
          <Button
            text={buttonText}
            onClick={handleButtonClick}
            className="hero-projet-button"
          />
        )} 
      </div>
    </div>
  );
};

export default SectionImgLeft;
