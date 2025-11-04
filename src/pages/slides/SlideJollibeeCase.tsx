import React from 'react';
import { Copy, Globe } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import jollibeeLogo from "@/assets/jollibee-logo-new.png";

const SlideJollibeeCase = () => {
  return (
    <SlideLayout 
      title="Jollibee: Scale & Complexity Made Simple" 
      slideNumber="8" 
      totalSlides="35" 
      logoSrc={depointLogo} 
      componentName="SlideJollibeeCase"
      backgroundClass="bg-gradient-to-br from-white via-[#F8FAFB] to-[#F5F7FA]"
      footerTagline="1,324 locations, 184 bosses, and zero migraines."
    >
      <div className="h-full flex flex-col px-12 pb-6">
          
          {/* Header with Logo and Subtitle - Centered */}
          <div className="text-center pt-3 mb-4">
            <p 
              className="text-neutral-700 max-w-5xl mx-auto"
              style={{ 
                fontSize: '14px',
                lineHeight: '1.5',
                fontWeight: 400
              }}
            >
              With over 1,324 locations, Jollibee needed a system to unify corporate and franchisee operations — without sacrificing independence or compliance.
            </p>
          </div>

          {/* Main Content - 50/50 Split with Perfect Symmetry */}
          <div className="flex-1 flex items-center justify-center relative">
            
            {/* Centered Jollibee Logo - Above Divider */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                background: 'white',
                padding: '12px 20px',
                borderRadius: '50px',
                boxShadow: '0 8px 28px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <img src={jollibeeLogo} alt="Jollibee" style={{ height: '48px' }} />
            </div>

            {/* Vertical Divider Line */}
            <div 
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.12) 20%, rgba(0, 0, 0, 0.12) 80%, transparent)' }}
            />

            {/* Left Side - 50% */}
            <div className="w-1/2 h-full flex items-center justify-center pr-8">
              <div className="w-full flex flex-col justify-center" style={{ gap: '24px' }}>
                
                {/* Scale & Structure Section */}
                <div>
                  <h3 
                    className="text-center mb-3"
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Scale & Structure
                  </h3>
                  
                  <div className="grid grid-cols-3 mb-2" style={{ gap: '12px' }}>
                    {[
                      { value: '1,324', label: 'Total Locations', gradient: 'linear-gradient(180deg, #ef4444, #dc2626)', color: '#ef4444', textColor: '#dc2626' },
                      { value: '430', label: 'Corporate-Owned', gradient: 'linear-gradient(180deg, #3b82f6, #2563eb)', color: '#3b82f6', textColor: '#2563eb' },
                      { value: '894', label: 'Franchise-Operated', gradient: 'linear-gradient(180deg, #10b981, #059669)', color: '#10b981', textColor: '#059669' }
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="group relative overflow-hidden transition-all duration-500 hover:scale-105"
                        style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(20px)',
                          borderRadius: '12px',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                        }}
                      >
                        {/* Left accent bar */}
                        <div 
                          className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                          style={{ 
                            background: item.gradient,
                            boxShadow: `0 0 12px ${item.color}40`
                          }}
                        />
                        
                        <div className="text-center py-4 px-3">
                          <div 
                            style={{
                              fontSize: '28px',
                              fontWeight: 900,
                              color: item.textColor,
                              marginBottom: '4px',
                              lineHeight: 1
                            }}
                          >
                            {item.value}
                          </div>
                          <div 
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#525252',
                              lineHeight: 1.2
                            }}
                          >
                            {item.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#525252' }}>
                      184 franchisees ranging from 2 to 60 stores each
                    </p>
                  </div>
                </div>

                {/* Franchisees Deployment Results Section */}
                <div>
                  <h3 
                    className="text-center mb-3"
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Franchisees Deployment Results
                  </h3>
                  
                  <div className="grid grid-cols-2" style={{ gap: '12px' }}>
                    {[
                      { 
                        value: '95%+', 
                        label: 'First Week Compliance', 
                        sublabel: 'Across all franchisee stores',
                        gradient: 'linear-gradient(180deg, #10b981, #059669)', 
                        color: '#10b981', 
                        textColor: '#059669'
                      },
                      { 
                        value: '3 Weeks', 
                        label: 'Full Onboarding', 
                        sublabel: '184 franchisees, 7,000+ employees',
                        gradient: 'linear-gradient(180deg, #3b82f6, #2563eb)', 
                        color: '#3b82f6', 
                        textColor: '#2563eb'
                      }
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="group relative overflow-hidden transition-all duration-500 hover:scale-105"
                        style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(20px)',
                          borderRadius: '12px',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                        }}
                      >
                        {/* Left accent bar */}
                        <div 
                          className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                          style={{ 
                            background: item.gradient,
                            boxShadow: `0 0 12px ${item.color}40`
                          }}
                        />
                        
                        <div className="text-center py-4 px-3">
                          <div 
                            style={{
                              fontSize: '28px',
                              fontWeight: 900,
                              color: item.textColor,
                              marginBottom: '4px',
                              lineHeight: 1
                            }}
                          >
                            {item.value}
                          </div>
                          <div 
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#525252',
                              lineHeight: 1.2,
                              marginBottom: '2px'
                            }}
                          >
                            {item.label}
                          </div>
                          <div 
                            style={{
                              fontSize: '9px',
                              fontWeight: 500,
                              color: '#737373',
                              lineHeight: 1.2
                            }}
                          >
                            {item.sublabel}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - 50% */}
            <div className="w-1/2 h-full flex items-center justify-center pl-8">
              <div className="w-full flex flex-col justify-center">
                <h3 
                  className="text-center mb-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Duplicating Made Easy
                </h3>
                
                <p 
                  className="text-center mb-4 px-6"
                  style={{
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: '#525252',
                    fontWeight: 400
                  }}
                >
                  Once configured for Jollibee Philippines, the entire system was seamlessly replicated to multiple markets
                </p>
                
                <div className="grid grid-cols-2 mb-3" style={{ gap: '12px' }}>
                  {[
                    { name: 'Jollibee UK', location: 'United Kingdom', gradient: 'linear-gradient(180deg, #3b82f6, #2563eb)', color: '#3b82f6', iconColor: '#3b82f6', textColor: '#1e40af' },
                    { name: 'Jollibee Singapore', location: 'Singapore', gradient: 'linear-gradient(180deg, #a855f7, #9333ea)', color: '#a855f7', iconColor: '#a855f7', textColor: '#7e22ce' },
                    { name: 'Jollibee Brunei', location: 'Brunei', gradient: 'linear-gradient(180deg, #10b981, #059669)', color: '#10b981', iconColor: '#10b981', textColor: '#047857' },
                    { name: 'Greenwich', location: 'Sister Brand', gradient: 'linear-gradient(180deg, #f97316, #ea580c)', color: '#f97316', iconColor: '#f97316', textColor: '#c2410c' }
                  ].map((market, idx) => (
                    <div 
                      key={idx}
                      className="group relative overflow-hidden transition-all duration-500 hover:scale-105"
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      {/* Left accent bar */}
                      <div 
                        className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full"
                        style={{ 
                          background: market.gradient,
                          boxShadow: `0 0 12px ${market.color}40`
                        }}
                      />
                      
                      <div className="text-center py-3 px-3 flex flex-col items-center">
                        <Globe 
                          style={{ 
                            width: '32px',
                            height: '32px',
                            color: market.iconColor,
                            marginBottom: '6px',
                            strokeWidth: 2
                          }} 
                        />
                        <div 
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: market.textColor,
                            marginBottom: '2px',
                            lineHeight: 1.2
                          }}
                        >
                          {market.name}
                        </div>
                        <div 
                          style={{
                            fontSize: '9px',
                            fontWeight: 600,
                            color: '#737373'
                          }}
                        >
                          {market.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom tagline */}
                <div className="text-center">
                  <p 
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#525252',
                      lineHeight: 1.4
                    }}
                  >
                    One-click duplication • Zero reconfiguration • Instant scalability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
  );
};
export default SlideJollibeeCase;