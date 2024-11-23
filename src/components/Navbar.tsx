import React from "react";
import Logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white rounded">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-center sm:justify-between items-center">
        <div>
          <img className="w-[150px]" src={ Logo }/>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-primary transition-all hover:text-primary-light hover:shadow-inner shadow-black px-2 rounded">
              About
            </a>
          </li>
          <li>
            <a href="#expertise" className="text-primary transition-all hover:text-primary-light hover:shadow-inner shadow-block px-2 rounded">
              Expertise
            </a>
          </li>
          <li>
            <a href="#contact" className="text-primary transition-all hover:text-primary-light hover:shadow-inner shadow-black px-2 rounded">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
