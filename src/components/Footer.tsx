
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
                <p className="text-xs text-interpretis-muted">Presented by <a href="https://www.aiwebtools.ai" className="hover:text-interpretis-accent1 transition-colors">AiWebTools.AI</a></p>
              </div>
            </div>
            <p className="text-interpretis-muted">
              Uncover the etymological roots, historical depths, and symbolic layers of words, phrases, and concepts with our advanced AI tool.
            </p>
            <Button 
              className="btn-primary mt-4"
              onClick={() => window.open('https://chatgpt.com/g/g-67852089291481919b1b8e94152ebb3d-interpretis', '_blank')}
            >
              USE Interpretis 🕰️GPT NOW
            </Button>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">Disclaimer</a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">More AI Tools</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors flex items-center">
                  <Mail className="mr-2" size={16} />
                  Contact@ai-webtools.com
                </a>
              </li>
              <li>
                <a href="tel:+14758008096" className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors flex items-center">
                  <Phone className="mr-2" size={16} />
                  (475) 800-8096
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button 
                className="rounded-full bg-interpretis-accent2 hover:bg-interpretis-accent2/90 text-white"
                onClick={() => window.open('https://www.aiwebtools.ai', '_blank')}
              >
                More AI Tools
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 text-center">
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-interpretis-muted hover:text-interpretis-accent1 transition-colors"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-cyber-grid-bg z-0 opacity-10"></div>
    </footer>
  );
};

export default Footer;
