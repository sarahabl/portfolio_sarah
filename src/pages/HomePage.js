import React from 'react';
import HeroAccueilServices from '../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../components/bandeau/bandeau';
import Title from '../components/title/title';
import Services from '../components/services/services';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import ProjectsSlider from '../components/projects-slider/projects-slider';

const HomePage = () => {
  return (
    <div>
      
      {/* Hero Section */}
      <HeroAccueilServices />
      
      {/* Bandeau */}
      <Bandeau />
    </div>
  );
};

export default HomePage;
