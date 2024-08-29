import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import ProcessDesign from '../../components/process-design/process-design';
import SectionContexte from '../../components/section__projet/section__contexte/section__contexte';
import SectionMonRole from '../../components/section__projet/section__mon-role/section__mon-role';
import taliaHeroImage from '../../assets/talia__hero.png';
import taliaLogo from '../../assets/projet__logo_graines.png'
import SectionImgLeft from '../../components/section__projet/section__img-left/section__img-left';
import SectionImgRight from '../../components/section__projet/section__img-right/section__img-right';
import SectionRechercheUX from '../../components/section__projet/section__recherche-ux/section__recherche-ux';
import Realisations from '../../components/realisations/realisations';
import Contact from '../../components/contact/contact';
import taliaSection1Image from '../../assets/talia__section1.png';

const Talia = () => {
  const contexteTexte = "Avec le changement climatique bouleversant les saisons et perturbant les habitudes des jardiniers et maraîchers, il devient crucial d'adapter nos pratiques agricoles. Les semis et plantations ne suivent plus les règles traditionnelles, nécessitant des essais et observations annuels. Graines Sauvages, une jeune société de vente en ligne de semences biologiques, souhaite répondre à ce défi en offrant un service gratuit et collaboratif, permettant le partage d'informations actualisées et pertinentes.";

  const problemeTexte = `
  <ul>
    <li>Obsolescence des Calendriers de Semis : Les calendriers de semis traditionnels ne reflètent plus la réalité actuelle.</li>
    <li>Manque d’Informations Localisées et Fiables : Les jardiniers et maraîchers peinent à trouver des informations précises et pertinentes pour leur localité.</li>
    <li>Besoin de Partage d'Expériences : Nécessité de partager les observations et pratiques pour s’adapter aux nouvelles conditions climatiques.</li>
  </ul>
  `;

  const objectifsTexte = `
  <ul>
    <li>Augmenter la Visibilité de Graines Sauvages : Attirer plus de visiteurs sur le site marchand.</li>
    <li>Accroître les Visites et Interactions : Utiliser les articles de blog et placements de produits pour générer du trafic.</li>
    <li>Offrir un Service Gratuit et Utile : Fournir aux jardiniers un outil pratique et collaboratif.</li>
    <li>Créer des Interfaces Intuitives : Faciliter l’accès à l’information grâce à une navigation simple et attrayante.</li>
  </ul>
  `;

  const designSteps = [
    { title: "Benchmark", description: "Analyser la concurrence pour comprendre le fonctionnement des applications de rencontre." },
    { title: "Recherche utilisateur", description: "Examiner les besoins et les motivations des utilisateurs des applications de rencontre pour collecter des données essentielles." },
    { title: "Définition du problème", description: "Formuler clairement la problématique basée sur les insights obtenus pendant la phase de recherche utilisateur." },
    { title: "Idéation", description: "Développer et imaginer des pistes de conception créatives pour répondre à la problématique identifiée." },
    { title: "Prototypage", description: "Prototyper les premières idées de conception et les soumettre à des tests auprès d’utilisateurs des applications de rencontre pour évaluer leur efficacité et recueillir des retours pour des améliorations futures." }
  ];
  
  const roleContent = `
  <ul>
    <li>Conduire des recherches utilisateurs pour identifier les points de friction et les opportunités d'amélioration.</li>
    <li>Définir les problématiques UX à résoudre.</li>
    <li>Participer à l'idéation et à la création de prototypes.</li>
    <li>Comment garantir la qualité et la pertinence des informations partagées ?</li>
    <li>Quels mécanismes mettre en place pour encourager le partage et la collaboration ?</li>
    <li>Comment adapter la plateforme aux différents niveaux de compétences des utilisateurs ?.</li>
  </ul>
  `;

  const enseignements = `
    <ul>
      <li>Les jardiniers amateurs et professionnels souhaitent des informations localisées, actualisées et précises.</li>
      <li>L’aspect communautaire et le partage d’expériences sont primordiaux.</li>
      <li>Les utilisateurs recherchent des conseils pratiques adaptés à leur contexte spécifique (type de sol, climat local).</li>
    </ul>
  `;

  const methode = `
    <ul>
      <li>5 entretiens téléphoniques avec des utilisateurs volontaires.</li>
      <li>4 tests de shadowing avec des utilisateurs volontaires.</li>
    </ul>
  `;

  const questions = `
    <ul>
      <li>Comment garantir la qualité et la pertinence des informations partagées ?</li>
      <li>Quels mécanismes mettre en place pour encourager le partage et la collaboration ?</li>
      <li>Comment adapter la plateforme aux différents niveaux de compétences des utilisateurs ?</li>
    </ul>
  `;

  const problematique = "Les jardiniers et maraîchers ont besoin d’un outil fiable et collaboratif pour partager et accéder à des informations actualisées et locales, afin de s’adapter efficacement aux changements climatiques.";

  const metriques = `
    <ul>
      <li>Nombre de Visiteurs Uniques</li>
      <li>Taux de Participation et d’Interaction</li>
      <li>Nombre de Calendriers de Semis Partagés</li>
      <li>Satisfaction Utilisateurs</li>
    </ul>
  `;

  const section1 = `
    <ul>
      <li>Partage de calendriers de semis personnalisés pour permettre aux utilisateurs de créer et de partager leurs propres calendriers, enrichis d'observations locales.</li>
      <li>Accès à des informations localisées et notées pour que les jardiniers bénéficient de données précises et géolocalisées, validées par la communauté.</li>
      <li>Plateforme interactive et collaborative pour faciliter l’échange de conseils et d’expériences, renforçant le sentiment de communauté.</li>
    </ul>
  `;

  return (
    <div>
      <HeroProjet
        titlePrimary="Concevoir le MVP"
        titleSecondary="de Graines Sauvages"
        description="Dans le cadre de mon projet de fin d'études pour l'obtention de mon diplôme en UX/UI Design à l'École Multimédia, j'ai eu l'occasion de travailler sur un projet répondant aux défis posés par le changement climatique pour les jardiniers et maraîchers."
        imageSrc={taliaHeroImage}
        leftImageSrc={taliaLogo}
      />
      <SectionContexte
        texteContexte={contexteTexte}
        problemeTexte={problemeTexte}
        objectifsTexte={objectifsTexte}
      />
      <ProcessDesign steps={designSteps} tagContent="Processus de design" />
      <SectionMonRole roleContent={roleContent} />
      <SectionRechercheUX
        enseignements={enseignements}
        methode={methode}
        questions={questions}
        problematique={problematique}
        metriques={metriques}
      />
      <SectionImgRight 
        tag="Prototypage"
        title="Créer des prototypes du MVP de l’application web"
        text={section1}
        imageSrc={taliaSection1Image}
        buttonText="Découvrez comment je transforme les produits"
        buttonLink="/services/product-design"
        style={{ background: 'linear-gradient(180deg, #FFF 0%, #F9F6EB 100%)' }}
      />
      <Realisations />
      <Contact />
    </div>
  );
};
export default Talia;
