import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import ProcessDesign from '../../components/process-design/process-design';
import SectionContexte from '../../components/section__projet/section__contexte/section__contexte';
import SectionMonRole from '../../components/section__projet/section__mon-role/section__mon-role';
import wenabiHeroImage from '../../assets/wenabi__hero.png';
import wenabiLogo from '../../assets/projet__logo_wenabi.png'
import SectionImgLeft from '../../components/section__projet/section__img-left/section__img-left';
import SectionImgRight from '../../components/section__projet/section__img-right/section__img-right';
import SectionRechercheUX from '../../components/section__projet/section__recherche-ux/section__recherche-ux';
import Realisations from '../../components/realisations/realisations';
import Contact from '../../components/contact/contact';
import wenabiSection1Image from '../../assets/wenabi__section1.png';
import wenabiSection2Image from '../../assets/wenabi__section2.png';
import wenabiSection3Image from '../../assets/wenabi__section3.png';

const Wenabi = () => {
  const contexteTexte = "Wenabi est une plateforme de bénévolat visant à faciliter la mise en relation entre entreprises et associations. L'objectif principal est d'augmenter l'engagement des employés dans des actions bénévoles en rendant la plateforme plus inspirante et accessible.";

  const problemeTexte = `
  <ul>
    <li>Mauvais guidage vers les éléments-clés du programme.</li>
    <li>Certaines fonctionnalités peu utilisées ou mal comprises.</li>
    <li>Formats de missions incompris et peu inspirants.</li>
    <li>Contenu peu accessible et engageant.</li>
    <li>Interface jugée peu moderne.</li>
    <li>Pages de connexion peu engageantes.</li>
    <li>Difficulté d'accès aux documents et ressources légales.</li>
    <li>Fonctionnalité "collection" non scalable pour les temps forts.</li>
    <li>Manque de clarté sur la démarche de l'employeur pour 62% des collaborateurs engagés.</li>
  </ul>
  `;

  const objectifsTexte = `
  <ul>
    <li>Augmenter l'engagement et la participation des collaborateurs.</li>
    <li>Faciliter la recherche et l'inscription aux missions bénévoles.</li>
    <li>Améliorer l'expérience utilisateur globale pour rendre la navigation plus intuitive.</li>
  </ul>
  `;

  const designSteps = [
    { title: "Benchmark", description: "Analyser la concurrence pour comprendre le fonctionnement des applications de rencontre." },
    { title: "Recherche utilisateur", description: "Comprendre les besoins et les motivations des utilisateurs des applications de rencontre pour définir une problématique." },
    { title: "Idéation", description: "Imaginer des pistes de conception pour répondre à la problématique déterminée." },
    { title: "Prototypage V1 & tests", description: "Prototyper les premières idées et les tester auprès d’utilisateurs des applications de rencontre." },
    { title: "Restitution & itérations", description: "Présenter toutes les étapes de conception et les fonctionnalités finales et penser aux améliorations futures." }
  ];
  
  const roleContent = `
  <ul>
    <li>Conduire des recherches utilisateurs pour identifier les points de friction et les opportunités d'amélioration.</li>
    <li>Définir les problématiques UX à résoudre.</li>
    <li>Participer à l'idéation et à la création de prototypes.</li>
    <li>Conduire des tests utilisateurs pour valider les solutions proposées.</li>
    <li>Collaborer avec les équipes de développement pour implémenter les solutions.</li>
  </ul>
  `;

  const enseignements = `
    <ul>
      <li><strong>Guidage :</strong> Le calendrier, le fil d’actualité et le compteur temps sont sous-utilisés.</li><br />
      <li><strong>Recherche de missions :</strong> 54% des collaborateurs préfèrent les missions par thématique, 25% par compétences, et 15% recherchent des défis en équipe.</li><br />
      <li><strong>Complexité :</strong> L’offre de missions est trop dense et les options de recherche trop détaillées, rendant la plateforme complexe.</li><br />
      <li><strong>Benchmark :</strong> La plateforme est fonctionnelle mais manque de "wow effect". Les emails automatiques sont incohérents et non adaptés au mobile.</li><br />
      <li><strong>Témoignages :</strong> 60% des collaborateurs souhaitent des témoignages sur les réseaux sociaux qu'ils utilisent.</li><br />
      <li><strong>Pages de connexion :</strong> Les écrans de connexion pour les clients sans vitrine et sans SSO sont peu engageants.</li><br />
      <li><strong>Ressources légales :</strong> Peu visibles ou difficiles d'accès.</li><br />
      <li><strong>Fonctionnalité "collection" :</strong> Doit être dupliquée pour chaque client et langue.</li>
    </ul>
  `;

  const methode = `
    <ul>
      <li>10 entretiens avec des collaborateurs volontaires.</li>
      <li>6 entretiens avec des administrateurs entreprises.</li>
      <li>54 réponses au questionnaire semi-directif partagé à tous les clients.</li>
    </ul>
  `;

  const questions = `
    <ul>
      <li>Comment améliorer le guidage vers les éléments-clés du programme ?</li>
      <li>Comment rendre les fonctionnalités plus compréhensibles et utilisées ?</li>
      <li>Comment rendre les formats de missions plus inspirants ?</li>
      <li>Comment rendre le contenu plus accessible et engageant ?</li>
      <li>Comment moderniser l’interface et valoriser les témoignages ?</li>
      <li>Comment rendre les pages de connexion plus engageantes ?</li>
      <li>Comment rendre la fonctionnalité "collection" scalable ?</li>
    </ul>
  `;

  const problematique = "Comment rendre la plateforme Wenabi plus inspirante et accessible, tout en simplifiant la navigation et en augmentant l'engagement des utilisateurs ?";

  const metriques = `
    <ul>
      <li>Taux d'engagement des utilisateurs.</li>
      <li>Nombre d'inscriptions aux missions.</li>
      <li>Taux de satisfaction des utilisateurs.</li>
    </ul>
  `;

  const section1 = `
    <ul>
      <li>Simplification des options de recherche et regroupement par thématiques et compétences, rendant la plateforme moins complexe et plus inspirante.</li>
      <li>Modernisation de l’interface et refonte des emails pour une meilleure cohérence et adaptabilité mobile, augmentant l'attrait visuel et la praticité.</li>
    </ul>
  `;

  const section2 = `
  <ul>
    <li>Mise en valeur des témoignages sur les réseaux sociaux et amélioration des pages de connexion pour une première impression engageante.</li>
    <li>Réorganisation des documents et ressources légales pour une meilleure visibilité et accessibilité.</li>
    <li>Développement de collections dynamiques permettant de déployer des ensembles de missions cohérents en quelques clics, facilitant la gestion et l'engagement des utilisateurs.</li>
  </ul>
`;

const section3 = `
Lors de mon passage chez Wenabi, j'ai participé au développement d'un design system complet, visant à améliorer la cohérence et l'accélération des processus de développement.
<br />
<br />

Mes contributions principales ont inclus :
<ul>
  <li>Benchmark</li>
  <li>Actualisation des variables de design pour garantir une uniformité à travers les interfaces</li>
</ul>
`;

  return (
    <div>
      <HeroProjet
        titlePrimary="Redéfinir l'engagement collaborateur"
        titleSecondary="de wenabi"
        description="Wenabi est une plateforme SaaS innovante destinée à faciliter l'engagement collaborateur et les dons associatifs. Mon rôle en tant que Product Designer a été d'optimiser l'expérience utilisateur tout au long du parcours de la plateforme, en intégrant des solutions centrées sur les besoins des utilisateurs et en contribuant à la mise en place d'un design system cohérent."
        tags={["Product Design", "Design System"]}
        imageSrc={wenabiHeroImage}
        leftImageSrc={wenabiLogo}
      />
      <SectionContexte
        texteContexte={contexteTexte}
        problemeTexte={problemeTexte}
        objectifsTexte={objectifsTexte}
      />
      <ProcessDesign
        steps={designSteps}
        tagContent="Processus de design" />
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
        title="Proposer des moyens pour optimiser la pertinence des recommandations"
        text={section1}
        imageSrc={wenabiSection1Image}
      />
      <SectionImgLeft 
        text={section2}
        imageSrc={wenabiSection2Image}
        buttonText="Découvrez comment je transforme les produits"
        buttonLink="/services/product-design"
      />
      <SectionImgRight 
        tag="Design System"
        title="Développement d'un design system complet"
        text={section3}
        imageSrc={wenabiSection3Image}
        buttonText="Découvrez mon approche en design system"
        buttonLink="/services/design-system"
        style={{ background: 'linear-gradient(180deg, #FFF 0%, #F9F6EB 100%)' }} 
      />
      <Realisations />
      <Contact />
    </div>
  );
};

export default Wenabi;
