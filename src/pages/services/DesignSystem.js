import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Footer from '../../components/footer/footer';

const DesignSystem = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Vous avez envie de donner une structure harmonieuse à"
        secondaryText="votre produit ?"
        description="Vous cherchez à garantir une cohérence visuelle et fonctionnelle à travers tous vos supports ? Bienvenue dans l’univers du Design System ! En tant que designer freelance, je vous aide à créer un système de design sur-mesure qui simplifie et unifie vos interfaces, tout en renforçant votre identité."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
    </div>
  );
};

export default DesignSystem;
