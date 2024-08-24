import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import DesignChallenge from '../../components/design__challenge/design__challenge';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import Realisations from '../../components/realisations/realisations';
import bodachellaHeroImage from '../../assets/bodachella__hero.png'; // Import de l'image associée (assurez-vous que l'image existe)

const Bodachella = () => {
  return (
    <div>
      <HeroProjet
        titlePrimary="Bodachella"
        titleSecondary=""
        description="Pour Bodachella, j'ai eu le plaisir de créer une identité visuelle vibrante et un site web entièrement personnalisable. Bodachella Box, une marque innovante spécialisée dans les coffrets pour enterrements de vie de jeune fille (EVJF), cherchait à se démarquer avec un style dynamique, coloré et moderne. Voici comment j'ai contribué à donner vie à leur vision."
        tags={["Branding", "Création de site internet"]}
        buttonText="Discutons ensemble de votre projet !"
        imageSrc={bodachellaHeroImage}
      />
      <DesignChallenge 
        title="Ma mission ? Créer une Identité Visuelle Unique et un Site Web Sur-Mesure"
        description="Mon défi était de concevoir un branding percutant et développer un site web flexible, reflétant l’esprit festif et la diversité des expériences proposées par Bodachella Box, tout en offrant une solution clé en main aux organisateurs d’EVJF."
      />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Bodachella;
