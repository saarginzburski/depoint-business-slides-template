import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/sales-management-dashboard-interface.png';

const SlideSalesManagementDashboard = () => {
  const navigate = useNavigate();

  return (
    <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Sales Management Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/22')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="📈 Accelerate Growth – Sales Insights → Revenue Expansion"
        slideNumber="32"
        totalSlides="31"
        logoSrc={depointLogo}
        componentName="SlideSalesManagementDashboard"
      >
      <div className="h-full flex gap-4 py-2 px-4 min-h-0">

        {/* Left Side - Dashboard Image (70%) */}
        <div className="w-[70%] flex flex-col min-h-0">
          {/* Executive Summary - Top */}
          <div className="mb-3">
            <div className="bg-pillar-growth text-white p-3 rounded">
              <div className="text-sm font-bold">Executive Summary:</div>
              <div className="text-xs">This dashboard drives $3.5M+ annual revenue growth through sales intelligence optimization</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-2 flex-1 overflow-hidden">
            <img 
              src={dashboardImage} 
              alt="Sales Management Dashboard showing $16,770K revenue expansion opportunities with $2,114.8K profit optimization insights"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Content (30%) */}
        <div className="w-[30%] flex flex-col gap-3 overflow-y-auto">
          {/* Financial Impact KPIs */}
          <div className="bg-pillar-growth text-white p-3 rounded-lg shadow-clean-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-base">📈 Revenue Expansion Impact</span>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$16.8M</div>
                <div className="text-white/80 text-xs">Current revenue baseline for optimization</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">18%</div>
                <div className="text-white/80 text-xs">Revenue lift from replicating high-performer SKUs</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$5.2M</div>
                <div className="text-white/80 text-xs">Marketing ROI from granular regional insights</div>
              </div>
            </div>
          </div>

          {/* Revenue Growth Analysis */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">Revenue Growth Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-growth">
                <span className="font-bold text-pillar-growth">High-Performance Replication:</span> 
                <div className="mt-1 text-muted-foreground">$2.1M profit on $16.8M revenue shows proven success patterns ready for systematic replication across all locations.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-blue">
                <span className="font-bold text-depoint-blue">Strategic SKU Optimization:</span> 
                <div className="mt-1 text-muted-foreground">Product category breakdowns identify high-margin opportunities, enabling portfolio optimization for maximum profitability.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-orange">
                <span className="font-bold text-depoint-orange">Regional Growth Strategy:</span> 
                <div className="mt-1 text-muted-foreground">Market dynamics analysis enables targeted campaigns and resource allocation for accelerated regional expansion.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </SlideLayout>
  );
};

export default SlideSalesManagementDashboard;