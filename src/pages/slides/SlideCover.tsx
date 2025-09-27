import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideCover = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Softer 50/50 background split */}
      <div className="absolute inset-0">
        {/* Left side - CHAOS with subtle red tint */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-red-50/60"></div>
        
        {/* Right side - ORDER with clean white */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-background"></div>
        
        {/* Clean vertical divider */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-border"></div>
        
        {/* FEWER CHAOS ELEMENTS - Left Side - more minimal */}
        <div className="absolute left-0 inset-y-0 w-1/2 overflow-hidden opacity-60">
          {/* Reduced sticky notes - only 2 main ones */}
          <div className="absolute left-8 bottom-1/3 transform -rotate-8">
          <div className="bg-yellow-100 border border-yellow-300 p-4 text-sm text-gray-800 rotate-6 mb-4">
            ⚠ Missing Inventory
          </div>
          <div className="bg-red-100 border border-red-300 p-4 text-sm text-gray-800 -rotate-4 transform translate-x-6">
            Equipment down #3
          </div>
          </div>

          {/* Single checklist - cleaner */}
          <div className="absolute left-6 bottom-24 transform -rotate-2 opacity-70">
            <div className="bg-background border border-border p-3 text-xs text-muted-foreground">
              <div className="font-medium mb-2 text-foreground">Daily Tasks</div>
              <div className="space-y-1">
                <div>□ Temperature check</div>
                <div>☑ Inventory count</div>
                <div className="text-red-600">⚠ OVERDUE</div>
              </div>
            </div>
          </div>
          
          {/* Minimal scattered text */}
          <div className="absolute left-4 bottom-12 rotate-6 opacity-40">
            <div className="text-xs text-red-500 font-mono mb-2">
              alerts_system.txt
            </div>
            <div className="text-xs text-red-500 font-mono">
              maintenance_backlog.xlsx
            </div>
          </div>
        </div>
        
        {/* ORDER ELEMENTS - Right Side - clean grid */}
        <div className="absolute right-0 inset-y-0 w-1/2 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full border-r border-b border-border bg-white"></div>
          </div>
        </div>
      </div>

      {/* Main content - clean headline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 z-10">
        <div className="text-center max-w-6xl">
          {/* Monochrome headline with single blue accent */}
          <h1 className="text-8xl font-black text-foreground leading-[0.9] mb-16 tracking-tight">
            The Intelligence Layer
            <span className="block text-7xl text-depoint-blue mt-6">for the Physical Economy</span>
          </h1>
          
          {/* Clean subline with subtle accent */}
          <div className="mt-24 mb-28">
            <p className="text-4xl text-muted-foreground italic font-medium leading-relaxed relative inline-block">
              "From firefighting every shift… to confidence in every store."
              <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-depoint-orange rounded"></span>
            </p>
          </div>
        </div>

        {/* Logo with subtle glow */}
        <div className="absolute bottom-16">
          <img 
            src={depointLogo} 
            alt="Depoint" 
            className="h-32 opacity-95"
          />
        </div>
      </div>

      {/* Clean header strip */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background border-b border-border flex items-center justify-end px-8 z-20">
        <div className="text-muted-foreground text-sm font-medium tracking-wide">
          Q3 2025 • CONFIDENTIAL INVESTOR DECK
        </div>
      </div>
    </div>
  );
};

export default SlideCover;