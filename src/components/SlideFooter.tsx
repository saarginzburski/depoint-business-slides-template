import React from 'react';

interface SlideFooterProps {
  slideNumber?: string;
  totalSlides?: string;
  tagline?: string;
}

const SlideFooter: React.FC<SlideFooterProps> = ({ 
  slideNumber = "1", 
  totalSlides = "15", 
  tagline = "Slide Tagline" 
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[8%] z-20 flex items-center justify-between px-16 bg-white/95 backdrop-blur-sm border-t border-gray-200">
      {/* Left: Slide tagline */}
      <div className="flex-1">
        <div className="slide-body text-gray-700">{tagline}</div>
      </div>
      
      {/* Right: Company info - consistent styling */}
      <div className="slide-label tracking-wide text-gray-400 uppercase">
        Q3 2025 • CONFIDENTIAL INVESTOR DECK
      </div>
    </div>
  );
};

export default SlideFooter;
