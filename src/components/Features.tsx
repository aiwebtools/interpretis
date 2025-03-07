
import React from 'react';
import { BookOpenText, History, BrainCircuit, Skull, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: BookOpenText,
    title: 'Etymology & Linguistic Origins',
    description: 'Breaks down linguistic roots, including derivations from Latin, Greek, or other historical languages, and tracks shifts in meaning over time.',
    accentColor: 'interpretis-accent1'
  },
  {
    icon: History,
    title: 'Historical Context',
    description: 'Explains origins and first recorded uses, including relevant historical events or societal conditions that shaped the term's development.',
    accentColor: 'interpretis-accent2'
  },
  {
    icon: BrainCircuit,
    title: 'Metaphorical Significance',
    description: 'Interprets symbolic or metaphorical layers, discussing uses in literature, art, or cultural storytelling throughout history.',
    accentColor: 'interpretis-accent3'
  },
  {
    icon: Skull,
    title: 'Dark/Hidden Meanings',
    description: 'Reveals lesser-known or taboo interpretations, including connections to mythology, folklore, or superstition.',
    accentColor: 'interpretis-accent4'
  },
  {
    icon: Globe,
    title: 'Cultural Relevance',
    description: 'Analyzes modern significance, evolution, and impact on contemporary society, including in pop culture and media.',
    accentColor: 'interpretis-accent1'
  },
  {
    icon: Sparkles,
    title: 'Speculative Insights',
    description: 'Offers deeper, abstract interpretations or alternative readings of the input, expanding your understanding.',
    accentColor: 'interpretis-accent2'
  }
];

const Features: React.FC = () => {
  return (
    <section className="section relative bg-interpretis-darker" id="features">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful Analytical Capabilities</span>
          </h2>
          <p className="text-lg text-interpretis-muted max-w-2xl mx-auto">
            Interpretis breaks down language with unprecedented depth and insight, 
            revealing the many layers hidden within our words and expressions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphic-card p-6 transition-all duration-300 hover:shadow-neon-purple group"
            >
              <div className={`w-12 h-12 rounded-lg bg-${feature.accentColor}/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-${feature.accentColor}/30`}>
                <feature.icon className={`text-${feature.accentColor}`} size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-interpretis-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-cyber-grid-bg z-0 opacity-20"></div>
    </section>
  );
};

export default Features;
