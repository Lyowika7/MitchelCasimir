
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
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <nav className="text-center">
          <ul className="space-y-8">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block text-3xl font-playfair text-white hover:text-white/70 transition-colors"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-16 text-center">
          <div className="flex flex-col space-y-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors flex items-center justify-center space-x-2"
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
