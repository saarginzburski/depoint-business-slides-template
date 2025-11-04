import React from 'react';
import { Monitor, Clock, Users } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideProblemStats = () => {
  const metrics = [
    {
      icon: Monitor,
      value: '~9',
      label: 'Disconnected Systems Managing Store & Workforce Data',
      gradient: 'linear-gradient(135deg, #1E73FF 0%, #60A5FA 100%)',
      shadowColor: 'rgba(30, 115, 255, 0.2)',
      glowColor: 'rgba(30, 115, 255, 0.15)'
    },
    {
      icon: Clock,
      value: '50%',
      label: 'Of Management Time Lost to Manual Follow-Ups',
      gradient: 'linear-gradient(135deg, #FF9E00 0%, #FACC15 100%)',
      shadowColor: 'rgba(255, 158, 0, 0.2)',
      glowColor: 'rgba(255, 158, 0, 0.15)'
    },
    {
      icon: Users,
      value: '80%',
      label: 'Average Annual Employee Turnover in Operations',
      gradient: 'linear-gradient(135deg, #FF5733 0%, #FF7F50 100%)',
      shadowColor: 'rgba(255, 87, 51, 0.2)',
      glowColor: 'rgba(255, 87, 51, 0.15)'
    }
  ];

  return (
    <SlideLayout 
        title="The Real Cost of Losing Operational Control" 
        slideNumber="2" 
        totalSlides="15" 
        logoSrc={depointLogo} 
        componentName="SlideProblemStats"
        footerTagline="Depoint — Because chaos is not a KPI."
        backgroundClass="bg-white"
      >
        {/* Custom background with subtle vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #FFFFFF, #F7F9FB)',
            mixBlendMode: 'normal'
          }}
        ></div>

        <div className="h-full flex flex-col justify-center py-8 relative px-16">
          
          {/* Elegant Sub-header */}
          <div 
            className="text-center mb-16"
            style={{
              animation: 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              opacity: 0
            }}
          >
            <h2 
              className="font-light tracking-wide"
              style={{
                fontSize: '22px',
                color: '#6b7280',
                letterSpacing: '0.02em'
              }}
            >
              When Enterprises Lose Sight of Their Data & Processes
            </h2>
          </div>

          {/* Three Cinematic Data Cards */}
          <div 
            className="flex flex-col max-w-6xl mx-auto w-full"
            style={{ gap: '28px' }}
          >
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="group"
                  style={{
                    animation: `slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s forwards`,
                    opacity: 0
                  }}
                >
                  <div 
                    className="relative overflow-hidden transition-all duration-500"
                    style={{
                      background: metric.gradient,
                      borderRadius: '24px',
                      boxShadow: `0 12px 40px ${metric.shadowColor}, 0 4px 12px ${metric.glowColor}`,
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
                      e.currentTarget.style.boxShadow = `0 20px 60px ${metric.shadowColor}, 0 8px 24px ${metric.glowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = `0 12px 40px ${metric.shadowColor}, 0 4px 12px ${metric.glowColor}`;
                    }}
                  >
                    {/* Top light reflection - glass effect */}
                    <div
                      className="absolute inset-x-0 top-0"
                      style={{
                        height: '50%',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%)',
                        borderRadius: '24px 24px 0 0'
                      }}
                    ></div>

                    {/* Subtle inner border for depth */}
                    <div
                      className="absolute inset-[1px] rounded-[23px]"
                      style={{
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative flex items-center px-12 py-9" style={{ gap: '32px' }}>
                      {/* Icon Container */}
                      <div className="flex-shrink-0">
                        <div 
                          className="transition-all duration-300"
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            background: 'rgba(255, 255, 255, 0.18)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.35)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                          }}
                        >
                          <IconComponent 
                            style={{
                              width: '32px',
                              height: '32px',
                              color: 'rgba(255, 255, 255, 0.95)',
                              strokeWidth: 1.75
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Metric Number */}
                      <div className="flex-shrink-0 text-center" style={{ minWidth: '160px' }}>
                        <div 
                          className="font-extralight tracking-tight"
                          style={{
                            fontSize: '80px',
                            lineHeight: '1',
                            color: 'white',
                            textShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                            letterSpacing: '-0.03em'
                          }}
                        >
                          {metric.value}
                        </div>
                      </div>
                      
                      {/* Elegant Vertical Divider */}
                      <div 
                        style={{
                          width: '1px',
                          height: '72px',
                          background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.4) 20%, rgba(255, 255, 255, 0.4) 80%, transparent 100%)',
                          flexShrink: 0
                        }}
                      ></div>
                      
                      {/* Label */}
                      <div className="flex-1">
                        <h3 
                          className="font-normal leading-relaxed"
                          style={{
                            fontSize: '22px',
                            color: 'rgba(255, 255, 255, 0.97)',
                            letterSpacing: '0.01em',
                            lineHeight: '1.4',
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          {metric.label}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom subtle shadow for lifted effect */}
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                      style={{
                        width: '95%',
                        height: '8px',
                        background: `radial-gradient(ellipse, ${metric.glowColor}, transparent 70%)`,
                        filter: 'blur(6px)'
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Cinematic Animations */}
        <style>{`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(60px) scale(0.95);
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

export default SlideProblemStats;
