import React from 'react';
import HeroAccueilServices from '../../components/hero__accueil_services/hero__accueil_services';
import Bandeau from '../../components/bandeau/bandeau';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import Realisations from '../../components/realisations/realisations';
import ProcessDesign from '../../components/process-design/process-design'; // Import du composant ProcessDesign

const Branding = () => {
  // Définir les étapes du processus pour le branding
  const processSteps = [
    {
      title: "Consultation initiale",
      description: "Faire connaissance, comprendre vos aspirations et discuter de votre projet.",
      duration: "1 heure",
    },
    {
      title: "Exploration & analyse",
      description: "Plonger dans l'univers de votre marché et découvrir les tendances.",
      duration: "1 jour",
    },
    {
      title: "Conception créative",
      description: "Imaginer plusieurs pistes visuelles en harmonie avec votre vision.",
      duration: "3 jours",
    },
    {
      title: "Affinements",
      description: "Affiner le concept choisi pour qu'il soit parfaitement en phase avec vos attentes.",
      duration: "3 jours",
    },
    {
      title: "Finalisation & livraison",
      description: "Vous remettre une identité visuelle complète et prête à être déployée.",
      duration: "2 jours",
    },
  ];

  return (
    <div>
      <HeroAccueilServices 
        primaryText="Donnez vie à"
        secondaryText="votre histoire"
        description="Mon approche bienveillante et personnalisée garantit que chaque aspect de votre identité visuelle est soigneusement pensé et exécuté. Parlez-moi de votre projet et ensemble, faisons éclore une identité qui vous ressemble."
        buttonText="Voir mon portfolio"
      />
      <Bandeau />
      <ProcessDesign steps={processSteps} /> {/* Ajout du composant ProcessDesign */}
      <Realisations />
      <Services />
      <Contact />
    </div>
  );
};

export default Branding;
