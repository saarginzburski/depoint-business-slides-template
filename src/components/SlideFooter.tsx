import React from 'react';
import { getSlideTagline } from '@/lib/slideTaglines';

interface SlideFooterProps {
  slideNumber?: string;
  totalSlides?: string;
  tagline?: string;
  componentName?: string; // Component name for tagline lookup
}

const SlideFooter: React.FC<SlideFooterProps> = ({ 
  slideNumber = "1", 
  totalSlides = "15", 
  tagline,
  componentName
}) => {
  // Use the provided tagline, or get it from slideTaglines based on component name
  const displayTagline = tagline || (componentName ? getSlideTagline(componentName) : "Depoint: The System of Record for Frontline Execution");
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[8%] z-20 flex items-center justify-between px-16 bg-white border-t border-gray-200">
      {/* Left: Slide tagline */}
      <div className="flex-1">
        <div className="slide-body text-gray-700 italic">{displayTagline}</div>
      </div>
      
      {/* Right: Company info - consistent styling */}
      <div className="slide-label tracking-wide text-gray-400 uppercase">
        Q3 2025 • CONFIDENTIAL
      </div>
    </div>
  );
};

export default SlideFooter;
