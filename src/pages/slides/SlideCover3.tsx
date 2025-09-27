import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideCover3 = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Flat blue/orange frame around slide */}
      <div className="absolute inset-4">
        <div className="w-full h-full border-4 border-depoint-blue"></div>
        <div className="absolute top-0 right-0 w-32 h-32">
          <div className="w-full h-full bg-depoint-orange"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32">
          <div className="w-full h-full bg-depoint-orange"></div>
        </div>
      </div>

      {/* Main content - EDGE Visual Identity */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 z-10">
        <div className="text-center max-w-5xl">
          {/* Headline = EDGE (in bold) */}
          <h1 className="text-9xl font-black text-neutral-navy leading-[0.8] mb-8 tracking-wider">
            EDGE
          </h1>
          
          {/* Subtitle */}
          <p className="text-4xl text-depoint-blue font-semibold mb-6">
            Every Day Great Execution
          </p>
          
          {/* Tagline */}
          <p className="text-2xl text-gray-600 font-medium mb-16">
            Where compliance, growth, and efficiency meet.
          </p>
        </div>

        {/* Depoint logo integrated into tagline */}
        <div className="absolute bottom-16 flex items-center gap-4">
          <img 
            src={depointLogo} 
            alt="Depoint" 
            className="h-24"
          />
          <div className="h-16 w-px bg-gray-300"></div>
          <div className="text-2xl font-semibold text-neutral-navy">
            Your Edge
          </div>
        </div>
      </div>

      {/* Clean header strip */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background border-b border-gray-200 flex items-center justify-end px-8 z-20">
        <div className="slide-caption text-gray-400 tracking-wide uppercase">
          Q3 2025 • CONFIDENTIAL INVESTOR DECK
        </div>
      </div>
    </div>
  );
};

export default SlideCover3;