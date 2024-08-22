import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import ProcessDesign from '../../components/process-design/process-design';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';

const ProductDesign = () => {
  const processSteps = [
    {
      title: "Discovery & exploration",
      description: "Je plonge dans votre univers pour saisir vos objectifs et contraintes à travers des discussions approfondies, tout en réalisant des recherches utilisateurs et une analyse concurrentielle pour cerner les besoins et opportunités.",
      duration: "1 semaine",
    },
    {
      title: "Définition & idéation",
      description: "Avec vous, je définis les fonctionnalités clés et structure les idées lors d’ateliers de co-création, en évaluant leur faisabilité et potentiel, pour aboutir à des concepts structurés via des wireframes.",
      duration: "1 semaine",
    },
    {
      title: "Design & prototypage",
      description: "Je conçois des prototypes interactifs et des maquettes haute fidélité, testant les interactions utilisateur pour affiner les designs et préparer le produit final en collaborant étroitement avec vos équipes.",
      duration: "1-2 semaines",
    },
    {
      title: "Déploiement & optimisation",
      description: "Je supervise l'intégration des designs avec les équipes de développement, m'assurant que tout fonctionne comme prévu et effectuant les ajustements nécessaires d’après les retours utilisateurs et analyses de performance.",
      duration: "1-2 semaines",
    },
    {
      title: "Évaluation & feedback",
      description: "Continuellement, je recueille vos feedbacks et ceux des utilisateurs pour évaluer l’impact du design, célébrer les succès et identifier les points d’amélioration pour les cycles de développement futurs.",
      duration: "Durée continue",
    },
  ];

  return (
    <div>
      <HeroAccueilServices 
        primaryText="Parlez-moi de votre projet et donnons"
        secondaryText="vie à vos idées !"
        description="Le product design allie esthétique, stratégie et compréhension des utilisateurs. En tant que Product Designer freelance, je transforme vos idées en solutions design élégantes et fonctionnelles. Discutons de votre projet pour concrétiser vos ambitions."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
      <ProcessDesign steps={processSteps} />
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default ProductDesign;
