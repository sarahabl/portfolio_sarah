import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import DesignChallenge from '../../components/design__challenge/design__challenge';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import taliaHeroImage from '../../assets/talia__hero.png';

const Talia = () => {
  return (
    <div>
      <HeroProjet
        titlePrimary="L’app de"
        titleSecondary="Graines sauvages"
        description="Talia est une plateforme innovante dédiée aux passionnés de jardinage et aux maraîchers professionnels. Développée pour répondre aux défis du changement climatique, Talia permet aux utilisateurs de partager des calendriers de semis et des observations, tout en offrant un accès à des informations locales et actualisées.
Mon rôle dans ce projet a été de créer le branding de Talia et de concevoir le design du produit MVP, afin de donner vie à une plateforme à la fois pratique et attrayante."
        tags={["Branding", "Product Design"]}
        buttonText="Discutons ensemble de votre projet !"
        imageSrc={taliaHeroImage}
      />
      <DesignChallenge 
        title="Faciliter le partage d’informations avec une interface durable et engageante"
        description="Il s'agissait de créer un produit numérique parfaitement adapté aux besoins des jardiniers, qu'ils soient amateurs ou professionnels, face aux défis d’un climat changeant. L’objectif ? Développer un branding cohérent et un design fonctionnel qui incarnent l’authenticité, la collaboration et l’innovation, au service d’un jardinage durable."
      />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Talia;
