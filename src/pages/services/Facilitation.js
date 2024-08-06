import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Footer from '../../components/footer/footer';

const Facilitation = () => {
  return (
    <div>
      <HeroAccueilServices 
        primaryText="Vous avez un projet, une idée,"
        secondaryText="un défi à relever ?"
        description="Et si on faisait éclore tout ça ensemble ? En tant que facilitateur freelance, j'accompagne vos équipes à travers des sessions de travail dynamiques et productives. Design sprint, ateliers d’idéation, focus group… je suis là pour vous guider pas à pas."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
    </div>
  );
};

export default Facilitation;
