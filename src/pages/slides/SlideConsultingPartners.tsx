import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideConsultingPartners = () => {
  const partnerLogos = [
    'Deloitte',
    'Accenture', 
    'EY',
    'Citrin Cooperman',
    'PwC'
  ];

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Why Partners Love Depoint"
        slideNumber="17"
        totalSlides="28"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex flex-col justify-center py-6 max-w-6xl mx-auto">
        
        {/* Center Hero Box - Larger, balanced, centered with generous white space */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-600 text-white rounded-xl px-20 py-12 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold mb-3">Depoint: The Partner Growth Platform</div>
              <div className="text-blue-100 text-lg">Execution Intelligence for Consulting Partners</div>
            </div>
          </div>
        </div>
        
        {/* Three Pillars */}
        <div className="grid grid-cols-3 gap-12 mb-8">
          
          {/* Pillar 1 - Billable Growth */}
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <div className="text-lg font-bold text-slate-900 mb-2">Billable Growth</div>
            <div className="text-sm text-slate-600">New advisory & managed services revenue</div>
          </div>
          
          {/* Pillar 2 - Faster ROI */}
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <div className="text-lg font-bold text-slate-900 mb-2">Faster ROI</div>
            <div className="text-sm text-slate-600">90-day pilots accelerate ERP adoption</div>
          </div>
          
          {/* Pillar 3 - New Verticals */}
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <div className="text-lg font-bold text-slate-900 mb-2">New Verticals</div>
            <div className="text-sm text-slate-600">2,000+ stores live across QSR, retail, distribution</div>
          </div>
          
        </div>
        
        {/* Proof Metrics */}
        <div className="text-center mb-10">
          <div className="text-sm text-slate-700 font-medium">
            95% adoption • +24% compliance uplift • Break-even within 12 months
          </div>
        </div>
        
        {/* Partner Logos Strip - Consistent text-based logos */}
        <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg px-3 py-2 h-10 flex items-center justify-center min-w-[90px]">
              <span className="text-sm font-bold text-gray-700">{partner}</span>
            </div>
          ))}
        </div>
        
        {/* Tagline */}
        <div className="text-center">
          <p className="text-base text-slate-600 italic font-medium max-w-4xl mx-auto leading-relaxed">
            "ERP changes systems. Depoint changes people's day-to-day — making adoption effortless and impact visible across the enterprise."
          </p>
        </div>
      </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideConsultingPartners;