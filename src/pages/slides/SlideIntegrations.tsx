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
        <div className="content-viewport h-full flex flex-col">
          
          {/* Subtitle */}
          <div className="text-center mb-8">
            <p className="text-lg text-neutral-700 max-w-5xl mx-auto leading-relaxed">
              Depoint is designed to integrate with the platforms you already use — POS, ERP, accounting, IoT devices, HR systems, and more.
            </p>
          </div>

          {/* Hub and Spoke Diagram - Professional Design */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-6xl mx-auto h-80">
              
              {/* Central Hub - Depoint */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl border border-blue-500/20">
                    <img src="/lovable-uploads/96869f4f-a193-4264-973e-1221a0ec5fb9.png" alt="Depoint" className="h-10 object-contain" />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-xl scale-110 -z-10"></div>
                </div>
              </div>

              {/* Professional Integration Cards */}
              {/* QuickBooks & ERPs - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-lg w-40 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">QuickBooks</p>
                    <p className="text-xs text-gray-500">& ERPs</p>
                  </div>
                  {/* Connection line */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                </div>
              </div>

              {/* POS Systems - Top Right */}
              <div className="absolute top-8 right-16">
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-lg w-40 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Settings className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">POS</p>
                    <p className="text-xs text-gray-500">Systems</p>
                  </div>
                  {/* Connection line */}
                  <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-20 h-0.5 bg-gradient-to-l from-gray-300 to-transparent"></div>
                </div>
              </div>

              {/* IoT Devices - Bottom Right */}
              <div className="absolute bottom-8 right-16">
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-lg w-40 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Thermometer className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">IoT</p>
                    <p className="text-xs text-gray-500">Devices</p>
                  </div>
                  {/* Connection line */}
                  <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-20 h-0.5 bg-gradient-to-l from-gray-300 to-transparent"></div>
                </div>
              </div>

              {/* HR & WFM - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-lg w-40 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">HR & WFM</p>
                    <p className="text-xs text-gray-500">Platforms</p>
                  </div>
                  {/* Connection line */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-t from-gray-300 to-transparent"></div>
                </div>
              </div>

              {/* More Integrations - Left */}
              <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-lg w-40 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-gray-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">More</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                  {/* Connection line */}
                  <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-20 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
              </div>

              {/* Background grid pattern for subtle texture */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 96, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 96, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}></div>
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