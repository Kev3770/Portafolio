import React from 'react';
import { FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: 'Barbería Élite',
      businessType: 'Barbería Moderna',
      problem: 'Barbería local sin presencia online perdía clientes que buscaban servicios en Google',
      solution: 'Landing page profesional con sistema de reservas por WhatsApp y galería de trabajos',
      results: [
        'Cliente puede ver servicios y precios 24/7',
        'Reservas directas por WhatsApp',
        'Galería profesional que atrae nuevos clientes',
        'Diseño moderno que inspira confianza'
      ],
      technologies: ['React', 'Tailwind CSS', 'WhatsApp API'],
      demoUrl: 'https://tourmaline-gelato-36b554.netlify.app/',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600'
    },
    {
      title: 'ELIXIR ICE',
      businessType: 'Heladería & Postres',
      problem: 'Heladería sin forma de mostrar productos online, clientes preguntaban sabores por redes',
      solution: 'Sitio web con menú visual de productos, precios y ubicación con mapa integrado',
      results: [
        'Menú digital siempre actualizado',
        'Clientes ven productos antes de ir',
        'Reducción de preguntas repetitivas',
        'Imagen profesional del negocio'
      ],
      technologies: ['React', 'Node.js', 'Google Maps'],
      demoUrl: 'https://github.com/Kev3770/ELIXIR-ICE.git',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600'
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Landing pages reales que ayudan a negocios locales a generar más clientes
          </p>
        </div>
        
        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Imagen */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-bold">
                    {project.businessType}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-dark mb-4">
                    {project.title}
                  </h3>

                  {/* Problema */}
                  <div className="mb-4">
                    <span className="text-red-600 font-bold">❌ PROBLEMA:</span>
                    <p className="text-gray-700 mt-1">{project.problem}</p>
                  </div>

                  {/* Solución */}
                  <div className="mb-4">
                    <span className="text-green-600 font-bold">✓ SOLUCIÓN:</span>
                    <p className="text-gray-700 mt-1">{project.solution}</p>
                  </div>

                  {/* Resultados */}
                  <div className="mb-6">
                    <span className="text-primary font-bold">🎯 RESULTADOS:</span>
                    <ul className="mt-2 space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-500 font-bold mt-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón */}
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    <FaExternalLinkAlt />
                    Ver Demo Completa
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para tener tu propia Landing Page?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            En 3-5 días tu negocio puede estar recibiendo clientes por internet
          </p>
          <a 
            href="https://wa.me/573001234567?text=Hola, quiero una landing como las del portafolio" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-lg hover:bg-green-600 transition font-bold text-lg shadow-xl"
          >
            <FaWhatsapp className="text-2xl" />
            Cotizar Mi Proyecto Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;