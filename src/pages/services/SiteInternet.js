import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Footer from '../../components/footer/footer';

const SiteInternet = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Créez un site internet à "
        secondaryText="votre image !"
        description="Je développe des sites WordPress 100% personnalisés, sécurisés et performants, optimisés pour une visibilité maximale. Discutons de votre projet !"
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
    </div>
  );
};

export default SiteInternet;
