import React from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Branding */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/img/logo-personal.svg" 
                alt="Landing Pages Profesionales" 
                className="h-10 w-10"
              />
              <div>
                <span className="text-xl font-bold block">Kevin Peña</span>
                <span className="text-sm text-gray-400">Landing Pages Pro</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creador de landing pages profesionales para negocios locales en Popayán y Colombia.
            </p>
          </div>

          {/* Columna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="text-gray-400 hover:text-white transition">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-400 hover:text-white transition">
                  Precios
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-gray-400 hover:text-white transition">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <FaWhatsapp className="text-xl" />
                <span>+57 300 123 4567</span>
              </a>
              <a 
                href="mailto:kpenaramirez145@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <FaEnvelope className="text-xl" />
                <span>kpenaramirez145@gmail.com</span>
              </a>
              <a 
                href="https://instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition"
              >
                <FaInstagram className="text-xl" />
                <span>@tu_instagram</span>
              </a>
            </div>

            {/* CTA en Footer */}
            <a 
              href="https://wa.me/573001234567?text=Hola, quiero cotizar una landing page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold mt-6"
            >
              <FaWhatsapp />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Kevin Peña - Landing Pages Profesionales
            </p>
            <p className="text-gray-400 text-sm">
              Popayán, Cauca - Colombia 🇨🇴
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;