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
    <SlideLayout 
        title="Trusted by Global Leaders" 
        slideNumber="15" 
        totalSlides="37" 
        logoSrc={depointLogo} 
        componentName="SlideGlobalBrands"
        footerTagline="Depoint — The quiet system behind very loud brands."
        backgroundClass="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]/40"
      >
        <div className="h-full flex flex-col items-center justify-center relative px-16 py-8">
          
          {/* Hero Typography - Cinematic and Bold */}
          <div 
            className="text-center mb-16"
            style={{
              animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              opacity: 0
            }}
          >
            <h2 
              className="font-light tracking-tight mb-4"
              style={{
                fontSize: '52px',
                lineHeight: '1.15',
                color: '#0a0a0a',
                letterSpacing: '-0.02em',
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >
              Powering operations excellence across<br/>
              retail, QSR, and enterprise chains.
            </h2>
          </div>

          {/* Brand Logos - Premium Glass Tiles */}
          <div 
            className="flex items-center justify-center w-full max-w-7xl relative z-10"
            style={{ gap: '36px' }}
          >
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="group relative flex-shrink-0"
                style={{
                  animation: `floatIn 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + index * 0.1}s both`,
                  opacity: 0
                }}
              >
                {/* Hover glow effect - Apple-style ambient light */}
                <div 
                  className="absolute inset-0 rounded-[28px] transition-all duration-700 -z-10"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0), rgba(139, 92, 246, 0))',
                    transform: 'scale(1.15)',
                    filter: 'blur(24px)',
                  }}
                ></div>
                
                {/* Logo container with glassmorphism */}
                <div 
                  className="relative flex items-center justify-center transition-all duration-500"
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '28px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
                    padding: '48px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.06)';
                    const glow = e.currentTarget.previousElementSibling as HTMLElement;
                    if (glow) {
                      glow.style.background = 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.04))';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)';
                    const glow = e.currentTarget.previousElementSibling as HTMLElement;
                    if (glow) {
                      glow.style.background = 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0), rgba(139, 92, 246, 0))';
                    }
                  }}
                >
                  {/* Top light reflection for glass effect */}
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
                      borderRadius: '28px 28px 0 0'
                    }}
                  ></div>

                  {/* Subtle inner glow */}
                  <div
                    className="absolute inset-[1px] rounded-[27px]"
                    style={{
                      boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.02)'
                    }}
                  ></div>
                  
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="relative z-10 transition-all duration-500"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'saturate(0.98) contrast(1.01)',
                      maxHeight: '100%',
                      maxWidth: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Subtle floor reflection */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    width: '60%',
                    height: '6px',
                    background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.04), transparent 70%)',
                    transform: 'translateX(-50%)',
                    filter: 'blur(4px)'
                  }}
                ></div>
              </div>
            ))}
          </div>

        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes floatIn {
            0% {
              opacity: 0;
              transform: translateY(50px) scale(0.92);
              filter: blur(8px);
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
        `}</style>
      </SlideLayout>
  );
};

export default SlideGlobalBrands;
