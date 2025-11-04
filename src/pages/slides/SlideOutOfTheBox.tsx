import React from 'react';
import { CheckCircle, MessageSquare, Target, Shield, GraduationCap, RotateCw, FileText } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideOutOfTheBox = () => {
  const modules = {
    topLeft: {
      icon: FileText,
      title: "Requests from stores to HQ",
      items: "Inventory checks / Supplier issues / Apply to mgmt / Theft reports / Vacation / Sickness / Accident reports / Employees reviews",
      color: "#1E3A8A",
      lightBg: "rgba(30, 58, 138, 0.08)",
    },
    top: {
      icon: CheckCircle,
      title: "Ad-Hoc Tasks",
      items: "Recalls / Surprise review / Signage & planogram / Pricing changes / New products / Special sales",
      color: "#1E73FF",
      lightBg: "rgba(30, 115, 255, 0.08)",
    },
    topRight: {
      icon: MessageSquare,
      title: "Internal communication",
      items: "Internal social network / Organizational portal / News & updates / Suggestion box",
      color: "#60A5FA",
      lightBg: "rgba(96, 165, 250, 0.08)",
    },
    right: {
      icon: Target,
      title: "Goals & Incentives",
      items: "Personal & group Competitions / Goals setting / Real time performance feedback / Live compensation view",
      color: "#3B82F6",
      lightBg: "rgba(59, 130, 246, 0.08)",
    },
    bottomRight: {
      icon: Shield,
      title: "Auditing management",
      items: "Quality checks / Store visits / Mystery shopper / Preventing maintenance",
      color: "#2563EB",
      lightBg: "rgba(37, 99, 235, 0.08)",
    },
    bottom: {
      icon: GraduationCap,
      title: "Onboarding & Training",
      items: "Full digital onboarding / Sign agreements & procedures / Upload documents / Training & evaluation by job",
      color: "#1D4ED8",
      lightBg: "rgba(29, 78, 216, 0.08)",
    },
    left: {
      icon: RotateCw,
      title: "Routines",
      items: "Cars counting / Safes reviews / Shifts mgmt. / Security checks / Secret customer / Open-close store checklists / Department mgmt. freshness",
      color: "#1E40AF",
      lightBg: "rgba(30, 64, 175, 0.08)",
    },
  };

  const ModuleCard = ({ module, delay }: { module: any; delay: number }) => {
    const Icon = module.icon;
    return (
      <div 
        className="flex flex-col items-center text-center group"
        style={{ 
          animation: `floatIn 0.8s ease-out forwards ${delay}s`,
          opacity: 0,
        }}
      >
        <div 
          className="mb-1.5 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
          style={{
            width: '56px',
            height: '56px',
            background: module.lightBg,
            border: `1.5px solid ${module.color}20`,
            boxShadow: `0 4px 16px ${module.color}12, 0 1px 4px ${module.color}08`,
          }}
        >
          <Icon 
            style={{ 
              width: '26px', 
              height: '26px',
              color: module.color,
              strokeWidth: 1.5
            }} 
          />
        </div>
        
        <h4 
          className="font-bold mb-0.5 tracking-tight"
          style={{
            fontSize: '12px',
            lineHeight: '1.25',
            color: '#1a1a1a',
          }}
        >
          {module.title}
        </h4>
        
        <p 
          className="leading-tight px-0.5"
          style={{
            fontSize: '8.5px',
            lineHeight: '1.35',
            color: '#6b7280',
          }}
        >
          {module.items}
        </p>
      </div>
    );
  }

  return (
      <SlideLayout
        title="Out of the Box"
        subtitle="Hundreds of predefined templates"
        slideNumber="29"
        totalSlides="43"
        logoSrc={depointLogo}
        componentName="SlideOutOfTheBox"
        backgroundClass="bg-gradient-to-b from-white via-[#F9FAFB] to-[#F3F4F6]/30"
        footerTagline="Depoint — Out of the Box. Ready on Day One."
      >
      <div className="h-full flex items-center justify-center pb-2 px-3">
        
        {/* 3x3 Grid Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr 1fr',
            gap: '16px',
            width: '100%',
            maxWidth: '1000px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {/* Row 1 */}
          <div style={{ width: '160px' }}>
            <ModuleCard module={modules.topLeft} delay={0} />
          </div>
          <div style={{ width: '160px' }}>
            <ModuleCard module={modules.top} delay={0.1} />
          </div>
          <div style={{ width: '160px' }}>
            <ModuleCard module={modules.topRight} delay={0.2} />
          </div>

          {/* Row 2 */}
          <div style={{ width: '160px' }}>
            <ModuleCard module={modules.left} delay={0.6} />
          </div>
          
          {/* Central Hub */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-2xl shadow-2xl"
            style={{
              width: '190px',
              height: '190px',
              background: 'linear-gradient(135deg, #1E73FF 0%, #60A5FA 100%)',
              boxShadow: '0 15px 45px rgba(30, 115, 255, 0.25), 0 0 0 1px rgba(255,255,255,0.1) inset',
              animation: 'floatIn 0.8s ease-out forwards 0.35s',
              opacity: 0,
            }}
          >
            {/* Inner glow */}
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.3), transparent 60%)',
              }}
            ></div>
            
            {/* Icon */}
            <div className="relative z-10 mb-1.5">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            
            {/* Text */}
            <div className="relative z-10 text-center px-3">
              <h3 className="text-white font-bold text-base mb-1 tracking-tight" style={{ fontSize: '16px' }}>
                Data & Analytics Hub
              </h3>
              <p className="text-white/90 leading-snug" style={{ fontSize: '11px' }}>
                Collects and syncs data<br />from/between external systems
              </p>
            </div>
          </div>
          
          <div style={{ width: '160px' }}>
            <ModuleCard module={modules.right} delay={0.3} />
          </div>

          {/* Row 3 */}
          <div style={{ width: '160px' }}>
            <ModuleCard module={modules.bottom} delay={0.5} />
          </div>
          <div style={{ width: '160px' }}></div>
          <div style={{ width: '160px' }}>
            <ModuleCard module={modules.bottomRight} delay={0.4} />
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

export default SlideOutOfTheBox;

