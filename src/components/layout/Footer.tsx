import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, MessageCircle } from 'lucide-react';
import BlueHue from '../ui/BlueHue';

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
    { 
      name: 'Twitter', 
      href: 'https://twitter.com',
      Icon: Twitter
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com',
      Icon: Instagram
    },
    { 
      name: 'Whatsapp', 
      href: 'https://whatsapp.com',
      Icon: MessageCircle
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative overflow-hidden">
      <BlueHue variant="intense" className="opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Social Links */}
        <div className="py-16 border-b border-white/10">
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 
                         transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
                aria-label={name}
              >
                <Icon className="h-6 w-6 text-white/80 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-white mb-6">Main Pages</h3>
            <div className="grid grid-cols-2 gap-4">
              {mainPages.map((page) => (
                <Link 
                  key={page.name}
                  to={page.href}
                  className="text-white/60 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-white mb-6">Utility pages</h3>
            <div className="space-y-4">
              {utilityPages.map((page) => (
                <Link 
                  key={page.name}
                  to={page.href}
                  className="text-white/60 hover:text-blue-400 transition-colors duration-300 block text-sm"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Email and Copyright */}
        <div className="py-16 border-t border-white/10">
          <a 
            href="mailto:Hello@Creativemind.Agency"
            className="block text-center text-4xl font-light text-white hover:text-blue-400 transition-colors duration-300 mb-8
                     backdrop-blur-sm rounded-2xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
          >
            Hello@Creativemind.Agency
          </a>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <Link 
              to="/privacy-policy" 
              className="hover:text-blue-400 transition-colors duration-300 order-2 md:order-1"
            >
              Privacy policy
            </Link>
            <p className="order-1 md:order-2">
              {currentYear} Creative Mind Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
