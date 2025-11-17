import React, { useState, useEffect } from 'react';
import { FaFire, FaCheckCircle, FaClock, FaWhatsapp, FaGift } from 'react-icons/fa';

const LaunchOffer = () => {
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0
  });

  // Contador de tiempo (opcional - para crear urgencia)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Actualiza cada minuto

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta-lanzamiento" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge superior */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
            <FaFire className="text-xl" />
            OFERTA DE LANZAMIENTO - SOLO {spotsLeft} CUPOS
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-4">
            Sé de los Primeros
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Los primeros 3 clientes obtienen condiciones especiales que nunca volveré a ofrecer
          </p>
        </div>

        {/* Oferta principal */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-500">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 px-8 text-center">
            <h3 className="text-3xl font-bold mb-2">
              Landing Page Profesional Completa
            </h3>
            <div className="flex items-center justify-center gap-4 text-lg">
              <span className="line-through opacity-75">$250.000</span>
              <span className="text-4xl font-bold">$120.000</span>
              <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                52% OFF
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Lo que incluye */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                <FaGift className="text-orange-500" />
                Lo Que Recibes:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Landing page completa y funcional',
                  'Diseño moderno 100% responsive',
                  'Integración con WhatsApp',
                  'Formulario de contacto',
                  'Galería de fotos profesional',
                  'Mapa de ubicación integrado',
                  'SEO básico optimizado',
                  'Hasta 5 secciones personalizadas',
                  'Entrega en 3-5 días',
                  '3 revisiones incluidas',
                  'Tutorial de actualización',
                  'Soporte 30 días post-entrega'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Separador */}
            <div className="border-t-2 border-gray-200 my-8"></div>

            {/* Lo que pido a cambio */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-dark mb-6">
                Lo Único Que Te Pido a Cambio:
              </h4>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-orange-500 font-bold">1.</span>
                    <span>
                      <strong>Tu testimonio honesto</strong> al finalizar el proyecto 
                      (si quedas satisfecho, obvio)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-orange-500 font-bold">2.</span>
                    <span>
                      <strong>Permiso para mostrar tu landing</strong> en mi portafolio 
                      como caso de estudio
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-orange-500 font-bold">3.</span>
                    <span>
                      <strong>Recomendarme</strong> si conoces a alguien más que necesite 
                      una landing page
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Por qué hago esto */}
            <div className="mb-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-dark mb-3">
                ¿Por Qué Esta Oferta?
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Estoy construyendo mi reputación como freelancer y necesito casos reales 
                para mostrar. A cambio de tu confianza, te doy un precio que nunca volveré 
                a ofrecer y pongo TODO mi esfuerzo para que quedes impresionado. 
                <strong className="text-primary"> Tu éxito es mi mejor carta de presentación.</strong>
              </p>
            </div>

            {/* Contador de urgencia */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaClock className="text-2xl text-orange-400" />
                <span className="text-lg font-semibold">Cupos Restantes:</span>
              </div>
              <div className="flex justify-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-400">{spotsLeft}</div>
                  <div className="text-sm text-gray-400">de 3 cupos</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Después de estos 3 proyectos, los precios vuelven a $250.000+
              </p>
            </div>

            {/* CTA Principal */}
            <div className="text-center">
              <a 
                href="https://wa.me/573001234567?text=Hola! Quiero aprovechar la OFERTA DE LANZAMIENTO ($120.000) para mi landing page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-xl hover:bg-green-600 transition font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                <FaWhatsapp className="text-3xl" />
                Quiero Mi Cupo Ahora
              </a>
              <p className="text-gray-600 mt-4 text-sm">
                ⚡ Respuesta en menos de 2 horas • Sin compromiso
              </p>
            </div>

            {/* Garantía adicional */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-green-50 border-2 border-green-300 rounded-lg px-6 py-4">
                <p className="text-green-800 font-semibold">
                  ✓ Garantía Total: Si no quedas satisfecho, no pagas nada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios adicionales */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            ¿Por Qué Aprovechar Esta Oferta AHORA?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="font-bold text-dark mb-2">Ahorro Real</h4>
              <p className="text-gray-600">
                Ahorras $130.000 sobre el precio regular. Esta oferta nunca se repetirá.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold text-dark mb-2">Atención Premium</h4>
              <p className="text-gray-600">
                Al ser de los primeros, recibes mi atención completa y dedicación al 200%.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-bold text-dark mb-2">Sin Riesgo</h4>
              <p className="text-gray-600">
                Si no quedas satisfecho, no pagas. Es así de simple. Todo el riesgo es mío.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchOffer;