import React from 'react';
import { Moon, Shield, LineChart, Sparkles } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="group bg-white dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-lavender/0 to-lavender/0 group-hover:from-lavender/5 group-hover:to-lavender/10 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full bg-lavender/20 dark:bg-lavender/10 flex items-center justify-center mb-6 group-hover:bg-lavender/30 transition-colors duration-300 text-blue-900 dark:text-lavender">
          {icon}
        </div>
        
        <h3 className="text-xl font-spectral font-medium text-blue-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-blue-800/70 dark:text-lavender/80">
          {description}
        </p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-lavender/5 dark:bg-blue-900/20" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-spectral font-medium text-blue-900 dark:text-white mb-6">
            Your safe harbor for introspection
          </h2>
          <p className="text-lg text-blue-800/70 dark:text-lavender/80">
           DreamNest offers tools for emotional awareness, personal growth, and mental clarity through thoughtful AI companionship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FeatureCard 
            title="Dream Journal" 
            description="Record and analyze your dreams with AI assistance to uncover patterns and meanings in your subconscious mind."
            icon={<Moon size={28} />}
          />
          
          <FeatureCard 
            title="Emotional Safe Space" 
            description="A private sanctuary to process emotions without judgment, with gentle guidance when needed."
            icon={<Shield size={28} />}
          />
          
          <FeatureCard 
            title="Pattern Insights" 
            description="Discover recurring themes and patterns in your thoughts and feelings to gain deeper self-awareness."
            icon={<LineChart size={28} />}
          />
          
          <FeatureCard 
            title="AI Reflection Companion" 
            description="An empathetic AI companion that helps you reflect on experiences and grow through thoughtful conversation."
            icon={<Sparkles size={28} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;