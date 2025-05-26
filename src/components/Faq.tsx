import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-lavender/20 dark:border-blue-800/20 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-spectral font-medium text-blue-900 dark:text-white">{question}</span>
        <span className="ml-6 flex-shrink-0 text-blue-900 dark:text-lavender">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-blue-800/70 dark:text-lavender/80">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "What is DreamNest?",
      answer: "DreamNest is a private digital sanctuary web application for personal reflection, dream journaling, and emotional exploration with the support of an AI companion that helps you gain insights into your thoughts and feelings."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. Privacy is our highest priority. Your data is end-to-end encrypted, meaning only you can access it. We use zero-knowledge encryption, so even our team cannot read your personal reflections."
    },
    {
      question: "How does the AI companion work?",
      answer: "Our AI companion is designed to be empathetic and thoughtful. It helps identify patterns in your thoughts and emotions, offers gentle prompts for deeper reflection, and provides personalized insights without judgment."
    },
    {
      question: "When will DreamNest be available?",
      answer: "We're currently in private beta. Join our waitlist to be notified when early access becomes available. We're rolling out invitations gradually to ensure the best experience for everyone."
    },
    {
      question: "Will there be a mobile app?",
      answer: "Yes, we're developing native mobile apps for iOS and Android to allow for convenient journaling on the go. Web access will also be available for desktop users."
    },
    {
      question: "Is DreamNest a replacement for therapy?",
      answer: "No, DreamNest is not a replacement for professional mental health care. While it can be a helpful tool for self-reflection and emotional awareness, it's designed to complement, not replace, professional support."
    }
  ];

  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-spectral font-medium text-blue-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-blue-800/70 dark:text-lavender/80">
            Everything you need to know about DreamNest
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white/80 dark:bg-blue-900/10 backdrop-blur-sm rounded-xl shadow-sm p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;