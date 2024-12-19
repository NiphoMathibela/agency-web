import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock } from 'lucide-react';
import BlueHue from '../ui/BlueHue';

const teamMembers = [
  {
    name: 'Karina',
    role: 'Video Animator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    name: 'Kevin',
    role: 'App Developer',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    name: 'Mohsin',
    role: 'Client Success Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      <BlueHue variant="default" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-20 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-light text-white mb-4"
          >
            Years of <span className="font-serif italic">experience</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Our commitment to quality and innovation has allowed us to deliver outstanding results for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl text-white">{member.name}</h3>
                  <p className="text-white/60">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <Users className="h-8 w-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-white text-lg mb-2">Expert Team</h3>
            <p className="text-white/60">Dedicated professionals with diverse skills</p>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-white text-lg mb-2">Award Winning</h3>
            <p className="text-white/60">Recognition for excellence in our field</p>
          </div>
          <div className="text-center">
            <Clock className="h-8 w-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-white text-lg mb-2">On Time</h3>
            <p className="text-white/60">Delivering projects within deadlines</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;