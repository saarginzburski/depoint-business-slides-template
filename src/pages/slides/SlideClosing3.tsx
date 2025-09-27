import React from 'react';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideClosing3 = () => {
  return (
    <div className="slide-container relative overflow-hidden bg-background text-foreground" style={{ width: '100%', aspectRatio: '1344 / 816' }}>
      
      {/* Subtle grid texture background */}
      <div className="absolute inset-0">
        <div className="w-full h-full opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="closingGrid3" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#closingGrid3)" />
          </svg>
        </div>
      </div>

      {/* Three-pillar visual accent */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex gap-4">
        <div className="w-2 h-12 bg-pillar-margin"></div>
        <div className="w-2 h-12 bg-depoint-blue"></div>
        <div className="w-2 h-12 bg-pillar-growth"></div>
      </div>

      {/* Main content - centered layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 z-10">
        <div className="text-center max-w-6xl">
          {/* Bold headline centered - Growth focus */}
          <h1 className="text-6xl font-black text-neutral-navy leading-[0.9] mb-6 tracking-tight">
            Protect Margins.
            <span className="block text-depoint-blue mt-2">Reduce Risk.</span>
            <span className="block text-pillar-growth mt-2">Unlock Growth.</span>
          </h1>
          
          {/* Single accent line */}
          <div className="w-40 h-1 bg-depoint-orange mx-auto mb-8"></div>
          
          {/* Tagline below headline, smaller and italic */}
          <p className="text-3xl text-gray-600 italic font-medium leading-relaxed">
            That's your edge with Depoint.
          </p>
        </div>

        {/* Contact details in simple card bottom-right */}
        <div className="absolute bottom-20 right-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-left">
            <div className="text-lg font-bold text-depoint-blue mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-depoint-orange rounded-full"></div>
              Ready to Get Started?
            </div>
            <div className="space-y-2 text-gray-700">
              <div className="font-semibold text-lg">Saar Ginzburski</div>
              <div className="text-sm text-gray-600 mb-3">CEO & Founder</div>
              <div className="flex items-center gap-3 text-sm">
                <span>📧</span>
                <span>saarg@depoint.ai</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span>📱</span>
                <span>+972-52-6303332</span>
              </div>
            </div>
          </div>
        </div>

        {/* Depoint logo big at bottom - like cover slide */}
        <div className="absolute bottom-16 left-16">
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

export default SlideClosing3;