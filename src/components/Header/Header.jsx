import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/img/logo-personal.svg" 
              alt="Landing Pages Profesionales" 
              className="h-10 w-10"
            />
            <div>
              <span className="text-xl font-bold text-primary block">Kevin Peña</span>
              <span className="text-xs text-gray-600">Landing Pages Pro</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-dark hover:text-primary font-medium transition">
              Inicio
            </a>
            <a href="#servicios" className="text-dark hover:text-primary font-medium transition">
              Servicios
            </a>
            <a href="#portafolio" className="text-dark hover:text-primary font-medium transition">
              Ejemplos
            </a>
            <a href="#precios" className="text-dark hover:text-primary font-medium transition">
              Precios
            </a>
            <a href="#proceso" className="text-dark hover:text-primary font-medium transition">
              Proceso
            </a>
          </div>

          {/* CTA MÁS AGRESIVO */}
          <a 
            href="https://wa.me/573001234567?text=Hola, quiero una landing page para mi negocio" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-bold shadow-lg animate-pulse"
          >
            <FaWhatsapp className="text-xl" />
            Cotizar Ahora
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-dark"></span>
              <span className="block w-6 h-0.5 bg-dark"></span>
              <span className="block w-6 h-0.5 bg-dark"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-dark hover:text-primary font-medium">
              Inicio
            </a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block text-dark hover:text-primary font-medium">
              Servicios
            </a>
            <a href="#portafolio" onClick={() => setIsOpen(false)} className="block text-dark hover:text-primary font-medium">
              Ejemplos
            </a>
            <a href="#precios" onClick={() => setIsOpen(false)} className="block text-dark hover:text-primary font-medium">
              Precios
            </a>
            <a href="#proceso" onClick={() => setIsOpen(false)} className="block text-dark hover:text-primary font-medium">
              Proceso
            </a>
            <a 
              href="https://wa.me/573001234567?text=Hola, quiero una landing page" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-bold mt-4"
            >
              <FaWhatsapp />
              Cotizar por WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;