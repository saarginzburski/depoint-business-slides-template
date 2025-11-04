import React from 'react';
import { Brain, DollarSign, AlertTriangle, Shield, TrendingUp, ChevronRight } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

interface SlideDashboardIntroProps {
  onNavigateToSlide?: (componentId: string) => void;
}

const SlideDashboardIntro: React.FC<SlideDashboardIntroProps> = ({ onNavigateToSlide }) => {

  const dashboardCategories = [
    {
      title: "Protect Margin",
      subtitle: "Control costs & eliminate waste",
      emoji: "💰",
      accentColor: "#22c55e",
      accentGradient: "linear-gradient(135deg, #22c55e, #16a34a)",
      bgGradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.03), rgba(22, 163, 74, 0.02))",
      icon: DollarSign,
      dashboards: [
        { name: "Oil Monitoring", componentId: "SlideOilMonitoringDashboard" },
        { name: "Issues Dashboard", componentId: "SlideIssuesDashboard" }
      ]
    },
    {
      title: "Reduce Risk",
      subtitle: "Prevent failures & avoid penalties",
      emoji: "⚠️",
      accentColor: "#f97316",
      accentGradient: "linear-gradient(135deg, #f97316, #ea580c)",
      bgGradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.03), rgba(234, 88, 12, 0.02))",
      icon: AlertTriangle,
      dashboards: [
        { name: "Equipment Monitoring", componentId: "SlideEquipmentMonitoringDashboard" },
        { name: "Audit Report", componentId: "SlideAuditReportDashboard" },
        { name: "Task Compliance", componentId: "SlideTaskComplianceDashboard" },
        { name: "Food Safety", componentId: "SlideFoodSafetyDashboard" }
      ]
    },
    {
      title: "Protect Revenue",
      subtitle: "Safeguard sales with consistent quality",
      emoji: "🔒",
      accentColor: "#3b82f6",
      accentGradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
      bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.03), rgba(37, 99, 235, 0.02))",
      icon: Shield,
      dashboards: [
        { name: "Product Gold Standard", componentId: "SlideProductGoldStandardDashboard" },
        { name: "Cleanliness & Condition", componentId: "SlideCleanlinessConditionDashboard" }
      ]
    },
    {
      title: "Accelerate Growth",
      subtitle: "Drive revenue through execution speed & insights",
      emoji: "📈",
      accentColor: "#8b5cf6",
      accentGradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(124, 58, 237, 0.02))",
      icon: TrendingUp,
      dashboards: [
        { name: "Speed of Service", componentId: "SlideSpeedOfServiceDashboard" },
        { name: "Users Engagement", componentId: "SlideUsersEngagementDashboard" },
        { name: "Sales Management", componentId: "SlideSalesManagementDashboard" }
      ]
    }
  ];

  const handleDashboardClick = (componentId: string) => {
    if (onNavigateToSlide) {
      onNavigateToSlide(componentId);
    }
  };

  return (
    <SlideLayout
        title="The Intelligence Layer: Why Dashboards Matter"
        slideNumber="20"
        totalSlides="31"
        logoSrc={depointLogo}
        componentName="SlideDashboardIntro"
        backgroundClass="bg-gradient-to-b from-white via-[#F8FAFB] to-[#F1F5F9]/30"
      >
      <div className="h-full flex flex-col px-10 pb-6" style={{ gap: '20px' }}>
        
        {/* Hero Message Card */}
        <div className="mt-3 flex-shrink-0">
          <div
            className="group relative"
            style={{
              animation: 'floatIn 0.5s ease-out forwards',
              opacity: 0
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                borderRadius: '20px',
                boxShadow: '0 12px 40px rgba(30, 64, 175, 0.25), 0 4px 12px rgba(30, 64, 175, 0.15)',
              }}
            >
              {/* Top light reflection */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)'
                }}
              ></div>

              <div className="flex items-center gap-5 px-8 py-5">
                {/* Icon Container */}
                <div
                  className="flex-shrink-0"
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Brain
                    style={{
                      width: '28px',
                      height: '28px',
                      color: 'white',
                      strokeWidth: 2
                    }}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h2
                    className="font-bold tracking-tight mb-2"
                    style={{
                      fontSize: '22px',
                      lineHeight: '1.2',
                      color: 'white'
                    }}
                  >
                    Dashboards are not features — they prove the unmatched depth of <span style={{ color: '#93c5fd' }}>Depoint's intelligence engine</span>
                  </h2>
                  <p
                    className="font-medium"
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.4',
                      color: 'rgba(255, 255, 255, 0.85)'
                    }}
                  >
                    Each dashboard represents millions of data points transformed into strategic insight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-4 flex-1 min-h-0" style={{ gap: '16px' }}>
          {dashboardCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className="group relative flex flex-col"
                style={{
                  animation: `floatIn 0.6s ease-out ${0.1 + categoryIndex * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div
                  className="relative overflow-hidden h-full flex flex-col"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(24px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Top light reflection */}
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent)'
                    }}
                  ></div>

                  {/* Colored accent bar on left */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
                    style={{
                      background: category.accentGradient,
                      boxShadow: `0 0 16px ${category.accentColor}40`
                    }}
                  ></div>

                  {/* Category Header */}
                  <div className="px-5 pt-5 pb-4" style={{ background: category.bgGradient }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          background: `${category.accentColor}10`,
                          border: `1.5px solid ${category.accentColor}20`,
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComponent
                          style={{
                            width: '22px',
                            height: '22px',
                            color: category.accentColor,
                            strokeWidth: 2.5
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span style={{ fontSize: '18px' }}>{category.emoji}</span>
                          <h3
                            className="font-bold tracking-tight"
                            style={{
                              fontSize: '16px',
                              lineHeight: '1.2',
                              color: '#1a1a1a'
                            }}
                          >
                            {category.title}
                          </h3>
                        </div>
                        <p
                          className="font-medium"
                          style={{
                            fontSize: '11px',
                            lineHeight: '1.3',
                            color: '#6b7280'
                          }}
                        >
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Buttons */}
                  <div className="flex-1 px-4 py-3" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {category.dashboards.map((dashboard, dashIndex) => (
                      <button
                        key={dashIndex}
                        onClick={() => handleDashboardClick(dashboard.componentId)}
                        disabled={!onNavigateToSlide}
                        className="relative overflow-hidden text-left transition-all duration-300"
                        style={{
                          background: onNavigateToSlide ? category.accentGradient : `${category.accentColor}80`,
                          borderRadius: '12px',
                          padding: '12px 14px',
                          border: 'none',
                          cursor: onNavigateToSlide ? 'pointer' : 'default',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                          transform: 'translateY(0)',
                        }}
                        onMouseEnter={(e) => {
                          if (onNavigateToSlide) {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = `0 6px 20px ${category.accentColor}40`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (onNavigateToSlide) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                          }
                        }}
                      >
                        {/* Button light reflection */}
                        <div
                          className="absolute inset-x-0 top-0 h-px"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
                          }}
                        ></div>

                        <div className="flex items-center justify-between relative z-10">
                          <span
                            className="font-semibold"
                            style={{
                              fontSize: '13px',
                              lineHeight: '1.3',
                              color: 'white'
                            }}
                          >
                            {dashboard.name}
                          </span>
                          <ChevronRight
                            style={{
                              width: '16px',
                              height: '16px',
                              color: 'white',
                              strokeWidth: 2.5,
                              transition: 'transform 0.2s ease'
                            }}
                            className="dashboard-chevron"
                          />
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Stats Footer */}
                  <div
                    className="px-5 py-3 mt-auto"
                    style={{
                      borderTop: '1px solid rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-semibold"
                        style={{
                          fontSize: '10px',
                          color: '#9ca3af',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}
                      >
                        ⚡ Live
                      </span>
                      <span
                        className="font-semibold"
                        style={{
                          fontSize: '10px',
                          color: '#9ca3af',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}
                      >
                        Real-time
                      </span>
                    </div>
                  </div>
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
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        button:hover .dashboard-chevron {
          transform: translateX(3px);
        }
      `}</style>
      </SlideLayout>
  );
};

export default SlideDashboardIntro;
