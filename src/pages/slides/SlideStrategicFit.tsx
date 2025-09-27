import React from 'react';
import { Brain, Database } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideStrategicFit = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="The Ultimate Strategic Asset: Our Data"
        slideNumber="16"
        totalSlides="15"
        logoSrc={depointLogo}
        componentName="SlideStrategicFit"
      >
        <div className="h-full flex flex-col justify-center py-6">
        
        {/* Hero Statement - Compact */}
        <div className="text-center mb-6">
          <div className="bg-blue-600 rounded-xl p-6 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 600 300" fill="none">
                <path d="M0,120 Q150,80 300,120 T600,120" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
                <path d="M0,160 Q200,120 400,160 T600,160" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2"/>
                <path d="M0,200 Q150,160 300,200 T600,200" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 leading-tight">
                An acquirer isn't just buying software; they're buying a unique, proprietary data stream on real-world operational execution—a moat that is impossible to replicate.
              </h2>
              
              {/* Data Value Highlights - Compact */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white/20 rounded-lg p-3 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5" />
                    <span className="text-base font-semibold">AI Training Gold</span>
                  </div>
                  <p className="text-blue-100 text-xs">Millions of real operational tasks provide unmatched training data for enterprise AI models.</p>
                </div>
                
                <div className="bg-white/20 rounded-lg p-3 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5" />
                    <span className="text-base font-semibold">Market Intelligence</span>
                  </div>
                  <p className="text-blue-100 text-xs">Real-time operational benchmarks across industries impossible to get elsewhere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Supporting Points - Compact Grid */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          
          {/* Left - Market Validation */}
          <div className="bg-white rounded-xl border p-4 h-full flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Market Validation</h3>
            <div className="bg-enterprise-green/10 border border-enterprise-green/20 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-800 font-medium">
                High-value M&A (Reflexis $575M, Zenput Series C+) proves the strategic importance of this category.
              </p>
            </div>
            
            {/* M&A Examples - Consistent text-based logos */}
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-1 h-8 flex items-center justify-center min-w-[70px]">
                  <span className="text-xs font-bold text-purple-600">REFLEXIS</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">$575M acquisition</div>
                  <div className="text-xs text-gray-600">by Zebra Technologies</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-1 h-8 flex items-center justify-center min-w-[70px]">
                  <span className="text-xs font-bold text-gray-700">ZENPUT</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Series C+ valuation</div>
                  <div className="text-xs text-gray-600">by Crunchtime</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Ideal Acquirers */}
          <div className="bg-white rounded-xl border p-4 h-full flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Ideal Acquirers</h3>
            <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-800 font-medium">
                Prime strategic fit for SAP, ServiceNow, NCR, Toast.
              </p>
            </div>
            
            {/* Acquirer Logos/Names - Consistent text-based logos */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-1 h-8 flex items-center justify-center min-w-[50px]">
                  <span className="text-xs font-bold text-blue-600">SAP</span>
                </div>
                <div>
                  <div className="font-semibold text-xs text-blue-700">Perfect Fit</div>
                  <div className="text-xs text-blue-600">Enterprise Suite</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg border border-green-200">
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-1 h-8 flex items-center justify-center min-w-[50px]">
                  <span className="text-xs font-bold text-green-600">NOW</span>
                </div>
                <div>
                  <div className="font-semibold text-xs text-green-700">Perfect Fit</div>
                  <div className="text-xs text-green-600">ServiceNow</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-1 h-8 flex items-center justify-center min-w-[50px]">
                  <span className="text-xs font-bold text-gray-700">NCR</span>
                </div>
                <div>
                  <div className="font-semibold text-xs text-gray-700">Strong Fit</div>
                  <div className="text-xs text-gray-600">Platform Play</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg border border-red-200">
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-1 h-8 flex items-center justify-center min-w-[50px]">
                  <span className="text-xs font-bold text-red-600">TOAST</span>
                </div>
                <div>
                  <div className="font-semibold text-xs text-red-700">Perfect Fit</div>
                  <div className="text-xs text-red-600">Enterprise Move</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        </div>
      </SlideLayout>
      
    </div>
  );
};

export default SlideStrategicFit;