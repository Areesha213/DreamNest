import React, { useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollValue = window.scrollY;
      const elements = heroRef.current.querySelectorAll('.parallax');
      
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.2');
        const yPos = -(scrollValue * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      id="hero"
    >
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-spectral font-medium text-blue-900 dark:text-white mb-6 parallax floating-animation-slow"
            data-speed="0.1"
          >
            A quiet space for loud thoughts
          </h1>
          
          <p 
            className="text-lg md:text-xl text-blue-800/80 dark:text-lavender mb-10 parallax"
            data-speed="0.15"
          >
            Your private AI companion for dreams, reflections, and emotional clarity
          </p>
          
          <div className="parallax" data-speed="0.2">
            <a 
              href="#waitlist" 
              className="inline-flex px-8 py-3 rounded-full bg-transparent border-2 border-blue-900 dark:border-lavender text-blue-900 dark:text-lavender hover:bg-blue-900 hover:text-white dark:hover:bg-lavender dark:hover:text-blue-900 transition-all duration-300 shadow-sm hover:shadow"
            >
              Join the early waitlist
            </a>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="p-2 bg-white/30 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg inline-flex space-x-2 parallax floating-animation" data-speed="0.25">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-blue-900 dark:text-lavender">Privacy First</span>
            </div>
            <div className="p-2 bg-white/30 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg inline-flex space-x-2 ml-4 parallax floating-animation-reverse" data-speed="0.3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm text-blue-900 dark:text-lavender">End-to-End Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;