import React from 'react';
import { getSlideStyle } from '@/lib/slideConfig';
import { FileText, ChevronRight } from 'lucide-react';
import HumorFooter from '@/components/HumorFooter';

const SlideAppendices = () => {
  return (
    <div className="relative w-full h-full">
      <div className="slide-container bg-white text-gray-900 relative overflow-hidden" style={getSlideStyle()}>
      
      {/* Small flat outline icon top-left */}
      <div className="absolute top-8 left-8 z-10">
        <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-gray-400 stroke-1" />
        </div>
      </div>
      
      {/* Main content */}
      <div className="h-full relative flex flex-col justify-center items-center text-center z-10">
        
        {/* Title */}
        <h1 className="text-gray-900 mb-4" style={{fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1'}}>
          Appendices
        </h1>
        
        {/* Thin horizontal divider line in Depoint Blue */}
        <div className="w-32 h-1 bg-blue-600 rounded-full mb-8"></div>
        
      </div>
      
      </div>
      
      {/* Custom Humor Footer */}
      <HumorFooter 
        text="Because details matter when billions are at stake."
        avatarStyle="consultant"
        highlightWords={['details matter', 'billions']}
        highlightColor="blue"
      />
    </div>
  );
};

export default SlideAppendices;