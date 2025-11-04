import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import papaJohnsLogo from '@/assets/customers/papa.png';
import jollibeeLogo from '@/assets/customers/jollibee.png';
import nespressoLogo from '@/assets/customers/ness.png';
import zaraLogo from '@/assets/customers/zara.png';
import mcdonaldsLogo from '@/assets/customers/mac.png';

const SlideGlobalBrands = () => {
  const brands = [
    {
      name: 'Papa Johns',
      logo: papaJohnsLogo,
    },
    {
      name: 'Jollibee',
      logo: jollibeeLogo,
    },
    {
      name: 'Nespresso',
      logo: nespressoLogo,
    },
    {
      name: 'Zara',
      logo: zaraLogo,
    },
    {
      name: 'McDonalds',
      logo: mcdonaldsLogo,
    },
  ];

  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Ultra-subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/30"></div>

      <SlideLayout 
        title="Scale Proven Across Industries" 
        slideNumber="15" 
        totalSlides="37" 
        logoSrc={depointLogo} 
        componentName="SlideGlobalBrands"
      >
        <div className="h-full flex flex-col items-center justify-center relative px-20 py-16">
          
          {/* Hero Message - Ultra Clean Typography */}
          <div className="text-center mb-20">
            <h2 className="text-[56px] font-light text-gray-900 leading-[1.25] tracking-tight max-w-4xl mx-auto">
              We bring efficiency & transparency<br/>to process management in global chains
            </h2>
          </div>

              {/* Brand Logos - Premium Grid with Floating Effect */}
              <div className="grid grid-cols-5 gap-12 items-center justify-items-center w-full max-w-6xl">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="group relative"
                style={{
                  animation: `floatIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s both`
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-700 -z-10 scale-110 blur-2xl"></div>
                
                {/* Logo container with glassmorphism */}
                <div className="relative w-44 h-44 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-10 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-[1px] rounded-3xl shadow-inner shadow-black/[0.02]"></div>
                  
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      filter: 'saturate(0.95) contrast(1.02)',
                      maxHeight: '100%',
                      maxWidth: '100%'
                    }}
                  />
                </div>

                {/* Ultra-subtle reflection effect */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-radial from-gray-900/[0.02] to-transparent rounded-full blur-sm"></div>
              </div>
            ))}
          </div>

        </div>
      </SlideLayout>

      {/* Apple-inspired animations */}
      <style>{`
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
            filter: blur(10px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default SlideGlobalBrands;

