import React from 'react';
import HeroPortoflio from '../components/hero__portfolio/hero__portfolio';
import Bandeau from '../components/bandeau/bandeau';
import Realisations from '../components/realisations/realisations';
import Services from '../components/services/services';
import Contact from '../components/contact/contact';

const Portfolio = () => {
  return (
    <div>
      <HeroPortoflio />
      <Bandeau />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Portfolio;