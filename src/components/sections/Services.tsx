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
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Blue circular hue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-900/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-800/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-950/20 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl text-white mb-12">
          We offer a <span className="italic font-serif">variety</span> of different digital services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 
                        transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="text-blue-500 mb-4 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110 transform">
                {service.icon}
              </div>
              <h3 className="text-2xl text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;