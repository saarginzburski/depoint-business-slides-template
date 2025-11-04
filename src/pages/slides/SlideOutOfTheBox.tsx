import React from 'react';
import { CheckCircle, MessageSquare, Target, Shield, GraduationCap, RotateCw, FileText } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideOutOfTheBox = () => {
  const modules = {
    top: {
      icon: FileText,
      title: "Requests from stores to HQ",
      items: "Inventory checks / Supplier issues / Apply to mgmt / Theft reports / Vacation / Sickness / Accident reports / Employees reviews",
    },
    topRight: {
      icon: CheckCircle,
      title: "Ad-Hoc Tasks",
      items: "Recalls / Surprise review / Signage & planogram / Pricing changes / New products / Special sales",
    },
    right: {
      icon: MessageSquare,
      title: "Internal communication",
      items: "Internal social network / Organizational portal / News & updates / Suggestion box",
    },
    bottomRight: {
      icon: Target,
      title: "Goals & Incentives",
      items: "Personal & group Competitions / Goals setting / Real time performance feedback / Live compensation view",
    },
    bottom: {
      icon: Shield,
      title: "Auditing management",
      items: "Quality checks / Store visits / Mystery shopper / Preventing maintenance",
    },
    bottomLeft: {
      icon: GraduationCap,
      title: "Onboarding & Training",
      items: "Full digital onboarding / Sign agreements & procedures / Upload documents / Training & evaluation by job",
    },
    left: {
      icon: RotateCw,
      title: "Routines",
      items: "Cars counting / Safes reviews / Shifts mgmt. / Security checks / Secret customer / Open-close store checklists / Department mgmt. freshness",
    },
  };

  const ModuleCard = ({ module, delay }: { module: any; delay: number }) => {
    const Icon = module.icon;
    return (
      <div
        className="h-full flex items-center justify-center"
        style={{
          animation: `floatIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards ${delay}s`,
          opacity: 0
        }}
      >
        <div
          className="overflow-hidden rounded-2xl transition-all duration-500 group"
          style={{
            width: '170px',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(0, 0, 0, 0.015)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06), inset 0 1px 2px rgba(0, 0, 0, 0.015)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(0, 0, 0, 0.015)';
          }}
        >
          {/* Top light reflection */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
            }}
          ></div>

          <div className="flex flex-col items-center text-center p-4">
            {/* Icon Container */}
            <div
              className="mb-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(30, 115, 255, 0.06)',
                border: '1.5px solid rgba(30, 115, 255, 0.12)',
                boxShadow: '0 2px 8px rgba(30, 115, 255, 0.08)'
              }}
            >
              <Icon
                style={{
                  width: '24px',
                  height: '24px',
                  color: '#1E73FF',
                  strokeWidth: 1.75
                }}
              />
            </div>

            {/* Title */}
            <h4
              className="font-bold mb-1.5 tracking-tight"
              style={{
                fontSize: '12px',
                lineHeight: '1.3',
                color: '#0a0a0a'
              }}
            >
              {module.title}
            </h4>

            {/* Description */}
            <p
              className="leading-tight"
              style={{
                fontSize: '9px',
                lineHeight: '1.4',
                color: '#555555'
              }}
            >
              {module.items}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SlideLayout
      title="Out of the Box"
      subtitle="Hundreds of predefined templates"
      slideNumber="29"
      totalSlides="43"
      logoSrc={depointLogo}
      componentName="SlideOutOfTheBox"
      backgroundClass="bg-gradient-to-b from-white via-[#F8FAFB] to-[#F5F7FA]"
      footerTagline="Depoint — Out of the Box. Ready from Day One."
    >
      <div className="h-full flex items-center justify-center py-6 px-8">
        
        {/* 5x5 Grid Layout for perfect positioning */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 180px)',
            gridTemplateRows: 'repeat(5, 140px)',
            gap: '20px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {/* Row 1 - Empty, Top, Empty, Empty, Empty */}
          <div></div>
          <div><ModuleCard module={modules.top} delay={0.6} /></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Row 2 - Empty, Empty, Top-Right, Empty, Empty */}
          <div></div>
          <div></div>
          <div><ModuleCard module={modules.topRight} delay={0.7} /></div>
          <div></div>
          <div></div>

          {/* Row 3 - Left, Empty, CENTER HUB, Empty, Right */}
          <div><ModuleCard module={modules.left} delay={1.0} /></div>
          <div></div>
          
          {/* Central Hub */}
          <div
            className="flex items-center justify-center"
            style={{
              animation: 'hubPulse 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s',
              opacity: 0
            }}
          >
            {/* Radial glow background */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(30, 115, 255, 0.15) 0%, rgba(96, 165, 250, 0.08) 40%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}
            ></div>

            <div
              className="relative overflow-hidden rounded-3xl transition-all duration-500"
              style={{
                width: '220px',
                height: '220px',
                background: 'linear-gradient(135deg, #1E73FF 0%, #60A5FA 100%)',
                boxShadow: '0 20px 60px rgba(30, 115, 255, 0.3), 0 8px 24px rgba(30, 115, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                zIndex: 1
              }}
            >
              {/* Top light reflection */}
              <div
                className="absolute inset-x-0 top-0"
                style={{
                  height: '50%',
                  background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.3), transparent 70%)',
                }}
              ></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
                {/* Icon - 4 squares grid */}
                <div className="mb-4">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>

                <h3
                  className="font-bold tracking-tight mb-2"
                  style={{
                    fontSize: '17px',
                    lineHeight: '1.2',
                    color: 'white',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  Data & Analytics Hub
                </h3>
                <p
                  className="font-normal leading-snug"
                  style={{
                    fontSize: '12px',
                    lineHeight: '1.4',
                    color: 'rgba(255, 255, 255, 0.92)'
                  }}
                >
                  Collects and syncs data<br />from/between external systems
                </p>
              </div>
            </div>
          </div>
          
          <div></div>
          <div><ModuleCard module={modules.right} delay={0.8} /></div>

          {/* Row 4 - Empty, Empty, Bottom-Left, Empty, Empty */}
          <div></div>
          <div></div>
          <div><ModuleCard module={modules.bottomLeft} delay={1.1} /></div>
          <div></div>
          <div></div>

          {/* Row 5 - Empty, Bottom, Empty, Bottom-Right, Empty */}
          <div></div>
          <div><ModuleCard module={modules.bottom} delay={1.0} /></div>
          <div></div>
          <div><ModuleCard module={modules.bottomRight} delay={0.9} /></div>
          <div></div>
        </div>

      </div>

      {/* Apple-style animations */}
      <style>{`
        @keyframes hubPulse {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          60% {
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
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

export default SlideOutOfTheBox;
