
import React from 'react';
import { Button } from '@/components/ui/button';
import FloatingLetters from './FloatingLetters';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      <FloatingLetters />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-interpretis-accent1/10 px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <span className="text-interpretis-accent1 text-sm font-medium">Free AI Web Tools by AIWebTools.AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient">Interpretis</span> <span className="inline-block">🕰️</span> AI
            <br />
            <span className="text-2xl md:text-3xl text-interpretis-text/80">Free Etymology Tool</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-interpretis-text/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Uncover the etymological roots 🕰️, historical depths 📜, and symbolic layers 🔮 of words, phrases, and concepts. The best free AI etymology tool for discovering language origins and linguistic history! ✨🌠
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              className="btn-primary"
              onClick={() => window.open('https://chatgpt.com/g/g-67852089291481919b1b8e94152ebb3d-interpretis', '_blank')}
              aria-label="Use Interpretis AI Etymology Tool Now - Free AI Web Tool"
            >
              USE FREE AI ETYMOLOGY TOOL NOW
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Learn how our free AI etymology tool works"
            >
              Learn How It Works
            </Button>
          </div>
          
          <div className="glassmorphic-card max-w-2xl mx-auto p-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-interpretis-accent3/20 flex items-center justify-center text-interpretis-accent3 mr-3">
                🔮
              </div>
              <h2 className="text-xl font-semibold">Your Gateway to Lost Knowledge</h2>
            </div>
            <p className="text-interpretis-muted">
              Type any word, phrase, or concept to reveal its hidden meanings, historical significance, and cultural impact. This free AI etymology tool speaks in a prophetic tone as it unravels the mysteries of language.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-cyber-grid-bg z-0 opacity-40"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-interpretis-dark to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
