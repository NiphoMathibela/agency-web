import React, { useState, useEffect } from 'react';
import { Search, Sun, Menu, X } from 'lucide-react';

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="text-white text-lg font-medium tracking-wide transition-all duration-300 hover:text-purple-400">
            Creative Mind
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Projects', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
            <Sun className="h-5 w-5 text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
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
            {['Projects', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-base transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 px-5 pb-3">
            <Search className="h-5 w-5 text-white/80 hover:text-white cursor-pointer" />
            <Sun className="h-5 w-5 text-white/80 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;