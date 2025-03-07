
import React from 'react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Input a Term',
    description: 'Enter any word, phrase, idiom, or concept you're curious about. From everyday terms to obscure cultural references.',
    icon: '🔍'
  },
  {
    number: '02',
    title: 'Unlock Its Past',
    description: 'Interpretis analyzes etymological roots, historical context, and cultural significance across different time periods.',
    icon: '🕰️'
  },
  {
    number: '03',
    title: 'Explore Hidden Layers',
    description: 'Discover metaphorical meanings, symbolic representation, and lesser-known interpretations that lie beneath the surface.',
    icon: '🔮'
  },
  {
    number: '04',
    title: 'Connect the Dots',
    description: 'Understand how this knowledge connects to broader cultural, historical, and linguistic patterns throughout human history.',
    icon: '✨'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section relative" id="how-it-works">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">How Interpretis Works</span>
          </h2>
          <p className="text-lg text-interpretis-muted max-w-2xl mx-auto">
            A simple yet powerful process that unlocks the hidden depths of language
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glassmorphic-card p-6 relative overflow-hidden transition-all duration-300 hover:shadow-neon-cyan group"
            >
              <div className="absolute -right-4 -top-4 opacity-10 text-6xl font-bold group-hover:opacity-20 transition-opacity">
                {step.number}
              </div>
              
              <div className="mb-4 text-3xl">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-interpretis-muted">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="btn-primary"
            onClick={() => window.open('https://chatgpt.com/g/g-67852089291481919b1b8e94152ebb3d-interpretis', '_blank')}
          >
            Try Interpretis Now
          </Button>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-cyber-grid-bg z-0 opacity-20"></div>
    </section>
  );
};

export default HowItWorks;
