import React from 'react';
import {
  HeroAccueilServices,
  Bandeau,
  Intro,
  Expertises,
  Services,
  Realisations,
  Contact,
} from '../components';
import bgImage from '../assets/hero__homepage.png'; // Import de l'image

const HomePage = () => {
  const heroProps = {
    primaryText: "Hello, je suis",
    secondaryText: "Sarah Ablonet",
    description: "J'aide les équipes à concevoir et à lancer des produits numériques. Parfois, je crée les miens.",
    buttonText: "Voir mon portfolio",
    bgImage, // Passe l'image importée ici
  };

  return (
    <div>
      <HeroAccueilServices {...heroProps} />
      <Bandeau />
      <Intro />
      <Expertises />
      <Services />
      <Realisations />
      <Contact />
    </div>
  );
};

export default HomePage;
