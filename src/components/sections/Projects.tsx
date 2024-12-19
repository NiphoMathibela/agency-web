import React from 'react';
import BlueHue from '../ui/BlueHue';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/project1.jpg',
    description: 'Modern e-commerce solution with seamless user experience',
    link: '#'
  },
  {
    title: 'Mobile Banking App',
    category: 'App Development',
    image: '/project2.jpg',
    description: 'Secure and intuitive mobile banking application',
    link: '#'
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: '/project3.jpg',
    description: 'Complete brand identity redesign for modern business',
    link: '#'
  },
  {
    title: 'Digital Marketing',
    category: 'Marketing',
    image: '/project4.jpg',
    description: 'Comprehensive digital marketing campaign',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <BlueHue variant="intense" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white mb-4">
            Proud of our <span className="font-serif italic">projects</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Showcasing our finest work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 
                       transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-blue-400 text-sm mb-2">{project.category}</p>
                    <h3 className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <a 
                    href={project.link}
                    className="p-2 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-300"
                  >
                    <ArrowUpRight className="h-5 w-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;