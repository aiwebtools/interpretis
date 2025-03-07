
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'USE Interpretis 🕰️GPT NOW', href: 'https://chatgpt.com/g/g-67852089291481919b1b8e94152ebb3d-interpretis', isButton: true },
    { name: 'FAQ', href: '#faq', isButton: false },
    { name: 'Disclaimer', href: '#disclaimer', isButton: false },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai', isButton: false }
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-interpretis-darker/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-interpretis-accent1 to-interpretis-accent3 flex items-center justify-center">
              <span className="text-interpretis-darker font-bold text-lg">🕰️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Interpretis <span className="text-interpretis-accent1">🕰️</span> AI</h1>
              <p className="text-xs text-interpretis-muted">Presented by <a href="https://www.aiwebtools.ai" className="hover:text-interpretis-accent1 transition-colors">AiWebTools.AI</a></p>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              link.isButton ? (
                <Button 
                  key={index} 
                  className="btn-primary"
                  onClick={() => window.open(link.href, '_blank')}
                >
                  {link.name}
                </Button>
              ) : (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-interpretis-text hover:text-interpretis-accent1 transition-colors font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-interpretis-text hover:text-interpretis-accent1"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                link.isButton ? (
                  <Button 
                    key={index} 
                    className="btn-primary w-full"
                    onClick={() => {
                      window.open(link.href, '_blank');
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Button>
                ) : (
                  <a 
                    key={index} 
                    href={link.href}
                    className="text-interpretis-text hover:text-interpretis-accent1 transition-colors py-2 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
