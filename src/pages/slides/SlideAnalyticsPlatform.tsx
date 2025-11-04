import React from 'react';
import { TrendingUp, AlertCircle, BarChart2, CheckCircle2 } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import complianceDashboard from '@/assets/dashboards/Compliance Dashboard.png';

const SlideAnalyticsPlatform = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Predictive Insights:",
      description: "Advanced analytics that forecast operational trends and identify opportunities before they emerge.",
      color: "#1E73FF",
      lightBg: "rgba(30, 115, 255, 0.06)"
    },
    {
      icon: AlertCircle,
      title: "Real-Time Monitoring:",
      description: "Continuous tracking of compliance metrics with instant alerts for anomalies and issues.",
      color: "#10B981",
      lightBg: "rgba(16, 185, 129, 0.06)"
    },
    {
      icon: BarChart2,
      title: "Custom Reporting:",
      description: "Flexible report generation tailored to your business needs with automated distribution.",
      color: "#F59E0B",
      lightBg: "rgba(245, 158, 11, 0.06)"
    },
    {
      icon: CheckCircle2,
      title: "Compliance Tracking:",
      description: "Comprehensive audit trails and compliance scoring across all operational standards.",
      color: "#8B5CF6",
      lightBg: "rgba(139, 92, 246, 0.06)"
    }
  ];

  return (
    <SlideLayout 
      title="Analytics" 
      slideNumber="30" 
      totalSlides="43" 
      logoSrc={depointLogo} 
      componentName="SlideAnalyticsPlatform"
      backgroundClass="bg-gradient-to-b from-white via-[#F8FAFB] to-[#F1F5F9]/30"
      footerTagline="Powered by data. Driven by insights."
    >
      <div className="h-full relative px-12 pb-8">
        
        {/* Mac Screen Mockup - Positioned on left */}
        <div className="absolute left-0 top-0 bottom-0 w-[60%] flex items-center justify-start pl-8">
          
          {/* iMac Stand and Base */}
          <div className="relative w-full h-[85%] flex flex-col items-center">
            
            {/* Screen */}
            <div 
              className="relative w-full flex-1 rounded-2xl overflow-hidden"
              style={{
                background: '#1a1a1a',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.25), 0 0 0 8px #2a2a2a, 0 0 0 9px rgba(0,0,0,0.1)',
              }}
            >
              {/* Screen bezel */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              ></div>
              
              {/* Dashboard Image */}
              <div className="relative w-full h-full p-3 bg-white rounded-xl">
                <img 
                  src={complianceDashboard} 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Screen glare */}
              <div 
                className="absolute top-0 left-0 right-0 h-24 rounded-t-2xl"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              ></div>
            </div>
            
            {/* Stand */}
            <div 
              className="w-32 h-16 mt-1"
              style={{
                background: 'linear-gradient(180deg, #d0d0d0 0%, #a8a8a8 100%)',
                clipPath: 'polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            ></div>
            
            {/* Base */}
            <div 
              className="w-48 h-3 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #d0d0d0 0%, #a8a8a8 100%)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              }}
            ></div>
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
                  animation: `floatIn 0.8s ease-out forwards ${index * 0.1}s`,
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
                    {/* Icon Container */}
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
            transform: translateY(15px) scale(0.95);
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

export default SlideAnalyticsPlatform;

