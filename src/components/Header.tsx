
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl md:text-3xl font-playfair font-bold text-white hover:text-white/80 transition-colors">
                MitchelCasimir
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <Navigation className="hidden md:flex" />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/70 transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
