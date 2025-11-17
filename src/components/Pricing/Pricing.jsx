import React from 'react';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';

const Pricing = () => {
  const packages = [
    {
      name: 'Básico',
      price: '$150.000',
      description: 'Perfecto para empezar tu presencia online',
      features: [
        'Landing page de 1 página',
        'Diseño responsive (móvil/desktop)',
        'Formulario de contacto',
        'Botón WhatsApp integrado',
        'Mapa de ubicación',
        '3 secciones principales',
        'Entrega en 3-5 días',
        '1 revisión incluida'
      ],
      recommended: false,
      cta: 'Empezar Ahora'
    },
    {
      name: 'Profesional',
      price: '$250.000',
      description: 'Lo más elegido por negocios locales',
      features: [
        'Todo lo del paquete Básico',
        'Galería de fotos (hasta 12)',
        'Sección de servicios/productos',
        'SEO básico optimizado',
        'Integración con redes sociales',
        'Formulario avanzado',
        '2 revisiones incluidas',
        'Tutorial de actualización',
        'Soporte 15 días post-entrega'
      ],
      recommended: true,
      cta: 'Elegir Profesional'
    },
    {
      name: 'Premium',
      price: '$350.000',
      description: 'Máxima conversión para tu negocio',
      features: [
        'Todo lo del paquete Profesional',
        'Animaciones y efectos modernos',
        'Optimización de velocidad',
        'Integración Google Analytics',
        'Chat widget personalizado',
        'Blog o sección de noticias',
        '3 revisiones incluidas',
        'Hosting recomendado y configurado',
        'Soporte 30 días post-entrega',
        'Actualizaciones menores gratis (1 mes)'
      ],
      recommended: false,
      cta: 'Cotizar Premium'
    }
  ];

  return (
    <section id="precios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Precios Claros, Sin Sorpresas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el paquete que mejor se ajuste a tu negocio. Todos incluyen diseño profesional y entrega rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all ${
                pkg.recommended ? 'border-4 border-primary transform scale-105' : 'border-2 border-gray-200'
              }`}
            >
              {/* Badge recomendado */}
              {pkg.recommended && (
                <div className="bg-primary text-white text-center py-2 px-4 rounded-lg mb-4 font-bold">
                  ⭐ MÁS POPULAR
                </div>
              )}

              {/* Nombre del paquete */}
              <h3 className="text-2xl font-bold text-dark mb-2 text-center">
                {pkg.name}
              </h3>

              {/* Precio */}
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                <p className="text-gray-500 mt-1">Pago único</p>
              </div>

              {/* Descripción */}
              <p className="text-gray-600 text-center mb-6">
                {pkg.description}
              </p>

              {/* Separador */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href={`https://wa.me/573001234567?text=Hola, quiero el paquete ${pkg.name} (${pkg.price})`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 rounded-lg font-bold text-lg transition ${
                  pkg.recommended 
                    ? 'bg-primary text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-primary hover:bg-gray-200'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              <span className="font-bold text-yellow-700">💡 ¿No estás seguro cuál elegir?</span>
              <br />
              Escríbeme por WhatsApp y te ayudo a elegir el paquete perfecto para tu negocio.
            </p>
            <a 
              href="https://wa.me/573001234567?text=Hola, necesito ayuda para elegir el paquete correcto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
            >
              <FaWhatsapp />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;