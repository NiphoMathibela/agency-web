import React from 'react';

interface BlueHueProps {
  variant?: 'default' | 'intense' | 'subtle';
  className?: string;
}

const BlueHue: React.FC<BlueHueProps> = ({ variant = 'default', className = '' }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'intense':
        return {
          primary: 'bg-blue-900/30 blur-[120px]',
          secondary: 'bg-blue-800/20 blur-[100px]',
          tertiary: 'bg-blue-950/25 blur-[140px]'
        };
      case 'subtle':
        return {
          primary: 'bg-blue-900/10 blur-[80px]',
          secondary: 'bg-blue-800/5 blur-[60px]',
          tertiary: 'bg-blue-950/15 blur-[100px]'
        };
      default:
        return {
          primary: 'bg-blue-900/20 blur-[100px]',
          secondary: 'bg-blue-800/10 blur-[80px]',
          tertiary: 'bg-blue-950/20 blur-[120px]'
        };
    }
  };

  const classes = getVariantClasses();

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full ${classes.primary}`} 
      />
      <div 
        className={`absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full ${classes.secondary}`} 
      />
      <div 
        className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full ${classes.tertiary}`} 
      />
    </div>
  );
};

export default BlueHue;
