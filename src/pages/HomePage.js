import React from 'react';
import {
  HeroAccueilServices,
  Bandeau,
  Intro,
  Expertises,
  Services,
  Contact,
} from '../components';

const HomePage = () => {
  const heroProps = {
    primaryText: "Hello, je suis",
    secondaryText: "Sarah Ablonet",
    description: "J'aide les équipes à concevoir et à lancer des produits numériques. Parfois, je crée les miens.",
    buttonText: "Voir mon portfolio",
  };

  return (
    <div>
      <HeroAccueilServices {...heroProps} />
      <Bandeau />
      <Intro />
      <Expertises />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
