import React from 'react';
import { CheckCircle, Settings, Smartphone, Users, Network, BarChart3, Shield, Zap, Building2 } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlidePlatform = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Built Like SAP, Loved Like WhatsApp"
        subtitle=""
        slideNumber="8"
        totalSlides="15"
        logoSrc={depointLogo}
      >
      <div className="h-full flex flex-col justify-center py-3 max-w-6xl mx-auto">
        
        {/* Clean Split Layout with Brand Colors */}
        <div className="grid grid-cols-2 gap-6 mb-4 items-stretch">
          
          {/* Left Column - SAP Blue */}
          <div className="text-center flex flex-col">
            <div className="bg-depoint-blue rounded-2xl p-6 text-white mb-4 flex-1 flex flex-col h-full min-h-[240px]">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3">Built Like SAP</h3>
              <div className="space-y-2 text-sm flex-1 flex flex-col justify-center">
                <div>Enterprise-grade architecture</div>
                <div>API-first</div>
                <div>SOC 2 compliant</div>
                <div>Ready for complex ERP integrations</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - WhatsApp Green */}
          <div className="text-center flex flex-col">
            <div className="bg-green-600 rounded-2xl p-6 text-white mb-4 flex-1 flex flex-col h-full min-h-[240px]">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3">Loved Like WhatsApp</h3>
              <div className="space-y-2 text-sm flex-1 flex flex-col justify-center">
                <div>A mobile-first design so intuitive</div>
                <div>it requires zero training</div>
                <div>driving over 95% adoption</div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Quote - Clean Monochrome */}
        <div className="bg-card border border-border rounded-xl p-4 border-l-4 border-l-depoint-blue">
          <blockquote className="text-base text-foreground text-center leading-relaxed mb-2">
            "The first platform where IT pushes Operations to adopt faster, and Operations asks IT for more integrations."
          </blockquote>
          <div className="text-center text-muted-foreground font-semibold text-sm">
            VP of Operations, Global QSR Chain
          </div>
        </div>
        
      </div>
      </SlideLayout>
    </div>
  );
};

export default SlidePlatform;