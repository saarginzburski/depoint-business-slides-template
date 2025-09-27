import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideCover4 = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Industry symbolic background - very light gray icons */}
      <div className="absolute inset-0 opacity-5">
        {/* Store outline */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-current">
          <div className="absolute top-0 left-0 w-full h-2/3 border-b-2 border-current"></div>
          <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 border-t-2 border-current"></div>
        </div>
        
        {/* Checklist icon */}
        <div className="absolute top-1/3 right-1/4 w-12 h-16 border-2 border-current">
          <div className="absolute top-2 left-2 w-2 h-2 border border-current"></div>
          <div className="absolute top-2 left-6 w-4 h-0.5 bg-current"></div>
          <div className="absolute top-5 left-2 w-2 h-2 border border-current"></div>
          <div className="absolute top-5 left-6 w-4 h-0.5 bg-current"></div>
        </div>
        
        {/* POS/tablet outline */}
        <div className="absolute bottom-1/3 left-1/3 w-14 h-10 border-2 border-current rounded">
          <div className="absolute top-1 left-1 right-1 bottom-3 border border-current"></div>
          <div className="absolute bottom-1 left-3 right-3 h-1 bg-current"></div>
        </div>
        
        {/* Franchise/building icon */}
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border-2 border-current">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-current"></div>
          <div className="absolute top-3 left-3 w-2 h-6 border border-current"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center px-16 z-10">
        {/* Headline at top */}
        <div className="text-center max-w-5xl mt-24">
          <h1 className="text-7xl font-black text-neutral-navy leading-[0.9] mb-6 tracking-tight">
            Turning Operations
            <span className="block text-depoint-blue mt-4">Into Intelligence</span>
          </h1>
        </div>
        
        {/* Tagline mid-slide */}
        <div className="text-center mt-16">
          <p className="text-3xl text-gray-600 font-medium leading-relaxed">
            Data-driven execution for every store, every shift.
          </p>
        </div>

        {/* Depoint logo prominent at bottom */}
        <div className="absolute bottom-16">
          <div className="text-center">
            <img 
              src={depointLogo} 
              alt="Depoint" 
              className="h-36 mx-auto mb-4"
            />
            <div className="w-24 h-1 bg-depoint-orange mx-auto"></div>
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

export default SlideCover4;