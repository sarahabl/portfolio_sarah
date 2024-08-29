import React from 'react';
import PropTypes from 'prop-types';
import './section__contexte.css';
import Tag from '../../tags/tags';
import flashIcon from '../../../assets/icon-flash.svg';
import focusIcon from '../../../assets/focus-2-line.svg';

const SectionContexte = ({ texteContexte, problemeTexte, objectifsTexte }) => {
  return (
    <div className="section-contexte__container">
      <Tag content="Contexte" />
      <p className="section-contexte__text">{texteContexte}</p>
      
      <div className="section-contexte__blocs">
        <div className="section-contexte__bloc">
          <div className="section-contexte__bloc-header">
            <img src={flashIcon} alt="Problèmes Identifiés" className="section-contexte__icon" />
            <h3 className="section-contexte__bloc-title">Problèmes identifiés</h3>
          </div>
          <div className="section-contexte__bloc-content" dangerouslySetInnerHTML={{ __html: problemeTexte }} />
        </div>

        <div className="section-contexte__bloc">
          <div className="section-contexte__bloc-header">
            <img src={focusIcon} alt="Objectifs" className="section-contexte__icon" />
            <h3 className="section-contexte__bloc-title">Objectifs</h3>
          </div>
          <div className="section-contexte__bloc-content" dangerouslySetInnerHTML={{ __html: objectifsTexte }} />
        </div>
      </div>
    </div>
  );
};

SectionContexte.propTypes = {
  texteContexte: PropTypes.string.isRequired,  // Texte principal du contexte
  problemeTexte: PropTypes.string.isRequired,  // Texte pour la section Problèmes Identifiés
  objectifsTexte: PropTypes.string.isRequired  // Texte pour la section Objectifs
};

export default SectionContexte;
