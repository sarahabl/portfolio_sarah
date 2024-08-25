import React from 'react';
import Bandeau from '../components/bandeau/bandeau';
import Services from '../components/services/services';
import Contact from '../components/contact/contact';
import HeroAbout from '../components/hero__about/hero__about';
import PetitsPlus from '../components/petits_plus/petits_plus';

const AboutPage = () => {
  return (
    <div>
      <HeroAbout />
      <Bandeau />
      <PetitsPlus />
      <Services />
      <Contact />
    </div>
  );
};

export default AboutPage;
