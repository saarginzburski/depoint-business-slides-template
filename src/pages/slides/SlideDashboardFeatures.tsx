import React from 'react';
import { BarChart3, TrendingUp, Bell, Users } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/minidash.png';

const SlideDashboardFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics:",
      description: "Live operational insights that turn data into immediate action across all locations.",
      color: "#1E73FF",
      lightBg: "rgba(30, 115, 255, 0.06)"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking:",
      description: "Monitor KPIs and trends with customizable dashboards built for decision-makers.",
      color: "#10B981",
      lightBg: "rgba(16, 185, 129, 0.06)"
    },
    {
      icon: Bell,
      title: "Smart Alerts:",
      description: "Proactive notifications that surface issues before they become costly problems.",
      color: "#F59E0B",
      lightBg: "rgba(245, 158, 11, 0.06)"
    },
    {
      icon: Users,
      title: "Role-Based Views:",
      description: "Tailored dashboards for every stakeholder, from field teams to C-suite executives.",
      color: "#8B5CF6",
      lightBg: "rgba(139, 92, 246, 0.06)"
    }
  ];

  return (
    <SlideLayout 
      title="Intelligence at Every Level" 
      slideNumber="27" 
      totalSlides="37" 
      logoSrc={depointLogo} 
      componentName="SlideDashboardFeatures"
      backgroundClass="bg-gradient-to-b from-white via-[#F8FAFB] to-[#F1F5F9]/30"
      footerTagline="From frontline to boardroom — insights that drive action."
    >
      <div className="h-full relative px-12 pb-8">
        
        {/* Background Image - Positioned on left */}
        <div className="absolute left-0 top-0 bottom-0 w-[75%] flex items-center justify-start -ml-8">
          {/* Subtle vignette/glow underneath */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 35% 50%, rgba(30, 115, 255, 0.06), transparent 70%)'
            }}
          ></div>
          
          <div className="relative w-full h-[85%]">
            <img 
              src={dashboardImage} 
              alt="Depoint Dashboard Intelligence" 
              className="w-full h-full object-contain object-left"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08))',
              }}
            />
          </div>
        </div>

        {/* Feature Cards - Overlaying on right side */}
        <div className="relative h-full flex items-center justify-end z-10">
          <div className="w-[48%] flex flex-col justify-center" style={{ gap: '20px' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                      background: `linear-gradient(180deg, ${feature.color}, ${feature.color}dd)`,
                      boxShadow: `0 0 12px ${feature.color}40`
                    }}
                  ></div>
                  
                  <div className="flex items-start gap-4 p-5 pl-6">
                    {/* Icon Container - Minimal with brand color */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{
                          background: feature.lightBg,
                          border: `1px solid ${feature.color}15`
                        }}
                      >
                        <Icon 
                          className="transition-transform duration-300 group-hover:scale-110" 
                          style={{ 
                            width: '22px', 
                            height: '22px',
                            color: feature.color,
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
                        {feature.title}
                      </h3>
                      <p 
                        className="font-normal leading-relaxed"
                        style={{
                          fontSize: '14px',
                          lineHeight: '1.55',
                          color: '#6b7280'
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

export default SlideDashboardFeatures;

