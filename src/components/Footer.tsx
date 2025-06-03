
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-interpretis-darker pt-16 pb-8 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-interpretis-accent1 to-interpretis-accent3 flex items-center justify-center">
                <span className="text-interpretis-darker font-bold text-lg">🕰️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Interpretis <span className="text-interpretis-accent1">🕰️</span> AI</h3>
                <p className="text-xs text-interpretis-muted">Free AI Tools by <a href="https://www.aiwebtools.ai" className="hover:text-interpretis-accent1 transition-colors" title="AI Web Tools - Free AI Tools">AIWebTools.AI</a></p>
              </div>
            </div>
            <p className="text-interpretis-muted">
              The best free AI etymology tool for uncovering etymological roots, historical depths, and symbolic layers of words, phrases, and concepts. Part of our comprehensive suite of free AI web tools.
            </p>
            <Button 
              className="btn-primary mt-4"
              onClick={() => window.open('https://chatgpt.com/g/g-67852089291481919b1b8e94152ebb3d-interpretis', '_blank')}
              aria-label="Use free AI etymology tool Interpretis now"
            >
              USE FREE AI ETYMOLOGY TOOL
            </Button>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Free AI Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="AI Etymology Tool Features">Etymology Tool Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="How AI Etymology Tool Works">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="User Reviews">User Reviews</a>
              </li>
              <li>
                <a href="#faq" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="Frequently Asked Questions">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="Legal Disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="More Free AI Web Tools">More Free AI Tools</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="Privacy Policy">Privacy Policy</a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="Terms of Service">Terms of Service</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors" title="Tool Disclaimer">Tool Disclaimer</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact AI Web Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors flex items-center" title="Email AI Web Tools">
                  <Mail className="mr-2" size={16} />
                  Contact@ai-webtools.com
                </a>
              </li>
              <li>
                <a href="tel:+14758008096" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors flex items-center" title="Call AI Web Tools">
                  <Phone className="mr-2" size={16} />
                  (475) 800-8096
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button 
                className="rounded-full bg-interpretis-accent2 hover:bg-interpretis-accent2/90 text-white"
                onClick={() => window.open('https://www.aiwebtools.ai', '_blank')}
                aria-label="Discover more free AI web tools"
              >
                More Free AI Tools
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 text-center">
          <p className="text-interpretis-muted mb-2">
            <strong>Keywords:</strong> Free AI Tools, AI Web Tools, Etymology AI Tool, Word Origin Analyzer, Linguistic Analysis Tool, Free Etymology Tool, AI Language Tools, Interpretis AI, AIWebTools.AI
          </p>
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors"
            title="AI Web Tools - Free AI Tools Collection"
          >
            © 2025 AI WEB TOOLS LLC - Free AI Tools & AI Web Tools Collection. All rights reserved.
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-cyber-grid-bg z-0 opacity-10"></div>
    </footer>
  );
};

export default Footer;
