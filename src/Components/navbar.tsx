import React, { useState } from 'react';
import logo from '../assets/images/OMNEE-FX-BLANC.png';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="mx-auto bg-white flex justify-center my-2 shadow sticky top-0 z-50">
      <div className="navbar lg:container bg-base-100 rounded-full sm:px-5">
        <div className="flex-1">
          <a href="/" className="">
            <img src={logo} alt="Logo" className="h-12" />
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown" onClick={toggleDropdown}>
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            {dropdownOpen && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute lg:static right-0 z-50">
                <li><a href="/" className="">Accueil</a></li>
                <li><a href="/cours" className="">Cours</a></li>
                <li><a href="/tarifs" className="">Nos Tarifs</a></li>
                <li><a href="/about" className="">A propos</a></li>
                <li><a href="/telegram" className="">Notre Telegram Gratuit</a></li>
                <li>
                  <div className="flex flex-col space-y-2 mt-2">
                    <button className="btn btn-outline btn-primary rounded-full text-md btn-sm">Connexion</button>
                    <button className="btn btn-primary rounded-full text-md btn-sm">Contactez-nous</button>
                  </div>
                </li>
              </ul>
            )}
          </div>
          <div className="hidden lg:flex items-center lg:mr-10">
            <ul className="menu menu-horizontal items-center text-md lg:text-[18px]">
              <li><a href="/" className="">Accueil</a></li>
              <li><a href="/cours" className="">Cours</a></li>
              <li><a href="/tarifs" className="">Nos Tarifs</a></li>
              <li><a href="/about" className="">A propos</a></li>
              <li><a href="/telegram" className="">Notre Telegram Gratuit</a></li>
            </ul>
            <div className="flex items-center space-x-1 lg:space-x-3">
              <button className="btn btn-outline btn-primary rounded-full text-md btn-sm py-2 px-7">Connexion</button>
              <button className="btn btn-primary rounded-full text-md btn-sm py-2 px-7">Contactez-nous</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
