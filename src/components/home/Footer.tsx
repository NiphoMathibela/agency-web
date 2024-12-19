import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-8 font-sans">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-auto mb-6 md:mb-0 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <a href="#" className="border border-white rounded px-3 py-1 mr-2 hover:bg-white hover:text-navy transition duration-300">Twitter</a>
            <a href="#" className="border border-white rounded px-3 py-1 mr-2 hover:bg-white hover:text-navy transition duration-300">Instagram</a>
            <a href="#" className="border border-white rounded px-3 py-1 hover:bg-white hover:text-navy transition duration-300">WhatsApp</a>
          </div>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0 text-center md:text-left">
          <p className="font-bold mb-2">Main Pages</p>
          <ul className="list-none">
            <li><a href="#" className="block hover:underline">Home</a></li>
            <li><a href="#" className="block hover:underline">About</a></li>
            <li><a href="#" className="block hover:underline">Blog</a></li>
            <li><a href="#" className="block hover:underline">Services</a></li>
            <li><a href="#" className="block hover:underline">Contact</a></li>
            <li><a href="#" className="block hover:underline">Projects</a></li>
            <li><a href="#" className="block hover:underline">Expertise</a></li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0 text-center md:text-left">
          <p className="font-bold mb-2">Utility Pages</p>
          <ul className="list-none">
            <li><a href="#" className="block hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="block hover:underline">Licenses</a></li>
          </ul>
        </div>

        <div className="w-full md:w-auto text-center md:text-left">
          <p className="text-lg">Hello@Creativemind.Agency</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 pt-4 border-t border-gray-600 flex flex-wrap justify-between text-sm">
        <p>Privacy Policy</p>
        <p>Creative Mind Agency © 2004</p>
      </div>
    </footer>
  );
};

export default Footer;