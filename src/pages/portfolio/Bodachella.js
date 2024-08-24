import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import bodachellaHeroImage from '../../assets/bodachella__hero.png';
import SectionImgLeft from '../../components/section__projet/section__img-left/section__img-left';
import SectionImgRight from '../../components/section__projet/section__img-right/section__img-right';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import bodachellaSection1Image from '../../assets/bodachella__section1.png';
import bodachellaSection2Image from '../../assets/bodachella__section2.png';

const Bodachella = () => {
  const brandingText = `
    <strong>Recherche et Analyse</strong><br/>
    J'ai commencé par comprendre l'essence de Bodachella et ses valeurs : fête, amitié, aventure. Cette phase a impliqué des recherches sur les tendances visuelles pour le secteur des EVJF et des analyses des besoins de la marque pour assurer une représentation fidèle et attrayante.
    <br/><br/>
    <strong>Conception du Logo</strong><br/>
    Le logo a été conçu pour être à la fois mémorable et polyvalent. J'ai choisi des couleurs vibrantes comme le rose et l'orange pour évoquer une ambiance festive et pétillante. La typographie manuscrite et élégante ajoute une touche créative et personnelle au design.
    <br/><br/>
    <strong>Déclinaisons et Applications</strong><br/>
    Le branding a été conçu pour être adaptable sur divers supports : coffrets cadeaux, réseaux sociaux, supports imprimés. La flexibilité du design permet une utilisation en couleurs comme en monochrome, tout en maintenant une cohérence visuelle.
  `;

  const webDevelopmentText = `
    <strong>Conception du Site</strong><br/>
    J'ai développé un site web à partir de zéro, en mettant l'accent sur l’expérience utilisateur et l’accessibilité. Le site reflète l’identité visuelle de Bodachella tout en offrant une interface intuitive et engageante.
    <br/><br/>
    <strong>Développement d’un Thème Personnalisé</strong><br/>
    Le site utilise un thème entièrement personnalisable, permettant à la cliente de modifier les contenus, les images et les sections selon ses besoins. Cela assure une flexibilité maximale et une adaptation rapide aux évolutions futures de la marque.
    <br/><br/>
    <strong>Test et Optimisation</strong><br/>
    Avant le lancement, j’ai effectué des tests rigoureux pour garantir que le site fonctionne parfaitement sur tous les appareils. J'ai également optimisé le site pour la performance et la vitesse, assurant une expérience utilisateur sans faille.
  `;

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
      <SectionImgLeft 
        tag="Branding"
        title="Un Branding qui Fait la Fête : Conception de l’Identité Visuelle"
        text={brandingText}
        imageSrc={bodachellaSection1Image}
      />
      <SectionImgRight 
        tag="Création site internet"
        title="Développement Web : Un Site Internet Sur-Mesure"
        text={webDevelopmentText}
        imageSrc={bodachellaSection2Image}
      />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Bodachella;
