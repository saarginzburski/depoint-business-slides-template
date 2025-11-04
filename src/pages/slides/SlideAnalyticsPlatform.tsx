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
              src={complianceDashboard}
              alt="Analytics Dashboard"
              className="w-full h-full object-contain object-left"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08))',
              }}
            />
          </div>
        </div>

        {/* Feature Cards - Overlaying on right side */}
        <div className="relative h-full flex items-center justify-end z-10">
          <div className="w-[30%] flex flex-col justify-center" style={{ gap: '12px' }}>
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
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
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
                    className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                    style={{
                      background: `linear-gradient(180deg, ${feature.color}, ${feature.color}dd)`,
                      boxShadow: `0 0 10px ${feature.color}35`
                    }}
                  ></div>
                  
                  <div className="flex items-start gap-3 p-3 pl-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{
                          background: feature.lightBg,
                          border: `1px solid ${feature.color}15`
                        }}
                      >
                        <Icon 
                          className="transition-transform duration-300 group-hover:scale-110" 
                          style={{ 
                            width: '18px', 
                            height: '18px',
                            color: feature.color,
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
                          fontSize: '13px',
                          lineHeight: '1.3',
                          color: '#1a1a1a'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="font-normal leading-snug"
                        style={{
                          fontSize: '11px',
                          lineHeight: '1.45',
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

