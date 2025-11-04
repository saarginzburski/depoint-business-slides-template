import React from 'react';
import { Copy, Globe } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import jollibeeLogo from "@/assets/jollibee-logo-new.png";

const SlideJollibeeCase = () => {
  return (
    <SlideLayout title="Jollibee: Scale & Complexity Made Simple" slideNumber="8" totalSlides="35" logoSrc={depointLogo} componentName="SlideJollibeeCase">
      <div className="content-viewport h-full flex flex-col justify-center px-12 pb-8">
          
          {/* Header with Logo - Compact */}
          <div className="text-center mb-5">
            <img src={jollibeeLogo} alt="Jollibee" className="h-12 mx-auto mb-2" />
            <p className="text-sm text-neutral-700 max-w-5xl mx-auto leading-tight">
              With over 1,324 locations, Jollibee needed a system to unify corporate and franchisee operations — without sacrificing independence or compliance.
            </p>
          </div>

          {/* Two Column Layout - 2/3 left, 1/3 right */}
          <div className="grid grid-cols-3 gap-6 flex-1 items-stretch" style={{ gap: '16px' }}>
            
            {/* Left Column - 2/3 width */}
            <div className="col-span-2 flex flex-col justify-start pr-6 border-r-2 border-neutral-300">
              {/* Scale & Structure */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-neutral-800 mb-3 text-center">Scale & Structure</h3>
                <div className="grid grid-cols-3" style={{ gap: '12px' }}>
                  {/* Total Locations */}
                  <div 
                    className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(24px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <div 
                      className="absolute inset-x-0 top-0 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                    ></div>
                    <div 
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                      style={{ background: 'linear-gradient(180deg, #ef4444, #dc2626)', boxShadow: '0 0 10px rgba(239, 68, 68, 0.35)' }}
                    ></div>
                    <div className="text-center p-5 flex flex-col items-center justify-center min-h-[100px]">
                      <div className="text-3xl font-black text-red-600 mb-1">1,324</div>
                      <div className="text-xs font-semibold text-neutral-700">Total Locations</div>
                    </div>
                  </div>

                  {/* Corporate-Owned */}
                  <div 
                    className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(24px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <div 
                      className="absolute inset-x-0 top-0 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                    ></div>
                    <div 
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                      style={{ background: 'linear-gradient(180deg, #3b82f6, #2563eb)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.35)' }}
                    ></div>
                    <div className="text-center p-5 flex flex-col items-center justify-center min-h-[100px]">
                      <div className="text-3xl font-black text-blue-600 mb-1">430</div>
                      <div className="text-xs font-semibold text-neutral-700">Corporate-Owned</div>
                    </div>
                  </div>

                  {/* Franchise-Operated */}
                  <div 
                    className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(24px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <div 
                      className="absolute inset-x-0 top-0 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                    ></div>
                    <div 
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                      style={{ background: 'linear-gradient(180deg, #10b981, #059669)', boxShadow: '0 0 10px rgba(16, 185, 129, 0.35)' }}
                    ></div>
                    <div className="text-center p-5 flex flex-col items-center justify-center min-h-[100px]">
                      <div className="text-3xl font-black text-green-600 mb-1">894</div>
                      <div className="text-xs font-semibold text-neutral-700">Franchise-Operated</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-sm font-bold text-neutral-700">184 franchisees ranging from 2 to 60 stores each</span>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-bold text-neutral-800 mb-3 text-center">Franchisees Deployment Results</h3>
                <div className="grid grid-cols-2" style={{ gap: '12px' }}>
                  {/* 95%+ First Week Compliance */}
                  <div 
                    className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(24px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <div 
                      className="absolute inset-x-0 top-0 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                    ></div>
                    <div 
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                      style={{ background: 'linear-gradient(180deg, #10b981, #059669)', boxShadow: '0 0 10px rgba(16, 185, 129, 0.35)' }}
                    ></div>
                    <div className="text-center p-5 flex flex-col items-center justify-center min-h-[100px]">
                      <div className="text-3xl font-black text-green-600 mb-1">95%+</div>
                      <div className="text-xs font-semibold text-neutral-700 mb-1">First Week Compliance</div>
                      <div className="text-[10px] text-neutral-600">Across all franchisee stores</div>
                    </div>
                  </div>

                  {/* 3 Weeks Full Onboarding */}
                  <div 
                    className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(24px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <div 
                      className="absolute inset-x-0 top-0 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                    ></div>
                    <div 
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                      style={{ background: 'linear-gradient(180deg, #3b82f6, #2563eb)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.35)' }}
                    ></div>
                    <div className="text-center p-5 flex flex-col items-center justify-center min-h-[100px]">
                      <div className="text-3xl font-black text-blue-600 mb-1">3 Weeks</div>
                      <div className="text-xs font-semibold text-neutral-700 mb-1">Full Onboarding</div>
                      <div className="text-[10px] text-neutral-600">184 franchisees, 7,000+ employees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 1/3 width - Duplicating Made Easy */}
            <div className="col-span-1 flex flex-col justify-center h-full pl-2">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Copy className="w-5 h-5 text-jollibee-red" />
                <h3 className="text-lg font-bold text-neutral-800">Duplicating Made Easy</h3>
              </div>
              
              <p className="text-xs text-neutral-600 text-center mb-4 leading-tight">
                Once configured for Jollibee Philippines, the entire system was seamlessly replicated to multiple markets
              </p>
              
              <div className="grid grid-cols-2 mb-4" style={{ gap: '10px' }}>
                {/* Jollibee UK */}
                <div 
                  className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(24px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <div 
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                  ></div>
                  <div 
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                    style={{ background: 'linear-gradient(180deg, #3b82f6, #2563eb)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.35)' }}
                  ></div>
                  <div className="flex flex-col items-center justify-center text-center p-4 min-h-[90px]">
                    <Globe className="w-8 h-8 text-blue-600 mb-1.5" />
                    <div className="text-xs font-bold text-blue-900">Jollibee UK</div>
                    <div className="text-[9px] text-blue-700 mt-0.5 font-medium">United Kingdom</div>
                  </div>
                </div>

                {/* Jollibee Singapore */}
                <div 
                  className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(24px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <div 
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                  ></div>
                  <div 
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                    style={{ background: 'linear-gradient(180deg, #a855f7, #9333ea)', boxShadow: '0 0 10px rgba(168, 85, 247, 0.35)' }}
                  ></div>
                  <div className="flex flex-col items-center justify-center text-center p-4 min-h-[90px]">
                    <Globe className="w-8 h-8 text-purple-600 mb-1.5" />
                    <div className="text-xs font-bold text-purple-900">Jollibee Singapore</div>
                    <div className="text-[9px] text-purple-700 mt-0.5 font-medium">Singapore</div>
                  </div>
                </div>

                {/* Jollibee Brunei */}
                <div 
                  className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(24px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <div 
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                  ></div>
                  <div 
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                    style={{ background: 'linear-gradient(180deg, #10b981, #059669)', boxShadow: '0 0 10px rgba(16, 185, 129, 0.35)' }}
                  ></div>
                  <div className="flex flex-col items-center justify-center text-center p-4 min-h-[90px]">
                    <Globe className="w-8 h-8 text-green-600 mb-1.5" />
                    <div className="text-xs font-bold text-green-900">Jollibee Brunei</div>
                    <div className="text-[9px] text-green-700 mt-0.5 font-medium">Brunei</div>
                  </div>
                </div>

                {/* Greenwich */}
                <div 
                  className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(24px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <div 
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)' }}
                  ></div>
                  <div 
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                    style={{ background: 'linear-gradient(180deg, #f97316, #ea580c)', boxShadow: '0 0 10px rgba(249, 115, 22, 0.35)' }}
                  ></div>
                  <div className="flex flex-col items-center justify-center text-center p-4 min-h-[90px]">
                    <Globe className="w-8 h-8 text-orange-600 mb-1.5" />
                    <div className="text-xs font-bold text-orange-900">Greenwich</div>
                    <div className="text-[9px] text-orange-700 mt-0.5 font-medium">Sister Brand</div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center">
                <div className="inline-block bg-jollibee-red/10 rounded-lg px-3 py-1.5 border border-jollibee-red/20">
                  <p className="text-[10px] font-bold text-jollibee-red leading-tight">
                    One-click duplication • Zero reconfiguration • Instant scalability
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-2">
            <div className="inline-block bg-jollibee-red/10 rounded-lg px-5 py-1.5 border border-jollibee-red/20">
              <p className="text-sm font-bold text-jollibee-red">
                "From store-level shifts to enterprise-wide strategy — all in one platform."
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
  );
};
export default SlideJollibeeCase;