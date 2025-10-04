
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
    document.title = "Interpretis - AI Etymology & Root Word Analysis Tool | Free AI Tool";
    
    // Add additional SEO meta tags dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Interpretis: Free AI-powered etymology tool that reveals word origins, root meanings, and linguistic history. Discover hidden meanings behind any word instantly with advanced AI analysis.');
    }
    
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
      {/* SEO-optimized header structure */}
      <header>
        <Navbar />
      </header>
      
      <main role="main">
        {/* Add semantic HTML5 structure for better SEO */}
        <section aria-label="Hero section with main call to action">
          <Hero />
        </section>
        
        <section aria-label="Features of the AI etymology tool">
          <Features />
        </section>
        
        <section aria-label="How the etymology tool works">
          <HowItWorks />
        </section>
        
        <section aria-label="User testimonials and reviews">
          <Testimonials />
        </section>
        
        <section aria-label="Frequently asked questions">
          <FAQ />
        </section>
        
        <section aria-label="Legal disclaimer">
          <Disclaimer />
        </section>
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
