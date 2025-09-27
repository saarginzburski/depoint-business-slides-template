import React from 'react';
import { Zap, DollarSign, Thermometer, Users, Settings, ArrowRight } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/depoint-logo-white.png';
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
            <p className="text-xl text-neutral-700 max-w-5xl mx-auto leading-relaxed">
              Depoint is designed to integrate with the platforms you already use — POS, ERP, accounting, IoT devices, HR systems, and more.
            </p>
          </div>

          {/* Hub and Spoke Diagram */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative max-w-4xl mx-auto">
              
              {/* Central Hub - Depoint */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <img src={depointLogo} alt="Depoint" className="h-16 object-contain" />
                </div>
              </div>

              {/* Integration Spokes */}
              <div className="relative w-96 h-96">
                
                {/* QuickBooks & ERPs - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 text-center shadow-lg w-32">
                    <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-bold text-blue-800">QuickBooks</p>
                    <p className="text-xs text-blue-600">& ERPs</p>
                  </div>
                  <div className="w-px h-16 bg-gray-300 mx-auto"></div>
                </div>

                {/* POS Systems - Top Right */}
                <div className="absolute top-8 right-0">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center shadow-lg w-32">
                    <Settings className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-bold text-green-800">POS</p>
                    <p className="text-xs text-green-600">Systems</p>
                  </div>
                  <div className="w-12 h-px bg-gray-300 absolute left-0 top-1/2 transform -translate-x-full"></div>
                </div>

                {/* IoT Devices - Bottom Right */}
                <div className="absolute bottom-8 right-0">
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 text-center shadow-lg w-32">
                    <Thermometer className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-bold text-orange-800">IoT</p>
                    <p className="text-xs text-orange-600">Devices</p>
                  </div>
                  <div className="w-12 h-px bg-gray-300 absolute left-0 top-1/2 transform -translate-x-full"></div>
                </div>

                {/* HR & WFM - Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200 text-center shadow-lg w-32">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-bold text-purple-800">HR & WFM</p>
                    <p className="text-xs text-purple-600">Platforms</p>
                  </div>
                  <div className="w-px h-16 bg-gray-300 mx-auto"></div>
                </div>

                {/* More Integrations - Left */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center shadow-lg w-32">
                    <Zap className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-sm font-bold text-gray-800">More</p>
                    <p className="text-xs text-gray-600">Coming Soon</p>
                  </div>
                  <div className="w-12 h-px bg-gray-300 absolute right-0 top-1/2 transform translate-x-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Highlights */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-medium text-neutral-700">Unify finance with frontline data</p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-medium text-neutral-700">Link transactions with execution compliance</p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-medium text-neutral-700">Track equipment in real time</p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-medium text-neutral-700">Connect labor costs to operational results</p>
              </div>
            </div>
          </div>

          {/* Bottom Anchor */}
          <div className="text-center">
            <div className="inline-block bg-primary/10 rounded-lg px-8 py-4 border border-primary/20">
              <p className="text-xl font-bold text-primary">
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