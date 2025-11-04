import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import architectureDiagram from '@/assets/platform-architecture-overview.png';

const SlideArchitectureOverview = () => {
  return (
    <SlideLayout
      title="Depoint Platform: A Strategic Architecture Overview"
      subtitle=""
      slideNumber="20"
      totalSlides="34"
      logoSrc={depointLogo}
      componentName="SlideArchitectureOverview"
      footerTagline="The Intelligence Layer for your Franchise Operations"
      backgroundClass="bg-white"
    >
      <div className="h-full flex items-start justify-start px-8 pb-6">
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={architectureDiagram}
            alt="Depoint Platform Architecture Overview"
            className="w-full h-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideArchitectureOverview;

