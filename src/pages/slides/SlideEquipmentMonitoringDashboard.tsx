import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/equipment-monitoring-dashboard-interface-new.png';

const SlideEquipmentMonitoringDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Equipment Monitoring Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/22')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="⚠️ Reduce Risk – Predictive Maintenance → Shrink & Downtime Avoidance"
        slideNumber="25"
        totalSlides="32"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex gap-4 py-2 px-4 min-h-0">

        {/* Left Side - Dashboard Image (70%) */}
        <div className="w-[70%] flex flex-col min-h-0">
          {/* Executive Summary - Top */}
          <div className="mb-3">
            <div className="bg-pillar-risk text-white p-3 rounded">
              <div className="text-sm font-bold">Executive Summary:</div>
              <div className="text-xs">This dashboard prevents $50,000+ in annual losses per location through predictive maintenance</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-2 flex-1 overflow-hidden">
            <img 
              src={dashboardImage} 
              alt="Equipment Monitoring Dashboard showing 95% uptime rates and predictive maintenance insights preventing costly failures"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Content (30%) */}
        <div className="w-[30%] flex flex-col gap-3 overflow-y-auto">
          {/* Financial Impact KPIs */}
          <div className="bg-pillar-risk text-white p-3 rounded-lg shadow-clean-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-base">⚠️ Risk Reduction Impact</span>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$15,000</div>
                <div className="text-white/80 text-xs">Spoilage avoided per freezer failure prevented</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$8,500</div>
                <div className="text-white/80 text-xs">Lost revenue per hour of equipment downtime</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">95%</div>
                <div className="text-white/80 text-xs">Uptime rate = maximum transaction capacity</div>
              </div>
            </div>
          </div>

          {/* COO Risk Management Analysis */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">COO Risk Management Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-blue">
                <span className="font-bold text-depoint-blue">Predictive Loss Prevention:</span> 
                <div className="mt-1 text-muted-foreground">Real-time equipment health monitoring prevents catastrophic failures that cost $15,000+ in spoiled inventory per incident.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-orange">
                <span className="font-bold text-depoint-orange">Revenue Protection Through Uptime:</span> 
                <div className="mt-1 text-muted-foreground">95% uptime rate ensures maximum transaction processing capacity during peak hours, protecting daily revenue potential.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-risk">
                <span className="font-bold text-pillar-risk">Enterprise-Wide Accountability:</span> 
                <div className="mt-1 text-muted-foreground">Business unit performance tracking identifies best practices and problem areas for systematic improvement.</div>
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

export default SlideEquipmentMonitoringDashboard;