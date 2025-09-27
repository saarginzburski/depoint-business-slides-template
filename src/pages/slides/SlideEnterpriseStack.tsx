import React from 'react';
import { Monitor, Users, Wifi } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideEnterpriseStack = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Depoint Bridges Frontline & ERP"
        slideNumber="18"
        totalSlides="15"
        logoSrc={depointLogo}
        componentName="SlideEnterpriseStack"
      >
        <div className="h-full flex flex-col justify-center items-center py-6 max-w-6xl mx-auto">
        
        {/* Horizontal Bridge Diagram */}
        <div className="flex items-center justify-center gap-20 w-full mb-12">
          
          {/* Left Section: Frontline Systems */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <Monitor className="w-8 h-8 text-slate-400 stroke-1 mb-2" />
              <span className="text-sm text-slate-400">POS</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-slate-400 stroke-1 mb-2" />
              <span className="text-sm text-slate-400">WFM</span>
            </div>
            <div className="flex flex-col items-center">
              <Wifi className="w-8 h-8 text-slate-400 stroke-1 mb-2" />
              <span className="text-sm text-slate-400">IoT</span>
            </div>
          </div>

          {/* Arrow Left to Middle - Clean, flat, light gray */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-2 whitespace-nowrap">Frontline Data Capture</span>
            <div className="w-20 h-0.5 bg-gray-300 relative">
              <div className="absolute right-0 top-[-3px] w-0 h-0 border-l-[6px] border-l-gray-300 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
            </div>
          </div>

          {/* Center: Depoint Hero Element - Larger and balanced */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white px-16 py-12 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold text-center mb-4">Depoint</h2>
              <div className="text-base text-blue-100 text-center leading-relaxed">
                Mobile-First Usability • Real-Time Visibility • Predictive Intelligence
              </div>
            </div>
          </div>

          {/* Arrow Middle to Right - Clean, flat, light gray */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-2 whitespace-nowrap">ERP Enriched in Real Time</span>
            <div className="w-20 h-0.5 bg-gray-300 relative">
              <div className="absolute right-0 top-[-3px] w-0 h-0 border-l-[6px] border-l-gray-300 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
            </div>
          </div>

          {/* Right Section: ERP Systems - Text-based logos */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 h-10 flex items-center justify-center min-w-[80px]">
              <span className="text-sm font-bold text-blue-600">SAP</span>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 h-10 flex items-center justify-center min-w-[80px]">
              <span className="text-sm font-bold text-orange-600">NetSuite</span>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 h-10 flex items-center justify-center min-w-[80px]">
              <span className="text-sm font-bold text-green-600">D365</span>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 h-10 flex items-center justify-center min-w-[80px]">
              <span className="text-sm font-bold text-purple-600">Acumatica</span>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 h-10 flex items-center justify-center min-w-[80px]">
              <span className="text-sm font-bold text-gray-600">Infor</span>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-2xl text-slate-900 font-bold mb-2">
            Depoint upgrades ERP from system of record to system of action.
          </p>
          <p className="text-sm text-slate-400">
            Puts your frontline at the front of your enterprise.
          </p>
        </div>
        </div>
      </SlideLayout>
      
    </div>
  );
};

export default SlideEnterpriseStack;