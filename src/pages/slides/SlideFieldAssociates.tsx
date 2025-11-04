import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import multiImage from '@/assets/images/Multi.png';

const SlideFieldAssociates = () => {

  return (
    <SlideLayout 
      title="Field Associates" 
      subtitle="How It Works"
      slideNumber="16" 
      totalSlides="37" 
      logoSrc={depointLogo} 
      componentName="SlideFieldAssociates"
      backgroundClass="bg-gradient-to-br from-white via-[#F7F9FB] to-[#F5F7FA]"
      footerTagline="Depoint — Empowering the Frontline, One Task at a Time."
    >
      <div className="h-full relative flex items-center justify-center px-8 pb-6 overflow-hidden">
        
        {/* Full Width Image */}
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{
            animation: 'fadeInScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0
          }}
        >
          <img 
            src={multiImage} 
            alt="Depoint Field Associates Mobile Interface" 
            className="object-contain"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              filter: 'drop-shadow(0 20px 50px rgba(0, 0, 0, 0.10)) drop-shadow(0 8px 20px rgba(0, 0, 0, 0.06))'
            }}
          />
        </div>

      </div>

      {/* Fade in animation */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </SlideLayout>
  );
};

export default SlideFieldAssociates;
