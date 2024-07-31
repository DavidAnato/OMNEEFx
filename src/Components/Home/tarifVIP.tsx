import React from 'react';
import vipImage from '../../assets/images/vip-tariff.png';
import bulletPoint from '../../assets/images/icones/puce2.png';

const TarifVIP: React.FC = () => {
  return (
    <div className='mt-32'>
    <h1 className="text-4xl font-bold text-center mb-8">Découvrez les Tarifs <br />OMNEE VIP</h1>
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 rounded-lg bg-blue-100 min-h-[600px]">
      <div className="flex-1 ">
        <div className="px-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-red-200 p-2 rounded-lg text-primary" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>OMNEE PLATINUM</h2>
          <div className='text-center mt-3 mb-5' >

          <p className="text-center text-6xl font-bold text-secondary pb-0"> <span className='text-xl align-top'>$</span>150 <br /> </p><span className='text-black  text-xl font-bold'>/ans</span>
          </div>

          <ul className="list-none text-md">
            <li className="mb-2 flex items-start">
              <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1" />
              <span className="text-primary"><b>Avoir une bonne base en trading : </b> Pour comprendre les analyses que nous envoyons.</span>
            </li>
            <li className="mb-2 flex items-start">
              <img src={bulletPoint} alt="Bullet point" className="mr-2 w-4 h-4 mt-1 pr-[2px]" />
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
              <a href="mailto:omneefx@gmail.com" className="btn btn-primary rounded-full w-full">Ça m’intéresse</a>
              {/* <a href="https://t.me/blaazofficiel" target="_blank" className="btn btn-ghost rounded-full w-full text-primary">Contactez-nous via Telegram</a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-primary flex justify-center items-end rounded-lg min-h-[600px]">
        <img src={vipImage} alt="OMNEE VIP Tariff" className="w-[550px] mb-2 mx-auto rounded" />
      </div>
    </div>
    </div>
  );
};

export default TarifVIP;
