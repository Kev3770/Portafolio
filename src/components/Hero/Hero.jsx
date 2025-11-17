import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* ANTES: "Hola, soy Kevin Peña" - A NADIE LE IMPORTA */}
            {/* AHORA: Beneficio claro y directo */}
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Landing Pages que <span className="text-primary">Generan Clientes</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
              Para negocios locales que quieren crecer sin complicaciones
            </h2>
            
            {/* ANTES: Texto genérico sobre ti */}
            {/* AHORA: Lo que el cliente gana */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Diseño web profesional que convierte visitantes en clientes reales. 
              Sin tecnicismos, sin demoras, sin costos ocultos.
              <span className="block mt-2 font-semibold text-primary">
                ✓ Entrega en 3-5 días • ✓ Desde $150.000 • ✓ Incluye WhatsApp integrado
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#portafolio" 
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-center shadow-lg"
              >
                Ver Ejemplos de Landings
              </a>
              <a 
                href="https://wa.me/573001234567?text=Hola, quiero una landing page para mi negocio" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition font-semibold text-center"
              >
                Cotizar Mi Proyecto
              </a>
            </div>

            {/* NUEVA SECCIÓN: Prueba social básica */}
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <span className="font-bold text-2xl text-primary block">3-5 días</span>
                <span>Entrega rápida</span>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <span className="font-bold text-2xl text-primary block">100%</span>
                <span>Responsive</span>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <span className="font-bold text-2xl text-primary block">$150K+</span>
                <span>Desde</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white">
                <img 
                  src="/img/image.png" 
                  alt="Kevin Peña - Creador de Landing Pages"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* CAMBIO: Badge más relevante al negocio */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-bold">
                ✓ Disponible
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;