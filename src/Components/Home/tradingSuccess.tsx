import React from 'react';
import tradingSuccessImage from '../../assets/images/trading-success.png';
import bulletPoint from '../../assets/images/icones/puce.png';

const TradingSuccess: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 p-4 pt-20">
      <div className="flex-1 px-10">
        <img src={tradingSuccessImage} alt="Trading Success" className="w-full mx-auto rounded" />
      </div>
      <div className="flex-1 px-10">
        <h2 className="text-3xl font-bold">Nous croyons que la réussite en trading repose sur</h2>
        <ul className="mt-4 list-none">
          <li className="mb-2 flex items-start mt-4">
            <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
            <span> <b>La maîtrise technique solide :</b> Développez des compétences techniques approfondies et fiables.</span>
          </li>
          <li className="mb-2 flex items-start mt-4">
            <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
            <span> <b>La gestion émotionnelle efficace : </b> Apprenez à gérer vos émotions pour prendre des décisions de trading éclairées.</span>
          </li>
          <li className="mb-2 flex items-start mt-4">
            <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
            <span> <b> La discipline inébranlable : </b> Maintenez une approche disciplinée et rigoureuse pour atteindre vos objectifs de trading.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TradingSuccess;
