import React from 'react';
import { Search, Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 px-6">
      <div className="flex justify-between items-center h-14">
        <div className="text-white text-sm">Creative Mind</div>
        <div className="flex space-x-6">
          <a href="#projects" className="text-white/80 hover:text-white text-sm">Projects</a>
          <a href="#about" className="text-white/80 hover:text-white text-sm">About</a>
          <a href="#services" className="text-white/80 hover:text-white text-sm">Services</a>
          <a href="#contact" className="text-white/80 hover:text-white text-sm">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="h-4 w-4 text-white/80 hover:text-white cursor-pointer" />
          <Sun className="h-4 w-4 text-white/80 hover:text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;