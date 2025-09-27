import React from 'react';
import { getSlideStyle } from '@/lib/slideConfig';
import { Monitor, ChevronRight } from 'lucide-react';
import SlideFooter from '@/components/SlideFooter';
import depointLogoBlack from '@/assets/Depoint-Logo-black.png';

const SlideDashboardsDemo = () => {
  return (
    <div className="relative w-full h-full">
      <div className="slide-container bg-white text-gray-900 relative overflow-hidden" style={getSlideStyle()}>
      
      {/* Small flat outline icon top-left */}
      <div className="absolute top-8 left-8 z-10">
        <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
          <Monitor className="w-6 h-6 text-gray-400 stroke-1" />
        </div>
      </div>
      
      {/* Depoint Logo - top right */}
      <div className="absolute top-8 right-8 z-10">
        <img src={depointLogoBlack} alt="Depoint" className="h-12" />
      </div>
      
      {/* Main content */}
      <div className="h-full relative flex flex-col justify-center items-center text-center z-10">
        
        {/* Title */}
        <h1 className="text-gray-900 mb-4" style={{fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1'}}>
          Dashboards Demo
        </h1>
        
        {/* Thin horizontal divider line in Depoint Blue */}
        <div className="w-32 h-1 bg-blue-600 rounded-full mb-8"></div>
        
      </div>
      
      </div>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideDashboardsDemo;