import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideClosing2 = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Subtle grid texture background */}
      <div className="absolute inset-0">
        <div className="w-full h-full opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="closingGrid2" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#closingGrid2)" />
          </svg>
        </div>
      </div>

      {/* EDGE branding emphasis */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-1 bg-depoint-blue"></div>
      </div>

      {/* Main content - centered layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 z-10">
        <div className="text-center max-w-5xl">
          {/* Bold headline centered - EDGE emphasis */}
          <h1 className="text-8xl font-black text-neutral-navy leading-[0.8] mb-8 tracking-wider">
            EDGE
          </h1>
          
          <p className="text-4xl text-depoint-blue font-semibold mb-6">
            Every Day Great Execution
          </p>
          
          {/* Tagline below headline, smaller and italic */}
          <p className="text-2xl text-gray-600 italic font-medium leading-relaxed">
            Your frontline. Your edge. Your growth.
          </p>
        </div>

        {/* Contact details centered below with subtle divider */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            {/* Subtle divider */}
            <div className="w-24 h-px bg-gray-300 mx-auto mb-6"></div>
            
            <div className="space-y-2 text-gray-700">
              <div className="font-semibold text-lg">Saar Ginzburski</div>
              <div className="text-sm text-gray-600">CEO & Founder</div>
              <div className="flex items-center justify-center gap-6 text-sm mt-3">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>saarg@depoint.ai</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>+972-52-6303332</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Depoint logo big at bottom - like cover slide */}
        <div className="absolute bottom-16 right-16">
          <img 
            src={depointLogo} 
            alt="Depoint" 
            className="h-32"
          />
        </div>
      </div>

      {/* Clean header strip - same as cover */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background border-b border-gray-200 flex items-center justify-end px-8 z-20">
        <div className="slide-caption text-gray-400 tracking-wide uppercase">
          Q3 2025 • CONFIDENTIAL INVESTOR DECK
        </div>
      </div>
    </div>
  );
};

export default SlideClosing2;