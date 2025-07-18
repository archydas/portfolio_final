import React from 'react';

const AboutSection = () => {
  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker',
    'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js', 'TailwindCSS', 'Git'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-80 h-80 bg-white/90 backdrop-blur-sm rounded-lg p-4 border-4 border-white shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-pink-200 via-green-200 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-amber-600 rounded-full mx-auto mb-4 relative">
                    <div className="absolute top-4 left-4 w-6 h-6 bg-white rounded-full"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-pink-400 rounded-full"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-amber-800 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-600 font-mono">Pixel Art Avatar</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="flex-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 border-4 border-white shadow-2xl">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Software Engineer with a love for creating elegant 
                solutions to complex problems. With a focus on web technologies 
                and user experience, I transform ideas into pixel-perfect applications.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <div className="text-white text-2xl font-bold flex items-center">
              <span className="mr-3">&lt;/&gt;</span>
              Technologies
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-blur-sm text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-black/80 transition-colors border border-gray-600"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;