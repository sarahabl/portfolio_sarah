import React from 'react';
import './contact.css';
import SmallTitle from '../title/small_title/small_title';
import Button from '../buttons/buttons';

const Contact = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:?subject=Requête sur le site&body=Qui vous êtes, votre demande, votre objectif.';
  };

  return (
    <div className="contact-container">
      <SmallTitle primaryText="Contactez" secondaryText="Moi" />
      <div className='info'>
        <p className="contact-text">
        Vous avez une idée ou une question ? Je serais ravie de discuter avec vous pour explorer comment nous pouvons collaborer et donner vie à vos projets.
        </p>
        <Button text="Contactez-moi" onClick={handleButtonClick} className="contact-button" />
      </div>
    </div>
  );
};

export default Contact;
