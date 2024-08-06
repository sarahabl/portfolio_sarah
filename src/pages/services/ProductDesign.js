import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Footer from '../../components/footer/footer';

const ProductDesign = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Parlez-moi de votre projet et ensemble, "
        secondaryText="donnons vie à vos idées !"
        description="La conception de produits n’est pas seulement une question d’esthétique, mais aussi de stratégie, de recherche approfondie et de compréhension des besoins réels des utilisateurs. En tant que Product Designer freelance, je mets à votre disposition mon expertise pour transformer vos idées en solutions design élégantes, fonctionnelles et centrées sur l'utilisateur. Parlez-moi de votre projet et découvrons ensemble comment donner vie à vos ambitions."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
    </div>
  );
};

export default ProductDesign;
