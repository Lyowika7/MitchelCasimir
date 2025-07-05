
import { useEffect } from 'react';
import { Music, Play, Instagram, Camera } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Music', href: '/music' },
    { label: 'News', href: '/news' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Tour', href: '/tour' },
    { label: 'Store', href: '/store' },
    { label: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/artist/5XKBEUbzPsOlbVgOFXq7Hk?si=SzaXxJbCTMiP2M7_7nMy3A',
      icon: Music
    },
    { 
      name: 'Apple Music', 
      url: 'https://music.apple.com/us/artist/mitchelcasimir/1736847723',
      icon: Music
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@MitchelCasimir',
      icon: Play
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/mitchelcasimir/',
      icon: Instagram
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@mitchelcasimir',
      icon: Camera
    }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="absolute inset-0 bg-black/98 backdrop-blur-md" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <nav className="text-center mb-12">
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={item.label} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block text-2xl md:text-3xl font-playfair text-white hover:text-white/70 transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="text-center">
          <div className="flex flex-col space-y-3">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors flex items-center justify-center space-x-3 text-sm uppercase tracking-wider"
                  style={{ animationDelay: `${(navItems.length + index) * 0.1}s` }}
                >
                  <IconComponent size={16} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
