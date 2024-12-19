import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { Icon: Github, href: 'https://github.com', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link 
            to="/" 
            className="text-white text-lg font-medium tracking-wide transition-all duration-300 hover:text-purple-400 cursor-pointer"
          >
            Creative Mind
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm transition-all duration-300 group py-2
                  ${isActivePath(item.path) 
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute inset-0 bg-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out
                  ${isActivePath(item.path) ? 'scale-100' : ''}`} 
                />
                <span className={`absolute bottom-0 left-0 h-[2px] bg-purple-400 transition-all duration-300 ease-out
                  ${isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                />
              </Link>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-white/80 transition-all duration-300 group-hover:text-purple-400 group-hover:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base transition-all duration-300
                  ${isActivePath(item.path)
                    ? 'text-white bg-purple-500/20'
                    : 'text-white/80 hover:text-white hover:bg-purple-500/10'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Social Icons - Mobile */}
          <div className="flex items-center justify-center space-x-6 px-5 pb-4 border-t border-white/10 mt-2 pt-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-purple-400 transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;