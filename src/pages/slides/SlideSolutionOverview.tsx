import React from 'react';
import { Zap, TrendingUp, RefreshCw, BarChart3 } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import solutionImage from '@/assets/depointsolution.png';

const SlideSolutionOverview = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Modernizing Operations:",
      description: "Replacing outdated, manual processes with streamlined, data-driven efficiency.",
      color: "#1E73FF",
      lightBg: "rgba(30, 115, 255, 0.06)"
    },
    {
      icon: TrendingUp,
      title: "Unlocking KPI Growth:",
      description: "Connecting data silos to uncover hidden revenue and optimize performance.",
      color: "#10B981",
      lightBg: "rgba(16, 185, 129, 0.06)"
    },
    {
      icon: RefreshCw,
      title: "Eliminating Repetitive Tasks:",
      description: "Flexible customization to protect brand identity and save time.",
      color: "#F59E0B",
      lightBg: "rgba(245, 158, 11, 0.06)"
    },
    {
      icon: BarChart3,
      title: "Empowering Data-Driven Action:",
      description: "Advanced analytics powered by Google Looker for actionable insights.",
      color: "#8B5CF6",
      lightBg: "rgba(139, 92, 246, 0.06)"
    }
  ];

  return (
    <SlideLayout 
      title="Our Solution" 
      slideNumber="4" 
      totalSlides="37" 
      logoSrc={depointLogo} 
      componentName="SlideSolutionOverview"
      backgroundClass="bg-gradient-to-b from-white via-[#F8FAFB] to-[#F1F5F9]/30"
      footerTagline="Depoint — Because chaos doesn't scale good."
    >
      <div className="h-full flex items-center gap-16 px-20 pb-10">
        
        {/* Left Side - Hero Image with Vignette */}
        <div className="w-[56%] flex items-center justify-center relative">
          {/* Subtle vignette/glow underneath */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(30, 115, 255, 0.08), transparent 70%)'
            }}
          ></div>
          
          <div className="relative w-full z-10">
            <img 
              src={solutionImage} 
              alt="Depoint Solution" 
              className="w-full h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.12))',
              }}
            />
          </div>
        </div>

        {/* Right Side - Solution Cards with Apple-style glassmorphism */}
        <div className="w-[44%] flex flex-col gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="group relative"
                style={{
                  animation: `floatIn 0.6s ease-out forwards ${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div 
                  className="relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {/* Top light reflection */}
                  <div 
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
                    }}
                  ></div>
                  
                  {/* Colored accent bar on left */}
                  <div 
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                    style={{
                      background: `linear-gradient(180deg, ${solution.color}, ${solution.color}dd)`,
                      boxShadow: `0 0 12px ${solution.color}40`
                    }}
                  ></div>
                  
                  <div className="flex items-start gap-5 p-6 pl-7">
                    {/* Icon Container - Minimal with brand color */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{
                          background: solution.lightBg,
                          border: `1px solid ${solution.color}15`
                        }}
                      >
                        <Icon 
                          className="transition-transform duration-300 group-hover:scale-110" 
                          style={{ 
                            width: '24px', 
                            height: '24px',
                            color: solution.color,
                            strokeWidth: 2
                          }} 
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <h3 
                        className="font-semibold mb-2 tracking-tight"
                        style={{
                          fontSize: '17px',
                          lineHeight: '1.4',
                          color: '#1a1a1a'
                        }}
                      >
                        {solution.title}
                      </h3>
                      <p 
                        className="font-normal leading-relaxed"
                        style={{
                          fontSize: '15px',
                          lineHeight: '1.6',
                          color: '#6b7280'
                        }}
                      >
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Apple-style animations */}
      <style>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </SlideLayout>
  );
};

export default SlideSolutionOverview;
