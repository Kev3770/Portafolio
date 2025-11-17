import React from 'react';
import { FaEnvelope, FaGithub, FaPaperPlane, FaUser, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Contacto</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">¡Hablemos!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Email</p>
                  <a href="mailto:kpenaramirez145@gmail.com" className="text-gray-600 hover:text-primary transition">
                    kpenaramirez145@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <FaGithub className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-dark">GitHub</p>
                  <a 
                    href="https://github.com/Kev3770" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition"
                  >
                    github.com/Kev3770
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
