import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaJava, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si';

const Technologies = () => {
  const technologies = [
    { name: 'React', icon: <FaReact />, category: 'Frontend', color: 'bg-blue-100 text-blue-600' },
    { name: 'JavaScript', icon: <FaJs />, category: 'Frontend', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend', color: 'bg-orange-100 text-orange-600' },
    { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend', color: 'bg-blue-100 text-blue-600' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend', color: 'bg-green-100 text-green-600' },
    { name: 'PHP', icon: <FaPhp />, category: 'Backend', color: 'bg-purple-100 text-purple-600' },
    { name: 'Java', icon: <FaJava />, category: 'Backend', color: 'bg-red-100 text-red-600' },
    { name: 'MySQL', icon: <SiMysql />, category: 'Database', color: 'bg-blue-100 text-blue-600' },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'Database', color: 'bg-green-100 text-green-600' },
    { name: 'Git', icon: <FaGitAlt />, category: 'Herramientas', color: 'bg-orange-100 text-orange-600' },
    { name: 'GitHub', icon: <FaGithub />, category: 'Herramientas', color: 'bg-gray-100 text-gray-600' }
  ];

  const categories = {
    'Frontend': 'border-l-4 border-blue-500',
    'Backend': 'border-l-4 border-green-500', 
    'Database': 'border-l-4 border-purple-500',
    'Herramientas': 'border-l-4 border-orange-500'
  };

  return (
    <section id="tecnologias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Tecnologías</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stack tecnológico que utilizo para crear soluciones innovadoras
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(categories).map(([category, borderClass]) => (
            <div key={category} className={`bg-white rounded-lg p-6 shadow-lg ${borderClass}`}>
              <h3 className="text-xl font-bold text-dark mb-4">{category}</h3>
              <div className="space-y-3">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${tech.color}`}>
                        {tech.icon}
                      </div>
                      <span className="font-medium text-gray-700">{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
