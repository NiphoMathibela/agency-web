import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import BlueHue from '../ui/BlueHue';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      <BlueHue variant="intense" />
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
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
            className="text-6xl font-light text-white mb-4"
          >
            How can we <span className="font-serif italic">help</span>?
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg mb-12"
          >
            Your deserve the best! Don't be shy and message us!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg text-white mb-1">Email Us</h3>
                  <p className="text-white/60">hello@creativemind.agency</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg text-white mb-1">Call Us</h3>
                  <p className="text-white/60">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg text-white mb-1">Visit Us</h3>
                  <p className="text-white/60">123 Creative Street, Design City, DC 12345</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone number*"
                  value={formState.phone}
                  onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-32 bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-colors"
              >
                Submit
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;