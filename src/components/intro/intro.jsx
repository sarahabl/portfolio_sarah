import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.css';
import Avatar from '../avatar/avatar';

const Intro = () => {
  return (
    <div className="container intro">
      <div className="row">
        <div className="col-12 col-md-2 intro-left d-flex align-items-center">
          <Avatar />
          <span className="name">Sarah Ablonet</span>
        </div>
        <div className="col-12 col-md-10 intro-right">
          <p className="description">
          Avec une expertise en design systems et une passion pour le minimalisme, je vous aide à créer des solutions sur mesure qui marquent les esprits. Que vous ayez besoin d’un design system cohérent, d’ateliers efficaces ou d’un site web qui se distingue, je vous propose des interfaces élégantes et intuitives pour optimiser l’expérience utilisateur et faire briller votre entreprise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
