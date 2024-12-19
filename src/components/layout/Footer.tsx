import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const mainPages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Projects', href: '/projects' },
    { name: 'Expertise', href: '/expertise' },
  ];

  const utilityPages = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Licenses', href: '/licenses' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Whatsapp', href: 'https://whatsapp.com' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="flex gap-4 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-medium mb-4">Main Pages</h3>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.name}>
                  <Link 
                    to={page.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Utility pages</h3>
            <ul className="space-y-2">
              {utilityPages.map((page) => (
                <li key={page.name}>
                  <Link 
                    to={page.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Email and Copyright */}
        <div className="border-t border-white/10 pt-8">
          <a 
            href="mailto:Hello@Creativemind.Agency"
            className="text-4xl font-light hover:text-white/80 transition-colors duration-300 block mb-8"
          >
            Hello@Creativemind.Agency
          </a>
          <div className="flex justify-between items-center text-white/60 text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">
              Privacy policy
            </Link>
            <p>Creative Mind Agency {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
