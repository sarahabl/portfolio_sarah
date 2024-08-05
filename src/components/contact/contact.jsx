// src/components/contact/contact.jsx
import React from 'react';
import Title from '../title/title'; // Assure-toi que le chemin est correct
import Button from '../buttons/buttons'; // Assure-toi que le chemin est correct
import './contact.css'; // Importation du fichier CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <Title text="Contactez-moi" /> {/* Titre du bloc */}
      <p className="contact-text">
        Vous avez une idée ou une question ? Je serais ravie de discuter avec vous pour explorer comment nous pouvons collaborer et donner vie à vos projets.
      </p>
      <Button label="Contactez-moi" onClick={() => alert('Contactez-moi')} /> {/* Bouton de contact */}
    </div>
  );
};

export default Contact;
