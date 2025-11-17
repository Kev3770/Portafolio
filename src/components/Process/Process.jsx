import React from 'react';
import { FaWhatsapp, FaComments, FaPaintBrush, FaRocket, FaCheckCircle } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: <FaWhatsapp className="text-4xl" />,
      title: 'Contacto Inicial',
      description: 'Me escribes por WhatsApp contándome sobre tu negocio y qué necesitas.',
      time: '5 minutos'
    },
    {
      number: '02',
      icon: <FaComments className="text-4xl" />,
      title: 'Briefing Simple',
      description: 'Te hago algunas preguntas clave: servicios, colores preferidos, ejemplos que te gusten.',
      time: '15-30 minutos'
    },
    {
      number: '03',
      icon: <FaPaintBrush className="text-4xl" />,
      title: 'Diseño y Desarrollo',
      description: 'Creo tu landing page profesional siguiendo tu marca y objetivos de negocio.',
      time: '2-3 días'
    },
    {
      number: '04',
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Revisión y Ajustes',
      description: 'Te envío la primera versión, revisas y me pides cambios (según tu paquete).',
      time: '1-2 días'
    },
    {
      number: '05',
      icon: <FaRocket className="text-4xl" />,
      title: 'Entrega y Lanzamiento',
      description: 'Te entrego tu landing lista para usar, con tutorial y soporte incluido.',
      time: 'Día final'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            ¿Cómo Trabajamos Juntos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proceso simple y transparente. Sin complicaciones, sin sorpresas.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Línea conectora (excepto en el último) */}
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-full bg-gradient-to-b from-primary to-secondary md:left-1/2 md:-translate-x-1/2"></div>
              )}

              {/* Contenido del paso */}
              <div className={`flex flex-col md:flex-row gap-8 mb-12 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Contenido de texto */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-6xl font-bold text-gray-200">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    {step.description}
                  </p>
                  <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    ⏱️ {step.time}
                  </span>
                </div>

                {/* Icono central */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-xl z-10 flex-shrink-0">
                  {step.icon}
                </div>

                {/* Espacio vacío para balance en desktop */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline total */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-dark mb-2">
            Tiempo Total de Entrega
          </h3>
          <p className="text-5xl font-bold text-primary mb-2">
            3-5 días
          </p>
          <p className="text-gray-600">
            Desde que me contactas hasta que tu landing está online
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/573001234567?text=Hola, quiero empezar mi proyecto de landing page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-lg hover:bg-green-600 transition font-bold text-lg shadow-xl"
          >
            <FaWhatsapp className="text-2xl" />
            Empezar Mi Proyecto Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;