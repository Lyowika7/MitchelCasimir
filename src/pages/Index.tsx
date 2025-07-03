
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';
import MobileMenu from '../components/MobileMenu';

const Index = () => {
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-playfair font-semibold text-white">
            ARIA
          </div>
          
          {/* Desktop Navigation */}
          <Navigation className="hidden md:flex" />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white/70 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Hero Section */}
      <Hero />

      {/* Social Links Section */}
      <SocialLinks />
    </div>
  );
};

export default Index;
