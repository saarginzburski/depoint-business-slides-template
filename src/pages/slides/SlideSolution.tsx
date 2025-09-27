import React from 'react';
import { DollarSign, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideSolution = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout 
        title="From Chaos to Intelligence" 
        slideNumber="3" 
        totalSlides="15" 
        logoSrc={depointLogo}
        componentName="SlideSolution"
      >
        <div className="h-full flex flex-col justify-center py-gutter gap-gutter">
          
          {/* Hero Solution Statement */}
          <div className="text-center flex-shrink-0">
            <h2 className="slide-headline text-depoint-blue mb-3">Operations Intelligence</h2>
            <p className="slide-subhead text-muted-foreground">Instead of scattered tools, one unified platform shows exactly what's happening</p>
          </div>

          {/* 4 Key Metrics - Consistent flat design mapped to pillar colors */}
          <div className="grid grid-cols-4 gap-gutter max-w-6xl mx-auto">
            
            {/* 💰 Protect Margin - Green */}
            <div className="bg-green-50 rounded-xl p-card text-center border border-green-200">
              <div className="flex items-center justify-center mb-3">
                <DollarSign className="w-icon-lg h-icon-lg text-pillar-margin" />
              </div>
              <div className="slide-data text-pillar-margin mb-2">+5%</div>
              <div className="slide-body font-bold text-pillar-margin mb-1">Margin Protection Uplift</div>
              <div className="slide-caption text-muted-foreground">Stop leaks. Lift EBITDA.</div>
            </div>
            
            {/* ⚠️ Reduce Risk - Red */}
            <div className="bg-red-50 rounded-xl p-card text-center border border-red-200">
              <div className="flex items-center justify-center mb-3">
                <AlertTriangle className="w-icon-lg h-icon-lg text-pillar-risk" />
              </div>
              <div className="slide-data text-pillar-risk mb-2">98%</div>
              <div className="slide-body font-bold text-pillar-risk mb-1">Compliance</div>
              <div className="slide-caption text-muted-foreground">Fewer fines. Fewer fires.</div>
            </div>
            
            {/* 🔒 Protect Revenue - Blue */}
            <div className="bg-blue-50 rounded-xl p-card text-center border border-blue-200">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-icon-lg h-icon-lg text-pillar-revenue" />
              </div>
              <div className="slide-data text-pillar-revenue mb-2">$280K</div>
              <div className="slide-body font-bold text-pillar-revenue mb-1">Sales Saved Per Store</div>
              <div className="slide-caption text-muted-foreground">Consistency customers trust.</div>
            </div>
            
            {/* 📈 Accelerate Growth - Purple */}
            <div className="bg-purple-50 rounded-xl p-card text-center border border-purple-200">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-icon-lg h-icon-lg text-pillar-growth" />
              </div>
              <div className="slide-data text-pillar-growth mb-2">4.2x</div>
              <div className="slide-body font-bold text-pillar-growth mb-1">Faster Issue Resolution</div>
              <div className="slide-caption text-muted-foreground">Scale stores without scaling chaos.</div>
            </div>
          </div>

          {/* Business Impact Statement - Flat design */}
          <div className="bg-background rounded-xl border border-gray-200 p-card max-w-6xl mx-auto">
            <h3 className="slide-subhead text-center mb-5 text-foreground">What This Means for Your Business</h3>
            <div className="grid grid-cols-2 gap-4">
              
              {/* 💰 Protect Margin */}
              <div className="bg-background rounded-lg border border-green-200 p-card flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-pillar-margin" />
                </div>
                <div className="min-w-0">
                  <h3 className="slide-body font-bold text-pillar-margin">💰 Protect Margin</h3>
                  <p className="slide-caption text-pillar-margin">Stop leaks. Lift EBITDA.</p>
                </div>
              </div>
              
              {/* ⚠️ Reduce Risk */}
              <div className="bg-background rounded-lg border border-red-200 p-card flex items-center gap-3">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-pillar-risk" />
                </div>
                <div className="min-w-0">
                  <h3 className="slide-body font-bold text-pillar-risk">⚠️ Reduce Risk</h3>
                  <p className="slide-caption text-pillar-risk">Fewer fines. Fewer fires.</p>
                </div>
              </div>
              
              {/* 🔒 Protect Revenue */}
              <div className="bg-background rounded-lg border border-blue-200 p-card flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-pillar-revenue" />
                </div>
                <div className="min-w-0">
                  <h3 className="slide-body font-bold text-pillar-revenue">🔒 Protect Revenue</h3>
                  <p className="slide-caption text-pillar-revenue">Consistency customers trust.</p>
                </div>
              </div>
              
              {/* 📈 Accelerate Growth */}
              <div className="bg-background rounded-lg border border-purple-200 p-card flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-pillar-growth" />
                </div>
                <div className="min-w-0">
                  <h3 className="slide-body font-bold text-pillar-growth">📈 Accelerate Growth</h3>
                  <p className="slide-caption text-pillar-growth">Scale stores without scaling chaos.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </SlideLayout>
    </div>
  );
};

export default SlideSolution;