import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';

const DesignSystem = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Envie d'un produit"
        secondaryText="harmonieux & cohérent ?"
        description="Découvrez le Design System ! En tant que designer freelance, je crée un système sur-mesure pour simplifier et unifier vos interfaces, tout en renforçant votre identité."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default DesignSystem;
