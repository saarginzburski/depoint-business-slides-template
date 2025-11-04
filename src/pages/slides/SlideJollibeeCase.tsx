import React from 'react';
import { Copy, Globe } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import jollibeeLogo from "@/assets/jollibee-logo-new.png";

const SlideJollibeeCase = () => {
  return (
    <SlideLayout title="Jollibee: Scale & Complexity Made Simple" slideNumber="8" totalSlides="35" logoSrc={depointLogo} componentName="SlideJollibeeCase">
      <div className="content-viewport h-full flex flex-col px-8 pb-4">
          
          {/* Header with Logo - Compact */}
          <div className="text-center mb-4">
            <img src={jollibeeLogo} alt="Jollibee" className="h-12 mx-auto mb-2" />
            <p className="text-base text-neutral-700 max-w-5xl mx-auto leading-tight">
              With over 1,324 locations, Jollibee needed a system to unify corporate and franchisee operations — without sacrificing independence or compliance.
            </p>
          </div>

          {/* Two Column Layout - 2/3 left, 1/3 right */}
          <div className="grid grid-cols-3 gap-6 flex-1 items-stretch">
            
            {/* Left Column - 2/3 width */}
            <div className="col-span-2 flex flex-col justify-start pr-6 border-r-2 border-neutral-300">
              {/* Scale & Structure */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">Scale & Structure</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center bg-red-50 rounded-xl p-8 border-2 border-red-200 flex flex-col items-center justify-center min-h-[140px]">
                    <div className="text-4xl font-black text-jollibee-red mb-2">1,324</div>
                    <div className="text-sm font-semibold text-neutral-700">Total Locations</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-xl p-8 border-2 border-blue-200 flex flex-col items-center justify-center min-h-[140px]">
                    <div className="text-4xl font-black text-blue-600 mb-2">430</div>
                    <div className="text-sm font-semibold text-neutral-700">Corporate-Owned</div>
                  </div>
                  <div className="text-center bg-green-50 rounded-xl p-8 border-2 border-green-200 flex flex-col items-center justify-center min-h-[140px]">
                    <div className="text-4xl font-black text-green-600 mb-2">894</div>
                    <div className="text-sm font-semibold text-neutral-700">Franchise-Operated</div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <span className="text-base font-bold text-neutral-700">184 franchisees ranging from 2 to 60 stores each</span>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">Franchisees Deployment Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 text-center flex flex-col items-center justify-center min-h-[140px]">
                    <div className="text-4xl font-black text-green-600 mb-2">95%+</div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">First Week Compliance</div>
                    <div className="text-xs text-neutral-600">Across all franchisee stores</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 text-center flex flex-col items-center justify-center min-h-[140px]">
                    <div className="text-4xl font-black text-blue-600 mb-2">3 Weeks</div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">Full Onboarding</div>
                    <div className="text-xs text-neutral-600">184 franchisees, 7,000+ employees</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 1/3 width - Duplicating Made Easy */}
            <div className="col-span-1 flex flex-col justify-center h-full pl-2">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Copy className="w-6 h-6 text-jollibee-red" />
                <h3 className="text-xl font-bold text-neutral-800">Duplicating Made Easy</h3>
              </div>
              
              <p className="text-sm text-neutral-600 text-center mb-5 leading-tight">
                Once configured for Jollibee Philippines, the entire system was seamlessly replicated to multiple markets
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-5">
                {/* Jollibee UK */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-2 border-blue-300 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow min-h-[120px]">
                  <Globe className="w-10 h-10 text-blue-600 mb-2" />
                  <div className="text-sm font-bold text-blue-900">Jollibee UK</div>
                  <div className="text-[10px] text-blue-700 mt-1 font-medium">United Kingdom</div>
                </div>

                {/* Jollibee Singapore */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-2 border-purple-300 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow min-h-[120px]">
                  <Globe className="w-10 h-10 text-purple-600 mb-2" />
                  <div className="text-sm font-bold text-purple-900">Jollibee Singapore</div>
                  <div className="text-[10px] text-purple-700 mt-1 font-medium">Singapore</div>
                </div>

                {/* Jollibee Brunei */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-2 border-green-300 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow min-h-[120px]">
                  <Globe className="w-10 h-10 text-green-600 mb-2" />
                  <div className="text-sm font-bold text-green-900">Jollibee Brunei</div>
                  <div className="text-[10px] text-green-700 mt-1 font-medium">Brunei</div>
                </div>

                {/* Greenwich */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-2 border-orange-300 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow min-h-[120px]">
                  <Globe className="w-10 h-10 text-orange-600 mb-2" />
                  <div className="text-sm font-bold text-orange-900">Greenwich</div>
                  <div className="text-[10px] text-orange-700 mt-1 font-medium">Sister Brand</div>
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center">
                <div className="inline-block bg-jollibee-red/10 rounded-lg px-4 py-2 border border-jollibee-red/20">
                  <p className="text-xs font-bold text-jollibee-red leading-tight">
                    One-click duplication • Zero reconfiguration • Instant scalability
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-3">
            <div className="inline-block bg-jollibee-red/10 rounded-lg px-6 py-2 border border-jollibee-red/20">
              <p className="text-base font-bold text-jollibee-red">
                "From store-level shifts to enterprise-wide strategy — all in one platform."
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
  );
};
export default SlideJollibeeCase;