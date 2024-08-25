import React, { useRef, useEffect } from 'react';
import './petits_plus.css';
import SmallTitle from '../title/small_title/small_title';
import Slider from "react-slick";
import figmaLogo from '../../assets/figma_logo.png';
import frenchProduitLogo from '../../assets/frenchproduit_logo.png';
import theDesignCrewLogo from '../../assets/thedesigncrew_logo.png';
import simplonLogo from '../../assets/simplon_logo.png';
import designSprintChallengeLogo from '../../assets/designsprintchallenge_logo.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    img: figmaLogo,
    title: "Figma lover",
    description: "Je maîtrise Figma pour créer des variables, des propriétés et collaborer efficacement en mode développeur, afin de vous offrir un design souple et adapté à vos besoins."
  },
  {
    img: frenchProduitLogo,
    title: "FrenchProduit",
    description: "Je suis la co-animatrice de FrenchProduit à Rennes et en Bretagne. Ma mission depuis janvier 2024 est d’organiser et d’animer tous les mois des événements pour la communauté locale de PM, designers et développeurs."
  },
  {
    img: theDesignCrewLogo,
    title: "Advanced Product Discovery Batch #2",
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
        const slider = sliderRef.current.innerSlider.list; // Accéder directement à l'élément DOM du slider
        slider.scrollLeft += event.deltaY;
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true, // Pour gérer le défilement en boucle
    speed: 200,
    slidesToShow: 4, // Affiche le nombre de cartes à la fois par défaut
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Pour les écrans moyens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // Pour les petits écrans
        settings: {
          slidesToShow: 1, // Affiche une carte par colonne
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="petits-plus-container">
      <SmallTitle primaryText="Mes" secondaryText="petits +" />
      <Slider {...settings} ref={sliderRef} className="petits-plus-slider">
        {cardData.map((card, index) => (
          <div key={index} className="petits-plus-card-wrapper">
            <div className="petits-plus-card">
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PetitsPlus;
