
import { useEffect } from 'react';
import { Music, Play, Instagram, Camera } from 'lucide-react';
import { SiSpotify, SiApplemusic, SiYoutubemusic, SiInstagram, SiTiktok } from 'react-icons/si';

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
      icon: SiSpotify
    },
    { 
      name: 'Apple Music', 
      url: 'https://music.apple.com/us/artist/mitchelcasimir/1736847723',
      icon: SiApplemusic
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@MitchelCasimir',
      icon: SiYoutubemusic
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/mitchelcasimir/',
      icon: SiInstagram
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@mitchelcasimir',
      icon: SiTiktok
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
      <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" />
      
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
                  className="block text-4xl font-light text-white hover:text-white/70 transition-colors duration-300 tracking-wide"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
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
                  className="text-white/60 hover:text-white transition-colors duration-300 p-2"
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
