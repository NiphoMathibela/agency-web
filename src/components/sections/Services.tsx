import React from 'react';
import { Globe, Code, Video, Search } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Design',
    description: 'Creating beautiful, responsive websites that engage users and drive results.'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'App Development',
    description: 'Building powerful mobile and web applications with cutting-edge technology.'
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: 'Video Production',
    description: 'Professional video content that tells your story and captures attention.'
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: 'SEO',
    description: 'Optimizing your digital presence for maximum visibility and reach.'
  }
];

const ServicesSec = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl text-white mb-12">
          We offer a <span className="italic font-serif">variety</span> of different digital services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="text-blue-500 mb-4 group-hover:text-blue-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl text-white mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;