import React from 'react';
import { BarChart3, TrendingUp, Bell, Users } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/images/Minidashborad.png';

const SlideDashboardFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics:",
      description: "Live operational insights that turn data into immediate action across all locations.",
      gradient: "linear-gradient(135deg, #1E73FF, #60A5FA)",
      color: "#1E73FF"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking:",
      description: "Monitor KPIs and trends with customizable dashboards built for decision-makers.",
      gradient: "linear-gradient(135deg, #22C55E, #A3E635)",
      color: "#22C55E"
    },
    {
      icon: Bell,
      title: "Smart Alerts:",
      description: "Proactive notifications that surface issues before they become costly problems.",
      gradient: "linear-gradient(135deg, #F59E0B, #FACC15)",
      color: "#F59E0B"
    },
    {
      icon: Users,
      title: "Role-Based Views:",
      description: "Tailored dashboards for every stakeholder, from field teams to C-suite executives.",
      gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      color: "#8B5CF6"
    }
  ];

  return (
    <SlideLayout 
      title="Intelligence at Every Level" 
      slideNumber="27" 
      totalSlides="37" 
      logoSrc={depointLogo} 
      componentName="SlideDashboardFeatures"
      backgroundClass="bg-gradient-to-br from-white via-[#F8FAFB] to-[#F5F7FA]"
      footerTagline="From frontline to boardroom — insights that drive action."
    >
      <div className="h-full flex items-center relative px-12 py-8">
        
        {/* Product Image - 70% width, left side */}
        <div 
          className="w-[70%] h-full flex items-center justify-center pr-6"
          style={{
            animation: 'fadeInTilt 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0
          }}
        >
          {/* Apple-style spotlight effect */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2"
            style={{
              width: '60%',
              height: '70%',
              background: 'radial-gradient(ellipse 70% 60% at 40% 50%, rgba(30, 115, 255, 0.06), rgba(99, 102, 241, 0.03) 50%, transparent 75%)',
              filter: 'blur(45px)',
              zIndex: 0
            }}
          ></div>

          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={dashboardImage} 
              alt="Depoint Intelligence Dashboard" 
              className="max-w-full max-h-full object-contain"
              style={{
                filter: 'drop-shadow(0 24px 70px rgba(0, 0, 0, 0.14)) drop-shadow(0 10px 28px rgba(0, 0, 0, 0.1))',
              }}
            />
            
            {/* Enhanced floor reflection */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: '85%',
                height: '40px',
                background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.04), transparent 70%)',
                filter: 'blur(16px)',
                transform: 'translateX(-50%) translateY(15px)'
              }}
            ></div>
          </div>
        </div>

        {/* Content Cards - 30% width, right side */}
        <div className="w-[30%] h-full flex items-center pr-4">
          <div className="w-full flex flex-col justify-center" style={{ gap: '14px' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group"
                  style={{
                    animation: `slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards ${0.4 + index * 0.15}s`,
                    opacity: 0
                  }}
                >
                  <div 
                    className="relative overflow-hidden transition-all duration-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '14px',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(0, 0, 0, 0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(6px) scale(1.01)';
                      e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(0, 0, 0, 0.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(0, 0, 0, 0.02)';
                    }}
                  >
                    {/* Top light reflection - stronger for glass effect */}
                    <div 
                      className="absolute inset-x-0 top-0"
                      style={{
                        height: '40%',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, transparent 100%)',
                        borderRadius: '14px 14px 0 0'
                      }}
                    ></div>
                    
                    <div className="relative flex items-start p-4" style={{ gap: '12px' }}>
                      {/* Gradient Color Dot with Icon */}
                      <div className="flex-shrink-0">
                        <div 
                          className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{
                            background: feature.gradient,
                            boxShadow: `0 2px 8px ${feature.color}25, inset 0 1px 1px rgba(255, 255, 255, 0.3)`
                          }}
                        >
                          {/* Inner light reflection on dot */}
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%)'
                            }}
                          ></div>
                          
                          <Icon 
                            className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" 
                            style={{ 
                              width: '18px', 
                              height: '18px',
                              color: 'white',
                              strokeWidth: 2.5,
                              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                            }} 
                          />
                        </div>
                      </div>

                      {/* Text Content - bolder titles, tighter spacing */}
                      <div className="flex-1">
                        <h3 
                          className="font-bold mb-0.5 tracking-tight"
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.35',
                            color: '#0a0a0a'
                          }}
                        >
                          {feature.title}
                        </h3>
                        <p 
                          className="font-normal leading-relaxed"
                          style={{
                            fontSize: '12px',
                            lineHeight: '1.45',
                            color: '#555555'
                          }}
                        >
                          {feature.description}
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

      {/* Cinematic Apple-style animations with tilt effect */}
      <style>{`
        @keyframes fadeInTilt {
          from {
            opacity: 0;
            transform: translateX(-50px) perspective(1000px) rotateY(10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) perspective(1000px) rotateY(0deg);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
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

export default SlideDashboardFeatures;
