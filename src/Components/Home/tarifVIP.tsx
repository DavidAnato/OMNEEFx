import React from 'react';
import vipImage from '../../assets/images/vip-tariff.png';
import bulletPoint from '../../assets/images/icones/puce2.png';

const TarifVIP: React.FC = () => {
  return (
    <div className='mt-32'>
    <h1 className="text-4xl font-bold text-center mb-8">Découvrez les Tarifs <br />OMNEE VIP</h1>
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 rounded-lg bg-blue-100 min-h-[500px]">
      <div className="flex-1 ">
        <div className="px-20">
          <h2 className="text-2xl font-extrabold text-center mb-4 bg-red-200 p-4 rounded-lg text-primary" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>OMNEE PLATINUM</h2>
          <ul className="list-none">
            <li className="mb-2 flex items-start">
              <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
              <span className="text-primary"><b>Avoir une bonne base en trading : </b> Pour comprendre les analyses que nous envoyons.</span>
            </li>
            <li className="mb-2 flex items-start">
              <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
              <span className="text-primary"><b>Maitriser l'analyse technique & Plateformes de Trading.</b></span>
            </li>
            <li className="mb-2 flex items-start">
              <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
              <span className="text-primary"><b>Avoir un bon money management : </b>Important pour protéger son capital.</span>
            </li>
            <li className="mb-2 flex items-start">
              <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
              <span className="text-primary"><b>Avoir une bonne psychologie : </b>Important pour ne pas faire n'importe quoi sur les marchés.</span>
            </li>
          </ul>
          <div className="mt-6 text-center">
            <div className="flex flex-col items-center w-full">
              <a href="mailto:omneefx@gmail.com" className="btn btn-primary rounded-full w-full">Contactez-nous par mail</a>
              <a href="https://t.me/blaazofficiel" target="_blank" className="btn btn-ghost rounded-full w-full text-primary">Contactez-nous via Telegram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-primary flex justify-center items-end rounded-lg min-h-[500px]">
        <img src={vipImage} alt="OMNEE VIP Tariff" className="w-[450px] mb-2 mx-auto rounded" />
      </div>
    </div>
    </div>
  );
};

export default TarifVIP;
