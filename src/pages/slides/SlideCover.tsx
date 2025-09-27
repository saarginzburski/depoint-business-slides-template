import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideCover = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Clean 50/50 background split - flat colors only */}
      <div className="absolute inset-0">
        {/* Left side - CHAOS with subtle flat red tint */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-red-50"></div>
        
        {/* Right side - ORDER with clean background */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-background"></div>
        
        {/* Clean vertical divider */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200"></div>
        
        {/* REDUCED CHAOS ELEMENTS - Left Side - minimal clutter */}
        <div className="absolute left-0 inset-y-0 w-1/2 overflow-hidden opacity-50">
          {/* Fewer, smaller sticky notes */}
          <div className="absolute left-6 bottom-1/3 transform -rotate-6">
            <div className="bg-yellow-100 border border-yellow-200 p-2 text-xs text-gray-600 rotate-4 mb-2 w-20">
              ⚠ Missing Item
            </div>
            <div className="bg-red-100 border border-red-200 p-2 text-xs text-gray-600 -rotate-3 transform translate-x-4 w-20">
              Equipment #3
            </div>
          </div>

          {/* Single smaller checklist */}
          <div className="absolute left-4 bottom-20 transform -rotate-1 opacity-60">
            <div className="bg-background border border-gray-200 p-2 text-xs text-gray-400 w-24">
              <div className="font-medium mb-1 text-gray-600 text-xs">Tasks</div>
              <div className="space-y-0.5 text-xs">
                <div>□ Temp</div>
                <div>☑ Count</div>
                <div className="text-red-500">⚠ Late</div>
              </div>
            </div>
          </div>
          
          {/* Minimal scattered text - smaller */}
          <div className="absolute left-3 bottom-8 rotate-4 opacity-30">
            <div className="text-xs text-red-400 font-mono text-xs">
              alerts.txt
            </div>
          </div>
        </div>
        
        {/* ORDER ELEMENTS - Right Side - clean grid pattern */}
        <div className="absolute right-0 inset-y-0 w-1/2 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(90deg, hsl(var(--gray-200)) 1px, transparent 1px), linear-gradient(hsl(var(--gray-200)) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
      </div>

      {/* Main content - strongest visual hierarchy */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-page-x z-10">
        <div className="text-center max-w-6xl">
          {/* Enhanced headline with subtle flat halo effect */}
          <div className="relative">
            {/* Subtle flat background halo - no gradients/shadows */}
            <div className="absolute inset-0 bg-background/80 rounded-xl -m-8 z-0"></div>
            
            <h1 className="relative z-10 text-8xl font-black text-foreground leading-[0.9] mb-12 tracking-tight">
              The Intelligence Layer
              <span className="block text-7xl text-depoint-blue mt-4">for the Physical Economy</span>
            </h1>
          </div>
          
          {/* Enhanced subtitle - +2pt size, darker gray */}
          <div className="mt-20 mb-32">
            <p className="text-5xl text-gray-600 italic font-medium leading-relaxed relative inline-block">
              "From firefighting every shift… to confidence in every store."
              <span className="absolute bottom-[-6px] left-0 right-0 h-1 bg-depoint-orange rounded"></span>
            </p>
          </div>
        </div>

        {/* Logo with additional 24px spacing */}
        <div className="absolute bottom-10">
          <img 
            src={depointLogo} 
            alt="Depoint" 
            className="h-32"
          />
        </div>
      </div>

      {/* Clean header strip */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background border-b border-gray-200 flex items-center justify-end px-gutter z-20">
        <div className="slide-caption text-gray-400 uppercase tracking-wide">
          Q3 2025 • CONFIDENTIAL INVESTOR DECK
        </div>
      </div>
    </div>
  );
};

export default SlideCover;