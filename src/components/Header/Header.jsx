import React from 'react';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Logo - Elige uno de los 3 */}
            <img 
              src="/img/logo-personal.svg" 
              alt="Kevin Peña - Desarrollador Full Stack" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-primary">Kevin Peña</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-dark hover:text-primary font-medium transition">Inicio</a>
            <a href="#servicios" className="text-dark hover:text-primary font-medium transition">Servicios</a>
            <a href="#tecnologias" className="text-dark hover:text-primary font-medium transition">Tecnologías</a>
            <a href="#portafolio" className="text-dark hover:text-primary font-medium transition">Portafolio</a>
            <a href="#contacto" className="text-dark hover:text-primary font-medium transition">Contacto</a>
          </div>

          <a href="#contacto" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Contáctame
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
