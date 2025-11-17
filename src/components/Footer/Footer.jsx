import React from 'react';
import { FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3 text-2xl font-bold text-light mb-2">
              <img 
                src="/img/logo-personal.svg" 
                alt="Kevin Peña - Desarrollador Full Stack" 
                className="h-8 w-8"
              />
              <span>Kevin Peña</span>
            </div>
            <p className="text-gray-400">Desarrollador Full Stack</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Kev3770" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:kpenaramirez145@gmail.com" 
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Hecho con</span>
            <FaHeart className="text-red-500" />
            <span>por Kevin Peña © {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
