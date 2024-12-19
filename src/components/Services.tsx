import React from 'react';
import { Code2, Smartphone, Globe, Database, Cloud, Lock } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-blue-600" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions built to address your unique business challenges and requirements.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: 'Web Development',
    description: 'Responsive and dynamic web applications using cutting-edge technologies.'
  },
  {
    icon: <Database className="h-8 w-8 text-blue-600" />,
    title: 'Database Design',
    description: 'Efficient and scalable database architectures to manage your data effectively.'
  },
  {
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    title: 'Cloud Solutions',
    description: 'Cloud-native applications and infrastructure optimization services.'
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-600" />,
    title: 'Security Services',
    description: 'Comprehensive security solutions to protect your digital assets.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;