import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import DesignChallenge from '../../components/design__challenge/design__challenge';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import e2rHeroImage from '../../assets/E2R__hero.png';

const E2R = () => {
  return (
    <div>
      <HeroProjet
        titlePrimary="Méthode"
        titleSecondary="E2R"
        description="La méthode E2R, ou Emotion, Régression, Réparation, est une approche révolutionnaire dans le domaine de l’hypnose thérapeutique. Plutôt que de se concentrer uniquement sur les symptômes isolés, cette méthode met l’accent sur le traitement des émotions profondes pour une guérison plus complète. Ma mission était de créer une identité visuelle qui reflète cette approche novatrice tout en véhiculant un sentiment de sérénité et de confiance."
        tags={["Branding"]}
        buttonText="Discutons ensemble de votre projet !"
        imageSrc={e2rHeroImage} // Assurez-vous que l'image est correctement référencée
      />
      <DesignChallenge 
        title="Créer un logo qui équilibre rigueur scientifique et douceur empathique"
        description="L’objectif ? Concevoir une identité visuelle qui reflète l’essence de la méthode E2R avec innovation, élégance et proximité. Il fallait que la marque se démarque dans l'univers des thérapies tout en respirant professionnalisme et bienveillance. J’ai cherché à créer un design qui parle autant aux professionnels de santé qu’aux patients, en incarnant ce parfait équilibre entre science et empathie."
      />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default E2R;
