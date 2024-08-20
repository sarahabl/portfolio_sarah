import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';

const ProductDesign = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Parlez-moi de votre projet et donnons"
        secondaryText="vie à vos idées !"
        description="Le product design allie esthétique, stratégie et compréhension des utilisateurs. En tant que Product Designer freelance, je transforme vos idées en solutions design élégantes et fonctionnelles. Discutons de votre projet pour concrétiser vos ambitions."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default ProductDesign;
