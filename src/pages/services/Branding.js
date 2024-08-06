import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Footer from '../../components/footer/footer';

const Branding = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Besoin d’aide pour votre"
        secondaryText="identité visuelle ?"
        description="Plongez dans l'univers de l'identité visuelle, où chaque détail compte pour créer une marque qui résonne profondément avec votre public. Mon approche bienveillante et personnalisée garantit que chaque aspect de votre identité visuelle est soigneusement pensé et exécuté. Parlez-moi de votre projet et ensemble, faisons éclore une identité qui vous ressemble."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
    </div>
  );
};

export default Branding;
