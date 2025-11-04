import React from 'react';
import { CheckSquare, Shield, TrendingUp, MessageCircle } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import multiImage from '@/assets/images/Multi.png';

const SlideFieldAssociates = () => {
  const features = [
    {
      icon: CheckSquare,
      title: "Task Management Simplified:",
      description: "Field teams receive real-time tasks, checklists, and updates directly from HQ — no WhatsApp or spreadsheets needed.",
      gradient: "linear-gradient(135deg, #1E73FF, #60A5FA)",
      color: "#1E73FF"
    },
    {
      icon: Shield,
      title: "Smart Compliance Tracking:",
      description: "Every form, inspection, or audit submission syncs instantly, ensuring full traceability and zero manual follow-up.",
      gradient: "linear-gradient(135deg, #22C55E, #A3E635)",
      color: "#22C55E"
    },
    {
      icon: TrendingUp,
      title: "Performance Motivation:",
      description: "Associates track their sales, quality, and engagement goals — turning daily routines into measurable achievements.",
      gradient: "linear-gradient(135deg, #F59E0B, #FACC15)",
      color: "#F59E0B"
    },
    {
      icon: MessageCircle,
      title: "Frictionless Communication:",
      description: "Announcements, photo proofs, and policy updates reach every employee in one platform — no information gaps.",
      gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      color: "#8B5CF6"
    }
  ];

  return (
    <SlideLayout 
      title="Field Associates" 
      subtitle="How It Works"
      slideNumber="16" 
      totalSlides="37" 
      logoSrc={depointLogo} 
      componentName="SlideFieldAssociates"
      backgroundClass="bg-gradient-to-br from-white via-[#F7F9FB] to-[#F5F7FA]"
      footerTagline="Depoint — Empowering the Frontline, One Task at a Time."
    >
      <div className="h-full relative px-12 pb-6 overflow-hidden">
        
        {/* Background Image - Larger, overflowing left */}
        <div 
          className="absolute top-0 bottom-0 flex items-center justify-start pointer-events-none"
          style={{
            left: '-8%',
            width: '85%',
            animation: 'fadeInTilt 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0,
            zIndex: 1
          }}
        >
          {/* Apple-style spotlight effect */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '100%',
              height: '100%',
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30, 115, 255, 0.05), rgba(99, 102, 241, 0.02) 50%, transparent 75%)',
              filter: 'blur(50px)',
              zIndex: 0
            }}
          />
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={multiImage} 
              alt="Depoint Field Associates Mobile Interface" 
              className="object-contain"
              style={{
                width: '130%',
                height: '130%',
                maxWidth: 'none',
                maxHeight: 'none',
                filter: 'drop-shadow(0 20px 50px rgba(0, 0, 0, 0.10)) drop-shadow(0 8px 20px rgba(0, 0, 0, 0.06))'
              }}
            />
          </div>
        </div>

        {/* Content Cards - Right side, overlaying the image */}
        <div className="relative h-full flex items-center justify-end" style={{ zIndex: 2 }}>
          <div className="w-[35%] flex items-center pr-4">
          <div className="w-full flex flex-col justify-center" style={{ gap: '14px' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group"
                  style={{
                    animation: `slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards ${0.4 + index * 0.15}s`,
                    opacity: 0
                  }}
                >
                  <div 
                    className="relative overflow-hidden transition-all duration-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '14px',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(0, 0, 0, 0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(6px) scale(1.01)';
                      e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(0, 0, 0, 0.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(0, 0, 0, 0.02)';
                    }}
                  >
                    {/* Top light reflection - stronger for glass effect */}
                    <div 
                      className="absolute inset-x-0 top-0"
                      style={{
                        height: '40%',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, transparent 100%)',
                        borderRadius: '14px 14px 0 0'
                      }}
                    ></div>
                    
                    <div className="relative flex items-start p-4" style={{ gap: '12px' }}>
                      {/* Gradient Color Dot with Icon */}
                      <div className="flex-shrink-0">
                        <div 
                          className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{
                            background: feature.gradient,
                            boxShadow: `0 2px 8px ${feature.color}25, inset 0 1px 1px rgba(255, 255, 255, 0.3)`
                          }}
                        >
                          {/* Inner light reflection on dot */}
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%)'
                            }}
                          ></div>
                          
                          <Icon 
                            className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" 
                            style={{ 
                              width: '18px', 
                              height: '18px',
                              color: 'white',
                              strokeWidth: 2.5,
                              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                            }} 
                          />
                        </div>
                      </div>

                      {/* Text Content - bolder titles, tighter spacing */}
                      <div className="flex-1">
                        <h3 
                          className="font-bold mb-0.5 tracking-tight"
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.35',
                            color: '#0a0a0a'
                          }}
                        >
                          {feature.title}
                        </h3>
                        <p 
                          className="font-normal leading-relaxed"
                          style={{
                            fontSize: '12px',
                            lineHeight: '1.45',
                            color: '#555555'
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

      </div>

      {/* Cinematic Apple-style animations with tilt effect */}
      <style>{`
        @keyframes fadeInTilt {
          from {
            opacity: 0;
            transform: translateX(-50px) perspective(1000px) rotateY(10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) perspective(1000px) rotateY(0deg);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </SlideLayout>
  );
};

export default SlideFieldAssociates;
