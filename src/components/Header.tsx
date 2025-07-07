
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      } ${className}`}>
        <div className="max-w-full mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 relative">
              <a 
                href="/" 
                className="block text-white font-bold text-2xl lg:text-3xl tracking-tight hover:opacity-80 transition-opacity duration-300"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                MitchelCasimir
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <Navigation className="hidden lg:flex" />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-white hover:opacity-70 transition-opacity duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : ''
                }`} />
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Subtle bottom border that appears on scroll */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`} />
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
