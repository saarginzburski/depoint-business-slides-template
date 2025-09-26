import React from 'react';
import { Check, TrendingUp, Users, Building2 } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import HumorFooter from '@/components/HumorFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideExecutiveSummary = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Executive Summary"
        slideNumber="2"
        totalSlides="26"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex flex-col justify-center py-6 max-w-7xl mx-auto">
        
        {/* Vision Statement - Monochrome */}
        <div className="text-center mb-12">
          <div className="bg-card border border-border rounded-2xl p-8">
            <blockquote className="text-2xl font-bold leading-tight mb-4 text-foreground">
              "We are defining Enterprise Operations Intelligence and scaling it globally"
            </blockquote>
            <div className="text-muted-foreground text-lg font-medium">— CEO, Depoint</div>
          </div>
        </div>
        
        {/* Four-Column Layout with Pillar Colors */}
        <div className="grid grid-cols-4 gap-8">
          
          {/* Protect Margin - Green */}
          <div className="text-center">
            <div className="bg-card border-2 border-pillar-margin rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-pillar-margin" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Protect Margin</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="text-base font-semibold text-pillar-margin">Enterprise-grade architecture</div>
              <div>Co-developed with McDonald's over 4 years</div>
              <div>API-first, SOC 2 compliant</div>
              <div>Built for global franchise complexity</div>
            </div>
          </div>
          
          {/* Reduce Risk - Red */}
          <div className="text-center">
            <div className="bg-card border-2 border-pillar-risk rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-pillar-risk" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Reduce Risk</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="text-base font-semibold text-pillar-risk">Live across 2,000+ stores</div>
              <div>15K+ daily active users</div>
              <div>Enterprise validation with global brands</div>
              <div>Proven scalability and adoption</div>
            </div>
          </div>
          
          {/* Protect Revenue - Blue */}
          <div className="text-center">
            <div className="bg-card border-2 border-pillar-revenue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-pillar-revenue" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Protect Revenue</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="text-base font-semibold text-pillar-revenue">$14B market creation</div>
              <div>Break-even achieved</div>
              <div>Sales-led growth scaling</div>
              <div>$5M raise for market expansion</div>
            </div>
          </div>

          {/* Accelerate Growth - Purple */}
          <div className="text-center">
            <div className="bg-card border-2 border-pillar-growth rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-pillar-growth" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Accelerate Growth</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="text-base font-semibold text-pillar-growth">Capital-efficient expansion</div>
              <div>Proven unit economics</div>
              <div>Global scalability validated</div>
              <div>Multi-industry platform ready</div>
            </div>
          </div>
          
        </div>
        
      </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <HumorFooter 
        text="Happy staff, fewer fines, safer EBITDA."
        avatarStyle="consultant"
        highlightWords={['EBITDA', 'safer']}
      />
    </div>
  );
};

export default SlideExecutiveSummary;