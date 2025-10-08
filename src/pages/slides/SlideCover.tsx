import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideCover1 = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Subtle grid texture background */}
      <div className="absolute inset-0">
        <div className="w-full h-full opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main content - Bold Hero Statement */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 z-10">
        <div className="text-center max-w-6xl">
          {/* Large headline centered */}
          <h1 className="text-8xl font-black text-neutral-navy leading-[0.9] mb-6 tracking-tight">
            The Intelligence Layer
            <span className="block text-7xl text-depoint-blue mt-4">for the Physical Economy</span>
          </h1>
          
          {/* Single accent line under headline */}
          <div className="w-32 h-1 bg-depoint-orange mx-auto mb-12"></div>
          
          {/* Subtitle below in smaller type */}
          <p className="text-4xl text-gray-600 font-medium leading-relaxed">
            Protecting margins, reducing risk, unlocking growth.
          </p>
        </div>

        {/* Depoint logo anchored bottom-center */}
        <div className="absolute bottom-16">
          <img 
            src={depointLogo} 
            alt="Depoint" 
            className="h-32"
          />
        </div>
      </div>

      {/* Clean header strip */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background border-b border-gray-200 flex items-center justify-end px-8 z-20">
        <div className="slide-caption text-gray-400 tracking-wide uppercase">
          Q3 2025 • CONFIDENTIAL
        </div>
      </div>
    </div>
  );
};

export default SlideCover1;