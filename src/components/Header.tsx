
import { useState, useEffect } from 'react';
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md py-4' 
          : 'bg-transparent py-6'
      } ${className}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className={`block text-white font-bold tracking-tight hover:opacity-80 transition-all duration-700 ease-out ${
                  isScrolled ? 'text-2xl lg:text-2xl' : 'text-3xl lg:text-4xl'
                }`}
                style={{ 
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontWeight: '700',
                  letterSpacing: '-0.025em'
                }}
              >
                MITCHELCASIMIR
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
                  isMobileMenuOpen ? 'rotate-45 top-2.5' : ''
                }`} />
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-2.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
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
