import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import mobile1 from '@/assets/mobiles/mobile1.png';
import mobile2 from '@/assets/mobiles/mobile2.png';
import mobile3 from '@/assets/mobiles/mobile3.png';
import mobile4 from '@/assets/mobiles/mobile4.png';
import mobile5 from '@/assets/mobiles/mobile5.png';
import mobile6 from '@/assets/mobiles/mobile6.png';
import mobile7 from '@/assets/mobiles/mobile7.png';

const SlideFieldAssociates = () => {
  return (
    <SlideLayout 
        title="Field Associates" 
        slideNumber="16" 
        totalSlides="37" 
        logoSrc={depointLogo} 
        componentName="SlideFieldAssociates"
        backgroundClass="bg-white"
      >
        <div className="h-full flex flex-col items-center justify-start relative px-12 pb-8">
          
          {/* Hero Headline */}
          <div className="text-center mb-4 relative z-10">
            <h2 className="text-5xl font-light text-gray-900 leading-tight tracking-tight">
              How it Works?
            </h2>
          </div>

          {/* Mobile Showcase - Horizontal Layout with 7 screens */}
          <div className="flex items-end justify-center gap-2 w-full max-w-7xl mx-auto flex-1 pt-8">
            
            {/* Mobile 1 */}
            <div 
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                animation: 'floatIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both'
              }}
            >
              <div className="rounded-xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img src={mobile1} alt="Opening Checklist" className="w-44 h-auto" />
              </div>
            </div>

            {/* Mobile 2 */}
            <div 
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                animation: 'floatIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both'
              }}
            >
              <div className="rounded-xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img src={mobile2} alt="Issue Reporting" className="w-44 h-auto" />
              </div>
            </div>

            {/* Mobile 3 */}
            <div 
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                animation: 'floatIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both'
              }}
            >
              <div className="rounded-xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img src={mobile3} alt="Dashboard" className="w-44 h-auto" />
              </div>
            </div>

            {/* Mobile 7 - Hero Center (largest) */}
            <div 
              className="flex flex-col items-center gap-3 relative"
              style={{
                animation: 'heroReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0s both'
              }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-purple-400/10 blur-2xl scale-110"></div>
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-300/30 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
                <img src={mobile7} alt="Task Management" className="w-64 h-auto relative z-10" />
              </div>
            </div>

            {/* Mobile 4 */}
            <div 
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                animation: 'floatIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both'
              }}
            >
              <div className="rounded-xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img src={mobile4} alt="Sales Competition" className="w-44 h-auto" />
              </div>
            </div>

            {/* Mobile 5 */}
            <div 
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                animation: 'floatIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both'
              }}
            >
              <div className="rounded-xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img src={mobile5} alt="Smart Alerts" className="w-44 h-auto" />
              </div>
            </div>

            {/* Mobile 6 */}
            <div 
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                animation: 'floatIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both'
              }}
            >
              <div className="rounded-xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img src={mobile6} alt="Analytics" className="w-44 h-auto" />
              </div>
            </div>

          </div>

        </div>

        <style>{`
          @keyframes floatIn {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes heroReveal {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </SlideLayout>
  );
};

export default SlideFieldAssociates;

