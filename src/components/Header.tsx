
import { useState, useEffect } from 'react';
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
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-black py-3' 
          : 'bg-black/20 backdrop-blur-sm py-5'
      } ${className}`}>
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between lg:justify-center relative">
            {/* Desktop Navigation - Left Side */}
            <div className="hidden lg:flex items-center space-x-12 absolute left-0">
              <a 
                href="/shop" 
                className="text-white text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity duration-300"
              >
                Shop
              </a>
              <a 
                href="/tour" 
                className="text-white text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity duration-300"
              >
                Tour
              </a>
            </div>
            
            {/* Logo - Centered */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className={`block text-white font-black tracking-tight hover:opacity-80 transition-all duration-500 ease-out ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}
                style={{ 
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontWeight: '900',
                  letterSpacing: '0.05em'
                }}
              >
                MITCHELCASIMIR
              </a>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center space-x-12 absolute right-0">
              <a 
                href="/music" 
                className="text-white text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity duration-300"
              >
                Music
              </a>
              <a 
                href="/videos" 
                className="text-white text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity duration-300"
              >
                Videos
              </a>
              <a 
                href="/newsletter" 
                className="text-white text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity duration-300"
              >
                Newsletter
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-white hover:opacity-60 transition-opacity duration-300"
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
