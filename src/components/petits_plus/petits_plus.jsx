import React, { useEffect, useRef } from 'react';
import './petits_plus.css';
import SmallTitle from '../title/small_title/small_title';
import figmaLogo from '../../assets/figma_logo.png';
import frenchProduitLogo from '../../assets/frenchproduit_logo.png';
import theDesignCrewLogo from '../../assets/thedesigncrew_logo.png';
import simplonLogo from '../../assets/simplon_logo.png';
import designSprintChallengeLogo from '../../assets/designsprintchallenge_logo.png';

const cardData = [
  {
    img: figmaLogo,
    title: "Figma lover",
    description: "- Utilisation quotidienne de Figma pour la création de variables, propriétés et mode développeur.\n- Expertise dans la flexibilité et les capacités de Figma pour le design collaboratif."
  },
  {
    img: frenchProduitLogo,
    title: "FrenchProduit",
    description: "Je suis la co-animatrice de FrenchProduit à Rennes et en Bretagne. Ma mission depuis janvier 2024 est d’organiser et d’animer tous les mois des événements pour la communauté locale de PM, designers et développeurs."
  },
  {
    img: theDesignCrewLogo,
    title: "Advanced Product Discovery",
    description: "J'ai appris à structurer et exécuter la Product Discovery pour démontrer sa valeur ajoutée, identifier les problèmes prioritaires, mener des recherches utilisateurs, développer des solutions et systématiser ces processus."
  },
  {
    img: simplonLogo,
    title: "POEC de Développement Front-End",
    description: "Je suis POEC de développement front-end, approfondissant mes connaissances en CSS, HTML, JavaScript et React, pour une meilleure compréhension et collaboration avec les équipes de développement."
  },
  {
    img: designSprintChallengeLogo,
    title: "Vous connaissez le design sprint challenge ?",
    description: "Avec une expérience confirmée en animation (obtention du BAFA en 2009), j’ai facilité plusieurs types d'ateliers auprès de professionnels. J’ai aussi récemment eu la chance d’animer une semaine de design sprint auprès des étudiants de l’ESIEA, avec Latitude.cc."
  }
];

const PetitsPlus = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += event.deltaY;
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="petits-plus-container">
      <SmallTitle primaryText="Mes" secondaryText="Petits Plus" />
      <div className="petits-plus-slider" ref={sliderRef}>
        {cardData.map((card, index) => (
          <div key={index} className="petits-plus-card">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetitsPlus;
