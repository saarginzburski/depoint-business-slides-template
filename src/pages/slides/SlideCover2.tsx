import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideCover2 = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Split Story: Chaos → Intelligence */}
      <div className="absolute inset-0">
        {/* Left side - muted red with chaos elements */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-red-50"></div>
        
        {/* Right side - clean white */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-background"></div>
        
        {/* Central vertical divide shows transformation */}
        <div className="absolute inset-y-0 left-1/2 w-1 bg-depoint-blue"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-depoint-blue rounded-full flex items-center justify-center">
          <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-l-transparent border-r-transparent border-b-white transform translate-x-0.5"></div>
        </div>
        
        {/* Chaos elements on left - very subtle */}
        <div className="absolute left-0 inset-y-0 w-1/2 overflow-hidden opacity-30">
          <div className="absolute left-8 top-1/4 transform -rotate-6">
            <div className="bg-yellow-100 border border-yellow-300 p-2 text-xs text-gray-500">
              ⚠ Task Overdue
            </div>
          </div>
          <div className="absolute left-12 bottom-1/3 transform rotate-3">
            <div className="bg-red-100 border border-red-300 p-2 text-xs text-gray-500">
              ❌ Compliance Issue
            </div>
          </div>
        </div>
      </div>

      {/* Main content - Split layout */}
      <div className="absolute inset-0 flex items-center z-10">
        {/* Left side label */}
        <div className="w-1/2 flex justify-center">
          <div className="text-center">
            <p className="text-2xl font-semibold text-red-400 mb-2">CHAOS</p>
            <p className="text-lg text-gray-500">Firefighting every shift...</p>
          </div>
        </div>
        
        {/* Right side - headline + tagline */}
        <div className="w-1/2 flex justify-center">
          <div className="text-center max-w-lg px-8">
            <h1 className="text-6xl font-black text-neutral-navy leading-[0.9] mb-4">
              Every Day Great
              <span className="block text-depoint-blue">Execution</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              From firefighting every shift… to flawless execution.
            </p>
          </div>
        </div>
      </div>

      {/* Depoint logo centered at bottom */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <img 
          src={depointLogo} 
          alt="Depoint" 
          className="h-32"
        />
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

export default SlideCover2;