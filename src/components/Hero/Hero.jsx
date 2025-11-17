import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Hola, soy <span className="text-primary">Kevin Peña</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary mb-6 font-semibold">
              Desarrollador Full Stack
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desarrollador especializado en crear soluciones web modernas y E-commerce. 
              Apasionado por enseñar programación desde lo básico hasta niveles avanzados. 
              Combino creatividad y tecnología para impulsar tu presencia digital.
            </p>
            <div className="flex space-x-4">
              <a href="#portafolio" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Ver Proyectos
              </a>
              <a href="#contacto" className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition font-semibold">
                Contáctame
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white">
                {/* Reemplaza "foto-kevin.jpg" con el nombre exacto de tu archivo */}
                <img 
                  src="/img/image.png" 
                  alt="Kevin Peña - Desarrollador Full Stack"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
