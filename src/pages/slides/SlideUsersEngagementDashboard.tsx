import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/users-engagement-dashboard-interface.png';

const SlideUsersEngagementDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Users Engagement Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/22')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="📈 Accelerate Growth – Adoption → ROI Realization & Efficiency Gains"
        slideNumber="30"
        totalSlides="31"
        logoSrc={depointLogo}
      >
      <div className="h-full flex gap-4 py-2 px-4 min-h-0">

        {/* Left Side - Dashboard Image (70%) */}
        <div className="w-[70%] flex flex-col min-h-0">
          {/* Executive Summary - Growth Pillar Color */}
          <div className="mb-3">
            <div className="bg-pillar-growth text-white p-3 rounded">
              <div className="text-sm font-bold">Executive Summary:</div>
              <div className="text-xs">This dashboard tracks $185,000+ annual ROI per location through platform adoption optimization</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-2 flex-1 overflow-hidden">
            <img 
              src={dashboardImage} 
              alt="Users Engagement Dashboard showing 81.78% ROI-driving engagement rate with 56,505 efficiency-generating sessions"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Content (30%) */}
        <div className="w-[30%] flex flex-col gap-3 overflow-y-auto">
          {/* Financial Impact KPIs */}
          <div className="bg-pillar-growth text-white p-3 rounded-lg shadow-clean-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-base">📈 Growth Acceleration Impact</span>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$2.8M</div>
                <div className="text-white/80 text-xs">Annual labor savings from high engagement</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold text-depoint-blue">81.78%</div>
                <div className="text-white/80 text-xs">Engagement rate driving ROI realization</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">56,505</div>
                <div className="text-white/80 text-xs">Total sessions = deep operational integration</div>
              </div>
            </div>
          </div>

          {/* ROI Realization Analysis */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">ROI Realization Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-growth">
                <span className="font-bold text-pillar-growth">Deep ROI Through Adoption:</span> 
                <div className="mt-1 text-muted-foreground">81.78% engagement rate indicates platform indispensability, driving faster task completion and labor cost savings.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-blue">
                <span className="font-bold text-depoint-blue">Operational Efficiency Multiplier:</span> 
                <div className="mt-1 text-muted-foreground">Session depth analysis identifies process optimization, translating directly to productivity gains and cost reduction.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-growth">
                <span className="font-bold text-pillar-growth">Growth Trajectory Amplification:</span> 
                <div className="mt-1 text-muted-foreground">User growth trends demonstrate platform scalability and compound ROI across expanding operations.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </SlideLayout>
    </div>
  );
};

export default SlideUsersEngagementDashboard;