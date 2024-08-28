import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import wenabiHeroImage from '../../assets/wenabi__hero.png';
import SectionImgLeft from '../../components/section__projet/section__img-left/section__img-left';
import SectionImgRight from '../../components/section__projet/section__img-right/section__img-right';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import wenabiSection1Image from '../../assets/wenabi__section1.png';
import wenabiSection2Image from '../../assets/wenabi__section2.png';
import wenabiSection3Image from '../../assets/wenabi__section3.png';

const Wenabi = () => {
  const acquisitionText = `
    <strong>Acquisition</strong><br/>
    J'ai transformé l’expérience de l’utilisateur pour la rendre plus inspirante. En analysant les interactions et les taux de conversion, j'ai identifié les points de friction et amélioré le parcours utilisateur, entraînant une interface plus intuitive et une satisfaction accrue.
    <br/><br/>
    <strong>Activation</strong><br/>
    J'ai développé un module d'abondement qui permet aux entreprises de convertir l’engagement de leurs collaborateurs en dons aux associations. Cette solution simplifie le processus de don et augmente son impact, valorisant l’engagement sociétal des entreprises partenaires.
    <br/><br/>
    <strong>Rétention</strong><br/>
    J’ai optimisé la rétention en créant des notifications personnalisées qui maintiennent les utilisateurs engagés. Les nouvelles notifications améliorent la visibilité des programmes et renforcent la participation, transformant les utilisateurs en ambassadeurs actifs.
  `;

  const section1 = `
    <ul>
      <li>Simplification des options de recherche et regroupement par thématiques et compétences, rendant la plateforme moins complexe et plus inspirante.</li>
      <li>Modernisation de l’interface et refonte des emails pour une meilleure cohérence et adaptabilité mobile, augmentant l'attrait visuel et la praticité.</li>
    </ul>
  `;

  const section2 = `
  <ul>
    <li>Mise en valeur des témoignages sur les réseaux sociaux et amélioration des pages de connexion pour une première impression engageante.</li>
    <li>Réorganisation des documents et ressources légales pour une meilleure visibilité et accessibilité.</li>
    <li>Développement de collections dynamiques permettant de déployer des ensembles de missions cohérents en quelques clics, facilitant la gestion et l'engagement des utilisateurs.</li>
  </ul>
`;

const section3 = `
Lors de mon passage chez Wenabi, j'ai participé au développement d'un design system complet, visant à améliorer la cohérence et l'accélération des processus de développement.
<br />
<br />

Mes contributions principales ont inclus :
<ul>
  <li>Benchmark</li>
  <li>Actualisation des variables de design pour garantir une uniformité à travers les interfaces</li>
</ul>
`;

  return (
    <div>
      <HeroProjet
        titlePrimary="wenabi"
        titleSecondary=""
        description="Wenabi est une plateforme SaaS innovante destinée à faciliter l'engagement collaborateur et les dons associatifs. Mon rôle en tant que Product Designer a été d'optimiser l'expérience utilisateur tout au long du parcours de la plateforme, en intégrant des solutions centrées sur les besoins des utilisateurs et en contribuant à la mise en place d'un design system cohérent."
        tags={["Product Design", "Design System"]}
        imageSrc={wenabiHeroImage}
      />
      <SectionImgRight 
        tag="Prototypage"
        title="Proposer des moyens pour optimiser la pertinence des recommandations et améliorer la navigation sur la plateforme."
        text={section1}
        imageSrc={wenabiSection1Image}
      />
      <SectionImgLeft 
        text={section2}
        imageSrc={wenabiSection2Image}
        buttonText="Découvrez comment je transforme les produits"
        buttonLink="/services/product-design"
      />
      <SectionImgRight 
        tag="Design System"
        title="Développement d'un design system complet"
        text={section3}
        imageSrc={wenabiSection3Image}
        buttonText="Découvrez mon approche en design system"
        buttonLink="/services/design-system"
        style={{ background: 'linear-gradient(180deg, #FFF 0%, #F9F6EB 100%)' }} 
      />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Wenabi;
