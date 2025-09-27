import React from 'react';
import { Target, BarChart3, Brain, Zap, ChevronRight, RefreshCw, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlidePlatformEcosystem = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="The Data Flywheel — Built on Proprietary IP"
        subtitle=""
        slideNumber="9"
        totalSlides="15"
        logoSrc={depointLogo}
        componentName="SlidePlatformEcosystem"
      >
      {/* Redesigned with modern, dynamic flywheel and key statement */}
      <div className="h-full py-6 overflow-hidden">
        <div className="grid grid-cols-12 gap-6 h-full items-center">
        
        {/* Left 55% - Enhanced Flywheel Graphic (7 columns) */}
        <div className="col-span-7 flex flex-col h-full justify-between items-center gap-3 py-1 min-h-0">
          <div className="relative w-full max-w-[22rem] aspect-square">
            
            {/* Enhanced Ring Flywheel - Solid stroke */}
            <div className="absolute inset-8">
              <svg className="w-full h-full" viewBox="0 0 320 320">
                <circle 
                  cx="160" 
                  cy="160" 
                  r="140" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="12"
                  className="opacity-90 drop-shadow-lg"
                />
              </svg>
              
              {/* Animated Directional Flow */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s'}}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, i) => (
                  <ChevronRight 
                    key={i}
                    className="absolute w-5 h-5 text-blue-600 opacity-70" 
                    style={{
                      top: '50%', 
                      left: '50%', 
                      transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-140px)`
                    }} 
                  />
                ))}
              </div>
            </div>
            
            {/* Central Hub - Operations Intelligence Engine */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl z-20 border-4 border-white">
              <div className="text-center text-white">
                <RefreshCw className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-bold leading-tight">Operations</div>
                <div className="text-sm font-bold leading-tight">Intelligence</div>
                <div className="text-sm font-bold leading-tight">Engine</div>
              </div>
            </div>
            
            {/* Node 01 - Execute (Top) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white z-10">
              <div className="text-center relative">
                <Target className="w-7 h-7 mx-auto mb-1" />
                <div className="text-sm font-bold">Execute</div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center text-xs font-bold shadow-md">01</div>
              </div>
            </div>
            
            {/* Node 02 - Measure (Right) */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white z-10">
              <div className="text-center relative">
                <BarChart3 className="w-7 h-7 mx-auto mb-1" />
                <div className="text-sm font-bold">Measure</div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white text-slate-600 rounded-full flex items-center justify-center text-xs font-bold shadow-md">02</div>
              </div>
            </div>
            
            {/* Node 03 - Analyze (Bottom) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white z-10">
              <div className="text-center relative">
                <Brain className="w-7 h-7 mx-auto mb-1" />
                <div className="text-sm font-bold">Analyze</div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white text-orange-600 rounded-full flex items-center justify-center text-xs font-bold shadow-md">03</div>
              </div>
            </div>
            
            {/* Node 04 - Improve (Left) */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-28 h-28 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white z-10">
              <div className="text-center relative">
                <Zap className="w-7 h-7 mx-auto mb-1" />
                <div className="text-sm font-bold">Improve</div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs font-bold shadow-md">04</div>
              </div>
            </div>
          </div>
          
          {/* Proprietary IP Statement */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 text-center max-w-lg mx-auto">
            <div className="text-orange-900 font-bold text-base leading-tight mb-2">
              "Depoint doesn't just analyze data. It operationalizes it."
            </div>
            <div className="text-orange-700 text-sm font-medium">
              Unlike BI platforms, our IP is rooted in industry execution intelligence.
            </div>
          </div>
        </div>
        
        {/* Right 45% - Enhanced Step Cards (5 columns) */}
        <div className="col-span-5 flex flex-col h-full py-1">
          
          {/* Four Enhanced Step Cards */}
          <div className="flex-1 grid grid-rows-4 gap-2 mb-2">
            
            {/* Execute Card */}
            <div className="bg-white rounded-xl border-2 border-red-100 shadow-lg p-3 flex items-center gap-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-red-600 text-lg mb-2">Execute</h3>
                <p className="text-gray-700 text-sm leading-tight">Frontline teams complete millions of tasks, generating operational data.</p>
              </div>
            </div>
            
            {/* Measure Card */}
            <div className="bg-white rounded-xl border-2 border-slate-100 shadow-lg p-3 flex items-center gap-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-slate-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-slate-600 text-lg mb-2">Measure</h3>
                <p className="text-gray-700 text-sm leading-tight">Real-time dashboards provide 100% audit coverage across locations.</p>
              </div>
            </div>
            
            {/* Analyze Card */}
            <div className="bg-white rounded-xl border-2 border-orange-100 shadow-lg p-3 flex items-center gap-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-orange-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-orange-600 text-lg mb-2">Analyze</h3>
                <p className="text-gray-700 text-sm leading-tight">AI engine identifies risks and trends impossible for humans to spot.</p>
              </div>
            </div>
            
            {/* Improve Card */}
            <div className="bg-white rounded-xl border-2 border-purple-100 shadow-lg p-3 flex items-center gap-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-purple-600 text-lg mb-2">Improve</h3>
                <p className="text-gray-700 text-sm leading-tight">Insights trigger corrective actions and optimize future execution.</p>
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

export default SlidePlatformEcosystem;