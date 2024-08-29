import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import ProcessDesign from '../../components/process-design/process-design';
import SectionContexte from '../../components/section__projet/section__contexte/section__contexte';
import SectionMonRole from '../../components/section__projet/section__mon-role/section__mon-role';
import HappnHeroImage from '../../assets/happn__hero.png';
import HappnLogo from '../../assets/projet__logo_happn.png'
import SectionRechercheUX from '../../components/section__projet/section__recherche-ux/section__recherche-ux';
import Realisations from '../../components/realisations/realisations';
import Contact from '../../components/contact/contact';

const Happn = () => {
  const contexteTexte = "Happn est une application de rencontre qui utilise la géolocalisation pour mettre en relation les utilisateurs avec les personnes qu'ils ont croisées.";

  const problemeTexte = `
  <ul>
    <li>75% des utilisateurs quittent rapidement la page d'accueil.</li>
    <li>8% seulement des likes proviennent du hub de l'application.</li>
    <li>Faible interaction post-crush, avec un désintérêt rapide des utilisateurs.</li>
  </ul>
  `;

  const objectifsTexte = `
  <ul>
    <li>Augmenter le nombre de likes générés par le Hub.</li>
    <li>Inciter les utilisateurs à rester sur le Hub et à interagir davantage.</li>
    <li>Améliorer l'intérêt post-crush pour augmenter les interactions entre utilisateurs.</li>
  </ul>
  `;

  const designSteps = [
    { title: "Benchmark", description: "Analyser la concurrence pour comprendre le fonctionnement des applications de rencontre." },
    { title: "Recherche utilisateur", description: "Comprendre les besoins et les motivations des utilisateurs des applications de rencontre pour définir une problématique claire." },
    { title: "Définition du problème", description: "Formuler précisément la problématique à résoudre en se basant sur les insights collectés lors de la recherche utilisateur." },
    { title: "Idéation", description: "Imaginer des pistes de conception pour répondre à la problématique établie." },
    { title: "Prototypage", description: "Tester les premières idées auprès d’utilisateurs des applications de rencontre pour recueillir des retours et itérer sur le design." }
  ];
  
  const roleContent = `
  <ul>
    <li>Conduire des recherches utilisateurs pour identifier les points de friction et les opportunités d'amélioration.</li>
    <li>Définir les problématiques UX à résoudre.</li>
    <li>Conduire des tests utilisateurs pour valider les solutions proposées.</li>
  </ul>
  `;

  const enseignements = `
    <ul>
      <li>L’intérêt pour les profils s’estompe après le crush.</li>
      <li>Les utilisateurs ont du mal à initier et maintenir des conversations intéressantes.</li>
    </ul>
  `;

  const methode = `
    <ul>
      <li>5 entretiens téléphoniques avec des utilisateurs volontaires.</li>
    </ul>
  `;

  const questions = `
    <ul>
        <li>Comment relancer l’intérêt pour les profils après le crush ?</li>
        <li>Comment faciliter le début et le déroulement des conversations ?</li>
        <li>Comment permettre à l'utilisateur d'utiliser les informations des profils lors des discussions ?</li>
    </ul>
  `;

  const problematique = "Comment maximiser la pertinence des informations des profils, tout en améliorant l'intérêt post-crushing ?";

  const metriques = `
    <ul>
      <li>Nombre de likes générés par le Hub.</li>
      <li>Durée moyenne des interactions post-crush.</li>
      <li>Taux de satisfaction des utilisateurs.</li>
    </ul>
  `;

  return (
    <div>
      <HeroProjet
        titlePrimary="Maximiser le profil des utilisateurs"
        titleSecondary="de Happn"
        description="Lors de ma participation au projet Happn dans le cadre de la formation avancée en Discovery proposée par The Design Crew, j'ai eu l'occasion d'approfondir mes compétences en développement de fonctionnalités centrées sur l'utilisateur. Tout comme lors de mes quatre années d'expérience chez Wenabi, une plateforme SaaS BtoBtoC, ce projet m'a permis de répondre de manière ciblée aux besoins des clients tout en alignant mes actions avec les objectifs stratégiques de l'entreprise."
        imageSrc={HappnHeroImage}
        leftImageSrc={HappnLogo}
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
      <Realisations />
      <Contact />
    </div>
  );
};
export default Happn;
