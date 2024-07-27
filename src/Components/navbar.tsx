import React from 'react';
import logo from '../assets/images/OMNEE-FX-BLANC.png';

const Navbar: React.FC = () => {
  return (
    <div className=" mx-auto bg-white flex justify-center my-2 shadow">
      <div className="navbar container bg-base-100 rounded-full">
        <div className="flex-1">
          <a className="">
            <img src={logo} alt="Logo" className="h-12" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-5 mr-20 text-md">
            <li><a className="text-lg">Accueil</a></li>
            <li><a className="text-lg">Cours</a></li>
            <li><a className="text-lg">A propos</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="btn btn-outline btn-primary rounded-full text-md">Connexion</button>
            <button className="btn btn-primary rounded-full text-md">Contactez-nous</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




