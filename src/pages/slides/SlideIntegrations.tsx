import React from 'react';
import { Zap, DollarSign, Thermometer, Users, Settings, ArrowRight } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogoBlack from '@/assets/Depoint-Logo-black.png';

const SlideIntegrations = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Plug Into Any Platform"
        slideNumber="17"
        totalSlides="31"
        logoSrc={depointLogoBlack}
        hideFooter={true}
      >
        <div className="content-viewport h-full flex flex-col py-8">
          
          {/* Subtitle */}
          <div className="text-center mb-6">
            <p className="text-lg text-neutral-700 max-w-5xl mx-auto leading-relaxed">
              Depoint is designed to integrate with the platforms you already use — POS, ERP, accounting, IoT devices, HR systems, and more.
            </p>
          </div>

          {/* Clean Integration Layout */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto">
              
              {/* Depoint - Top 100% Width */}
              <div className="mb-8">
                <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl py-8 flex items-center justify-center shadow-xl border border-blue-500/20">
                  <img src="/lovable-uploads/96869f4f-a193-4264-973e-1221a0ec5fb9.png" alt="Depoint" className="h-12 object-contain" />
                </div>
              </div>

              {/* Integration Boxes - Shorter Height with Icons Left */}
              <div className="grid grid-cols-5 gap-4">
                
                {/* QuickBooks & ERPs */}
                <div className="bg-white rounded-xl px-4 py-3 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 leading-tight">QuickBooks</p>
                      <p className="text-xs text-gray-500">& ERPs</p>
                    </div>
                  </div>
                </div>

                {/* POS Systems */}
                <div className="bg-white rounded-xl px-4 py-3 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 leading-tight">POS</p>
                      <p className="text-xs text-gray-500">Systems</p>
                    </div>
                  </div>
                </div>

                {/* IoT Devices */}
                <div className="bg-white rounded-xl px-4 py-3 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 leading-tight">IoT</p>
                      <p className="text-xs text-gray-500">Devices</p>
                    </div>
                  </div>
                </div>

                {/* HR & WFM */}
                <div className="bg-white rounded-xl px-4 py-3 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 leading-tight">HR & WFM</p>
                      <p className="text-xs text-gray-500">Platforms</p>
                    </div>
                  </div>
                </div>

                {/* More Integrations */}
                <div className="bg-white rounded-xl px-4 py-3 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 leading-tight">More</p>
                      <p className="text-xs text-gray-500">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Benefits - Clean Grid */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
              <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-white rounded-xl p-5 border border-blue-100 shadow-sm">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-gray-800">Unify finance with frontline data</p>
              </div>
              <div className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-white rounded-xl p-5 border border-green-100 shadow-sm">
                <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-gray-800">Link transactions with execution compliance</p>
              </div>
              <div className="flex items-start gap-4 bg-gradient-to-r from-orange-50 to-white rounded-xl p-5 border border-orange-100 shadow-sm">
                <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-gray-800">Track equipment in real time</p>
              </div>
              <div className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-white rounded-xl p-5 border border-purple-100 shadow-sm">
                <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-gray-800">Connect labor costs to operational results</p>
              </div>
            </div>
          </div>

          {/* Professional CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl px-8 py-4 shadow-lg">
              <p className="text-lg font-semibold text-white">
                "Whatever you use, Depoint makes it actionable."
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideIntegrations;