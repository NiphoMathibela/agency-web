import React from 'react';
import BlueHue from '../ui/BlueHue';
import { Users, Award, Clock, Zap } from 'lucide-react';

const stats = [
  { 
    number: '200+', 
    label: 'Projects completed',
    icon: <Clock className="h-8 w-8" />,
    description: 'Successfully delivered projects across various industries'
  },
  { 
    number: '80+', 
    label: 'Happy clients',
    icon: <Users className="h-8 w-8" />,
    description: 'Satisfied clients worldwide trust our expertise'
  },
  { 
    number: '10+', 
    label: 'Years experience',
    icon: <Award className="h-8 w-8" />,
    description: 'Decade of excellence in digital solutions'
  },
  { 
    number: '24/7', 
    label: 'Support',
    icon: <Zap className="h-8 w-8" />,
    description: 'Round-the-clock dedicated support team'
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <BlueHue variant="subtle" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white mb-4">
            Years of <span className="font-serif italic">experience</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Delivering exceptional digital solutions with a proven track record of success and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 
                        transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="text-blue-500 mb-4 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110 transform">
                {stat.icon}
              </div>
              <h3 className="text-4xl text-white mb-2 font-light">
                {stat.number}
              </h3>
              <h4 className="text-lg text-white/80 mb-2 transition-colors duration-300 group-hover:text-blue-400">
                {stat.label}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;