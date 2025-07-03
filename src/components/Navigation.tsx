
interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const navItems = [
    { label: 'Music', href: '#music' },
    { label: 'Tour', href: '#tour' },
    { label: 'Videos', href: '#videos' },
    { label: 'Store', href: '#store' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={className}>
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
