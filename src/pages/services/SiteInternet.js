import React from 'react';
import HeroService from '../../components/hero-service/hero-service';
import Bandeau from '../../components/bandeau/bandeau';
import ProcessDesign from '../../components/process-design/process-design';
import Inclus from '../../components/inclus/inclus';
import Realisations from '../../components/realisations/realisations';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';

const SiteInternet = () => {
  const processSteps = [
    {
      title: "Consultation initiale ",
      description: "Je vous accompagne pour cerner vos attentes lors d'un échange personnalisé, où nous définissons ensemble les grandes lignes de votre projet.",
      duration: "1 heure",
    },
    {
      title: "Recherche & planification",
      description: "J'analyse votre marché en profondeur et planifie la structure du site en étudiant les tendances web, la concurrence, et en définissant l’arborescence et les fonctionnalités clés.",
      duration: "1 semaine",
    },
    {
      title: "Design & maquettage",
      description: "C'est le moment où je crée la maquette et l'identité graphique de votre site. Je vous propose plusieurs versions de wireframes, ainsi que des options concrètes pour les couleurs, les typographies et les éléments graphiques.",
      duration: "1-2 semaines",
    },
    {
      title: "Développement & intégration",
      description: "Je transforme la maquette en un site web fonctionnel en développant en HTML, CSS, React, JavaScript, et PHP, et en intégrant le tout sur WordPress avec une optimisation SEO.",
      duration: "2-3 semaines",
    },
    {
      title: "Tests & lancement",
      description: "Je m'assure que votre site est performant et sécurisé grâce à des tests rigoureux, incluant la vérification de la compatibilité mobile et le renforcement de la sécurité, avant de procéder à la mise en ligne.",
      duration: "1 semaine",
    },
  ];

  const inclusItems = [
    {
      title: "Design visuel",
      description: "Maquettes de pages principales & design responsive pour une expérience optimale sur tous les appareils."
    },
    {
      title: "SEO & référencement",
      description: "Optimisation des balises HTML, du contenu pour le référencement naturel & mise en place des outils de suivi SEO."
    },
    {
      title: "Sécurité",
      description: "Protection contre les attaques courantes & configuration des sauvegardes automatiques."
    },
    {
      title: "Formation & support",
      description: "Des ajustements minutieux pour une satisfaction totale."
    },
  ];


  return (
    <div>
      <HeroService 
        tagText="Création de site internet"
        primaryText="Un site internet à "
        secondaryText="votre image !"
        paragraphText="Je développe des sites WordPress 100% personnalisés, sécurisés et performants, optimisés pour une visibilité maximale. Discutons de votre projet !"
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

export default SiteInternet;
