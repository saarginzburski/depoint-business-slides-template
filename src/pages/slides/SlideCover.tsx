import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideCover = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Chaos vs Intelligence Split - Apple-grade flat design */}
      <div className="absolute inset-0">
        {/* Left side - CHAOS with subtle tint */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-100"></div>
        
        {/* Right side - ORDER with clean background */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-background"></div>
        
        {/* Clean vertical divider */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200"></div>
        
        {/* REDUCED CHAOS ELEMENTS - Left Side - minimal clutter */}
        <div className="absolute left-0 inset-y-0 w-1/2 overflow-hidden opacity-50">
          {/* Smaller sticky notes - only 1 main one */}
          <div className="absolute left-8 bottom-1/3 transform -rotate-6">
            <div className="bg-yellow-50 border border-yellow-200 p-3 text-xs text-gray-600 rotate-3">
              ⚠ Missing Inventory
            </div>
          </div>

          {/* Smaller checklist */}
          <div className="absolute left-6 bottom-20 transform -rotate-1 opacity-60">
            <div className="bg-background border border-gray-200 p-2 text-xs text-gray-400">
              <div className="font-medium mb-1 text-gray-600 text-xs">Tasks</div>
              <div className="space-y-0.5 text-xs">
                <div>□ Check temp</div>
                <div className="text-pillar-risk">⚠ OVERDUE</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ORDER ELEMENTS - Right Side - clean grid pattern */}
        <div className="absolute right-0 inset-y-0 w-1/2 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full border-r border-b border-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Main content - Apple-grade typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 z-10">
        <div className="text-center max-w-6xl">
          {/* Strong headline with flat color halo effect */}
          <div className="relative">
            {/* Flat color halo background - no shadows */}
            <div className="absolute inset-0 bg-depoint-blue/5 rounded-3xl transform scale-110"></div>
            <h1 className="relative text-8xl font-black text-neutral-navy leading-[0.9] mb-16 tracking-tight">
              The Intelligence Layer
              <span className="block text-7xl text-depoint-blue mt-6">for the Physical Economy</span>
            </h1>
          </div>
          
          {/* Enhanced subtitle - +2pt, darker gray */}
          <div className="mt-24 mb-16">
            <p className="text-5xl text-gray-600 italic font-medium leading-relaxed relative inline-block">
              "From firefighting every shift… to confidence in every store."
              <span className="absolute bottom-[-6px] left-0 right-0 h-1 bg-depoint-orange"></span>
            </p>
          </div>
        </div>

        {/* Logo with 24px more space from underline */}
        <div className="absolute bottom-16 mt-6">
          <img 
            src={depointLogo} 
            alt="Depoint" 
            className="h-32"
          />
        </div>
      </div>

      {/* Clean header strip - Apple-grade flat */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background border-b border-gray-200 flex items-center justify-end px-8 z-20">
        <div className="slide-caption text-gray-400 tracking-wide uppercase">
          Q3 2025 • CONFIDENTIAL INVESTOR DECK
        </div>
      </div>
    </div>
  );
};

export default SlideCover;