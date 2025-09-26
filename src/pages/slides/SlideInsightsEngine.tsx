import React from 'react';
import { AlertTriangle, Thermometer, Smartphone } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import HumorFooter from '@/components/HumorFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideInsightsEngine = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="We Turn Data Into Foresight"
        slideNumber="7"
        totalSlides="15"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      {/* Main Content - Simple two-step visual flow */}
      <div className="h-full flex flex-col justify-center py-6">
        
        {/* Two-Step Visual Flow */}
        <div className="grid grid-cols-2 gap-6 h-full items-stretch">
          
          {/* Left Side - The Signal */}
          <div className="flex flex-col justify-center space-y-3 h-full">
            <div className="text-center mb-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">The Invisible Problem</h2>
            </div>
            
            {/* Temperature Graph */}
            <div className="bg-white rounded-xl shadow-card border p-4 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Thermometer className="w-4 h-4 text-electric-blue" />
                <span className="text-sm font-medium text-gray-700">Store #127 - Freezer Unit Temperature</span>
              </div>
              
              {/* Simple Line Graph */}
              <div className="relative flex-1 bg-gray-50 rounded-lg p-3 min-h-24">
                <svg className="w-full h-full" viewBox="0 0 300 80" fill="none">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="30" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 16" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="300" height="80" fill="url(#grid)" />
                  
                  {/* Normal temperature line */}
                  <path 
                    d="M 0 40 L 50 38 L 100 42 L 150 39 L 200 41 L 220 43 L 240 48 L 260 52 L 280 55 L 300 58" 
                    stroke="#10b981" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  
                  {/* Anomalous fluctuation highlight */}
                  <circle cx="240" cy="48" r="3" fill="#ef4444" className="animate-pulse" />
                  <circle cx="260" cy="52" r="3" fill="#ef4444" className="animate-pulse" />
                  <circle cx="280" cy="55" r="3" fill="#ef4444" className="animate-pulse" />
                  
                  {/* Alert indicator */}
                  <rect x="220" y="35" width="80" height="20" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" rx="3" />
                  <text x="260" y="47" textAnchor="middle" className="text-xs fill-current text-red-600 font-medium">Anomaly</text>
                </svg>
              </div>
            </div>
            
            <div className="text-center px-1">
              <p className="text-base text-gray-700 leading-relaxed">
                Our AI detects a minor temperature pattern anomaly in a freezer unit at Store #127—a signal impossible for humans to spot.
              </p>
            </div>
          </div>
          
          {/* Right Side - The Outcome */}
          <div className="flex flex-col justify-center space-y-3 h-full">
            <div className="text-center mb-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">The Profitable Prediction</h2>
            </div>
            
            {/* Mobile Notification Mockup */}
            <div className="flex justify-center flex-1">
              <div className="w-64 bg-gray-900 rounded-2xl p-2 shadow-2xl flex flex-col">
                {/* Phone Header */}
                <div className="flex justify-between items-center mb-4 text-white">
                  <div className="text-sm">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* Notification */}
                <div className="bg-white rounded-xl p-3 shadow-lg flex-1">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-risk-red rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900 text-sm">Depoint Alert</h4>
                        <span className="text-xs text-gray-500">2m ago</span>
                      </div>
                      <div className="bg-risk-red/10 rounded-lg p-2 mb-2">
                        <p className="text-xs font-medium text-risk-red mb-1">
                          🚨 Critical Equipment Alert
                        </p>
                        <p className="text-xs text-gray-800 leading-relaxed">
                          <strong>Freezer #3</strong> shows a <strong>92% failure probability</strong> in 48 hrs. Pre-emptive maintenance scheduled, preventing <strong>$15,000</strong> in spoilage and downtime.
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <button className="flex-1 bg-electric-blue text-white py-1.5 px-2 rounded-lg text-xs font-medium">
                          View Details
                        </button>
                        <button className="px-2 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center px-1">
              <p className="text-base text-gray-700 leading-relaxed">
                Proactive intervention saves thousands while maintaining perfect customer experience.
              </p>
            </div>
          </div>
          
        </div>
        
      </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <HumorFooter 
        text="We text you before the freezer quits on Friday."
        avatarStyle="consultant"
        highlightWords={['text', 'Friday']}
        highlightColor="orange"
      />
    </div>
  );
};

export default SlideInsightsEngine;