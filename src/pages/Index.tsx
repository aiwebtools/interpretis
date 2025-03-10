
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import DisclaimerPopup from '@/components/DisclaimerPopup';

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  useEffect(() => {
    document.title = "Interpretis - AI Etymology & Root Word Analysis Tool";
    
    // Check if the user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem('interpretis-disclaimer-agreed');
    if (!hasAgreed) {
      setShowDisclaimer(true);
    }
  }, []);
  
  const handleAgree = () => {
    localStorage.setItem('interpretis-disclaimer-agreed', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-interpretis-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
      
      {/* Disclaimer Popup */}
      <DisclaimerPopup 
        isOpen={showDisclaimer} 
        onAgree={handleAgree} 
      />
    </div>
  );
};

export default Index;
