import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Projects', 'About', 'Services', 'Contact'];
  const socialLinks = [
    { Icon: Github, href: 'https://github.com', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="text-white text-lg font-medium tracking-wide transition-all duration-300 hover:text-purple-400 cursor-pointer">
            Creative Mind
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/80 hover:text-white text-sm transition-all duration-300 group py-2"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
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
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/80 hover:text-white hover:bg-purple-500/10 px-3 py-2 rounded-md text-base transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
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