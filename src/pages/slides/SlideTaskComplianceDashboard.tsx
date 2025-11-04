import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/dashboards/Compliance Dashboard.png';

const SlideTaskComplianceDashboard = () => {
  const navigate = useNavigate();

  return (
    <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Task Compliance Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/22')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="⚠️ Reduce Risk – Execution Gaps → Avoided Losses & Improved Safety"
        slideNumber="28"
        totalSlides="31"
        logoSrc={depointLogo}
        componentName="SlideTaskComplianceDashboard"
        backgroundClass="bg-gradient-to-b from-white via-[#F8FAFB] to-[#F1F5F9]/30"
      >
      <div className="h-full relative px-12 pb-8">
        
        {/* Background Image - Positioned on left */}
        <div className="absolute left-0 top-0 bottom-0 w-[75%] flex items-center justify-start -ml-8">
          {/* Subtle vignette/glow underneath */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 35% 50%, rgba(255, 87, 51, 0.06), transparent 70%)'
            }}
          ></div>

          <div className="relative w-full h-[85%]">
            <img
              src={dashboardImage}
              alt="Task Compliance Dashboard showing 90.71% compliance protection with risk mitigation analytics across business units"
              className="w-full h-full object-contain object-left"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08))',
              }}
            />
          </div>
        </div>

        {/* Executive Summary Card - Overlaying on right side */}
        <div className="relative h-full flex items-center justify-end z-10">
          <div className="w-[35%] flex flex-col justify-center">
            
            <div
              className="group relative"
              style={{
                animation: 'floatIn 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <div
                className="relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(24px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
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
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                  style={{
                    background: 'linear-gradient(180deg, #FF5733, #FF5733dd)',
                    boxShadow: '0 0 12px rgba(255, 87, 51, 0.4)'
                  }}
                ></div>

                <div className="flex items-start gap-4 p-6 pl-7">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        background: 'rgba(255, 87, 51, 0.08)',
                        border: '1px solid rgba(255, 87, 51, 0.15)'
                      }}
                    >
                      <AlertTriangle
                        className="transition-transform duration-300 group-hover:scale-110"
                        style={{
                          width: '24px',
                          height: '24px',
                          color: '#FF5733',
                          strokeWidth: 2
                        }}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3
                      className="font-semibold mb-3 tracking-tight"
                      style={{
                        fontSize: '18px',
                        lineHeight: '1.4',
                        color: '#1a1a1a'
                      }}
                    >
                      Executive Summary
                    </h3>
                    <p
                      className="font-normal leading-relaxed"
                      style={{
                        fontSize: '15px',
                        lineHeight: '1.6',
                        color: '#6b7280'
                      }}
                    >
                      This dashboard prevents <span className="font-semibold text-gray-900">$150,000+ in annual risk exposure</span> per location through compliance execution
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Apple-style animations */}
      <style>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
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

export default SlideTaskComplianceDashboard;