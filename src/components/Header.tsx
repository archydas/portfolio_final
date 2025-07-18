import React, { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-black text-white px-4 py-2 font-bold text-lg border-2 border-black">
            DEV
          </div>
        </div>
        
        <nav className="flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg font-medium transition-colors hover:text-blue-400 ${
              activeSection === 'about' ? 'text-blue-400' : 'text-gray-800'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('chat')}
            className={`text-lg font-medium transition-colors hover:text-blue-400 ${
              activeSection === 'chat' ? 'text-blue-400' : 'text-gray-800'
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-lg font-medium transition-colors hover:text-blue-400 ${
              activeSection === 'contact' ? 'text-blue-400' : 'text-gray-800'
            }`}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;