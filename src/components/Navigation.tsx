
interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Music', href: '/music' },
    { label: 'News', href: '/news' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Tour', href: '/tour' },
    { label: 'Store', href: '/store' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={className}>
      <ul className="flex items-center space-x-12">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href} 
              className="relative text-white/90 hover:text-white transition-all duration-300 text-sm font-medium tracking-wider uppercase group"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {item.label}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
