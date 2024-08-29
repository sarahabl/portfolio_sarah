import React from 'react';
import HeroService from '../../components/hero-service/hero-service';
import Bandeau from '../../components/bandeau/bandeau';
import ProcessDesign from '../../components/process-design/process-design';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';

const Facilitation = () => {
  const processSteps = [
    {
      title: "Préparation & planification",
      description: "Je prends le temps de comprendre en profondeur votre contexte et vos besoins spécifiques, incluant des entretiens avec les parties prenantes clés pour préparer un agenda personnalisé.",
    },
    {
      title: "Animation d'ateliers",
      description: "J’organise et anime des ateliers créatifs et collaboratifs, en utilisant des techniques variées pour stimuler l'engagement et la co-création.",
    },
    {
      title: "Modération des discussions",
      description: "Je facilite les discussions, encourage l'expression de toutes les voix, résous les conflits et assure que chaque perspective soit prise en compte pour des résultats constructifs.",
    },
    {
      title: "Suivi",
      description: "Après chaque atelier, je vous fournis des rapports détaillés et organise des réunions de débriefing pour maximiser les apprentissages et ajuster les actions futures.",
    },
    {
      title: "Évaluation & feedback",
      description: "Je sollicite activement vos retours et ceux des participants pour évaluer l’efficacité de l’atelier, célébrer les succès et identifier les opportunités d'amélioration continue.",
    },
  ];

  return (
    <div>
      <HeroService 
        tagText="Facilitation"
        primaryText="Un projet, une idée,"
        secondaryText="un défi ?"
        paragraphText="Faisons-les éclore ensemble ! En tant que facilitatrice, j'accompagne vos équipes avec des sessions de travail dynamiques et productives : design sprint, ateliers d’idéation, focus groups. Je vous guide pas à pas."
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

export default Facilitation;
