import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/95 backdrop-blur-sm py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          © 2025 Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;