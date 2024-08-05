import React from 'react';
import NavBar from '../components/navbar/navbar';
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
      
      {/* Title: Mes services */}
      <Title text="Mes services" />
      
      {/* Services Section */}
      <Services />
      
      {/* Title: Mes réalisations */}
      <Title text="Mes réalisations" />
      
      {/* Description under 'Mes réalisations' */}
      <p>Découvrez mes réalisations et projets, du design d'interfaces utilisateur à la conception des design systems.</p>
      
      {/* Projects Slider */}
      <ProjectsSlider />
      
      {/* Contact Section */}
      <Contact />
      
    </div>
  );
};

export default HomePage;
