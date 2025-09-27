import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/audit-report-dashboard-interface-new.png';

const SlideAuditReportDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Audit Report Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/19')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="⚠️ Reduce Risk – Compliance → Fine & Liability Avoidance"
        slideNumber="25"
        totalSlides="29"
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
              <div className="text-xs">This dashboard prevents $200,000+ in annual fines and liability costs per location</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-2 flex-1 overflow-hidden">
            <img 
              src={dashboardImage} 
              alt="Audit Report Dashboard showing compliance protection metrics, audit scores, and risk mitigation analytics"
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
                <div className="text-lg font-bold">$50K+</div>
                <div className="text-white/80 text-xs">Average food safety fine per violation avoided</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">15%</div>
                <div className="text-white/80 text-xs">Insurance premium reduction with verifiable compliance</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$2M</div>
                <div className="text-white/80 text-xs">Brand damage cost per major compliance failure</div>
              </div>
            </div>
          </div>

          {/* Risk Management Analysis */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">Risk Management Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-risk">
                <span className="font-bold text-pillar-risk">Compliance Score Protection:</span> 
                <div className="mt-1 text-muted-foreground">Overall audit scores directly correlate to regulatory compliance, preventing costly violations and protecting brand reputation.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-orange">
                <span className="font-bold text-depoint-orange">Category-Specific Risk Mitigation:</span> 
                <div className="mt-1 text-muted-foreground">Targeted coaching in Product Quality, Food Safety, and Service prevents issues before they become liabilities.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-yellow-600">
                <span className="font-bold text-yellow-600">Proactive Accountability Systems:</span> 
                <div className="mt-1 text-muted-foreground">Data-driven performance tracking identifies compliance gaps before regulators do, avoiding penalties.</div>
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

export default SlideAuditReportDashboard;