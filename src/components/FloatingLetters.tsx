
import React, { useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingLetters: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ🕰️📜🔮✨'.split('');
    const container = containerRef.current;
    container.innerHTML = '';
    
    // Reduce the number of letters on mobile
    const letterCount = isMobile ? 15 : 30;
    
    for (let i = 0; i < letterCount; i++) {
      const letter = document.createElement('div');
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      
      letter.textContent = randomLetter;
      letter.className = 'letter absolute text-2xl md:text-4xl font-bold text-interpretis-accent1/20 select-none pointer-events-none animate-float';
      
      // Random positions
      const leftPos = Math.random() * 100;
      const topPos = Math.random() * 100;
      const zPos = Math.random() * 500 - 250;
      
      letter.style.left = `${leftPos}%`;
      letter.style.top = `${topPos}%`;
      letter.style.transform = `translateZ(${zPos}px) rotateY(${Math.random() * 360}deg)`;
      
      // Varying animation durations
      const duration = 5 + Math.random() * 10;
      letter.style.animationDuration = `${duration}s`;
      
      // Varying animation delays
      const delay = Math.random() * 5;
      letter.style.animationDelay = `${delay}s`;
      
      container.appendChild(letter);
    }
    
    // Small movement effect with mouse
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      container.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        ref={containerRef} 
        className="floating-container w-full h-full transition-transform duration-200"
      />
    </div>
  );
};

export default FloatingLetters;
