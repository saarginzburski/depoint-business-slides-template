import React from 'react';
import { Brain, DollarSign, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import HumorFooter from '@/components/HumorFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideDashboardIntro = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="The Intelligence Layer: Why Dashboards Matter"
        slideNumber="19"
        totalSlides="29"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex flex-col px-8 max-w-5xl mx-auto py-4">
        
        {/* Central Message - Enhanced with left-aligned brain icon */}
        <div className="mb-4 flex-shrink-0">
          <div className="bg-blue-600 rounded-xl px-8 py-6 text-white shadow-xl">
            <div className="flex items-center gap-6">
              {/* Brain icon on the left */}
              <div className="bg-white/15 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                <Brain className="w-7 h-7 text-white" />
              </div>
              
              {/* Text content on the right */}
              <div className="flex-1">
                <h3 className="text-xl font-bold leading-tight mb-3">
                  Dashboards are not features —<br />
                  they prove the unmatched depth of<br />
                  <span className="text-blue-200">Depoint's intelligence engine</span>
                </h3>
                <p className="text-base text-blue-100 font-medium">
                  Each dashboard represents millions of data points transformed into strategic insight
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 2x2 Quadrant Grid - Optimized for available space */}
        <div className="grid grid-cols-2 gap-3 w-full flex-1 min-h-0">
          
          {/* Quadrant 1: Protect Margin */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-green-200 p-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-green-700">💰 Protect Margin</h3>
                <p className="text-sm text-green-600">Control costs & eliminate waste</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700 flex-1">
              <div>• Oil Monitoring Dashboard</div>
              <div>• Issues Dashboard</div>
            </div>
          </div>
          
          {/* Quadrant 2: Reduce Risk */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-orange-200 p-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-orange-700">⚠️ Reduce Risk</h3>
                <p className="text-sm text-orange-600">Prevent failures & avoid penalties</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700 flex-1">
              <div>• Equipment Monitoring Dashboard</div>
              <div>• Audit Report Dashboard</div>
              <div>• Task Compliance Dashboard</div>
            </div>
          </div>
          
          {/* Quadrant 3: Protect Revenue */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-blue-200 p-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-blue-700">🔒 Protect Revenue</h3>
                <p className="text-sm text-blue-600">Safeguard sales with consistent quality</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700 flex-1">
              <div>• Product Gold Standard Dashboard</div>
            </div>
          </div>
          
          {/* Quadrant 4: Accelerate Growth */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 p-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-purple-700">📈 Accelerate Growth</h3>
                <p className="text-sm text-purple-600">Drive revenue through execution speed & insights</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700 flex-1">
              <div>• Speed of Service Dashboard</div>
              <div>• Users Engagement Dashboard</div>
              <div>• Sales Management Dashboard</div>
            </div>
          </div>
          
        </div>
        
      </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <HumorFooter 
        text="Finally, KPIs that explain themselves."
        avatarStyle="consultant"
        highlightWords={['KPIs', 'explain']}
      />
    </div>
  );
};

export default SlideDashboardIntro;