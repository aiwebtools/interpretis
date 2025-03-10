
import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

interface DisclaimerPopupProps {
  onAgree: () => void;
  isOpen: boolean;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAgree, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md mx-4 glassmorphic-card border-2 border-interpretis-accent1/30 shadow-neon-cyan overflow-hidden"
          >
            {/* Top decoration bar */}
            <div className="h-2 w-full bg-gradient-to-r from-interpretis-accent1 via-interpretis-accent3 to-interpretis-accent2"></div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gradient animate-pulse-glow">
                  Disclaimer
                </h2>
                <button 
                  onClick={onAgree} 
                  className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6 text-interpretis-text/90">
                <p className="font-medium leading-relaxed">
                  Interpretis is provided for educational and entertainment purposes only. The etymological analyses and linguistic information should not be considered definitive or authoritative.
                </p>
                <p className="text-sm text-interpretis-muted">
                  By clicking "I Agree", you acknowledge that you've read our full disclaimer and agree to our terms of service and privacy policy.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button
                  onClick={onAgree}
                  className="btn-primary group relative overflow-hidden px-8 py-3"
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold tracking-wide">
                    I AGREE 
                    <CheckCircle className="h-5 w-5 animate-pulse-glow" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-interpretis-accent1 via-interpretis-accent3 to-interpretis-accent2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
