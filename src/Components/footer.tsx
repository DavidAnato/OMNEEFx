// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
    <div className="bg-primary text-white p-10 lg:px-64 pt-64">
      <div className="container mx-100 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 mr-10">
          <h2 className="text-2xl font-bold">OMNEEFx</h2>
          <p className="mt-2">OMNEEFx offre des formations de trading pour tous les niveaux. Rejoignez-nous pour maîtriser la bourse.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-yellow-400 rounded-full p-2 w-8 h-8 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"><i className="fab fa-facebook-f fa-lg text-black"></i></a>
            <a href="#" className="bg-yellow-400 rounded-full p-2 w-8 h-8 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"><i className="fab fa-instagram fa-lg text-black"></i></a>
            <a href="#" className="bg-yellow-400 rounded-full p-2 w-8 h-8 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"><i className="fab fa-twitter fa-lg text-black"></i></a>
            <a href="#" className="bg-yellow-400 rounded-full p-2 w-8 h-8 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"><i className="fab fa-whatsapp fa-lg text-black"></i></a>
            <a href="https://t.me/blaazofficiel" className="bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"><i className="fab fa-telegram fa-2xl text-yellow-400"></i></a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="font-bold mb-2">Explorer</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white"><i className="fas fa-caret-right text-yellow-400"></i> Page d'accueil</a></li>
            <li><a href="#" className="text-white"><i className="fas fa-caret-right text-yellow-400"></i> Notre Société</a></li>
            <li><a href="#" className="text-white"><i className="fas fa-caret-right text-yellow-400"></i> Nos Tarifs</a></li>
            <li><a href="#" className="text-white"><i className="fas fa-caret-right text-yellow-400"></i> Nos Cours</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="font-bold mb-2">Entrer en contact</h3>
          <p>omneefx@gmail.com</p>
          <p>+1 (650) 555-0111</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="font-bold mb-2">Localisation</h3>
          <p>250 Executive Park Blvd, Suite 3400</p>
          <p>San Francisco CA 94134</p>
          <p>États-Unis</p>
        </div>
      </div>
    </div>
      <div className="text-center bg-secondary py-4 text-white">
        <p>Copyright 2024 © OMNEEFx</p>
      </div>
    </footer>
  );
};

export default Footer;
