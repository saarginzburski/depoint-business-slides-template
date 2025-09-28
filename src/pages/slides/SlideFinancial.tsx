import React from 'react';
import { BarChart3, DollarSign, TrendingUp } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideFinancial = () => {

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Capital-Efficient Growth to $1.26M ARR"
        slideNumber="13"
        totalSlides="31"
        logoSrc={depointLogo}
        componentName="SlideFinancial"
      >
      {/* Two-column narrative layout */}
      <div className="h-full min-h-0 flex gap-6 py-6">
        
        {/* Left Column: Proven Efficiency */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Proven Momentum</h2>
          
          {/* Clean ARR Chart - Hero Visual */}
          <div className="bg-white rounded-xl border p-3 mb-3 flex-1">
            <div className="h-full flex flex-col">
              {/* Chart area - maximize space usage */}
              <div className="flex-1 flex items-end justify-center gap-3 mb-3 mt-1 px-3">
                <div className="flex flex-col items-center flex-1 max-w-[120px]">
                  <div className="w-full bg-gray-300 rounded-t-lg mb-3" style={{height: '180px'}}></div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-800">2023</div>
                    <div className="text-xs text-gray-500 mb-1">Build Phase</div>
                    <div className="text-sm font-bold text-gray-700">$732K</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center flex-1 max-w-[120px]">
                  <div className="w-full bg-gray-400 rounded-t-lg mb-3" style={{height: '220px'}}></div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-800">2024</div>
                    <div className="text-xs text-gray-500 mb-1">Build Phase</div>
                    <div className="text-sm font-bold text-gray-700">$972K</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center flex-1 max-w-[120px]">
                  <div className="w-full bg-depoint-blue rounded-t-lg mb-3" style={{height: '260px'}}></div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-depoint-blue">2025</div>
                    <div className="text-xs text-depoint-blue mb-1">Sep Actual</div>
                    <div className="text-sm font-bold text-depoint-blue">$1.26M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Integrated Break-Even Statement */}
          <div className="flex items-center gap-2 px-2">
            <span className="text-depoint-blue text-sm">✓</span>
            <p className="text-base font-medium text-gray-900">
              Break-Even achieved with a lean, product-focused team.
            </p>
          </div>
        </div>

        {/* Right Column: The Plan for Scale */}
        <div className="flex-1 min-h-0 flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Ask: $5M</h2>
          
          {/* Use of Funds */}
          <div className="bg-white rounded-xl border p-4 flex-1 mb-2 min-h-0 overflow-hidden flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-3 leading-tight">How We'll Invest</h3>
            {/* Evenly distribute 5 items to always fit height */}
            <div className="grid grid-rows-5 gap-2 flex-1 min-h-0">
              {/* Sales/GTM - 36% */}
              <div className="flex flex-col justify-between py-1 min-h-0 overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-depoint-blue text-base">Sales/GTM</span>
                  <div className="text-right leading-tight">
                    <div className="font-semibold text-depoint-blue text-base">$1.8M</div>
                    <div className="text-xs text-gray-600">36%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-depoint-blue h-3 rounded-full" style={{width: '36%'}}></div>
                </div>
                <div className="text-xs text-gray-600 leading-tight">Expand sales team & partners</div>
              </div>
              
              {/* AI/Dev - 24% */}
              <div className="flex flex-col justify-between py-1 min-h-0 overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-pillar-margin text-base">AI/Dev</span>
                  <div className="text-right leading-tight">
                    <div className="font-semibold text-pillar-margin text-base">$1.2M</div>
                    <div className="text-xs text-gray-600">24%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-pillar-margin h-3 rounded-full" style={{width: '24%'}}></div>
                </div>
                <div className="text-xs text-gray-600 leading-tight">Enhance AI & add new modules</div>
              </div>
              
              {/* Partners - 14% */}
              <div className="flex flex-col justify-between py-1 min-h-0 overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-depoint-orange text-base">Partners</span>
                  <div className="text-right leading-tight">
                    <div className="font-semibold text-depoint-orange text-base">$0.7M</div>
                    <div className="text-xs text-gray-600">14%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-depoint-orange h-3 rounded-full" style={{width: '14%'}}></div>
                </div>
                <div className="text-xs text-gray-600 leading-tight">Build integrator program</div>
              </div>
              
              {/* Infrastructure - 12% */}
              <div className="flex flex-col justify-between py-1 min-h-0 overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800 text-base">Infrastructure</span>
                  <div className="text-right leading-tight">
                    <div className="font-semibold text-gray-800 text-base">$0.6M</div>
                    <div className="text-xs text-gray-600">12%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gray-800 h-3 rounded-full" style={{width: '12%'}}></div>
                </div>
                <div className="text-xs text-gray-600 leading-tight">Scale for 10,000+ locations</div>
              </div>
              
              {/* Operations Buffer - 14% */}
              <div className="flex flex-col justify-between py-1 min-h-0 overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-red-600 text-base">Operations Buffer</span>
                  <div className="text-right leading-tight">
                    <div className="font-semibold text-red-600 text-base">$0.7M</div>
                    <div className="text-xs text-gray-600">14%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-600 h-3 rounded-full" style={{width: '14%'}}></div>
                </div>
                <div className="text-xs text-gray-600 leading-tight">12+ months runway</div>
              </div>
            </div>
          </div>
          
          {/* ROI Outcome - Prominent Bottom */}
          <div className="bg-green-600 text-white rounded-xl p-3">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">~4x Return</div>
              <div className="text-xs opacity-90">Projected ROI on GTM Investment within 24 months</div>
            </div>
          </div>
        </div>
      </div>
      </SlideLayout>
      
    </div>
  );
};

export default SlideFinancial;