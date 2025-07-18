import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "A machine learning-based code completion tool that helps developers write better code faster.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "React"]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling connected home devices in real-time.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Firebase", "Arduino"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-16 text-left">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-4 border-white"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;