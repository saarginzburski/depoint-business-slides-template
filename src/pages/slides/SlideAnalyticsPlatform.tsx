import React from 'react';
import { TrendingUp, AlertCircle, BarChart2, CheckCircle2 } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/images/dash.png';

const SlideAnalyticsPlatform = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Predictive Insights:",
      description: "Advanced analytics that forecast operational trends and identify opportunities before they emerge.",
      gradientFrom: "#1E73FF",
      gradientTo: "#60A5FA",
      iconColor: "#FFFFFF"
    },
    {
      icon: AlertCircle,
      title: "Real-Time Monitoring:",
      description: "Continuous tracking of compliance metrics with instant alerts for anomalies and issues.",
      gradientFrom: "#22C55E",
      gradientTo: "#A3E635",
      iconColor: "#FFFFFF"
    },
    {
      icon: BarChart2,
      title: "Custom Reporting:",
      description: "Flexible report generation tailored to your business needs with automated distribution.",
      gradientFrom: "#F59E0B",
      gradientTo: "#FACC15",
      iconColor: "#FFFFFF"
    },
    {
      icon: CheckCircle2,
      title: "Compliance Tracking:",
      description: "Comprehensive audit trails and compliance scoring across all operational standards.",
      gradientFrom: "#8B5CF6",
      gradientTo: "#A78BFA",
      iconColor: "#FFFFFF"
    }
  ];

  return (
    <SlideLayout 
      title="Analytics" 
      slideNumber="30" 
      totalSlides="43" 
      logoSrc={depointLogo} 
      componentName="SlideAnalyticsPlatform"
      backgroundClass="bg-gradient-to-br from-white via-[#F8FAFB] to-[#F5F7FA]"
      footerTagline="Powered by data. Driven by insights."
    >
      <div className="h-full relative px-12 pb-8">
        
        {/* Left 70%: Dashboard Image with Spotlight */}
        <div className="absolute left-0 top-0 bottom-0 w-[70%] flex items-center justify-center">
          {/* Subtle spotlight glow behind image */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'radial-gradient(ellipse 50% 45% at 50% 50%, rgba(30, 115, 255, 0.06), transparent 65%)',
              filter: 'blur(45px)'
            }}
          />
          
          {/* Main Image */}
          <div 
            className="relative"
            style={{
              width: '85%',
              height: '90%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img 
              src={dashboardImage} 
              alt="Analytics Dashboard Platform" 
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 70px 140px rgba(0, 0, 0, 0.12)) drop-shadow(0 28px 56px rgba(0, 0, 0, 0.08))',
                animation: 'fadeInTilt 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              }}
            />
            
            {/* Floor reflection */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: '85%',
                height: '40px',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent)',
                filter: 'blur(16px)',
                borderRadius: '50%'
              }}
            />
          </div>
        </div>

        {/* Right 30%: Content Cards */}
        <div className="absolute right-0 top-0 bottom-0 w-[30%] flex items-center justify-end pr-12">
          <div className="w-full flex flex-col" style={{ gap: '14px' }}>
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={idx}
                  className="group relative overflow-hidden transition-all duration-500 hover:translate-x-1.5 hover:scale-[1.01]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '14px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 8px 28px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(0, 0, 0, 0.02)',
                    animation: `slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${0.4 + idx * 0.15}s`,
                    opacity: 0
                  }}
                >
                  {/* Top light reflection - enhanced */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[45%] pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), transparent)',
                      borderRadius: '14px 14px 0 0'
                    }}
                  />

                  <div className="relative p-3 pl-4 flex gap-3">
                    {/* Gradient Icon Dot */}
                    <div 
                      className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: `linear-gradient(135deg, ${feature.gradientFrom}, ${feature.gradientTo})`,
                        boxShadow: `0 4px 16px ${feature.gradientFrom}40, inset 0 1px 1px rgba(255, 255, 255, 0.25)`,
                        position: 'relative'
                      }}
                    >
                      {/* Inner light reflection on dot */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35), transparent)',
                          borderRadius: '50%'
                        }}
                      />
                      <IconComponent 
                        style={{ 
                          width: '20px', 
                          height: '20px',
                          color: feature.iconColor,
                          strokeWidth: 2,
                          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15))'
                        }} 
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 
                        className="font-bold"
                        style={{ 
                          fontSize: '14px', 
                          color: '#0a0a0a',
                          letterSpacing: '-0.01em',
                          marginBottom: '2px'
                        }}
                      >
                        {feature.title}
                      </h4>
                      <p 
                        className="leading-tight"
                        style={{ 
                          fontSize: '12px', 
                          color: '#555555',
                          lineHeight: '1.45'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover shadow enhancement */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: '0 20px 56px rgba(0, 0, 0, 0.14)',
                      borderRadius: '14px'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInTilt {
          from {
            opacity: 0;
            transform: perspective(1200px) rotateY(10deg) scale(0.96);
          }
          to {
            opacity: 1;
            transform: perspective(1200px) rotateY(0deg) scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </SlideLayout>
  );
};

export default SlideAnalyticsPlatform;

