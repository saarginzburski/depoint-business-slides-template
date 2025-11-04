import React from 'react';
import { Zap, TrendingUp, RefreshCw, BarChart3 } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import feedImage from '@/assets/images/Feed.png';

const SlideSolutionOverview = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Modernizing Operations:",
      description: "Replacing outdated, manual processes with streamlined, data-driven efficiency.",
      gradient: "linear-gradient(135deg, #1E73FF, #60A5FA)",
      color: "#1E73FF",
      lightBg: "rgba(30, 115, 255, 0.05)"
    },
    {
      icon: TrendingUp,
      title: "Unlocking KPI Growth:",
      description: "Connecting data silos to uncover hidden revenue and optimize performance.",
      gradient: "linear-gradient(135deg, #22C55E, #A3E635)",
      color: "#22C55E",
      lightBg: "rgba(34, 197, 94, 0.05)"
    },
    {
      icon: RefreshCw,
      title: "Eliminating Repetitive Tasks:",
      description: "Flexible customization to protect brand identity and save time.",
      gradient: "linear-gradient(135deg, #F59E0B, #FACC15)",
      color: "#F59E0B",
      lightBg: "rgba(245, 158, 11, 0.05)"
    },
    {
      icon: BarChart3,
      title: "Empowering Data-Driven Action:",
      description: "Advanced analytics powered by Google Looker for actionable insights.",
      gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      color: "#8B5CF6",
      lightBg: "rgba(139, 92, 246, 0.05)"
    }
  ];

  return (
    <SlideLayout 
      title="Our Solution" 
      slideNumber="4" 
      totalSlides="37" 
      logoSrc={depointLogo} 
      componentName="SlideSolutionOverview"
      backgroundClass="bg-gradient-to-br from-white via-[#F8FAFB] to-[#F5F7FA]"
      footerTagline="Depoint — Because chaos doesn't scale good."
    >
      <div className="h-full flex items-center relative px-12 py-8">
        
        {/* Product Image - 70% width, left side */}
        <div 
          className="w-[70%] h-full flex items-center justify-center pr-8"
          style={{
            animation: 'fadeInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0
          }}
        >
          {/* Subtle ambient glow behind image */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2"
            style={{
              width: '60%',
              height: '60%',
              background: 'radial-gradient(ellipse, rgba(30, 115, 255, 0.04), transparent 70%)',
              filter: 'blur(40px)',
              zIndex: 0
            }}
          ></div>

          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={feedImage} 
              alt="Depoint Platform Interface" 
              className="max-w-full max-h-full object-contain"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.12)) drop-shadow(0 8px 24px rgba(0, 0, 0, 0.08))',
              }}
            />
            
            {/* Subtle floor reflection */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: '90%',
                height: '30px',
                background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.03), transparent 70%)',
                filter: 'blur(12px)',
                transform: 'translateX(-50%) translateY(10px)'
              }}
            ></div>
          </div>
        </div>

        {/* Content Cards - 30% width, right side */}
        <div className="w-[30%] h-full flex items-center">
          <div className="w-full flex flex-col justify-center" style={{ gap: '16px' }}>
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={index}
                  className="group"
                  style={{
                    animation: `slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards ${0.3 + index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div 
                    className="relative overflow-hidden transition-all duration-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(16px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)';
                    }}
                  >
                    {/* Top light reflection */}
                    <div 
                      className="absolute inset-x-0 top-0 h-px"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
                      }}
                    ></div>
                    
                    {/* Colored left border with gradient */}
                    <div 
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full transition-all duration-300 group-hover:w-[4px]"
                      style={{
                        background: solution.gradient,
                        boxShadow: `0 0 12px ${solution.color}30`
                      }}
                    ></div>
                    
                    <div className="flex items-start p-4 pl-5" style={{ gap: '12px' }}>
                      {/* Minimal Monochrome Icon */}
                      <div className="flex-shrink-0">
                        <div 
                          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                          style={{
                            background: solution.lightBg,
                            border: `1px solid ${solution.color}10`
                          }}
                        >
                          <Icon 
                            className="transition-transform duration-300 group-hover:scale-110" 
                            style={{ 
                              width: '18px', 
                              height: '18px',
                              color: solution.color,
                              strokeWidth: 2
                            }} 
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 
                          className="font-semibold mb-1 tracking-tight"
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.4',
                            color: '#0a0a0a'
                          }}
                        >
                          {solution.title}
                        </h3>
                        <p 
                          className="font-normal leading-relaxed"
                          style={{
                            fontSize: '12px',
                            lineHeight: '1.5',
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

      {/* Cinematic Apple-style animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </SlideLayout>
  );
};

export default SlideSolutionOverview;
