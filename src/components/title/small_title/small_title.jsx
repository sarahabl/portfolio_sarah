import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './small_title.css';
import highlightImg from '../../../assets/Highlight.svg';

const SmallTitle = ({ primaryText, secondaryText }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const scrollPosition = window.scrollY;
        const titlePosition = titleRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const offset = (scrollPosition - titlePosition + windowHeight) * 0.1;

        titleRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="title-container" ref={titleRef}>
      <div className="title-text">
        <h2 className="title-primary-small">
          {primaryText} <span className="title-secondary-small">{secondaryText}</span>
        </h2>
      </div>
      <div className="title-highlight">
        <img src={highlightImg} alt="Highlight" />
      </div>
    </div>
  );
};

SmallTitle.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

export default SmallTitle;
