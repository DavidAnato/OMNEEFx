import React from 'react';
import womanWorking from '../../assets/images/woman-working.png';
import icon1 from '../../assets/images/icones/1.png';
import icon2 from '../../assets/images/icones/2.png';
import icon3 from '../../assets/images/icones/3.png';
import icon4 from '../../assets/images/icones/4.png';

const OMNEEFxTrading: React.FC = () => {
  return (
    <div className="container lg:px-32 mx-auto flex flex-col lg:flex-row items-center gap-8 py-4 my-44">
      <div className="flex-1">
        <h1 className="text-5xl font-bold">Maîtrisez la bourse <br /> avec OMNEEFx</h1>
        <p className="mt-2">OMNEEFx offre des formations dynamiques, complètes, <br /> adaptées à tous les niveaux pour exceller en bourse.</p>
        <img src={womanWorking} alt="Woman working" className="mt-4 w-full mx-auto rounded" style={{ boxShadow: '-30px 30px 0px 0px #363795' }} />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 self-end">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body pt-0 text-left flex items-start">
            <img src={icon1} alt="Initiation au Trading" className="w-12 h-12 mt-4" />
            <div>
              <h2 className="card-title">Initiation au Trading</h2>
              <p>Parfait pour les débutants en trading, apprenez les bases essentielles.</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body pt-0 text-left flex items-start">
            <img src={icon2} alt="Formation Avancée" className="w-12 h-12 mt-4" />
            <div>
              <h2 className="card-title">Formation Avancée</h2>
              <p>Offre une connaissance approfondie et des outils utiles pour améliorer vos performances.</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body pt-0 text-left flex items-start">
            <img src={icon3} alt="Psychologie" className="w-12 h-12 mt-4" />
            <div>
              <h2 className="card-title">Psychologie</h2>
              <p>Maîtriser ses émotions et rester discipliné pour prendre des décisions rationnelles.</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body pt-0 text-left flex items-start">
            <img src={icon4} alt="Stratégie Rentable" className="w-12 h-12 mt-4" />
            <div>
              <h2 className="card-title">Stratégie Rentable</h2>
              <p>Analyse des marchés, gestion du risque, discipline pour maximiser les gains.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OMNEEFxTrading;
