import React from 'react';

const FounderNote: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="founder">
      <div className="absolute inset-0 bg-gradient-to-b from-lavender/5 to-transparent dark:from-blue-900/20 dark:to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-spectral font-medium text-blue-900 dark:text-white mb-2">
            Our Story
          </h2>
          <p className="text-lg text-blue-800/70 dark:text-lavender/80">
            Why we created DreamNest
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/90 dark:bg-blue-950/90 p-8 md:p-10 rounded-xl shadow-md transform hover:-rotate-1 hover:shadow-lg transition-all duration-300 floating-animation-slow backdrop-blur-sm">
            <div className="font-caveat text-lg md:text-xl text-blue-900 dark:text-lavender leading-relaxed">
              <p className="mb-4">
                I've always been fascinated by the inner workings of the mind—how our thoughts shape our reality and how reflection can lead to profound personal growth.
              </p>
              
              <p className="mb-4">
                After experiencing the therapeutic power of journaling during a difficult time in my life, I wondered: what if we could combine the intimacy of personal reflection with the insights of thoughtful AI?
              </p>
              
              <p className="mb-4">
                DreamNest was born from this idea—a digital sanctuary where your deepest thoughts, dreams, and emotions can be expressed freely, with an AI companion that helps you connect the dots of your inner landscape.
              </p>
              
              <p className="mb-4">
                Unlike social media that encourages constant sharing, DreamNest is a private retreat—a place where you can be completely honest with yourself. Every design choice we've made prioritizes your emotional safety and privacy.
              </p>
              
              <p>
                We're building DreamNest for the introspective souls, the dream chasers, and anyone seeking a deeper relationship with themselves, anyone who’s ever felt too much and had nowhere to put it.
              </p>
              
              <div className="mt-8 text-right">
                <p className="text-xl text-blue-900 dark:text-white">— Areesha</p>
                <p className="text-sm font-inter text-blue-800/90 dark:text-lavender">Founder, DreamNest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;