
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingLetters from "@/components/FloatingLetters";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-interpretis-dark relative overflow-hidden">
      <FloatingLetters />
      
      <div className="relative z-10 text-center p-6">
        <div className="glassmorphic-card p-8 md:p-12 max-w-md mx-auto">
          <h1 className="text-8xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-interpretis-text mb-8">
            The word or phrase you're looking for doesn't exist in our lexicon.
          </p>
          <Button 
            className="btn-primary"
            onClick={() => window.location.href = '/'}
          >
            Return to Etymology
          </Button>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-cyber-grid-bg z-0 opacity-30"></div>
    </div>
  );
};

export default NotFound;
