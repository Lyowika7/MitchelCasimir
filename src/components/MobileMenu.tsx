
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navItems = [
    { label: 'SHOP', href: '/shop' },
    { label: 'TOUR', href: '/tour' },
    { label: 'MUSIC', href: '/music' },
    { label: 'VIDEOS', href: '/videos' },
    { label: 'NEWSLETTER', href: '/newsletter' }
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
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isOpen ? 'opacity-95' : 'opacity-0'
        }`} 
      />
      
      <div className={`relative z-10 flex flex-col justify-center min-h-screen px-8 transform transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="text-center">
          <ul className="space-y-8">
            {navItems.map((item, index) => (
              <li 
                key={item.label} 
                className={`transform transition-all duration-700 ${
                  isOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block text-3xl font-black text-white hover:opacity-60 transition-opacity duration-300 tracking-[0.1em] uppercase"
                  style={{ 
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                    fontWeight: '900'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
