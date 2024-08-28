import React from 'react';
import PropTypes from 'prop-types';
import './section__recherche-ux.css';
import Tag from '../../tags/tags';
import graduationCapIcon from '../../../assets/graduation-cap-fill.svg';
import questionIcon from '../../../assets/question-fill.svg';
import heartIcon from '../../../assets/heart-fill.svg';

const SectionRechercheUX = ({ textContent, enseignements, methode, questions, problematique, metriques }) => {
  return (
    <div className="section-recherche-ux">
      <div className="section-header" style={{ gap: '40px', padding: '4%' }}>
        <Tag content="Nos enseignements de la recherche utilisateurs" />
        {textContent && <p className="section-text">{textContent}</p>}
      </div>
      
      <div className="row">
        {/* Colonne gauche : Bloc 1 */}
        <div className="col-md-6 col-lg-6 section-block-container">
          <div className="section-block beige-background">
            <div className="d-flex align-items-center">
              <img src={graduationCapIcon} alt="Graduation Cap" className="icon" />
              <h3>Nos enseignements selon les utilisateurs interrogés</h3>
            </div>
            <div className="section-text" dangerouslySetInnerHTML={{ __html: enseignements }} />
          </div>
        </div>
        {/* Colonne droite : Blocs 2 et 3 en colonne */}
        <div className="col-md-6 col-lg-6 section-block-container">
          <div className="section-block pink-background">
            <h3>La méthode suivie</h3>
            <div className="section-text" dangerouslySetInnerHTML={{ __html: methode }} />
          </div>
          <div className="section-block beige-background">
            <div className="d-flex align-items-center">
              <img src={questionIcon} alt="Question" className="icon" />
              <h3>Les questions que soulèvent ces enseignements</h3>
            </div>
            <div className="section-text" dangerouslySetInnerHTML={{ __html: questions }} />
          </div>
        </div>
      </div>
      
      <div className="row section-footer" style={{ gap: '40px', marginTop: '40px' }}>
        <Tag content="Définition de la problématique"/>
        <div className="col-md-6 section-block-container">
          <div className="section-block green-background">
            <p className="section-text white-text">{problematique}</p>
          </div>
        </div>
        <div className="col-md-6 section-block-container">
          <div className="section-block beige-background">
            <div className="d-flex align-items-center">
              <img src={heartIcon} alt="Heart" className="icon" />
              <h3>Métriques à impacter</h3>
            </div>
            <div className="section-text" dangerouslySetInnerHTML={{ __html: metriques }} />
          </div>
        </div>
      </div>
    </div>
  );
};

SectionRechercheUX.propTypes = {
  textContent: PropTypes.string,
  enseignements: PropTypes.string.isRequired,
  methode: PropTypes.string.isRequired,
  questions: PropTypes.string.isRequired,
  problematique: PropTypes.string.isRequired,
  metriques: PropTypes.string.isRequired,
};

export default SectionRechercheUX;
