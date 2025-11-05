import React from 'react';
import { CheckCircle, MessageSquare, Target, Shield, GraduationCap, RotateCw, FileText } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideOutOfTheBox = () => {
  const orbitingModules = [
    {
      icon: FileText,
      title: "Requests from stores to HQ",
      items: "Inventory checks / Supplier issues / Apply to mgmt / Theft reports / Vacation / Sickness / Accident reports / Employees reviews",
      color: "#1E73FF",
      angle: 0
    },
    {
      icon: CheckCircle,
      title: "Ad-Hoc Tasks",
      items: "Recalls / Surprise review / Signage & planogram / Pricing changes / New products / Special sales",
      color: "#22C55E",
      angle: 51.4
    },
    {
      icon: MessageSquare,
      title: "Internal communication",
      items: "Internal social network / Organizational portal / News & updates / Suggestion box",
      color: "#F59E0B",
      angle: 102.8
    },
    {
      icon: Target,
      title: "Goals & Incentives",
      items: "Personal & group Competitions / Goals setting / Real time performance feedback / Live compensation view",
      color: "#8B5CF6",
      angle: 154.2
    },
    {
      icon: GraduationCap,
      title: "Onboarding & Training",
      items: "Full digital onboarding / Sign agreements & procedures / Upload documents / Training & evaluation by job",
      color: "#EF4444",
      angle: 205.6
    },
    {
      icon: Shield,
      title: "Auditing management",
      items: "Quality checks / Store visits / Mystery shopper / Preventing maintenance",
      color: "#3B82F6",
      angle: 257
    },
    {
      icon: RotateCw,
      title: "Routines",
      items: "Cars counting / Safes reviews / Shifts mgmt. / Security checks / Secret customer / Open-close store checklists / Department mgmt. freshness",
      color: "#10B981",
      angle: 308.4
    }
  ];


  return (
    <SlideLayout
      title="Out of the Box"
      subtitle="Hundreds of predefined templates"
      slideNumber="29"
      totalSlides="43"
      logoSrc={depointLogo}
      componentName="SlideOutOfTheBox"
      backgroundClass="bg-white"
      footerTagline="Depoint — Out of the Box. Ready from Day One."
    >
      <div 
        className="h-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at center, #ffffff 0%, #f8fafb 100%)'
        }}
      >
        
        {/* Wrapper - perfectly centered, wider */}
        <div
          className="relative"
          style={{
            width: '1400px',
            height: '750px'
          }}
        >
          
          {/* Connection lines - SVG */}
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            {orbitingModules.map((module, idx) => {
              const centerX = 700;
              const centerY = 375;
              // Elliptical orbit: horizontal radius larger, vertical radius smaller
              const horizontalRadius = 420;
              const verticalRadius = 240;
              const angleRad = (module.angle * Math.PI) / 180;
              const x = centerX + horizontalRadius * Math.cos(angleRad);
              const y = centerY + verticalRadius * Math.sin(angleRad);
              
              return (
                <line
                  key={idx}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke="rgba(30, 115, 255, 0.12)"
                  strokeWidth="1"
                  className="connection-line"
                  style={{
                    animation: `lineAppear 0.6s ease forwards ${0.3 + idx * 0.05}s`,
                    opacity: 0
                  }}
                />
              );
            })}
          </svg>

          {/* Optional: Faint elliptical guide line */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              width: '840px',
              height: '480px',
              transform: 'translate(-50%, -50%)',
              border: '1px solid rgba(0, 0, 0, 0.03)',
              borderRadius: '50%',
              zIndex: 0
            }}
          />

          {/* Central Hub */}
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: '270px',
              height: '170px',
              transform: 'translate(-50%, -50%)',
              animation: 'hubPulse 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s',
              opacity: 0,
              zIndex: 10
            }}
          >
            {/* Radial glow */}
            <div
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: '400px',
                height: '400px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(30, 115, 255, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: -1
              }}
            />

            <div
              className="w-full h-full rounded-3xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1E73FF, #60A5FA)',
                boxShadow: '0 0 40px rgba(30, 115, 255, 0.4), 0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                animation: 'pulse 3s ease-in-out infinite'
              }}
            >
              {/* Top light reflection */}
              <div
                className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.3), transparent 70%)'
                }}
              />

              <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
                {/* Icon */}
                <div className="mb-3">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>

                <h3
                  className="font-bold tracking-tight mb-1.5"
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
                  style={{
                    fontSize: '12px',
                    lineHeight: '1.4',
                    color: 'rgba(255, 255, 255, 0.95)'
                  }}
                >
                  Collects and syncs data<br />from/between external systems
                </p>
              </div>
            </div>
          </div>

          {/* Orbiting Cards */}
          {orbitingModules.map((module, idx) => {
            const Icon = module.icon;
            const delay = 0.4 + idx * 0.05;
            
            // Elliptical orbit calculation
            const horizontalRadius = 420;
            const verticalRadius = 240;
            const angleRad = (module.angle * Math.PI) / 180;
            const translateX = horizontalRadius * Math.cos(angleRad);
            const translateY = verticalRadius * Math.sin(angleRad);
            
            return (
              <div
                key={idx}
                className="absolute top-1/2 left-1/2 orbit-card"
                style={{
                  width: '280px',
                  transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`,
                  animation: `fadeIn 0.6s ease forwards ${delay}s`,
                  opacity: 0,
                  zIndex: 5
                }}
              >
                <div
                  className="w-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{
                    background: '#fff',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div className="flex flex-col items-center text-center p-4">
                    {/* Icon */}
                    <div
                      className="mb-2.5 rounded-xl flex items-center justify-center"
                      style={{
                        width: '46px',
                        height: '46px',
                        background: `${module.color}12`,
                        border: `1.5px solid ${module.color}30`
                      }}
                    >
                      <Icon
                        style={{
                          width: '22px',
                          height: '22px',
                          color: module.color,
                          strokeWidth: 1.75
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h4
                      className="font-bold tracking-tight mb-1.5"
                      style={{
                        fontSize: '12px',
                        lineHeight: '1.3',
                        color: '#0a0a0a'
                      }}
                    >
                      {module.title}
                    </h4>

                    {/* Full Items List */}
                    <p
                      style={{
                        fontSize: '9px',
                        lineHeight: '1.4',
                        color: '#666666'
                      }}
                    >
                      {module.items}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes hubPulse {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          60% {
            transform: translate(-50%, -50%) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.9;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes lineAppear {
          from {
            opacity: 0;
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
          }
          to {
            opacity: 1;
            stroke-dasharray: 300;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </SlideLayout>
  );
};

export default SlideOutOfTheBox;
