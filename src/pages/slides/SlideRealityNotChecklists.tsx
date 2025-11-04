import React from 'react';
import { AlertCircle, TrendingDown, DollarSign } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideRealityNotChecklists = () => {
  return (
    <SlideLayout
      title="Is this just another checklists app?"
      subtitle=""
      slideNumber="6"
      totalSlides="35"
      logoSrc={depointLogo}
      componentName="SlideRealityNotChecklists"
      footerTagline="Live intelligence for frontline operations"
      backgroundClass="bg-gradient-to-br from-[#0047FF] via-[#0066FF] to-[#1E90FF]"
    >
        <div className="h-full flex items-start justify-between px-8 pb-8">
          
          {/* Left Side - Text Content */}
          <div className="w-1/2 flex items-center justify-start pr-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="max-w-2xl">
              {/* Main Headline - slides up animation */}
              <h2 className="text-5xl font-black leading-tight mb-8 animate-slide-up" style={{ color: '#FFD400', animationDelay: '0.1s' }}>
                Depoint doesn't<br />
                manage checklists.<br />
                It manages <span className="relative inline-block font-black">
                  reality
                  <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,4 Q50,0 100,4 T200,4" stroke="#FFD400" strokeWidth="6" fill="none" className="animate-draw-line"/>
                  </svg>
                </span>.
              </h2>

              {/* Supporting copy - smaller, refined */}
              <div className="text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-2xl font-semibold text-white leading-relaxed">
                  <span className="block mb-3">
                    Checklist apps tell you what was done yesterday.
                  </span>
                  <span className="block font-bold" style={{ color: '#FFD400' }}>
                    Depoint tells you what to do <span className="relative inline-block" style={{
                      textDecoration: 'underline',
                      textDecorationColor: '#FFD400',
                      textDecorationThickness: '3px',
                      textUnderlineOffset: '4px'
                    }}>right now</span> to prevent tomorrow's crisis.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Phone with Alerts */}
          <div className="w-1/2 flex items-center justify-center relative">
            
            {/* Phone container - no 3D tilt, no shadows */}
            <div 
              className="relative z-10 animate-fade-in"
              style={{
                animationDelay: '0.2s'
              }}
            >
              {/* Phone frame */}
              <div className="w-72 h-[550px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] p-2.5 border-[6px] border-gray-900 relative">
                {/* Phone screen - white background */}
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="h-7 bg-gradient-to-b from-gray-100 to-transparent flex items-center justify-between px-6 text-gray-900 text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-4 h-2.5 border border-gray-900 rounded-sm"></div>
                      <div className="w-1 h-2.5 bg-gray-900 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Alert cards container */}
                  <div className="px-5 py-4 space-y-3 mt-6">
                    {/* Alert 1 - Red alert */}
                    <div 
                      className="bg-red-50 border-2 border-red-200 rounded-xl p-4 animate-slide-up"
                      style={{ 
                        animationDelay: '0.4s'
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5 animate-pulse"></div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-semibold text-xs leading-snug mb-0.5">
                            Store 214 missing 12% of daily checks.
                          </p>
                          <p className="text-gray-500 text-[10px]">2 min ago</p>
                        </div>
                      </div>
                    </div>

                    {/* Alert 2 - Orange alert */}
                    <div 
                      className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 animate-slide-up"
                      style={{ 
                        animationDelay: '0.6s'
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2.5 h-2.5 bg-orange-500 rounded-full flex-shrink-0 mt-1.5 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-semibold text-xs leading-snug mb-0.5">
                            Fridge #7 temperature rising — failure in 3 days.
                          </p>
                          <p className="text-gray-500 text-[10px]">5 min ago</p>
                        </div>
                      </div>
                    </div>

                    {/* Alert 3 - Yellow alert */}
                    <div 
                      className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 animate-slide-up"
                      style={{ 
                        animationDelay: '0.8s'
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 mt-1.5 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-semibold text-xs leading-snug mb-0.5">
                            Oil changed too early — $280 wasted this month.
                          </p>
                          <p className="text-gray-500 text-[10px]">12 min ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CSS for animations */}
        <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes draw-line {
          from {
            stroke-dasharray: 0, 1000;
          }
          to {
            stroke-dasharray: 1000, 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-draw-line {
          animation: draw-line 1.5s ease-out forwards;
          animation-delay: 1.2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Print-specific styles */
        @media print {
          /* Force all backgrounds and colors to print */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Force the blue gradient background to print */
          div[style*="linear-gradient"] {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: linear-gradient(135deg, #0047FF 0%, #0066FF 50%, #1E90FF 100%) !important;
          }

          /* Remove all animations in print */
          .animate-fade-in,
          .animate-slide-up,
          .animate-pulse-slow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          /* Make sure alert card borders are solid and visible */
          .border-red-200,
          .border-orange-200,
          .border-yellow-200 {
            border-width: 2px !important;
          }
        }
        `}</style>
      </SlideLayout>
  );
};

export default SlideRealityNotChecklists;

