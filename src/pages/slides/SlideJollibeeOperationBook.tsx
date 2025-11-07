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
        backgroundClass="bg-white"
        footerTagline="Turns out fried chicken tastes even better when Bluetooth does the temperature check."
      >
        <div className="h-full flex flex-col justify-center px-10 pb-6 pt-4">
          
          {/* Header with Logo - Elevated */}
          <div className="text-center mb-5 relative">
            {/* Radial glow behind logo */}
            <div 
              className="absolute left-1/2 top-0 -translate-x-1/2"
              style={{
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 30%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
                animation: 'fadeIn 1s ease-out forwards',
                opacity: 0
              }}
            />
            
            <img 
              src={jollibeeLogo} 
              alt="Jollibee" 
              className="mx-auto mb-2"
              style={{ 
                height: '52px',
                animation: 'logoPulse 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                opacity: 0
              }}
            />
            <p 
              className="text-neutral-700 max-w-5xl mx-auto"
              style={{ 
                fontSize: '14px',
                lineHeight: '1.5',
                fontWeight: 400
              }}
            >
              Every aspect of Jollibee's operations manual is now digitized, trackable, and optimized through Depoint's platform.
            </p>
            
            {/* Horizontal divider */}
            <div 
              className="mx-auto mt-3"
              style={{
                width: '60%',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.10) 30%, rgba(0, 0, 0, 0.10) 70%, transparent)'
              }}
            />
          </div>

          {/* Operations Grid - Perfect 3x4 Grid */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-4 max-w-[1200px] mx-auto" style={{ gap: '14px' }}>
              {operationItems.map((item, index) => {
                const IconComponent = item.icon;
                const row = Math.floor(index / 4);
                return (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden transition-all duration-500 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.96)',
                      backdropFilter: 'blur(24px)',
                      borderRadius: '14px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
                      animation: `cardFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                      animationDelay: `${1.5 + row * 0.12 + (index % 4) * 0.03}s`,
                      opacity: 0
                    }}
                  >
                    {/* Top light reflection for hover glow */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[35%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), transparent)',
                        borderRadius: '14px 14px 0 0'
                      }}
                    />
                    
                    {/* Colored accent bar on left - Stronger */}
                    <div 
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full transition-all duration-300 group-hover:w-[4px]"
                      style={{
                        background: item.accentGradient,
                        boxShadow: `0 0 14px ${item.accentColor}50, 0 0 28px ${item.accentColor}25`
                      }}
                    />
                    
                    <div className="text-center px-3 py-4 flex flex-col items-center justify-start min-h-[105px]">
                      {/* Icon - Centered with lighter opacity */}
                      <div 
                        className="flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110"
                        style={{
                          marginTop: '4px'
                        }}
                      >
                        <IconComponent 
                          style={{ 
                            width: '28px', 
                            height: '28px',
                            color: item.iconColor,
                            strokeWidth: 1.8,
                            opacity: 0.75
                          }} 
                        />
                      </div>
                      
                      {/* Title - Stronger weight */}
                      <h4 
                        className="leading-tight mb-0.5"
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 650,
                          color: '#1a1a1a',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {item.title}
                      </h4>
                      
                      {/* Subtitle - Lighter gray */}
                      {item.subtitle && (
                        <p 
                          className="leading-tight"
                          style={{
                            fontSize: '9px',
                            fontWeight: 500,
                            color: '#555555'
                          }}
                        >
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Hover shadow enhancement */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: '0 16px 36px rgba(0, 0, 0, 0.08)',
                        borderRadius: '14px'
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Tagline - Italicized */}
          <div className="text-center mt-4">
            <p 
              className="max-w-4xl mx-auto"
              style={{
                fontSize: '12px',
                fontStyle: 'italic',
                fontWeight: 600,
                color: '#444444',
                letterSpacing: '-0.01em'
              }}
            >
              "Every operational procedure, digitized and synchronized across 1,324 locations."
            </p>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes logoPulse {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            50% {
              transform: scale(1.02);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes cardFadeIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </SlideLayout>
  );
};

export default SlideJollibeeOperationBook;