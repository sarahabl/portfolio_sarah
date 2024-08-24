import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import DesignChallenge from '../../components/design__challenge/design__challenge';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import wenabiHeroImage from '../../assets/wenabi__hero.png';

const Wenabi = () => {
  return (
    <div>
      <HeroProjet
        titlePrimary="wenabi"
        titleSecondary=""
        description="Wenabi est une plateforme SaaS innovante destinée à faciliter l'engagement collaborateur et les dons associatifs. Mon rôle en tant que Product Designer a été d'optimiser l'expérience utilisateur tout au long du parcours de la plateforme, en intégrant des solutions centrées sur les besoins des utilisateurs et en contribuant à la mise en place d'un design system cohérent."
        tags={["Product Design", "Design System"]}
        buttonText="Discutons ensemble de votre projet !"
        imageSrc={wenabiHeroImage}
      />
      <DesignChallenge 
        title="Ma mission ? Transformer l’expérience utilisateur sur Wenabi en un jeu d’enfant !"
        description="J’ai rendu la plateforme plus intuitive et engageante, pour que chaque collaborateur puisse interagir facilement et avec plaisir. De l'écoute des besoins utilisateurs à la livraison des solutions, j’ai pris en charge tout le processus, en imaginant des fonctionnalités innovantes et en créant un design system harmonieux pour une plateforme cohérente et efficace."
      />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Wenabi;
