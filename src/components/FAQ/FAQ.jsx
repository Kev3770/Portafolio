import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma crear mi landing page?',
      answer: 'Entrego tu landing completa y funcional en 3-5 días hábiles. Si necesitas algo urgente, puedo priorizar tu proyecto por un cargo adicional.'
    },
    {
      question: '¿Qué necesito proporcionar para empezar?',
      answer: 'Solo necesito: 1) Información de tu negocio (nombre, servicios, ubicación), 2) Logo (si tienes), 3) Fotos de tus productos/servicios, 4) Colores de preferencia. Si no tienes fotos profesionales, te ayudo a conseguir imágenes de calidad.'
    },
    {
      question: '¿El precio incluye el hosting y dominio?',
      answer: 'El paquete incluye el diseño y desarrollo completo. El hosting lo recomiendo en plataformas gratuitas como Netlify/Vercel (gratis para siempre) o puedo ayudarte a contratar un hosting económico (~$3-5 USD/mes). El dominio (.com) cuesta aprox $12 USD/año.'
    },
    {
      question: '¿Puedo hacer cambios después de la entrega?',
      answer: 'Sí. Cada paquete incluye un número de revisiones (1-3 según el plan). Después de la entrega, ofrezco soporte extendido para cambios menores. Para cambios mayores, podemos negociar un precio justo.'
    },
    {
      question: '¿La landing funcionará bien en celulares?',
      answer: '¡Por supuesto! Todas mis landings son 100% responsive (se adaptan a celular, tablet y computadora). De hecho, las diseño primero para móvil, porque el 70% de tus clientes te verán desde el celular.'
    },
    {
      question: '¿Qué pasa si no me gusta el diseño?',
      answer: 'Trabajo con revisiones incluidas hasta que estés satisfecho. Si definitivamente no conectamos en la visión, te devuelvo tu dinero sin problema. Mi objetivo es que tengas una landing que AME, no que tolere.'
    },
    {
      question: '¿Puedo actualizar el contenido yo mismo después?',
      answer: 'Sí. Te entrego un tutorial simple para que hagas cambios básicos de texto, fotos y precios. Si prefieres que yo haga las actualizaciones, podemos armar un plan de mantenimiento mensual económico.'
    },
    {
      question: '¿Incluye integración con WhatsApp?',
      answer: 'SÍ, siempre. Todas mis landings incluyen botón flotante de WhatsApp con mensaje pre-escrito para que tus clientes te contacten con un solo clic. Es la mejor forma de convertir visitas en ventas.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de empezar tu proyecto
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-primary transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="font-bold text-dark text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA después del FAQ */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Tienes otra pregunta?</p>
          <a 
            href="https://wa.me/573001234567?text=Hola, tengo una pregunta sobre las landing pages"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
          >
            Pregúntame por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;