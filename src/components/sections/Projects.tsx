import React from 'react';

const projects = [
  {
    title: 'Digital Nomads',
    image: 'https://images.unsplash.com/photo-1557853197-aefb550b6fdc?auto=format&fit=crop&q=80&w=800&h=500',
    category: 'Branding'
  },
  {
    title: 'Visual Environment',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=500',
    category: 'Design'
  },
  {
    title: 'Tech Innovation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500',
    category: 'Development'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl text-white">
            Proud of our <span className="italic font-serif">projects</span>
          </h2>
          <button className="text-blue-500 hover:text-blue-400">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/60">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;