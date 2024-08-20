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
        primaryText="Hello, I'm"
        secondaryText="Sarah Ablonet"
        description="Product Designer & Web Designer à Rennes"
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
