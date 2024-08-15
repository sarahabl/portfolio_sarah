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
        <div class="col-12 col-md-9 intro-right">
          <p className="description">
            Je transforme vos idées en produits numériques efficaces et impactants. Passionnée par les design systems et les produits à impact, je combine créativité et technologie pour vos projets. Design systems harmonieux, ateliers de facilitation, sites web sur mesure : je crée des interfaces fluides et élégantes pour une expérience utilisateur optimale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
