import React from 'react';
import { 
  Users, 
  Target, 
  CheckCircle, 
  Award, 
  Droplets, 
  Rocket, 
  Shield, 
  Zap, 
  ClipboardCheck, 
  HeadphonesIcon, 
  GraduationCap, 
  BookOpen 
} from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import jollibeeLogo from "@/assets/jollibee-logo-new.png";

const SlideJollibeeOperationBook = () => {
  const operationItems = [
    {
      icon: Users,
      title: "Shift management & endorsements",
      accentColor: "#3b82f6",
      accentGradient: "linear-gradient(180deg, #3b82f6, #2563eb)",
      iconColor: "#3b82f6",
      lightBg: "rgba(59, 130, 246, 0.06)"
    },
    {
      icon: Target,
      title: "Game planning & plan analysis", 
      accentColor: "#10b981",
      accentGradient: "linear-gradient(180deg, #10b981, #059669)",
      iconColor: "#10b981",
      lightBg: "rgba(16, 185, 129, 0.06)"
    },
    {
      icon: CheckCircle,
      title: "Station & food safety checklists",
      subtitle: "(with Bluetooth thermometer integration)",
      accentColor: "#ef4444",
      accentGradient: "linear-gradient(180deg, #ef4444, #dc2626)",
      iconColor: "#ef4444",
      lightBg: "rgba(239, 68, 68, 0.06)"
    },
    {
      icon: Award,
      title: "Golden Standard compliance",
      subtitle: "(flagship & leading products)",
      accentColor: "#eab308",
      accentGradient: "linear-gradient(180deg, #eab308, #ca8a04)",
      iconColor: "#eab308",
      lightBg: "rgba(234, 179, 8, 0.06)"
    },
    {
      icon: Droplets,
      title: "Oil care & fryer management",
      accentColor: "#f97316",
      accentGradient: "linear-gradient(180deg, #f97316, #ea580c)",
      iconColor: "#f97316",
      lightBg: "rgba(249, 115, 22, 0.06)"
    },
    {
      icon: Rocket,
      title: "New product launch toolkits",
      accentColor: "#a855f7",
      accentGradient: "linear-gradient(180deg, #a855f7, #9333ea)",
      iconColor: "#a855f7",
      lightBg: "rgba(168, 85, 247, 0.06)"
    },
    {
      icon: Shield,
      title: "Accreditations & certificates management",
      accentColor: "#6366f1",
      accentGradient: "linear-gradient(180deg, #6366f1, #4f46e5)",
      iconColor: "#6366f1",
      lightBg: "rgba(99, 102, 241, 0.06)"
    },
    {
      icon: Zap,
      title: "Environmental, safety & security requirements",
      accentColor: "#06b6d4",
      accentGradient: "linear-gradient(180deg, #06b6d4, #0891b2)",
      iconColor: "#06b6d4",
      lightBg: "rgba(6, 182, 212, 0.06)"
    },
    {
      icon: ClipboardCheck,
      title: "Audits & control processes",
      accentColor: "#10b981",
      accentGradient: "linear-gradient(180deg, #10b981, #059669)",
      iconColor: "#10b981",
      lightBg: "rgba(16, 185, 129, 0.06)"
    },
    {
      icon: HeadphonesIcon,
      title: "Ticketing & helpdesk for store issues",
      accentColor: "#ec4899",
      accentGradient: "linear-gradient(180deg, #ec4899, #db2777)",
      iconColor: "#ec4899",
      lightBg: "rgba(236, 72, 153, 0.06)"
    },
    {
      icon: GraduationCap,
      title: "Training & micro-learning modules",
      accentColor: "#8b5cf6",
      accentGradient: "linear-gradient(180deg, #8b5cf6, #7c3aed)",
      iconColor: "#8b5cf6",
      lightBg: "rgba(139, 92, 246, 0.06)"
    },
    {
      icon: BookOpen,
      title: "Knowledge base for continuous learning",
      accentColor: "#14b8a6",
      accentGradient: "linear-gradient(180deg, #14b8a6, #0d9488)",
      iconColor: "#14b8a6",
      lightBg: "rgba(20, 184, 166, 0.06)"
    }
  ];

  return (
    <SlideLayout
        title="Jollibee: Fully Digitized Operational Book"
        slideNumber="6"
        totalSlides="31"
        logoSrc={depointLogo}
        componentName="SlideJollibeeOperationBook"
      >
        <div className="content-viewport h-full flex flex-col justify-center px-12 pt-4 pb-6">
          
          {/* Header with Logo */}
          <div className="text-center mb-4">
            <img src={jollibeeLogo} alt="Jollibee" className="h-10 mx-auto mb-1.5" />
            <p className="text-sm text-neutral-700 max-w-5xl mx-auto leading-tight">
              Every aspect of Jollibee's operations manual is now digitized, trackable, and optimized through Depoint's platform.
            </p>
          </div>

          {/* Operations Grid - 4 columns, 3 rows */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-4 max-w-6xl mx-auto" style={{ gap: '12px' }}>
              {operationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
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
                      className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                      style={{
                        background: item.accentGradient,
                        boxShadow: `0 0 10px ${item.accentColor}35`
                      }}
                    ></div>
                    
                    <div className="text-center p-3 flex flex-col items-center justify-center min-h-[100px]">
                      {/* Icon Container */}
                      <div 
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-all duration-300"
                        style={{
                          background: item.lightBg,
                          border: `1px solid ${item.accentColor}15`
                        }}
                  >
                        <IconComponent 
                          className="transition-transform duration-300 group-hover:scale-110" 
                          style={{ 
                            width: '20px', 
                            height: '20px',
                            color: item.iconColor,
                            strokeWidth: 2
                          }} 
                        />
                      </div>
                      
                      <h4 className="text-[11px] font-semibold text-neutral-800 leading-tight mb-0.5">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                        <p className="text-[9px] text-neutral-600 leading-tight">
                        {item.subtitle}
                      </p>
                    )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-3">
            <div className="inline-block bg-jollibee-red/10 rounded-lg px-4 py-1 border border-jollibee-red/20">
              <p className="text-xs font-bold text-jollibee-red">
                "Every operational procedure, digitized and synchronized across 1,324 locations."
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
  );
};

export default SlideJollibeeOperationBook;