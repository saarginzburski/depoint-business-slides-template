import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/dashboards/GSC Dashboard.png';

const SlideProductGoldStandardDashboard = () => {
  const navigate = useNavigate();

  return (
    <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Product Gold Standard Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/22')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="🔒 Protect Revenue – Consistent Quality → Customer Retention & Sales"
        slideNumber="29"
        totalSlides="31"
        logoSrc={depointLogo}
        componentName="SlideProductGoldStandardDashboard"
        backgroundClass="bg-gradient-to-b from-white via-[#F8FAFB] to-[#F1F5F9]/30"
      >
      <div className="h-full flex flex-col px-12 pb-8" style={{ gap: '16px' }}>
        
        {/* Executive Summary Card - Top, 100% width */}
        <div className="w-full mt-4">
          <div
            className="group relative"
            style={{
              animation: 'floatIn 0.6s ease-out forwards',
              opacity: 0
            }}
          >
            <div
              className="relative overflow-hidden transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(24px)',
                borderRadius: '16px',
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

              {/* Colored accent bar on left - Blue for revenue */}
              <div
                className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                style={{
                  background: 'linear-gradient(180deg, #3b82f6, #3b82f6dd)',
                  boxShadow: '0 0 12px rgba(59, 130, 246, 0.4)'
                }}
              ></div>

              <div className="flex items-center gap-3 p-3 pl-5">
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(59, 130, 246, 0.08)',
                      border: '1px solid rgba(59, 130, 246, 0.15)'
                    }}
                  >
                    <Shield
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{
                        width: '20px',
                        height: '20px',
                        color: '#3b82f6',
                        strokeWidth: 2
                      }}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3
                    className="font-semibold mb-1 tracking-tight"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.3',
                      color: '#1a1a1a'
                    }}
                  >
                    Executive Summary
                  </h3>
                  <p
                    className="font-normal leading-relaxed"
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.5',
                      color: '#6b7280'
                    }}
                  >
                    This dashboard protects <span className="font-semibold text-gray-900">$180,000+ annual revenue</span> per location through quality consistency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Image - Below, 100% width */}
        <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden">
          {/* Subtle vignette/glow underneath - Blue for revenue */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59, 130, 246, 0.04), transparent 70%)'
            }}
          ></div>

          <div className="relative w-full h-full flex items-start justify-center overflow-hidden">
            <img
              src={dashboardImage}
              alt="Product Gold Standard Dashboard showing revenue-protecting quality metrics: 100% nuggets, 97.66% fries, and 98.80% burger quality rates"
              className="w-full h-auto object-contain object-top"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08))',
              }}
            />
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

export default SlideProductGoldStandardDashboard;
