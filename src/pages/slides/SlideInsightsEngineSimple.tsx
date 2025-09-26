import React from 'react';
import { AlertTriangle, Smartphone } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideInsightsEngineSimple = () => {
  return (
    <SlideLayout
      title="From Reactive to Predictive"
      subtitle=""
      slideNumber="7"
      totalSlides="15"
      logoSrc={depointLogo}
    >
      {/* Simple two-part story as specified */}
      <div className="h-full flex flex-col justify-center py-8">
        
        {/* Two-Part Story Layout */}
        <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Left Side - The Event */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-risk-red mb-8">A Critical Failure</h3>
            
            {/* Simple freezer icon */}
            <div className="w-32 h-32 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8 border-2 border-red-200">
              <div className="text-6xl">❄️</div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              A freezer failure costs an average of <strong className="text-risk-red">$15,000</strong> in lost inventory and sales.
            </p>
          </div>

          {/* Right Side - The Depoint Insight */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-electric-blue mb-8">The Predictive Alert</h3>
            
            {/* Clean mockup of mobile push notification */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-6 max-w-sm mx-auto mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">Critical Alert</div>
                  <div className="text-xs text-gray-600">Depoint AI</div>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
                <div className="text-sm font-bold text-red-800 mb-2">
                  Alert: Store #127 freezer unit shows a 92% failure probability within 48 hours.
                </div>
                <div className="text-sm text-red-700">
                  Schedule pre-emptive maintenance now.
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Predictive intelligence prevents problems before they happen.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">
              We don't just report problems; we prevent them.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideInsightsEngineSimple;