import React from 'react';
import { FaGlobe, FaShoppingCart, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaGlobe className="text-4xl text-primary" />,
      title: 'Desarrollo Web',
      description: 'Creación de sitios web modernos, responsivos y optimizados para todos los dispositivos.'
    },
    {
      icon: <FaShoppingCart className="text-4xl text-secondary" />,
      title: 'E-commerce',
      description: 'Desarrollo de tiendas online completas con carritos de compra y pasarelas de pago.'
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-accent" />,
      title: 'Clases de Programación',
      description: 'Enseñanza personalizada desde conceptos básicos hasta desarrollo web profesional.'
    },
    {
      icon: <FaRocket className="text-4xl text-green-500" />,
      title: 'Soluciones Digitales',
      description: 'Desarrollo de aplicaciones web personalizadas para optimizar tus procesos empresariales.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Mis Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrezco soluciones digitales completas adaptadas a tus necesidades específicas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-light rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
