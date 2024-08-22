import React from 'react';
import './inclus.css';
import SmallTitle from '../title/small_title/small_title';
import checkedIcon from '../../assets/checked.svg';

const Inclus = ({ items }) => {
  return (
    <div className="inclus-container">
      <SmallTitle primaryText="Ce qui est" secondaryText="inclus" />
      <div className="inclus-grid">
        {items.map((item, index) => (
          <div key={index} className="inclus-block">
            <div className="inclus-header">
              <img src={checkedIcon} alt="Checked Icon" className="inclus-icon" />
              <h3>{item.title}</h3>
            </div>
            <p className="inclus-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inclus;
