import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link  to="/"  >
          <span className="text-2xl font-spectral font-medium text-blue-900 dark:text-lavender">
            DreamNest
          </span>
          </Link>
          
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8">
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
          </nav>
          
          <button 
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full bg-lavender/20 text-blue-900 dark:text-lavender hover:bg-lavender/30 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a 
            href="#waitlist" 
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-transparent border-2 border-blue-900 dark:border-lavender text-blue-900 dark:text-lavender hover:bg-blue-900 hover:text-white dark:hover:bg-lavender dark:hover:text-blue-900 transition-all duration-300"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;