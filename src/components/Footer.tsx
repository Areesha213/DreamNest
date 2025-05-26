import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-lavender/10 dark:bg-blue-950/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-spectral font-medium text-blue-900 dark:text-lavender">
                DreamNest
              </span>
              <p className="mt-2 text-sm text-blue-800/70 dark:text-lavender/70">
                A quiet space for loud thoughts
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#features" className="text-blue-800 dark:text-lavender/90 hover:text-blue-600 dark:hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-blue-800 dark:text-lavender/90 hover:text-blue-600 dark:hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#founder" className="text-blue-800 dark:text-lavender/90 hover:text-blue-600 dark:hover:text-white transition-colors">
                Our Story
              </a>
              <a href="#faq" className="text-blue-800 dark:text-lavender/90 hover:text-blue-600 dark:hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-lavender/20 dark:border-blue-800/20 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-sm text-blue-800/60 dark:text-lavender/60">
              © {new Date().getFullYear()} DreamNest. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-blue-800/60 dark:text-lavender/60 hover:text-blue-800 dark:hover:text-lavender transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-blue-800/60 dark:text-lavender/60 hover:text-blue-800 dark:hover:text-lavender transition-colors">
                Terms of Service
              </Link>
              
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-3 text-sm text-blue-800/60 dark:text-lavender/60">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span>Privacy First</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>End-to-End Encrypted</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                <span>Made with ♥ Care </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;