import React from 'react';
import { Target, BarChart3, Brain, Zap, ChevronRight, RefreshCw, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlidePlatformEcosystem = () => {
  return (
    <SlideLayout
        title="How it work"
        subtitle=""
        slideNumber="9"
        totalSlides="15"
        logoSrc={depointLogo}
        componentName="SlidePlatformEcosystem"
      >
      {/* Redesigned with centered, larger flywheel for maximum visual impact */}
      <div className="h-full pb-6 overflow-hidden">
        <div className="grid grid-cols-12 gap-10 h-full items-center">
        
        {/* Left 60% - Centered Large Flywheel (7.5 columns) */}
        <div className="col-span-8 flex flex-col h-full justify-center items-center min-h-0">
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
        <div className="col-span-4 flex flex-col h-full justify-center">
          
          {/* Four Enhanced Dense Step Cards */}
          <div className="flex flex-col" style={{ gap: '12px' }}>
            
            {/* Execute Card - Enhanced with metrics */}
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
              {/* Top light reflection */}
              <div 
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
                }}
              ></div>
              
              {/* Colored accent bar on left */}
              <div 
                className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                style={{
                  background: 'linear-gradient(180deg, #ef4444, #dc2626)',
                  boxShadow: '0 0 10px rgba(239, 68, 68, 0.35)'
                }}
              ></div>
              
              <div className="flex items-start gap-3 p-3 pl-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(239, 68, 68, 0.06)',
                      border: '1px solid rgba(239, 68, 68, 0.15)'
                    }}
                  >
                    <Target 
                      className="transition-transform duration-300 group-hover:scale-110" 
                      style={{ width: '18px', height: '18px', color: '#ef4444', strokeWidth: 2 }} 
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="font-semibold mb-1 tracking-tight"
                    style={{ fontSize: '13px', lineHeight: '1.3', color: '#1a1a1a' }}
                  >
                    Execute
                  </h3>
                  <p 
                    className="font-normal leading-snug mb-1.5"
                    style={{ fontSize: '11px', lineHeight: '1.45', color: '#6b7280' }}
                  >
                    Frontline teams complete millions of tasks, generating operational data.
                  </p>
                  <div className="flex gap-1.5" style={{ fontSize: '9px' }}>
                    <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Real-time Capture</span>
                    <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Mobile-First</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Measure Card - Enhanced with metrics */}
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
              {/* Top light reflection */}
              <div 
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
                }}
              ></div>
              
              {/* Colored accent bar on left */}
              <div 
                className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                style={{
                  background: 'linear-gradient(180deg, #64748b, #475569)',
                  boxShadow: '0 0 10px rgba(100, 116, 139, 0.35)'
                }}
              ></div>
              
              <div className="flex items-start gap-3 p-3 pl-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(100, 116, 139, 0.06)',
                      border: '1px solid rgba(100, 116, 139, 0.15)'
                    }}
                  >
                    <BarChart3 
                      className="transition-transform duration-300 group-hover:scale-110" 
                      style={{ width: '18px', height: '18px', color: '#64748b', strokeWidth: 2 }} 
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="font-semibold mb-1 tracking-tight"
                    style={{ fontSize: '13px', lineHeight: '1.3', color: '#1a1a1a' }}
                  >
                    Measure
                  </h3>
                  <p 
                    className="font-normal leading-snug mb-1.5"
                    style={{ fontSize: '11px', lineHeight: '1.45', color: '#6b7280' }}
                  >
                    Real-time dashboards provide 100% audit coverage across locations.
                  </p>
                  <div className="flex gap-1.5" style={{ fontSize: '9px' }}>
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-medium">100% Coverage</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-medium">Live Data</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Analyze Card - Enhanced with metrics */}
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
              {/* Top light reflection */}
              <div 
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
                }}
              ></div>
              
              {/* Colored accent bar on left */}
              <div 
                className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                style={{
                  background: 'linear-gradient(180deg, #f97316, #ea580c)',
                  boxShadow: '0 0 10px rgba(249, 115, 22, 0.35)'
                }}
              ></div>
              
              <div className="flex items-start gap-3 p-3 pl-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(249, 115, 22, 0.06)',
                      border: '1px solid rgba(249, 115, 22, 0.15)'
                    }}
                  >
                    <Brain 
                      className="transition-transform duration-300 group-hover:scale-110" 
                      style={{ width: '18px', height: '18px', color: '#f97316', strokeWidth: 2 }} 
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="font-semibold mb-1 tracking-tight"
                    style={{ fontSize: '13px', lineHeight: '1.3', color: '#1a1a1a' }}
                  >
                    Analyze
                  </h3>
                  <p 
                    className="font-normal leading-snug mb-1.5"
                    style={{ fontSize: '11px', lineHeight: '1.45', color: '#6b7280' }}
                  >
                    AI engine identifies risks and trends impossible for humans to spot.
                  </p>
                  <div className="flex gap-1.5" style={{ fontSize: '9px' }}>
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">Pattern Recognition</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">Risk Detection</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Improve Card - Enhanced with metrics */}
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
              {/* Top light reflection */}
              <div 
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
                }}
              ></div>
              
              {/* Colored accent bar on left */}
              <div 
                className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
                style={{
                  background: 'linear-gradient(180deg, #a855f7, #9333ea)',
                  boxShadow: '0 0 10px rgba(168, 85, 247, 0.35)'
                }}
              ></div>
              
              <div className="flex items-start gap-3 p-3 pl-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(168, 85, 247, 0.06)',
                      border: '1px solid rgba(168, 85, 247, 0.15)'
                    }}
                  >
                    <Zap 
                      className="transition-transform duration-300 group-hover:scale-110" 
                      style={{ width: '18px', height: '18px', color: '#a855f7', strokeWidth: 2 }} 
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="font-semibold mb-1 tracking-tight"
                    style={{ fontSize: '13px', lineHeight: '1.3', color: '#1a1a1a' }}
                  >
                    Improve
                  </h3>
                  <p 
                    className="font-normal leading-snug mb-1.5"
                    style={{ fontSize: '11px', lineHeight: '1.45', color: '#6b7280' }}
                  >
                    Insights trigger corrective actions and optimize future execution.
                  </p>
                  <div className="flex gap-1.5" style={{ fontSize: '9px' }}>
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">Auto-Correction</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </SlideLayout>
  );
};

export default SlidePlatformEcosystem;