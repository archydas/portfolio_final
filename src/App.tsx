import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import ChatSection from './components/ChatSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-800/40 to-green-900/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <ChatSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;