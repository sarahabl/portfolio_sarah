import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Footer from '../../components/footer/footer';

const Facilitation = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Un projet, une idée,"
        secondaryText="un défi ?"
        description="Faisons-les éclore ensemble ! En tant que facilitateur freelance, j'accompagne vos équipes avec des sessions de travail dynamiques et productives : design sprint, ateliers d’idéation, focus groups. Je vous guide pas à pas."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
    </div>
  );
};

export default Facilitation;
