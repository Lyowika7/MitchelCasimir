
import { useEffect } from 'react';
import { Music, Play, Instagram, Camera } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'MUSIC', href: '/music' },
    { label: 'NEWS', href: '/news' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'TOUR', href: '/tour' },
    { label: 'STORE', href: '/store' },
    { label: 'CONTACT', href: '/contact' }
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
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-black/97 backdrop-blur-lg" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8">
        <nav className="text-center mb-16">
          <ul className="space-y-8">
            {navItems.map((item, index) => (
              <li 
                key={item.label} 
                className="transform translate-y-8 opacity-0 animate-fade-in" 
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block text-4xl font-medium text-white hover:text-white/70 transition-all duration-500 tracking-wider"
                  style={{ 
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                    fontWeight: '500',
                    letterSpacing: '0.05em'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="text-center">
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/60 hover:text-white transition-all duration-500 p-2 transform hover:scale-110"
                  style={{ 
                    animationDelay: `${(navItems.length + index) * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <IconComponent size={24} />
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
