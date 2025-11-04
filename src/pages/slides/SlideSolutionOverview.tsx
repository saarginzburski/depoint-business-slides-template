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
      <div className="h-full relative px-12 pb-8">
        
        {/* Background Image - Positioned on left */}
        <div className="absolute left-0 top-0 bottom-0 w-[70%] flex items-center justify-start pl-8">
          {/* Subtle vignette/glow underneath */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 40% 50%, rgba(30, 115, 255, 0.06), transparent 70%)'
            }}
          ></div>
          
          <div className="relative w-full h-[85%]">
            <img 
              src={solutionImage} 
              alt="Depoint Solution" 
              className="w-full h-full object-contain object-left"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08))',
              }}
            />
          </div>
        </div>

        {/* Solution Cards - Overlaying on right side */}
        <div className="relative h-full flex items-center justify-end z-10">
          <div className="w-[48%] flex flex-col justify-center" style={{ gap: '20px' }}>
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
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(24px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
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
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                    style={{
                      background: `linear-gradient(180deg, ${solution.color}, ${solution.color}dd)`,
                      boxShadow: `0 0 12px ${solution.color}40`
                    }}
                  ></div>
                  
                  <div className="flex items-start gap-4 p-5 pl-6">
                    {/* Icon Container - Minimal with brand color */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{
                          background: solution.lightBg,
                          border: `1px solid ${solution.color}15`
                        }}
                      >
                        <Icon 
                          className="transition-transform duration-300 group-hover:scale-110" 
                          style={{ 
                            width: '22px', 
                            height: '22px',
                            color: solution.color,
                            strokeWidth: 2
                          }} 
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 
                        className="font-semibold mb-2 tracking-tight"
                        style={{
                          fontSize: '16px',
                          lineHeight: '1.4',
                          color: '#1a1a1a'
                        }}
                      >
                        {solution.title}
                      </h3>
                      <p 
                        className="font-normal leading-relaxed"
                        style={{
                          fontSize: '14px',
                          lineHeight: '1.55',
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
