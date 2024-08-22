import React from 'react';
import HeroAccueilServices from '../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../components/bandeau/bandeau';
import Intro from '../components/intro/intro';
import Expertises from '../components/expertises/expertises';
import Services from '../components/services/services';
import Realisations from '../components/realisations/realisations';
import Contact from '../components/contact/contact';

const HomePage = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Hello, je suis"
        secondaryText="Sarah Ablonet"
        description="J'aide les équipes à concevoir et à lancer des produits numériques. Parfois, je crée les miens."
        buttonText="Voir mon portfolio"
      />
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
