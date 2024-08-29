import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import bodachellaHeroImage from '../../assets/bodachella__hero.png'; // Image à droite
import bodachellaLogo from '../../assets/projet__logo_bodachella.svg'; // Logo à gauche
import SectionImgLeft from '../../components/section__projet/section__img-left/section__img-left';
import SectionImgRight from '../../components/section__projet/section__img-right/section__img-right';
import SectionLast from '../../components/section__projet/section__last/section__last';
import Realisations from '../../components/realisations/realisations';
import Contact from '../../components/contact/contact';
import bodachellaSection1Image from '../../assets/bodachella__section1.png';
import bodachellaSection2Image from '../../assets/bodachella__section2.png';
import bodachellaFocusImage from '../../assets/bodachella__focus.png';
import DesignChallenge from '../../components/design__challenge/design__challenge';

const Bodachella = () => {
  const brandingText = `
    Pour Bodachella, j’ai créé une identité visuelle qui reflète l’essence de la marque : fête, amitié, aventure. Après une recherche approfondie des tendances et des besoins, j’ai conçu un logo mémorable avec des couleurs vibrantes, comme le rose et l’orange, pour une ambiance festive. Ce branding adaptable fonctionne sur tous les supports, des coffrets cadeaux aux réseaux sociaux, tout en restant cohérent et impactant.
  `;

  const webDevelopmentText = `
    J’ai conçu un site web de A à Z pour Bodachella, avec une interface intuitive et accessible qui reflète parfaitement son identité visuelle. Le site est doté d’un thème entièrement personnalisable, permettant à la cliente d’ajouter et de modifier autant de contenu qu’elle le souhaite. Avant le lancement, des tests rigoureux ont été menés pour garantir une performance optimale sur tous les appareils, offrant une expérience utilisateur fluide et engageante.
  `;

  return (
    <div>
      <HeroProjet
        titlePrimary="Créer une identité"
        titleSecondary="et son site internet"
        description="Pour Bodachella Box, j’ai créé une identité visuelle unique et un site web personnalisé. Marque dédiée aux coffrets pour enterrements de vie de jeune fille (EVJF), Bodachella souhaitait un style dynamique et coloré pour se démarquer. J’ai mis en œuvre leur vision avec un design moderne et vibrant."
        imageSrc={bodachellaHeroImage}
        leftImageSrc={bodachellaLogo}
      />
      <DesignChallenge
        title="Concevoir un branding percutant et développer un site web flexible, tout en offrant une solution clé en main aux organisateurs d’EVJF"
      />
      <SectionImgLeft 
        tag="Branding"
        title="Un Branding qui Fait la Fête"
        text={brandingText}
        imageSrc={bodachellaSection1Image}
        buttonText="Transformez votre image de marque avec moi"
        buttonLink="/services/branding"
      />
      <SectionImgRight 
        tag="Création site internet"
        title="Un Site Internet Sur-Mesure"
        text={webDevelopmentText}
        imageSrc={bodachellaSection2Image}
        buttonText="Créez un site qui vous ressemble"
        buttonLink="/services/site-internet"
      />
      <SectionLast imageSrc={bodachellaFocusImage} />
      <Realisations />
      <Contact />
    </div>
  );
};

export default Bodachella;
