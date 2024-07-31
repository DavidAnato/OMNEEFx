import React from 'react';
import logo from '../assets/images/OMNEE-FX-BLANC.png';

const Navbar: React.FC = () => {
  return (
    <div className=" mx-auto bg-white flex justify-center my-2 shadow">
      <div className="navbar lg:container bg-base-100 rounded-full sm:px-5">
        <div className="flex-1">
          <a className="">
            <img src={logo} alt="Logo" className="h-12" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal items-center lg:mr-10 text-md lg:text-lg">
            <li><a className="">Accueil</a></li>
            <li><a className="">Cours</a></li>
            <li><a className="">Nos Tarifs</a></li>
            <li><a className="">A propos</a></li>
            <li><a className="">Notre Telegram Gratuit</a></li>
          </ul>
          <div className="flex items-center space-x-1 lg:space-x-3">
            <button className="btn btn-outline btn-primary rounded-full text-md">Connexion</button>
            <button className="btn btn-primary rounded-full text-md">Contactez-nous</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




