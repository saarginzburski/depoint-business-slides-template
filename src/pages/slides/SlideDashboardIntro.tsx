import React from 'react';
import { Brain, DollarSign, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideDashboardIntro = () => {
  const navigate = useNavigate();

  const handleDashboardClick = (slideId: number) => {
    navigate(`/investor-deck/slide/${slideId}`);
  };

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="The Intelligence Layer: Why Dashboards Matter"
        slideNumber="20"
        totalSlides="31"
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
              <button 
                onClick={() => handleDashboardClick(22)}
                className="w-full text-left hover:text-green-700 hover:bg-green-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Oil Monitoring Dashboard
              </button>
              <button 
                onClick={() => handleDashboardClick(23)}
                className="w-full text-left hover:text-green-700 hover:bg-green-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Issues Dashboard
              </button>
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
              <button 
                onClick={() => handleDashboardClick(24)}
                className="w-full text-left hover:text-orange-700 hover:bg-orange-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Equipment Monitoring Dashboard
              </button>
              <button 
                onClick={() => handleDashboardClick(25)}
                className="w-full text-left hover:text-orange-700 hover:bg-orange-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Audit Report Dashboard
              </button>
              <button 
                onClick={() => handleDashboardClick(26)}
                className="w-full text-left hover:text-orange-700 hover:bg-orange-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Task Compliance Dashboard
              </button>
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
              <button 
                onClick={() => handleDashboardClick(27)}
                className="w-full text-left hover:text-blue-700 hover:bg-blue-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Product Gold Standard Dashboard
              </button>
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
              <button 
                onClick={() => handleDashboardClick(28)}
                className="w-full text-left hover:text-purple-700 hover:bg-purple-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Speed of Service Dashboard
              </button>
              <button 
                onClick={() => handleDashboardClick(29)}
                className="w-full text-left hover:text-purple-700 hover:bg-purple-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Users Engagement Dashboard
              </button>
              <button 
                onClick={() => handleDashboardClick(30)}
                className="w-full text-left hover:text-purple-700 hover:bg-purple-50 p-2 rounded transition-colors cursor-pointer"
              >
                • Sales Management Dashboard
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideDashboardIntro;