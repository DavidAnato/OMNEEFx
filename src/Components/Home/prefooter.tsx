import React from 'react';
import backgroundImage from '../../assets/images/prefooter-bg.png';

const Prefooter: React.FC = () => {
  return (
    <div className='px-4 transform translate-y-40'>
        <div
        className="relative flex items-center justify-center min-h-[500px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-center text-white lg:px-80">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Transformez Vos Ambitions en Succès Trading</h1>
            <p className="text-lg md:text-xl mb-8 px-8">Commencez votre parcours de succès en trading avec OMNEEFx dès aujourd'hui. Inscrivez-vous maintenant !</p>
            <a href="mailto:omneefx@gmail.com" className="btn btn-primary btn-lg rounded-full px-16">Nous contacter</a>
        </div>
        </div>
    </div>
  );
};

export default Prefooter;


