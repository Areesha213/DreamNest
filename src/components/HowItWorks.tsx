import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-blue-950/20" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-spectral font-medium text-blue-900 dark:text-white mb-6">
            How DreamNest Works
          </h2>
          <p className="text-lg text-blue-800/70 dark:text-lavender/80">
            Your journey to emotional clarity and self-discovery
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-lavender/30 dark:bg-blue-800/30 z-0 hidden md:block"></div>
            
            <div className="space-y-16 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-spectral font-medium text-blue-900 dark:text-white mb-3">
                    Create Your Sanctuary
                  </h3>
                  <p className="text-blue-800/70 dark:text-lavender/80">
                    Sign up for early access and set up your private space. Your data is end-to-end encrypted, ensuring that your thoughts remain completely private.
                  </p>
                </div>
                
                <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-lavender dark:bg-blue-800 flex items-center justify-center text-white font-medium shadow-sm">
                    1
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-spectral font-medium text-blue-900 dark:text-white mb-3">
                    Record Your Thoughts
                  </h3>
                  <p className="text-blue-800/70 dark:text-lavender/80">
                    Write about your dreams, emotions, or daily reflections. Use voice notes or text — whatever feels most natural for expressing your inner world.
                  </p>
                </div>
                
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="w-12 h-12 rounded-full bg-lavender dark:bg-blue-800 flex items-center justify-center text-white font-medium shadow-sm">
                    2
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-spectral font-medium text-blue-900 dark:text-white mb-3">
                    Receive Gentle Insights
                  </h3>
                  <p className="text-blue-800/70 dark:text-lavender/80">
                    Our AI companion helps you notice patterns, offers reflective questions, and provides support tailored to your emotional needs.
                  </p>
                </div>
                
                <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-lavender dark:bg-blue-800 flex items-center justify-center text-white font-medium shadow-sm">
                    3
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-spectral font-medium text-blue-900 dark:text-white mb-3">
                    Grow Through Reflection
                  </h3>
                  <p className="text-blue-800/70 dark:text-lavender/80">
                    Track your emotional journey over time, discover recurring themes, and develop deeper self-awareness through consistent reflection.
                  </p>
                </div>
                
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="w-12 h-12 rounded-full bg-lavender dark:bg-blue-800 flex items-center justify-center text-white font-medium shadow-sm">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;