import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Video, Search } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    icon: <Globe className="h-8 w-8" />,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Creating beautiful, responsive websites that engage users.'
  },
  {
    title: 'App Development',
    icon: <Code className="h-8 w-8" />,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Building powerful mobile and web applications.'
  },
  {
    title: 'Video Production',
    icon: <Video className="h-8 w-8" />,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Professional video content that tells your story.'
  },
  {
    title: 'SEO',
    icon: <Search className="h-8 w-8" />,
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Optimizing your digital presence for maximum visibility.'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-light text-white mb-12"
        >
          Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <div className="text-blue-500 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                  <p className="text-white/60">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;