import React from 'react';
import { FaWhatsapp, FaRocket, FaClock, FaDollarSign } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border-2 border-green-300">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Disponible para nuevos proyectos
            </div>

            {/* Título principal - ULTRA CLARO */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Landing Pages que
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Generan Clientes
              </span>
            </h1>
            
            {/* Subtítulo con beneficio claro */}
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium leading-relaxed">
              Para negocios locales que necesitan <span className="font-bold text-blue-600">más ventas YA</span>
            </h2>
            
            {/* Beneficios rápidos y claros */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border-2 border-blue-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 text-blue-600 mb-1">
                    <FaClock className="text-xl" />
                    <span className="font-bold text-2xl">3-5</span>
                  </div>
                  <span className="text-gray-600 text-sm">días de entrega</span>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 text-purple-600 mb-1">
                    <FaDollarSign className="text-xl" />
                    <span className="font-bold text-2xl">$150K</span>
                  </div>
                  <span className="text-gray-600 text-sm">desde</span>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 text-green-600 mb-1">
                    <FaRocket className="text-xl" />
                    <span className="font-bold text-2xl">100%</span>
                  </div>
                  <span className="text-gray-600 text-sm">responsive</span>
                </div>
              </div>
            </div>

            {/* Lista de beneficios específicos */}
            <ul className="space-y-3 mb-8">
              {[
                'Diseño profesional que inspira confianza',
                'WhatsApp integrado para que te contacten fácil',
                'Optimizado para móvil (donde está el 70% de tus clientes)',
                'Sin mensualidades: pago único y es tuya'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            
            {/* CTAs DOBLES Y POTENTES */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/573113834058?text=Hola! Quiero una landing page para mi negocio" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-5 rounded-xl hover:bg-green-600 transition font-bold text-lg shadow-xl transform hover:scale-105 group"
              >
                <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform" />
                Cotizar Por WhatsApp
              </a>
              <a 
                href="#portafolio" 
                className="flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-5 rounded-xl hover:bg-blue-600 hover:text-white transition font-bold text-lg"
              >
                Ver Ejemplos Reales
              </a>
            </div>

            {/* Micro-prueba social */}
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600 bg-white/60 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">5.0 de satisfacción</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <span className="font-semibold">Entrega garantizada</span> en tiempo
              </div>
            </div>
          </div>

          {/* Imagen/Demo visual */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Mockup de landing page */}
              <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-20 flex items-center justify-center">
                  <span className="text-white font-bold">Mi Negocio</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-24 bg-gray-100 rounded mt-4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-12 bg-green-500 rounded-lg mt-4"></div>
                </div>
              </div>
              
              {/* Badges flotantes */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                ✓ 100% Funcional
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                ⚡ Entrega rápida
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;