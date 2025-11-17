import React from 'react';
import { FaChartLine, FaMobileAlt, FaClock, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const WhyLandingPage = () => {
  const problems = [
    {
      icon: <FaChartLine className="text-4xl text-red-500" />,
      problem: 'Pierdes clientes',
      detail: 'El 70% de las personas buscan negocios en Google antes de comprar. Si no apareces, van con tu competencia.'
    },
    {
      icon: <FaMobileAlt className="text-4xl text-red-500" />,
      problem: 'Tu Instagram no vende',
      detail: 'Las redes sociales están saturadas. Necesitas un sitio profesional que genere confianza real.'
    },
    {
      icon: <FaClock className="text-4xl text-red-500" />,
      problem: 'Gastas tiempo explicando',
      detail: 'Respondes las mismas preguntas todo el día. Una landing muestra todo 24/7 sin que tengas que hacer nada.'
    }
  ];

  const solutions = [
    {
      icon: <FaCheckCircle className="text-green-500" />,
      title: 'Presencia profesional',
      description: 'Los clientes confían más en un negocio con sitio web que en uno que solo tiene Instagram.'
    },
    {
      icon: <FaCheckCircle className="text-green-500" />,
      title: 'Disponible 24/7',
      description: 'Tu landing trabaja por ti incluso cuando duermes. Muestra servicios, precios y formas de contacto siempre.'
    },
    {
      icon: <FaCheckCircle className="text-green-500" />,
      title: 'WhatsApp directo',
      description: 'Botón de WhatsApp integrado para que los clientes te contacten con un solo clic. Sin complicaciones.'
    },
    {
      icon: <FaCheckCircle className="text-green-500" />,
      title: 'Más económico que publicidad',
      description: 'Una landing es un pago único. La publicidad de Facebook/Google cuesta todos los meses y nunca para.'
    }
  ];

  const stats = [
    { number: '70%', label: 'de las personas buscan online antes de comprar' },
    { number: '3x', label: 'más ventas con sitio web vs solo redes sociales' },
    { number: '24/7', label: 'tu negocio visible todo el tiempo' }
  ];

  return (
    <section id="por-que-landing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            ¿Por Qué Tu Negocio Local Necesita Una Landing Page?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Si todavía no tienes un sitio web profesional, estás perdiendo clientes todos los días
          </p>
        </div>

        {/* Estadísticas impactantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center border-2 border-blue-200">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-700 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Problemas comunes */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-dark text-center mb-10">
            ❌ Problemas Que Enfrentan Negocios Sin Sitio Web
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problems.map((item, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-dark text-center mb-3">
                  {item.problem}
                </h4>
                <p className="text-gray-700 text-center">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Soluciones */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-dark text-center mb-10">
            ✅ Lo Que Ganas Con Una Landing Page Profesional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutions.map((item, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border-2 border-green-200 flex gap-4">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparación visual */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            La Diferencia Es Obvia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sin Landing Page */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-300">
              <h4 className="text-xl font-bold text-red-600 mb-4 text-center">
                ❌ Sin Landing Page
              </h4>
              <ul className="space-y-3">
                {[
                  'Solo Instagram/Facebook',
                  'Respondes lo mismo 50 veces al día',
                  'Clientes no te encuentran en Google',
                  'Se ven poco profesional',
                  'Pierdes clientes nocturnos/domingos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Con Landing Page */}
            <div className="bg-white rounded-xl p-6 border-2 border-green-300 shadow-lg transform scale-105">
              <h4 className="text-xl font-bold text-green-600 mb-4 text-center">
                ✓ Con Landing Page
              </h4>
              <ul className="space-y-3">
                {[
                  'Sitio web profesional 24/7',
                  'Todo visible: servicios, precios, ubicación',
                  'Apareces en búsquedas de Google',
                  'Generas más confianza',
                  'Clientes te contactan cuando quieran'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-6">
            ¿Listo para que tu negocio deje de perder clientes?
          </p>
          <a 
            href="https://wa.me/573001234567?text=Hola, quiero una landing page para mi negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-lg hover:bg-green-600 transition font-bold text-lg shadow-xl"
          >
            Quiero Mi Landing Page Ya
          </a>
          <p className="text-gray-500 mt-4 text-sm">
            Respuesta en menos de 2 horas • Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyLandingPage;