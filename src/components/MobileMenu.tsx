
import { useEffect } from 'react';

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
            <a href="https://spotify.com" className="text-white/70 hover:text-white transition-colors">
              Spotify
            </a>
            <a href="https://music.apple.com" className="text-white/70 hover:text-white transition-colors">
              Apple Music
            </a>
            <a href="https://youtube.com" className="text-white/70 hover:text-white transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
