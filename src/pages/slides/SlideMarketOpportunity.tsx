import React from 'react';
import { Target, TrendingUp, Building2, Globe, ArrowRight, BarChart3, Utensils, Users, Cloud } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideMarketOpportunity = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Defining a $14B Category"
        subtitle=""
        slideNumber="8"
        totalSlides="15"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex flex-col justify-center py-6 overflow-hidden">
        
        {/* Create Clear Visual Funnel - Compact */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-center mb-4 text-neutral-dark">Market Funnel: From TAM to Beachhead</h3>
          
          {/* Visual Funnel Design - Reduced spacing */}
          <div className="relative max-w-4xl mx-auto">
            {/* TAM - Widest */}
            <div className="bg-white border-2 border-electric-blue/30 rounded-xl p-4 mb-3 shadow-lg" style={{backgroundColor: 'white'}}>
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-6 h-6 text-electric-blue" />
                <div>
                  <div className="text-3xl font-black text-electric-blue">$14B+</div>
                  <div className="text-base font-semibold text-electric-blue">Total Addressable Market (TAM)</div>
                  <div className="text-xs text-gray-600">Consolidating Retail Tech, WFM, and Analytics</div>
                </div>
              </div>
            </div>
            
            {/* SAM - Middle */}
            <div className="bg-white border-2 border-enterprise-green/30 rounded-xl p-4 mb-3 mx-6 shadow-lg" style={{backgroundColor: 'white'}}>
              <div className="flex items-center justify-center gap-3">
                <Building2 className="w-6 h-6 text-enterprise-green" />
                <div>
                  <div className="text-2xl font-black text-enterprise-green">$1.26B</div>
                  <div className="text-base font-semibold text-enterprise-green">Serviceable Addressable Market (SAM)</div>
                  <div className="text-xs text-gray-600">Credible, bottom-up calculation based on proven ACV per store</div>
                </div>
              </div>
            </div>
            
            {/* Beachhead - Sharpest point */}
            <div className="bg-white border-2 border-subtle-orange/30 rounded-xl p-3 mx-12 shadow-lg" style={{backgroundColor: 'white'}}>
              <div className="flex items-center justify-center gap-3">
                <Target className="w-5 h-5 text-subtle-orange" />
                <div>
                  <div className="text-base font-bold text-subtle-orange">Our Beachhead</div>
                  <div className="text-xs text-gray-600">Global Enterprise QSR & Retail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Messages - Compact */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-lg" style={{backgroundColor: 'white'}}>
            <h3 className="text-base font-bold text-electric-blue mb-2">We're Not Just Capturing Market Share. We're Creating the Market.</h3>
            <div className="text-xs text-gray-700 leading-relaxed">
              The system of record that connects HQ strategy to frontline execution. Our conservative, bottom-up SAM is $1.26B, based on enterprise locations and proven ACV.
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg" style={{backgroundColor: 'white'}}>
            <h3 className="text-base font-bold text-neutral-dark mb-2">The True $14B+ TAM:</h3>
            <div className="text-xs text-gray-700 leading-relaxed">
              <strong>Consolidating spend from adjacent, multi-billion dollar markets.</strong> We replace point solutions for compliance, analytics, and tasking, becoming the central operational platform, just as SAP did for the back office.
            </div>
          </div>
        </div>
        
        {/* Bottom validation message - Compact */}
        <div className="text-center mt-4">
          <div className="text-sm font-medium text-neutral-dark">
            Two of the world's top chains bet their ops on Depoint
          </div>
        </div>
      </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideMarketOpportunity;