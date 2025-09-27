import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/task-compliance-dashboard-interface.png';

const SlideTaskComplianceDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Task Compliance Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/19')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="⚠️ Reduce Risk – Execution Gaps → Avoided Losses & Improved Safety"
        slideNumber="26"
        totalSlides="29"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex gap-4 py-2 px-4 min-h-0">

        {/* Left Side - Dashboard Image (70%) */}
        <div className="w-[70%] flex flex-col min-h-0">
          {/* Executive Summary - Risk Pillar Color */}
          <div className="mb-3">
            <div className="bg-pillar-risk text-white p-3 rounded">
              <div className="text-sm font-bold">Executive Summary:</div>
              <div className="text-xs">This dashboard prevents $150,000+ in annual risk exposure per location through compliance execution</div>
            </div>
          </div>
          
          <div className="bg-background rounded-lg shadow-clean-md p-2 flex-1 overflow-hidden border border-border">
            <img 
              src={dashboardImage} 
              alt="Task Compliance Dashboard showing 90.71% compliance protection with risk mitigation analytics across business units"
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
                <div className="text-lg font-bold">$25K</div>
                <div className="text-white/80 text-xs">Risk exposure per missed food safety task per store</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$3.7M</div>
                <div className="text-white/80 text-xs">Savings from 10% compliance improvement</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold text-depoint-blue">90.71%</div>
                <div className="text-white/80 text-xs">Current compliance rate protecting millions in exposure</div>
              </div>
            </div>
          </div>

          {/* Risk Management Analysis */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">Risk Management Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-risk">
                <span className="font-bold text-pillar-risk">Enterprise Risk Control:</span> 
                <div className="mt-1 text-muted-foreground">90.71% overall compliance rate provides real-time protection against safety violations, lawsuits, and regulatory penalties.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-orange">
                <span className="font-bold text-depoint-orange">Predictive Risk Prevention:</span> 
                <div className="mt-1 text-muted-foreground">Trend analysis identifies compliance degradation before incidents occur, preventing costly failures.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-growth">
                <span className="font-bold text-pillar-growth">Targeted Compliance Investment:</span> 
                <div className="mt-1 text-muted-foreground">Business unit and task-specific breakdowns optimize training spend for maximum risk reduction ROI.</div>
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

export default SlideTaskComplianceDashboard;