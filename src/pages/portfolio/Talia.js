import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet'; // Import du composant HeroProjet
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import taliaHeroImage from '../../assets/talia__hero.png'; // Import de l'image associée (assurez-vous que l'image existe)

const Talia = () => {
  return (
    <div>
      <HeroProjet
        titlePrimary="L’application"
        titleSecondary="Talia"
        description="Talia est une plateforme innovante dédiée aux passionnés de jardinage et aux maraîchers professionnels. Développée pour répondre aux défis du changement climatique, Talia permet aux utilisateurs de partager des calendriers de semis et des observations, tout en offrant un accès à des informations locales et actualisées.
Mon rôle dans ce projet a été de créer le branding de Talia et de concevoir le design du produit MVP, afin de donner vie à une plateforme à la fois pratique et attrayante."
        tags={["Branding", "Product Design"]}
        buttonText="Discutons ensemble de votre projet !"
        imageSrc={taliaHeroImage} // Assurez-vous que l'image est correctement référencée
      />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Talia;
