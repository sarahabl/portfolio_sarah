import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './avatar.css';
import avatar from '../../assets/avatar.png';

const Avatar = () => {
  return (
    <a href="https://www.linkedin.com/in/sarah-ablonet/" target="_blank" rel="noopener noreferrer">
      <img src={avatar} alt="Avatar" className="avatar-img" />
    </a>
  );
};

export default Avatar;
