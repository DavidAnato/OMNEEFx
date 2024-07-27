import React from 'react';
import tradingImage1 from '../../assets/images/trading1.png';
import tradingImage2 from '../../assets/images/trading2.png';
import tradingImage3 from '../../assets/images/trading3.png';
import tradingImage4 from '../../assets/images/trading4.png';
import trapezeImage from '../../assets/images/trapeze.png';

const TradingDef: React.FC = () => {
  return (

    <div className="my-10 flex justify-center lg:px-48 bg-red-700 text-white relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img src={trapezeImage} alt="Trapeze" className="h-[200px]" style={{ opacity: 0.7 }} />
        </div>
        <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2 p-5">
                    <h2 className="text-5xl font-bold mb-4">Qu'est-ce que le Trading ?</h2>
                    <p className="text mb-4">
                    Le trading, veut simplement dire commerce. C'est l'activité d'achat et de vente d'actifs sur les marchés boursiers. C'est exactement le même principe qu'un commerce conventionnelle où on achète puis revend des articles pour se faire une plus value ou bénéfices si vous voulez, seulement qu'ici tout se fait en ligne. Vous pouvez acheter de l'or en ligne, du sucre en ligne, du pétrole en ligne. Tous ces actifs sont stockés en ligne et lorsque vous désirez les revendre, la vente se fait également en ligne.
                    </p>
                    <p className="text">
                    Alors, ce que vous devez savoir, les marchés boursiers peuvent être comparés à un supermarché avec plusieurs rayons parmi lesquels nous pouvons citer les actions, les obligations, les devises, les matières premières, les indices, et les produits dérivés comme les options et les contrats à terme. L'objectif principal du trading est de réaliser des marges bénéficiaires en capitalisant sur les diverses fluctuations des prix de ces actifs.
                    </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-6 pr-10">
                    <div className="transform translate-y-5">
                        <img src={tradingImage1} alt="Trading Image 1" className="rounded-lg shadow-md mb-6" />
                        <img src={tradingImage3} alt="Trading Image 3" className="rounded-lg shadow-md" />
                    </div>
                    <div className="transform -translate-y-5">
                        <img src={tradingImage2} alt="Trading Image 4" className="rounded-lg shadow-md mb-6" />
                        <img src={tradingImage4} alt="Trading Image 4" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TradingDef;
