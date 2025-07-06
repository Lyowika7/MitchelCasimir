
interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'MUSIC', href: '/music' },
    { label: 'NEWS', href: '/news' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'TOUR', href: '/tour' },
    { label: 'STORE', href: '/store' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <nav className={className}>
      <ul className="flex items-center space-x-8 xl:space-x-12">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href} 
              className="relative text-white/80 hover:text-white transition-all duration-500 ease-out text-sm font-medium tracking-widest uppercase group"
              style={{ 
                fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.1em'
              }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
