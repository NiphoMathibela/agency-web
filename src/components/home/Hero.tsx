import RobotModel from './RobotModel';
import ServicesBanner from './ServicesBanner';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-black to-blue-900/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,255,0.1),rgba(0,0,0,0.8))]" />
      </div>
      
      <div className="relative pt-32 pb-20 text-center">
        <h1 className="text-6xl md:text-7xl font-light text-white mb-2">
          We Build
        </h1>
        <p className="text-3xl md:text-4xl font-serif italic text-white/90">
          Digital Excellence
        </p>
        
        <div className="mt-20 mb-32">
          <RobotModel />
        </div>

        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Tired of bad websites?
          </h2>
          <p className="text-3xl md:text-4xl font-serif italic text-white">
            We are the best <span className="italic">web development</span> agency.
          </p>
        </div>
      </div>
      
      <ServicesBanner />
    </div>
  );
};

export default Hero;