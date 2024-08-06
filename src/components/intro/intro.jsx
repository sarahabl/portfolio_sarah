import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.css';
import Avatar from '../avatar/avatar';

const Intro = () => {
  return (
    <div className="container intro">
      <div className="intro-left d-none d-md-flex align-items-center">
        <Avatar />
        <span className="name">Sarah Ablonet</span>
      </div>
      <div className="intro-right">
        <p className="description">
        Je transforme vos idées en produits numériques efficaces et impactants. Passionnée par les design systems et le minimalisme, je combine créativité et technologie pour vos projets. Design systems harmonieux, ateliers d'innovation, sites web sur mesure : je crée des interfaces fluides et élégantes pour une expérience utilisateur optimale.
        </p>
      </div>
    </div>
  );
};

export default Intro;
