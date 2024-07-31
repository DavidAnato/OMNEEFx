import React from 'react';
import platinumIcon from '../../assets/images/icones/platinum-icon.png';
import goldIcon from '../../assets/images/icones/gold-icon.png';
import silverIcon from '../../assets/images/icones/silver-icon.png';
import bulletPoint from '../../assets/images/icones/puce2.png';

const Tarif: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto container">
        <h2 className="text-center text-5xl font-bold mb-6">Découvrez nos tarifs</h2>
        <p className="text-center text-xl mb-12 lg:px-80">Des tarifs compétitifs pour des formations de qualité, adaptées à tous les niveaux de trading.</p>
        <div className="flex flex-wrap">
          {/* OMNEE PLATINUM */}
          <div className="w-full sm:w-1/3 px-1">
            <div className="bg-white p-5 rounded-l-lg h-full flex flex-col">
              <div className="mb-6 flex justify-between items-end">
                <img src={platinumIcon} alt="Platinum Icon" className="w-14 h-14" />
                <div>
                    <span className="bg-secondary text-white py-1 px-2 rounded uppercase">Populaire</span>
                </div>
              </div>
              <ul className="mb-3">
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-6 h-6 mt-1" />
                  <span><strong className="text-primary">Publique cible:</strong> Traders de tous niveaux cherchant une formation complète et un accompagnement continu.</span>
                </li>
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-6 h-6 mt-1" />
                  <span><strong className="text-primary">Objectif:</strong> Offrir une expérience de formation exhaustive et un support continu pour exceller dans le trading.</span>
                </li>
              </ul>
              <p className="text-center text-6xl font-bold text-secondary mt-3 mb-5"> <span className='text-xl align-top'>$</span>500</p>
              <h3 className="text-4xl font-bold text-center mb-3 bg-red-200 p-2 rounded-lg text-primary" style={{ backgroundColor: 'rgba(255, 0, 0, 0.05)' }}>OMNEE PLATINUM</h3>
              <ul className="mb-3 bg-gray-50 p-3 rounded-lg flex-grow">
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
                  <span><strong className="text-primary">Introduction Exclusive:</strong> Présentation personnalisée, objectifs spécifiques.</span>
                </li>
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
                  <span><strong className="text-primary">Analyse Technique Complète:</strong> De la base à l'avancée, logiciels d'analyse premium.</span>
                </li>
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
                  <span><strong className="text-primary">Analyse Fondamentale Approfondie:</strong> Rapports financiers et économiques, indicateurs macroéconomiques.</span>
                </li>
                <div className="text-center mt-3">
                  <button className="btn btn-sm btn-outline btn-primary rounded-lg px-12">Lire plus</button>
                </div>
              </ul>
              <a href="mailto:omneefx@gmail.com" className="btn btn-primary rounded-full w-full">Contactez-nous par mail</a>
              <a href="https://t.me/blaazofficiel" target="_blank" className="btn btn-ghost rounded-full w-full text-primary">Contactez-nous via Telegram</a>
            </div>
          </div>
          {/* OMNEE GOLD */}
          <div className="w-full sm:w-1/3 px-1">
            <div className="bg-primary text-white p-5 rounded-lg h-full flex flex-col transform scale-105">
              <div className="mb-6 flex justify-between items-end">
                <img src={goldIcon} alt="Gold Icon" className="w-14 h-14" />
              </div>
              <ul className="mb-3">
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-6 h-6 mt-1"  style={{ filter: 'brightness(0) invert(1)' }}/>
                  <span><strong className="text-white">Publique cible:</strong> Traders de tous niveaux cherchant une formation complète et un accompagnement continu.</span>
                </li>
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-6 h-6 mt-1"  style={{ filter: 'brightness(0) invert(1)' }}/>
                  <span><strong className="text-white">Objectif:</strong> Offrir une expérience de formation exhaustive et un support continu pour exceller dans le trading.</span>
                </li>
              </ul>
              <p className="text-center text-6xl font-bold text-white mt-3 mb-5"> <span className='text-xl align-top'>$</span>250</p>
              <h3 className="text-4xl font-bold text-center mb-3 bg-blue-800 p-2 rounded-lg text-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>OMNEE GOLD</h3>
              <ul className="mb-3 p-3 rounded-lg flex-grow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                <li className="mb-1 flex items-start">
                <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" style={{ filter: 'brightness(0) invert(1)' }} />
                <span><strong className="text-white">Analyse Technique Complète:</strong> De la base à l'avancée, logiciels d'analyse premium.</span>
                </li>
                <li className="mb-1 flex items-start">
                <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" style={{ filter: 'brightness(0) invert(1)' }} />
                <span><strong className="text-white">Analyse Fondamentale Approfondie:</strong> Rapports financiers et économiques, indicateurs macroéconomiques.</span>
                </li>
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" style={{ filter: 'brightness(0) invert(1)' }} />
                  <span><strong className="text-white">Introduction Exclusive:</strong> Présentation personnalisée, objectifs spécifiques.</span>
                </li>
                <div className="text-center mt-3">
                  <button className="btn btn-sm btn-outline btn-white rounded-lg px-12">Lire plus</button>
                </div>
              </ul>
              <a href="mailto:omneefx@gmail.com" className="btn border-0 text-black bg-white rounded-full text-lg hover:bg-gray-100 w-full">Contactez-nous par mail</a>
              <a href="https://t.me/blaazofficiel" target="_blank" className="btn btn-ghost rounded-full w-full text-white">Contactez-nous via Telegram</a>
            </div>
          </div>
          {/* OMNEE SILVER */}
          <div className="w-full sm:w-1/3 px-1">
            <div className="bg-white p-5 rounded-r-lg h-full flex flex-col">
              <div className="mb-6 flex justify-between items-end">
                <img src={silverIcon} alt="Silver Icon" className="w-14 h-14" />
              </div>
              <ul className="mb-3">
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 pr-1 w-6 h-6 mt-1" />
                  <span><strong className="text-primary">Publique cible:</strong> Traders de tous niveaux cherchant une formation complète et un accompagnement continu.</span>
                </li>
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-6 h-6 mt-1" />
                  <span><strong className="text-primary">Objectif:</strong> Offrir une expérience de formation exhaustive et un support continu pour exceller dans le trading.</span>
                </li>
              </ul>
              <p className="text-center text-6xl font-bold text-secondary mt-3 mb-5"> <span className='text-xl align-top'>$</span>150</p>
              <h3 className="text-4xl font-bold text-center mb-3 bg-red-200 p-2 rounded-lg text-primary" style={{ backgroundColor: 'rgba(255, 0, 0, 0.05)' }}>OMNEE SILVER</h3>
              <ul className="mb-3 bg-gray-50 p-3 rounded-lg flex-grow">
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
                  <span><strong className="text-primary">Introduction Exclusive:</strong> Présentation personnalisée, objectifs spécifiques.</span>
                </li>
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
                  <span><strong className="text-primary">Analyse Technique Complète:</strong> De la base à l'avancée, logiciels d'analyse premium.</span>
                </li>
                <li className="mb-1 flex items-start">
                  <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
                  <span><strong className="text-primary">Analyse Fondamentale Approfondie:</strong> Rapports financiers et économiques, indicateurs macroéconomiques.</span>
                </li>
                <div className="text-center mt-3">
                  <button className="btn btn-sm btn-outline btn-primary rounded-lg px-12">Lire plus</button>
                </div>
              </ul>
              <a href="mailto:omneefx@gmail.com" className="btn btn-primary rounded-full w-full">Contactez-nous par mail</a>
              <a href="https://t.me/blaazofficiel" target="_blank" className="btn btn-ghost rounded-full w-full text-primary">Contactez-nous via Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
