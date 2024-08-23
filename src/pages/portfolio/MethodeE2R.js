import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet'; // Import du composant HeroProjet
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import e2rHeroImage from '../../assets/E2R__hero.png'; // Import de l'image associée (assurez-vous que l'image existe)

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
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default E2R;
