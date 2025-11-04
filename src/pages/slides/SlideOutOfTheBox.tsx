import React from 'react';
import { CheckCircle, MessageSquare, Target, Shield, GraduationCap, RotateCw, FileText } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideOutOfTheBox = () => {
  const modules = [
    {
      icon: CheckCircle,
      title: "Ad-Hoc Tasks",
      items: "Recalls / Surprise review / Signage & planogram / Pricing changes / New products / Special sales",
      color: "#1E73FF",
      lightBg: "rgba(30, 115, 255, 0.08)",
      angle: 0, // top
    },
    {
      icon: MessageSquare,
      title: "Internal communication",
      items: "Internal social network / Organizational portal / News & updates / Suggestion box",
      color: "#60A5FA",
      lightBg: "rgba(96, 165, 250, 0.08)",
      angle: 51.4, // top-right
    },
    {
      icon: Target,
      title: "Goals & Incentives",
      items: "Personal & group Competitions / Goals setting / Real time performance feedback / Live compensation view",
      color: "#3B82F6",
      lightBg: "rgba(59, 130, 246, 0.08)",
      angle: 102.8, // right
    },
    {
      icon: Shield,
      title: "Auditing management",
      items: "Quality checks / Store visits / Mystery shopper / Preventing maintenance",
      color: "#2563EB",
      lightBg: "rgba(37, 99, 235, 0.08)",
      angle: 154.2, // bottom-right
    },
    {
      icon: GraduationCap,
      title: "Onboarding & Training",
      items: "Full digital onboarding / Sign agreements & procedures / Upload documents / Training & evaluation by job",
      color: "#1D4ED8",
      lightBg: "rgba(29, 78, 216, 0.08)",
      angle: 205.6, // bottom-left
    },
    {
      icon: RotateCw,
      title: "Routines",
      items: "Cars counting / Safes reviews / Shifts mgmt. / Security checks / Secret customer / Open-close store checklists / Department mgmt. freshness",
      color: "#1E40AF",
      lightBg: "rgba(30, 64, 175, 0.08)",
      angle: 257, // left
    },
    {
      icon: FileText,
      title: "Requests from stores to HQ",
      items: "Inventory checks / Supplier issues / Apply to mgmt / Theft reports / Vacation / Sickness / Accident reports / Employees reviews",
      color: "#1E3A8A",
      lightBg: "rgba(30, 58, 138, 0.08)",
      angle: 308.4, // top-left
    },
  ];

  // Calculate position on circle
  const getPosition = (angle: number, radius: number) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    };
  };

  const radius = 340; // pixels from center

  return (
    <SlideLayout 
      title="Out of the Box" 
      subtitle="Hundreds of predefined templates"
      slideNumber="29" 
      totalSlides="41" 
      logoSrc={depointLogo} 
      componentName="SlideOutOfTheBox"
      backgroundClass="bg-gradient-to-b from-white via-[#F9FAFB] to-[#F3F4F6]/30"
      footerTagline="Depoint — Out of the Box. Ready on Day One."
    >
      <div className="h-full flex items-center justify-center pb-8 px-8 relative" style={{ minHeight: '600px' }}>
        
        {/* Container for proper centering */}
        <div className="relative" style={{ width: '100%', height: '100%', maxWidth: '1100px', maxHeight: '700px' }}>
          
          {/* Central Hub */}
          <div 
            className="absolute z-20"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div 
              className="relative flex flex-col items-center justify-center rounded-3xl shadow-2xl"
              style={{
                width: '280px',
                height: '280px',
                background: 'linear-gradient(135deg, #1E73FF 0%, #60A5FA 100%)',
                boxShadow: '0 20px 60px rgba(30, 115, 255, 0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
              }}
            >
              {/* Inner glow */}
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.3), transparent 60%)',
                }}
              ></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-3">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              
              {/* Text */}
              <div className="relative z-10 text-center px-6">
                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">
                  Data & Analytics Hub
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Collects and syncs data<br />from/between external systems
                </p>
              </div>
            </div>
          </div>

          {/* Connecting Lines */}
          <svg 
            className="absolute z-10 pointer-events-none" 
            style={{
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgba(30, 115, 255, 0.6)', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: 'rgba(30, 115, 255, 0.2)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(30, 115, 255, 0.1)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {modules.map((module, index) => {
              const pos = getPosition(module.angle, radius);
              return (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${pos.x}px)`}
                  y2={`calc(50% + ${pos.y}px)`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
              );
            })}
          </svg>

          {/* Surrounding Modules */}
          {modules.map((module, index) => {
            const Icon = module.icon;
            const pos = getPosition(module.angle, radius);
            
            return (
              <div
                key={index}
                className="absolute z-30"
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: 'translate(-50%, -50%)',
                  animation: `floatIn 0.8s ease-out forwards ${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div 
                  className="flex flex-col items-center text-center group"
                  style={{ width: '200px' }}
                >
                  {/* Icon Circle */}
                  <div 
                    className="mb-3 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: module.lightBg,
                      border: `2px solid ${module.color}20`,
                      boxShadow: `0 8px 24px ${module.color}15, 0 2px 8px ${module.color}10`,
                    }}
                  >
                    <Icon 
                      style={{ 
                        width: '36px', 
                        height: '36px',
                        color: module.color,
                        strokeWidth: 1.5
                      }} 
                    />
                  </div>
                  
                  {/* Title */}
                  <h4 
                    className="font-bold mb-2 tracking-tight"
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.3',
                      color: '#1a1a1a',
                    }}
                  >
                    {module.title}
                  </h4>
                  
                  {/* Items */}
                  <p 
                    className="leading-snug"
                    style={{
                      fontSize: '11px',
                      lineHeight: '1.5',
                      color: '#6b7280',
                    }}
                  >
                    {module.items}
                  </p>
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
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1);
          }
        }
      `}</style>
    </SlideLayout>
  );
};

export default SlideOutOfTheBox;

