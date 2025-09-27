import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import dashboardImage from '@/assets/product-gold-standard-dashboard-interface.png';

const SlideProductGoldStandardDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title={
          <div className="flex items-center gap-4">
            <span>Product Gold Standard Dashboard</span>
            <button
              onClick={() => navigate('/investor-deck/slide/21')}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Index
            </button>
          </div>
        }
        subtitle="🔒 Protect Revenue – Consistent Quality → Customer Retention & Sales"
        slideNumber="27"
        totalSlides="29"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex gap-4 py-2 px-4 min-h-0">

        {/* Left Side - Dashboard Image (70%) */}
        <div className="w-[70%] flex flex-col min-h-0">
          {/* Executive Summary - Revenue Pillar Color */}
          <div className="mb-3">
            <div className="bg-pillar-revenue text-white p-3 rounded">
              <div className="text-sm font-bold">Executive Summary:</div>
              <div className="text-xs">This dashboard protects $180,000+ annual revenue per location through quality consistency</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-2 flex-1 overflow-hidden">
            <img 
              src={dashboardImage} 
              alt="Product Gold Standard Dashboard showing revenue-protecting quality metrics: 100% nuggets, 97.66% fries, and 98.80% burger quality rates"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Content (30%) */}
        <div className="w-[30%] flex flex-col gap-3 overflow-y-auto">
          {/* Financial Impact KPIs */}
          <div className="bg-pillar-revenue text-white p-3 rounded-lg shadow-clean-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-base">🏆 Gold Standard Revenue Protection</span>
            </div>
            <div className="flex items-center gap-2 mb-2 opacity-75">
              <span className="text-xs">🌍 Global Quality Consistency</span>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">$3.2M</div>
                <div className="text-white/80 text-xs">Lost revenue per 1% quality score decline annually</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold text-depoint-orange">98%+</div>
                <div className="text-white/80 text-xs">Quality threshold protects brand reputation & repeat purchases</div>
              </div>
              <div className="bg-white/20 p-2 rounded">
                <div className="text-lg font-bold">25%</div>
                <div className="text-white/80 text-xs">Higher customer lifetime value with consistent quality</div>
              </div>
            </div>
          </div>

          {/* Revenue Protection Analysis */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">Revenue Protection Analysis:</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-pillar-revenue">
                <span className="font-bold text-pillar-revenue">Gold Standard Revenue Defense:</span> 
                <div className="mt-1 text-muted-foreground">100% nuggets, 97.66% fries, 98.80% burger quality rates directly correlate to customer satisfaction and repeat business.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-blue">
                <span className="font-bold text-depoint-blue">Quality-Revenue Correlation:</span> 
                <div className="mt-1 text-muted-foreground">Detailed attribute tracking (appearance, temperature, taste) enables precise quality control that protects premium pricing.</div>
              </div>
              <div className="bg-card border border-border p-2 rounded border-l-2 border-l-depoint-orange">
                <span className="font-bold text-depoint-orange">Predictive Quality Management:</span> 
                <div className="mt-1 text-muted-foreground">Trend analysis prevents quality degradation before it impacts customer experience and revenue streams.</div>
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

export default SlideProductGoldStandardDashboard;