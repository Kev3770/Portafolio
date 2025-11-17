import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    negocio: '',
    telefono: '',
    paquete: 'Básico'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mensaje = `Hola! Quiero cotizar una landing page
    
Nombre: ${formData.nombre}
Negocio: ${formData.negocio}
Teléfono: ${formData.telefono}
Paquete de interés: ${formData.paquete}`;

    const whatsappURL = `https://wa.me/573001234567?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Información motivacional */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo Para Hacer Crecer Tu Negocio?
              </h2>
              
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                En 3-5 días tu negocio puede tener una landing page profesional que genera clientes reales.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Respuesta Rápida</h3>
                    <p className="opacity-90">Te respondo en menos de 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Sin Compromiso</h3>
                    <p className="opacity-90">Cotización gratis, sin obligación de compra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Precios Claros</h3>
                    <p className="opacity-90">Sabrás exactamente qué recibes y cuánto pagas</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 border-2 border-white/30 rounded-xl p-6">
                <p className="font-bold text-lg mb-2">✓ Satisfacción Garantizada</p>
                <p className="opacity-90">
                  Si no estás contento con el resultado, trabajamos hasta que lo estés.
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-dark mb-6 text-center">
                Cotiza Tu Proyecto
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nombre de tu Negocio *
                  </label>
                  <input
                    type="text"
                    name="negocio"
                    value={formData.negocio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="Mi Barbería / Mi Tienda"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tu Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="300 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Paquete de Interés
                  </label>
                  <select
                    name="paquete"
                    value={formData.paquete}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                  >
                    <option value="Básico">Básico - $150.000</option>
                    <option value="Profesional">Profesional - $250.000</option>
                    <option value="Premium">Premium - $350.000</option>
                    <option value="No estoy seguro">No estoy seguro aún</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition font-bold text-lg flex items-center justify-center gap-3 shadow-lg"
                >
                  <FaWhatsapp className="text-2xl" />
                  Enviar por WhatsApp
                </button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-4">
                Te responderé en menos de 2 horas para darte una cotización exacta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;