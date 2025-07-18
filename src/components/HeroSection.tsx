import React from 'react';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center text-white z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Software Engineer
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Building digital experiences with pixel-perfect precision
        </p>
        
        <button className="bg-white text-black px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors mb-8 border-2 border-white hover:border-gray-200">
          View My Work
        </button>
        
        <div className="flex justify-center space-x-6 mb-16">
          <Github className="w-8 h-8 hover:text-blue-300 transition-colors cursor-pointer" />
          <Linkedin className="w-8 h-8 hover:text-blue-300 transition-colors cursor-pointer" />
          <Twitter className="w-8 h-8 hover:text-blue-300 transition-colors cursor-pointer" />
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-300 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;