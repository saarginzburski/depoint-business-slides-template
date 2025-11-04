import React from 'react';
import { Eye, RefreshCw, Shield, Coins, Trophy, CheckSquare, DollarSign, Clock, Lock, GraduationCap } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideFranchisorFranchisee = () => {
  const franchisorItems = [
    {
      icon: Eye,
      title: "Total Visibility",
      description: "Monitor every store's compliance in real time — no waiting for audits.",
      color: "#1E73FF"
    },
    {
      icon: RefreshCw,
      title: "Instant Standards Updates",
      description: "Push new operational changes across 1,000+ stores overnight.",
      color: "#1E73FF"
    },
    {
      icon: Shield,
      title: "Audit Replacement",
      description: "Real-time execution data replaces slow, inconsistent compliance audits.",
      color: "#1E73FF"
    },
    {
      icon: Coins,
      title: "Royalty & Ad Fund Compliance",
      description: "Track financial performance alongside operations.",
      color: "#1E73FF"
    },
    {
      icon: Trophy,
      title: "Brand Consistency",
      description: "Enforce Golden Standards across every franchisee location.",
      color: "#1E73FF"
    }
  ];

  const franchiseeItems = [
    {
      icon: CheckSquare,
      title: "Simplified Daily Execution",
      description: "A mobile app that guides staff — no training required.",
      color: "#F59E0B"
    },
    {
      icon: DollarSign,
      title: "Margin Protection",
      description: "Reduce fines, waste, and shrinkage with built-in compliance.",
      color: "#F59E0B"
    },
    {
      icon: Clock,
      title: "Labor Efficiency",
      description: "Compare staffing costs to revenue in real time to optimize shifts.",
      color: "#F59E0B"
    },
    {
      icon: Lock,
      title: "Data Independence",
      description: "Franchisee data remains fully separated from franchisor systems.",
      color: "#F59E0B"
    },
    {
      icon: GraduationCap,
      title: "Staff Retention",
      description: "Micro-learning and guided execution reduce turnover and training time.",
      color: "#F59E0B"
    }
  ];

  return (
      <SlideLayout
        title="One Platform. Two Perspectives. Shared Growth."
        slideNumber="5"
        totalSlides="15"
        logoSrc={depointLogo}
        componentName="SlideFranchisorFranchisee"
        backgroundClass="bg-gradient-to-br from-white via-[#F8FAFB] to-[#F5F7FA]"
        footerTagline="Keeping franchisors happy — without giving franchisees a headache."
      >
      <div className="h-full flex flex-col justify-center pb-6 pt-4">
          
          {/* Main Split Layout - Perfectly Mirrored */}
          <div className="flex-1 flex items-center justify-center relative px-8">
            <div className="grid grid-cols-2 max-w-[1200px] w-full relative" style={{ gap: '48px' }}>
            
            {/* Vertical Divider Line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
              style={{ 
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.12) 15%, rgba(0, 0, 0, 0.12) 85%, transparent 100%)'
              }}
            />

            {/* Franchisor Side - Left */}
            <div 
              className="relative"
              style={{
                animation: 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                opacity: 0
              }}
            >
              <div 
                className="h-full p-8 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Header */}
                <div className="text-center mb-7">
                  <h3 
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      marginBottom: '10px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    For the Franchisor
                  </h3>
                  <div 
                    className="mx-auto"
                    style={{
                      width: '80px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #1E73FF, #60A5FA)',
                      borderRadius: '2px'
                    }}
                  />
                </div>
                
                {/* Benefits List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {franchisorItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-start" style={{ gap: '14px' }}>
                        <div className="flex-shrink-0" style={{ marginTop: '2px' }}>
                          <IconComponent 
                            style={{ 
                              width: '22px', 
                              height: '22px',
                              color: item.color,
                              strokeWidth: 2,
                              opacity: 0.8
                            }} 
                          />
                        </div>
                        <div className="flex-1">
                          <h4 
                            style={{
                              fontSize: '15px',
                              fontWeight: 700,
                              color: '#1a1a1a',
                              marginBottom: '3px',
                              letterSpacing: '-0.01em'
                            }}
                          >
                            {item.title}
                          </h4>
                          <p 
                            style={{
                              fontSize: '13px',
                              lineHeight: '1.4',
                              color: '#555555',
                              fontWeight: 400
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Franchisee Side - Right */}
            <div 
              className="relative"
              style={{
                animation: 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: '0.15s',
                opacity: 0
              }}
            >
              <div 
                className="h-full p-8 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Header */}
                <div className="text-center mb-7">
                  <h3 
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      marginBottom: '10px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    For the Franchisee
                  </h3>
                  <div 
                    className="mx-auto"
                    style={{
                      width: '80px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #F59E0B, #FACC15)',
                      borderRadius: '2px'
                    }}
                  />
                </div>
                
                {/* Benefits List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {franchiseeItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-start" style={{ gap: '14px' }}>
                        <div className="flex-shrink-0" style={{ marginTop: '2px' }}>
                          <IconComponent 
                            style={{ 
                              width: '22px', 
                              height: '22px',
                              color: item.color,
                              strokeWidth: 2,
                              opacity: 0.8
                            }} 
                          />
                        </div>
                        <div className="flex-1">
                          <h4 
                            style={{
                              fontSize: '15px',
                              fontWeight: 700,
                              color: '#1a1a1a',
                              marginBottom: '3px',
                              letterSpacing: '-0.01em'
                            }}
                          >
                            {item.title}
                          </h4>
                          <p 
                            style={{
                              fontSize: '13px',
                              lineHeight: '1.4',
                              color: '#555555',
                              fontWeight: 400
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Quote Box - Elevated */}
          <div 
            className="text-center"
            style={{
              marginTop: '28px',
              animation: 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            <div 
              className="inline-block px-8 py-3 rounded-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)'
              }}
            >
              <p 
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  letterSpacing: '-0.01em'
                }}
              >
                "A single platform that <span style={{ color: '#1E73FF' }}>enforces the brand</span> — and <span style={{ color: '#F59E0B' }}>empowers every operator</span>."
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
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

export default SlideFranchisorFranchisee;