import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import wenabiHeroImage from '../../assets/wenabi__hero.png';
import Realisations from '../../components/realisations/realisations';
import Contact from '../../components/contact/contact';

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

  const designSystemText = `
    <strong>Conception</strong><br/>
    J'ai contribué à la création d'un design system pour Wenabi. Cela a impliqué l'inventaire des éléments existants, la création d'une bibliothèque de composants réutilisables et la mise en place de guidelines pour garantir une expérience utilisateur homogène et efficace.
    <br/><br/>
    <strong>Maintenance</strong><br/>
    En assurant la mise à jour continue du design system, j’ai permis une adaptabilité rapide aux besoins changeants et une intégration fluide des nouvelles fonctionnalités, augmentant ainsi la vélocité du développement.
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
      <DesignChallenge 
        title="Ma mission ? Transformer l’expérience utilisateur sur Wenabi en un jeu d’enfant !"
        description="J’ai rendu la plateforme plus intuitive et engageante, pour que chaque collaborateur puisse interagir facilement et avec plaisir. De l'écoute des besoins utilisateurs à la livraison des solutions, j’ai pris en charge tout le processus, en imaginant des fonctionnalités innovantes et en créant un design system harmonieux pour une plateforme cohérente et efficace."
      />
      <SectionImgLeft 
        tag="Product Design"
        title="Concevoir pour l’impact"
        text={acquisitionText}
        imageSrc={wenabiSection2Image}
      />
      <SectionImgRight 
        tag="Design System"
        title="La base de la cohérence"
        text={designSystemText}
        imageSrc={wenabiSection1Image}
      />
      <SectionLast imageSrc={wenabiFocusImage} />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Wenabi;
