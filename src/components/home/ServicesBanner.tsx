import React from 'react';
import { useScrollingText } from '../../hooks/useScrollingText';

const services = [
  'Video Production',
  'App Development',
  'Web Design',
  'SEO',
  'Video Production',
  'App Development',
  'Web Design',
  'SEO',
  'Video Production',
  'App Development',
  'Web Design',
  'SEO'
];

const ServicesBanner = () => {
  const { ref } = useScrollingText();

  return (
    <div className="absolute bottom-0 w-full overflow-hidden bg-transparent py-4">
      <div
        ref={ref}
        className="flex whitespace-nowrap text-white/60 text-sm"
      >
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <span className="mx-4">{service}</span>
            <span className="mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServicesBanner;