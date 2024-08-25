import React from 'react';
import HeroProjet from '../../components/hero__projet/hero__projet';
import DesignChallenge from '../../components/design__challenge/design__challenge';
import SectionImgRight from '../../components/section__projet/section__img-right/section__img-right';
import SectionImgLeft from '../../components/section__projet/section__img-left/section__img-left';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import taliaHeroImage from '../../assets/talia__hero.png';
import taliaSection1Image from '../../assets/talia__section1.png';
import taliaSection2Image from '../../assets/talia__section2.png';
import taliaFocusImage from '../../assets/talia__focus.png';

const Talia = () => {
  const productDesignText = `
    <strong>Planification et Recherche</strong><br/>
    J'ai commencé par une analyse approfondie des besoins des utilisateurs et des fonctionnalités attendues. Cela incluait des études de marché, l'analyse des concurrents et la définition des personas pour mieux cerner les attentes des jardiniers et maraîchers.
    <br/><br/>
    <strong>Conception des Interfaces</strong><br/>
    Le design du MVP a été orienté vers une expérience utilisateur fluide et intuitive :
    <ul>
      <li><strong>Calendriers de Semis :</strong> Fonctionnalité clé permettant aux utilisateurs de partager et consulter des calendriers géolocalisés.</li>
      <li><strong>Forum et Partage :</strong> Espaces pour échanger des observations et poser des questions, facilitant l’interaction au sein de la communauté.</li>
      <li><strong>Recherche et Filtrage :</strong> Outils permettant de trouver facilement des calendriers basés sur la localisation et les spécificités du terrain.</li>
    </ul>
    <br/>
    <strong>Prototypage et Feedback</strong><br/>
    Des prototypes interactifs ont été créés pour tester les fonctionnalités et recueillir des retours précieux des utilisateurs. Ces retours ont permis d'ajuster le design et de garantir que la plateforme réponde efficacement aux besoins des utilisateurs tout en offrant une expérience agréable.
  `;

  const brandingText = `
    <strong>Définition du Projet</strong><br/>
    Talia a été imaginée pour répondre aux besoins croissants des jardiniers et maraîchers face aux défis posés par le changement climatique. La plateforme vise à simplifier l’accès à des calendriers de semis personnalisés et à jour, en favorisant le partage d’observations et la création de liens au sein de la communauté.
    <br/><br/>
    <strong>Création du Logo</strong><br/>
    Pour le branding de Talia, j'ai développé un logo qui incarne les valeurs essentielles du projet : partage, biodynamie et nature. Le choix des couleurs et des formes visait à créer une identité visuelle qui soit à la fois chaleureuse et professionnelle.
    <br/><br/>
    <strong>Typographie et Style Graphique</strong><br/>
    La typographie choisie est à la fois moderne et accessible, avec des lettres rondes pour une touche de convivialité. Le style graphique inclut des illustrations flat avec des contours simples, pour une approche épurée et fonctionnelle.
  `;

  return (
    <div>
      <HeroProjet
        titlePrimary="L’app de"
        titleSecondary="Graines sauvages"
        description="Talia est une plateforme innovante dédiée aux passionnés de jardinage et aux maraîchers professionnels. Développée pour répondre aux défis du changement climatique, Talia permet aux utilisateurs de partager des calendriers de semis et des observations, tout en offrant un accès à des informations locales et actualisées.
Mon rôle dans ce projet a été de créer le branding de Talia et de concevoir le design du produit MVP, afin de donner vie à une plateforme à la fois pratique et attrayante."
        tags={["Branding", "Product Design"]}
        buttonText="Discutons ensemble de votre projet !"
        imageSrc={taliaHeroImage}
      />
      <DesignChallenge 
        title="Faciliter le partage d’informations avec une interface durable et engageante"
        description="Il s'agissait de créer un produit numérique parfaitement adapté aux besoins des jardiniers, qu'ils soient amateurs ou professionnels, face aux défis d’un climat changeant. L’objectif ? Développer un branding cohérent et un design fonctionnel qui incarnent l’authenticité, la collaboration et l’innovation, au service d’un jardinage durable."
      />
      <SectionImgRight 
        tag="Product Design"
        title="Conception du MVP"
        text={productDesignText}
        imageSrc={taliaSection1Image}
      />
      <SectionImgLeft 
        tag="Branding"
        title="Processus et Création"
        text={brandingText}
        imageSrc={taliaSection2Image}
      />
      <SectionLast imageSrc={taliaFocusImage} />
      <Services />
      <Contact />
    </div>
  );
};

export default Talia;
