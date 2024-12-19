import React from 'react';

const stats = [
  { number: '200+', label: 'Projects completed' },
  { number: '80+', label: 'Happy clients' },
  { number: '7+', label: 'Years of experience' },
  { number: '10+', label: 'Industry awards' }
];

const Experience = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl text-white mb-4">
          Years of <span className="">experience</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-light text-blue-500 mb-2">{stat.number}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;