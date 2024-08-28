import React from 'react';
import Tag from '../../tags/tags';
import './section__img-right.css';
import Button from '../../buttons/buttons';

const SectionImgRight = ({ tag, title, text, imageSrc, buttonText, buttonLink }) => {
  const handleButtonClick = () => {
    window.location.href = buttonLink;
  };

  return (
    <div className="section-img-right">
      <div className="text-content">
        <Tag content={tag} />
        <h3>{title}</h3>
        <div className="section-text" dangerouslySetInnerHTML={{ __html: text }} />
        <Button
          text={buttonText}
          onClick={handleButtonClick}
          className="hero-projet-button"
        />
      </div>
      <div className="image-content">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default SectionImgRight;
