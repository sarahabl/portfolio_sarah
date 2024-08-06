import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Footer from '../../components/footer/footer';

const SiteInternet = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Créer un site internet qui "
        secondaryText="vous ressemble !"
        description="C’est avant tout comprendre vos besoins, vos envies et vos ambitions. Je vous propose de développer un site entièrement personnalisable assurant sécurité et performance, tout en optimisant votre référencement pour une visibilité maximale. Parlez-moi de votre projet et ensemble, concevons une présence en ligne qui marquera les esprits."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
    </div>
  );
};

export default SiteInternet;
