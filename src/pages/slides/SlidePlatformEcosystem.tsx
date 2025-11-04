import React from 'react';
import { Target, BarChart3, Brain, Zap, ChevronRight, RefreshCw, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlidePlatformEcosystem = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="How it work"
        subtitle=""
        slideNumber="9"
        totalSlides="15"
        logoSrc={depointLogo}
        componentName="SlidePlatformEcosystem"
      >
      {/* Redesigned with centered, larger flywheel for maximum visual impact */}
      <div className="h-full py-6 overflow-hidden">
        <div className="grid grid-cols-12 gap-10 h-full items-center">
        
        {/* Left 60% - Top-aligned Large Flywheel (7.5 columns) */}
        <div className="col-span-8 flex flex-col h-full justify-start items-center py-4 min-h-0 pt-12">
          <div className="relative w-full max-w-[34rem] aspect-square">
            
            {/* Expanded Ring Flywheel - Much larger radius for more spacing */}
            <div className="absolute inset-4">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <circle 
                  cx="200" 
                  cy="200" 
                  r="180" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="16"
                  className="opacity-90"
                />
                {/* Additional inner ring for visual depth */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="160" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="2"
                  className="opacity-30"
                />
              </svg>
              
              {/* Enhanced Animated Directional Flow - More arrows */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((rotation, i) => (
                  <ChevronRight 
                    key={i}
                    className="absolute w-6 h-6 text-blue-600 opacity-60" 
                    style={{
                      top: '50%', 
                      left: '50%', 
                      transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-180px)`
                    }} 
                  />
                ))}
              </div>
              
              {/* Pulse circles for dynamic effect */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-blue-200 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-blue-100 rounded-full animate-pulse opacity-10" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Central Hub - Larger and more detailed */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center z-20 border-4 border-white shadow-2xl">
              <div className="text-center text-white">
                <RefreshCw className="w-12 h-12 mx-auto mb-3 animate-spin" style={{animationDuration: '3s'}} />
                <div className="text-lg font-bold leading-tight">Operations</div>
                <div className="text-lg font-bold leading-tight">Intelligence</div>
                <div className="text-lg font-bold leading-tight">Engine</div>
                <div className="text-sm font-medium opacity-90 mt-2">AI-Powered</div>
              </div>
            </div>
            
            {/* Node 01 - Execute (Top) - Positioned further out */}
            <div className="absolute" style={{top: '-16px', left: '50%', transform: 'translateX(-50%)'}}>
              <div className="w-40 h-40 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white border-4 border-white z-10 relative shadow-xl">
                <div className="text-center">
                  <Target className="w-10 h-10 mx-auto mb-1" />
                  <div className="text-lg font-bold">Execute</div>
                  <div className="text-sm opacity-90">Real-time</div>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center text-base font-bold shadow-lg">01</div>
              </div>
            </div>
            
            {/* Node 02 - Measure (Right) - Positioned further out */}
            <div className="absolute" style={{top: '50%', right: '-20px', transform: 'translateY(-50%)'}}>
              <div className="w-40 h-40 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center text-white border-4 border-white z-10 relative shadow-xl">
                <div className="text-center">
                  <BarChart3 className="w-10 h-10 mx-auto mb-1" />
                  <div className="text-lg font-bold">Measure</div>
                  <div className="text-sm opacity-90">100% Coverage</div>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white text-slate-600 rounded-full flex items-center justify-center text-base font-bold shadow-lg">02</div>
              </div>
            </div>
            
            {/* Node 03 - Analyze (Bottom) - Positioned further out */}
            <div className="absolute" style={{bottom: '-16px', left: '50%', transform: 'translateX(-50%)'}}>
              <div className="w-44 h-44 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white border-4 border-white z-10 relative shadow-xl">
                <div className="text-center">
                  <Brain className="w-11 h-11 mx-auto mb-1" />
                  <div className="text-lg font-bold">Analyze</div>
                  <div className="text-sm opacity-90">AI-Powered</div>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white text-orange-600 rounded-full flex items-center justify-center text-base font-bold shadow-lg">03</div>
              </div>
            </div>
            
            {/* Node 04 - Improve (Left) - Positioned further out */}
            <div className="absolute" style={{top: '50%', left: '-20px', transform: 'translateY(-50%)'}}>
              <div className="w-44 h-44 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white border-4 border-white z-10 relative shadow-xl">
                <div className="text-center">
                  <Zap className="w-11 h-11 mx-auto mb-1" />
                  <div className="text-lg font-bold">Improve</div>
                  <div className="text-sm opacity-90">Predictive</div>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center text-base font-bold shadow-lg">04</div>
              </div>
            </div>
            
            {/* Connection lines for better visual flow */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                   refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" opacity="0.6" />
                  </marker>
                </defs>
                <path d="M 200 50 Q 300 200 200 350" stroke="#3b82f6" strokeWidth="3" 
                      fill="none" opacity="0.3" markerEnd="url(#arrowhead)" strokeDasharray="10,5" />
                <path d="M 350 200 Q 200 300 50 200" stroke="#3b82f6" strokeWidth="3" 
                      fill="none" opacity="0.3" markerEnd="url(#arrowhead)" strokeDasharray="10,5" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Right 40% - Enhanced Dense Information Cards (4 columns) */}
        <div className="col-span-4 flex flex-col h-full py-2">
          
          {/* Four Enhanced Dense Step Cards */}
          <div className="flex-1 grid grid-rows-4 gap-3 mb-2">
            
            {/* Execute Card - Enhanced with metrics */}
            <div className="bg-red-50 rounded-xl border-2 border-red-200 p-4 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-red-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-red-600 text-lg mb-1">Execute</h3>
                  <p className="text-gray-700 text-sm leading-tight mb-2">Frontline teams complete millions of tasks, generating operational data.</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">Real-time Capture</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">Mobile-First</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Measure Card - Enhanced with metrics */}
            <div className="bg-slate-50 rounded-xl border-2 border-slate-200 p-4 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-7 h-7 text-slate-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-slate-600 text-lg mb-1">Measure</h3>
                  <p className="text-gray-700 text-sm leading-tight mb-2">Real-time dashboards provide 100% audit coverage across locations.</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full font-medium">100% Coverage</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full font-medium">Live Data</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Analyze Card - Enhanced with metrics */}
            <div className="bg-orange-50 rounded-xl border-2 border-orange-200 p-4 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-7 h-7 text-orange-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-orange-600 text-lg mb-1">Analyze</h3>
                  <p className="text-gray-700 text-sm leading-tight mb-2">AI engine identifies risks and trends impossible for humans to spot.</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">Pattern Recognition</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">Risk Detection</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Improve Card - Enhanced with metrics */}
            <div className="bg-purple-50 rounded-xl border-2 border-purple-200 p-4 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-purple-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-purple-600 text-lg mb-1">Improve</h3>
                  <p className="text-gray-700 text-sm leading-tight mb-2">Insights trigger corrective actions and optimize future execution.</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">Auto-Correction</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">Optimization</span>
                  </div>
                </div>
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