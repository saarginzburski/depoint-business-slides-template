import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/speed-of-service-dashboard-interface.png';

const SlideSpeedOfServiceDashboard = () => {
  const navigate = useNavigate();

  return (
    <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Speed of Service Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/22')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="📈 Accelerate Growth – Faster Service → Higher Throughput & Sales"
        slideNumber="30"
        totalSlides="31"
        logoSrc={depointLogo}
        componentName="SlideSpeedOfServiceDashboard"
      >
      <div className="h-full flex gap-4 py-2 px-4 min-h-0">

        {/* Left Side - Dashboard Image (70%) */}
        <div className="w-[70%] flex flex-col min-h-0">
          {/* Executive Summary - Growth Pillar Color */}
          <div className="mb-3">
            <div className="bg-pillar-growth text-white p-3 rounded">
              <div className="text-sm font-bold">Executive Summary:</div>
              <div className="text-xs">This dashboard drives $120,000+ additional annual revenue per location through service optimization</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-2 flex-1 overflow-hidden">
            <img 
              src={dashboardImage} 
              alt="Speed of Service Dashboard showing revenue-driving metrics: 2.63min order acceptance, 4.47min dispatch time with growth optimization analytics"
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
                <div className="text-lg font-bold">12%</div>
                <div className="text-white/80 text-xs">Throughput increase per 10 seconds saved per order</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$1.8M</div>
                <div className="text-white/80 text-xs">Additional revenue annually from faster service</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold text-depoint-blue">4.2⭐</div>
                <div className="text-white/80 text-xs">Average app rating boost from speed improvements</div>
              </div>
            </div>
          </div>

          {/* Revenue Growth Analysis */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">Revenue Growth Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-growth">
                <span className="font-bold text-pillar-growth">Dual-Channel Revenue Max:</span> 
                <div className="mt-1 text-muted-foreground">Optimizing aggregator (2.63min) vs direct orders (1.90min) maximizes daily transaction capacity and revenue potential.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-blue">
                <span className="font-bold text-depoint-blue">Competitive Advantage Through Speed:</span> 
                <div className="mt-1 text-muted-foreground">Faster service creates customer loyalty, improves app rankings, and drives organic order growth.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-orange">
                <span className="font-bold text-depoint-orange">Service Gap Revenue Recovery:</span> 
                <div className="mt-1 text-muted-foreground">Missed service opportunities tracking prevents lost sales and identifies process improvement areas.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </SlideLayout>
  );
};

export default SlideSpeedOfServiceDashboard;