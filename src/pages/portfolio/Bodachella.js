import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet'; // Import du composant HeroProjet
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
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Bodachella;
