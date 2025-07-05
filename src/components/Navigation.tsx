
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
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href} 
              className="text-white/90 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide uppercase relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
