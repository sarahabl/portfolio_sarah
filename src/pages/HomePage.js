import React from 'react';
import HeroAccueilServices from '../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../components/bandeau/bandeau';
import Footer from '../components/footer/footer';

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
    </div>
  );
};

export default HomePage;
