import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import methodeE2RHeroImage from '../../assets/E2R__hero.png';
import SectionImgRight from '../../components/section__projet/section__img-right/section__img-right';
import SectionLast from '../../components/section__projet/section__last/section__last';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import methodeE2RSectionImage from '../../assets/E2R__section1.png';
import E2RFocusImage from '../../assets/E2R__focus.png';
import E2RLogo from '../../assets/projet__logo_e2R.svg';
import DesignChallenge from '../../components/design__challenge/design__challenge';

const MethodeE2R = () => {
  const brandingText = `
    Le logo que j’ai conçu pour la méthode E2R s’articule autour du concept du fauteuil incliné, un symbole clé de l’expérience d’hypnose. L’inclinaison du "H" dans le logo ne se limite pas à une lettre stylisée, mais évoque le fauteuil de consultation, incarnant confort et soutien. Ce design capture l’état de relaxation nécessaire pour la transe, tout en représentant le voyage intérieur du patient. L'objectif est de créer un lien visuel immédiat avec le processus thérapeutique, transmettant sécurité et professionnalisme.<br /><br />
    La palette choisie mêle des violets doux, évoquant rêves et émotions, avec des touches de noir, ajoutant profondeur et professionnalisme. Ce mariage visuel équilibre parfaitement l’émotionnel et la rigueur scientifique de la méthode E2R.<br /><br />
    La typographie bold sélectionnée renforce la crédibilité de la méthode E2R, alliant sophistication et modernité. Lisible et impactante, elle assure une reconnaissance immédiate tout en reflétant la précision et la profondeur de la méthode.<br /><br />
  `;

  return (
    <div>
      <HeroProjet
        titlePrimary="Méthode"
        titleSecondary="E2R"
        description="La méthode E2R, ou Emotion, Régression, Réparation, est une approche révolutionnaire dans le domaine de l’hypnose thérapeutique. Plutôt que de se concentrer uniquement sur les symptômes isolés, cette méthode met l’accent sur le traitement des émotions profondes pour une guérison plus complète. Ma mission était de créer une identité visuelle qui reflète cette approche novatrice tout en véhiculant un sentiment de sérénité et de confiance."
        imageSrc={methodeE2RHeroImage}
        leftImageSrc={E2RLogo}
      />
      <DesignChallenge
        title="Créer un logo qui équilibre rigueur scientifique et empathie, reflétant l'innovation et la douceur de la méthode E2R"
      />
      <SectionImgRight 
        tag="Branding"
        title="L’idée du fauteuil incliné"
        text={brandingText}
        imageSrc={methodeE2RSectionImage}
        buttonText="Découvrez comment je donne vie à vos concepts"
        buttonLink="/services/branding"
      />
      <SectionLast imageSrc={E2RFocusImage} />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default MethodeE2R;
