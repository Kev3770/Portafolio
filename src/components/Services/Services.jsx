import React from 'react';
import { FaGlobe, FaWhatsapp, FaRocket, FaDollarSign } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaGlobe className="text-5xl text-primary" />,
      title: 'Landing Page Profesional',
      problem: '¿Tu negocio no tiene presencia online?',
      solution: 'Te creo un sitio web moderno que funciona 24/7 atrayendo clientes.',
      includes: ['Diseño responsive', 'Formulario de contacto', 'Galería de fotos', 'Mapa de ubicación'],
      price: 'Desde $150.000'
    },
    {
      icon: <FaWhatsapp className="text-5xl text-green-500" />,
      title: 'Botón WhatsApp Integrado',
      problem: '¿Los clientes no saben cómo contactarte?',
      solution: 'Botón directo a WhatsApp para que te escriban con un solo clic.',
      includes: ['Mensaje pre-escrito', 'Botón flotante visible', 'Optimizado para móvil', 'Fácil de usar'],
      price: 'Incluido'
    },
    {
      icon: <FaRocket className="text-5xl text-purple-500" />,
      title: 'Entrega Rápida',
      problem: '¿Necesitas tu sitio YA?',
      solution: 'Entrego tu landing completa y funcional en 3-5 días, sin demoras.',
      includes: ['Diseño a medida', '2 revisiones incluidas', 'Hosting recomendado', 'Tutorial de uso'],
      price: '3-5 días'
    },
    {
      icon: <FaDollarSign className="text-5xl text-yellow-600" />,
      title: 'Precios Claros',
      problem: '¿Cansado de cotizaciones confusas?',
      solution: 'Precios fijos, sin sorpresas. Sabes exactamente qué recibes y cuánto pagas.',
      includes: ['Sin costos ocultos', 'Paquetes desde $150K', 'Pago único', 'Sin mensualidades'],
      price: 'Transparente'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            ¿Qué Incluye Tu Landing Page?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que tu negocio local necesita para empezar a recibir clientes por internet
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-primary"
            >
              {/* Icono */}
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold text-dark mb-3 text-center">
                {service.title}
              </h3>

              {/* Problema */}
              <p className="text-red-600 font-semibold mb-2 text-center">
                {service.problem}
              </p>

              {/* Solución */}
              <p className="text-gray-700 mb-4 text-center leading-relaxed">
                {service.solution}
              </p>

              {/* Incluye */}
              <ul className="space-y-2 mb-4">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Precio */}
              <div className="text-center">
                <span className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-bold text-lg">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/573001234567?text=Hola, quiero cotizar una landing page" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-10 py-4 rounded-lg hover:bg-green-600 transition font-bold text-lg shadow-lg"
          >
            Cotizar Mi Landing Page →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;