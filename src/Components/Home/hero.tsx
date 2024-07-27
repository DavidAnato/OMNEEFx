import React from 'react';
import heroImage from '../../assets/images/161.png'; // Ensure the image is placed in the correct path
import backgroundImage from '../../assets/images/bannière-3840x2160.png';
import gridImage from '../../assets/images/grid.png';

const Hero: React.FC = () => {
  return (
    <div className='w-full p-5'>
        <div 
        className="hero text-white rounded-xl" 
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute top-20 left-5">
                <img src={gridImage} alt="Grid" className="w-full h-[600px] " />
            </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative">
            <div className="md:w-1/2 text-center md:text-left z-10 p-5 xl:p-10">
                <h1 className="text-[60px] leading-none font-bold mb-4">Commencez <br /> votre excellence <br /> en trading !</h1>
                <p className="text-lg mb-6">Bienvenue chez OMNEEFx, l'académie où commence votre parcours vers l’excellence en trading.</p>
                <a href="https://t.me/blaazofficiel" target="_blank" className="btn border-0 text-black bg-white rounded-full text-[18px] px-[45px] hover:bg-gray-100">
                    Rejoignez notre télégram gratuit
                </a>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center z-10 p-5 xl:p-10">
                <img src={heroImage} alt="Hero" className="rounded-lg shadow-lg" />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Hero;

