import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: 'Barbería Elite',
      description: 'Sitio web moderno para barbería con sistema de citas online y galería de trabajos.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Kev3770/barberiaElite.git',
      demoUrl: 'https://tourmaline-gelato-36b554.netlify.app/',
      icon: <FaCode className="text-4xl text-primary" />
    },
    {
      title: 'ELIXIR ICE',
      description: 'Aplicación web para gestión de inventario y ventas con interfaz moderna y responsive.',
      technologies: ['React', 'Node.js', 'MySQL'],
      githubUrl: 'https://github.com/Kev3770/ELIXIR-ICE.git',
      demoUrl: 'https://github.com/Kev3770/ELIXIR-ICE.git',
      icon: <FaServer className="text-4xl text-secondary" />
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Mi Portafolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proyectos demo que demuestran mis habilidades y enfoque de desarrollo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 text-center">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-center">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 flex-1 bg-dark text-white py-2 rounded-lg hover:bg-gray-800 transition font-medium"
                  >
                    <FaGithub />
                    <span>Ver Código</span>
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 flex-1 bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    <FaExternalLinkAlt />
                    <span>Ver Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Interesado en ver más proyectos?</p>
          <a 
            href="https://github.com/Kev3770" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
          >
            <FaGithub />
            <span>Ver Mi GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
