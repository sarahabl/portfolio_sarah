import React from 'react';
import HeroService from '../../components/hero-service/hero-service';
import Bandeau from '../../components/bandeau/bandeau';
import ProcessDesign from '../../components/process-design/process-design';
import Inclus from '../../components/inclus/inclus';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';

const DesignSystem = () => {
    const processSteps = [
      {
        title: "Découverte & audit",
        description: "J’analyse en profondeur vos besoins, objectifs, et défis, en réalisant un audit complet des systèmes existants et une étude de votre identité de marque et de vos utilisateurs pour établir une base solide pour votre design system.",
        duration: "2 semaines",
      },
      {
        title: "Définition des fondations",
        description: "Ensemble, nous établissons les principes fondamentaux de votre design system, incluant la palette de couleurs, les typographies, les règles de mise en page, et les guides d'accessibilité, pour une cohérence visuelle et fonctionnelle.",
        duration: "2 semaines",
      },
      {
        title: "Création des composants",
        description: "Je développe et documente des composants essentiels, tels que boutons et formulaires, en assurant leur adaptabilité, réutilisabilité, et robustesse à travers divers scénarios de test.",
        duration: "2 semaines",
      },
      {
        title: "Intégration & tests",
        description: "J'intègre les composants dans un prototype interactif, effectue des tests rigoureux pour garantir leur fonctionnalité et esthétique, et ajuste selon les retours pour optimiser les performances.",
        duration: "2 semaines",
      },
      {
        title: "Documentation & formation ",
        description: "Je rédige une documentation claire et complète pour l’utilisation des composants, tout en formant vos équipes pour assurer une adoption fluide et efficace du design system.",
        duration: "2 semaines",
      },
    ];

    const inclusItems = [
      {
        title: "Audit & analyse",
        description: "Une exploration complète de votre marque : mission, vision, valeurs. Un positionnement clair et des messages clés pour votre communication."
      },
      {
        title: "2 directions artistiques",
        description: "Deux propositions distinctes pour choisir l'identité qui vous correspond le mieux."
      },
      {
        title: "1 proposition de concept",
        description: "Le logo principal, secondaire & icône pour toutes les utilisations. La palette de couleurs et sa signification. La typographie adaptée à votre style."
      },
      {
        title: "2 séries d'affinements",
        description: "Des ajustements minutieux pour une satisfaction totale."
      },
      {
        title: "Charte graphique",
        description: "Un document complet détaillant les éléments visuels et leurs utilisations."
      }
    ];
  
  return (
    <div>
      <HeroService  
        tagText="Design System"
        primaryText="Envie d'un produit"
        secondaryText="harmonieux & cohérent ?"
        paragraphText="Découvrez le Design System ! En tant que designer freelance, je crée un système sur-mesure pour simplifier et unifier vos interfaces, tout en renforçant votre identité, en partant de zéro ou avec une base existante."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
      <ProcessDesign steps={processSteps} />
      <Inclus items={inclusItems} />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default DesignSystem;
