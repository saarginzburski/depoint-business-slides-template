import React from 'react';
import { Smartphone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/oil-monitoring-dashboard-interface.png';

const SlideOilMonitoringDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Oil Monitoring Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/20')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="💰 Protect Margin – Oil Quality → Food Cost Efficiency"
        slideNumber="20"
        totalSlides="29"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex gap-4 py-2 px-4 min-h-0">

        {/* Left Side - Dashboard Image (70%) */}
        <div className="w-[70%] flex flex-col min-h-0">
          {/* Executive Summary - Top */}
          <div className="mb-3">
            <div className="bg-pillar-margin text-white p-3 rounded">
              <div className="text-sm font-bold">Executive Summary:</div>
              <div className="text-xs">This dashboard = $15,000 annual savings per location through optimized oil management</div>
              <div className="text-xs text-depoint-orange mt-2 italic font-semibold">💡 Every fryer alert avoided = 200 meals saved from the trash.</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-2 flex-1 overflow-hidden relative">
            {/* Subtle background image of fries - very faint */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-orange-100 to-yellow-100"></div>
            <div className="absolute top-4 right-4 opacity-10">
              🍟
            </div>
            <img 
              src={dashboardImage} 
              alt="Oil Monitoring Dashboard showing 99.59% oil quality checking hit rate with cost-saving insights and margin protection analytics"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>

        {/* Right Side - Content (30%) */}
        <div className="w-[30%] flex flex-col gap-3 overflow-y-auto">
          {/* Financial Impact KPIs */}
          <div className="bg-pillar-margin text-white p-3 rounded-lg shadow-clean-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-base">💰 Margin Protection Impact</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-red-300">🔥 Oil waste</span>
              <span className="text-blue-300">✅ Meals served</span>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$2.4M</div>
                <div className="text-white/80 text-xs">Annual savings by reducing wasted oil changes</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">2-3%</div>
                <div className="text-white/80 text-xs">Margin protection per store through improved fryer efficiency</div>
              </div>
            </div>
          </div>

          {/* Mobile Platform Highlight */}
          <div className="bg-blue-700 text-white p-3 rounded-lg shadow-xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sm text-white">📱 Complete Mobile Platform</span>
            </div>
            <div className="text-blue-100 text-xs">
              Real-time oil quality monitoring accessible anywhere for immediate cost-saving decisions.
            </div>
          </div>

          {/* CFO Impact Analysis */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">CFO Impact Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-margin">
                <span className="font-bold text-pillar-margin">Cost Avoidance Through Quality Control:</span> 
                <div className="mt-1 text-muted-foreground">99.59% oil quality hit rate prevents premature oil replacement, extending oil life by 15-20% across all locations.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-orange">
                <span className="font-bold text-depoint-orange">Real-Time Loss Prevention:</span> 
                <div className="mt-1 text-muted-foreground">Invalid fryer alerts prevent batch losses and customer complaints that cost $500-$2,000 per incident.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-blue">
                <span className="font-bold text-depoint-blue">Trend-Based Margin Optimization:</span> 
                <div className="mt-1 text-muted-foreground">Historical performance data enables predictive oil management, reducing food costs by 2-3%.</div>
              </div>
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

export default SlideOilMonitoringDashboard;