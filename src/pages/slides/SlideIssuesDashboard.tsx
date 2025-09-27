import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/issues-dashboard-interface-new.png';

const SlideIssuesDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Issues Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/22')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="💰 Protect Margin – Root Cause Analysis → Cost Avoidance"
        slideNumber="24"
        totalSlides="32"
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
              <div className="text-xs">This dashboard saves $280,000+ annually per location by eliminating recurring operational costs</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-2 flex-1 overflow-hidden">
            <img 
              src={dashboardImage} 
              alt="Issues Dashboard showing cost-saving root cause analysis, issue prioritization, and margin protection analytics"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Content (30%) */}
        <div className="w-[30%] flex flex-col gap-3 overflow-y-auto">
          {/* Financial Impact KPIs */}
          <div className="bg-green-700 text-white p-3 rounded-lg shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-base text-white">💰 Margin Protection Impact</span>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold text-white">$4.2M</div>
                <div className="text-green-100 text-xs">Annual cost of chronic issues if not eliminated</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold text-white">$850</div>
                <div className="text-green-100 text-xs">Average labor cost per recurring equipment issue</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold text-white">67%</div>
                <div className="text-green-100 text-xs">Cost reduction through root cause elimination</div>
              </div>
            </div>
          </div>

          {/* Cost Avoidance Analysis */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-2">Cost Avoidance Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-red-50 p-2 rounded border-l-2 border-red-500">
                <span className="font-bold text-red-800">Critical Issue Triage:</span> 
                <div className="mt-1 text-red-700">Real-time prioritization of critical vs routine issues prevents small problems from becoming expensive failures.</div>
              </div>
              <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-500">
                <span className="font-bold text-orange-800">Strategic Root Cause ROI:</span> 
                <div className="mt-1 text-orange-700">Issue categorization and severity analysis identifies systemic problems costing thousands per location annually.</div>
              </div>
              <div className="bg-green-50 p-2 rounded border-l-2 border-green-500">
                <span className="font-bold text-green-800">Chronic Problem Elimination:</span> 
                <div className="mt-1 text-green-700">Persistent issue tracking prevents recurring fryer, equipment, and operational costs that drain millions.</div>
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

export default SlideIssuesDashboard;