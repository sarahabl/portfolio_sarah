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

const MethodeE2R = () => {
  const brandingText = `
    <strong>Conception du Logo</strong><br/>
    Le logo a été conçu autour du concept du fauteuil incliné, symbole central de la méthode E2R. Ce design ne représente pas simplement une lettre stylisée, mais évoque directement le fauteuil de consultation sur lequel les patients s’installent pour leur session d’hypnose. En inclinant le "H" du logo, nous avons voulu capturer l’idée de confort et de soutien que représente le fauteuil, tout en suggérant l’état de relaxation et de réceptivité nécessaire pour la transe.
    <br/><br/>
    L’inclinaison du fauteuil dans le logo symbolise également le voyage intérieur que le patient entreprend durant la séance. Elle évoque l’idée de se pencher vers l’inconscient et d’explorer des dimensions profondes de soi, tout en conservant une posture accueillante et stable. Cette représentation visuelle de l’expérience de consultation vise à créer un lien immédiat avec le processus thérapeutique et à transmettre une impression de sécurité et de professionnalisme.
    <br/><br/>
    <strong>Palette de Couleurs</strong><br/>
    Nous avons opté pour une palette de violets doux, associés à des touches de noir. Les violets évoquent les rêves et les dimensions émotionnelles, tandis que le noir ajoute une note de professionnalisme et de profondeur. Cette combinaison visuelle crée un équilibre parfait entre la dimension émotionnelle et la rigueur scientifique de la méthode.
    <br/><br/>
    <strong>Typographie</strong><br/>
    La typographie bold choisie renforce la crédibilité de la méthode tout en restant lisible et moderne. Elle apporte sophistication et clarté, en phase avec la profondeur et la précision de la méthode E2R, tout en garantissant une reconnaissance facile et immédiate.
  `;

  return (
    <div>
      <HeroProjet
        titlePrimary="Méthode"
        titleSecondary="E2R"
        description="La méthode E2R, ou Emotion, Régression, Réparation, est une approche révolutionnaire dans le domaine de l’hypnose thérapeutique. Plutôt que de se concentrer uniquement sur les symptômes isolés, cette méthode met l’accent sur le traitement des émotions profondes pour une guérison plus complète. Ma mission était de créer une identité visuelle qui reflète cette approche novatrice tout en véhiculant un sentiment de sérénité et de confiance."
        tags={["Branding"]}
        imageSrc={methodeE2RHeroImage}
      />
      <SectionImgRight 
        tag="Branding"
        title="L’idée du fauteuil incliné"
        text={brandingText}
        imageSrc={methodeE2RSectionImage}
      />
      <SectionLast imageSrc={E2RFocusImage} />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default MethodeE2R;
