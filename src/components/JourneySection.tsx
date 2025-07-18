import React from 'react';

const JourneySection = () => {
  const journeyItems = [
    {
      year: "2024",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      description: "Leading full-stack development of cloud-native applications"
    },
    {
      year: "2022",
      title: "Software Engineer",
      company: "Digital Solutions Co.",
      description: "Developed scalable web applications using modern technologies"
    }
  ];

  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-16">
          Journey
        </h2>
        
        <div className="space-y-12">
          {journeyItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 bg-white rounded-full border-4 border-blue-400"></div>
                {index < journeyItems.length - 1 && (
                  <div className="w-0.5 h-24 bg-white/30 ml-1.5 mt-2"></div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="text-white/70 text-lg font-medium mb-2">
                  {item.year}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <div className="text-blue-300 text-lg mb-3">
                  {item.company}
                </div>
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;