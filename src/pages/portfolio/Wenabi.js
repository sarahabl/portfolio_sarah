import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet'; // Import du composant HeroProjet
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import wenabiHeroImage from '../../assets/wenabi__hero.png'; // Import de l'image associée

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
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Wenabi;
