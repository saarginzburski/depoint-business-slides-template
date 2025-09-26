import React from 'react';
import { FileText, Smartphone, Clipboard, Shield, Trophy, GraduationCap } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideDigitizingOpsManual = () => {
  // Force refresh to clear cached references
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <SlideLayout
        title="Digitizing the Operations Manual"
        slideNumber="4"
        totalSlides="15"
        logoSrc={depointLogo}
        hideFooter={true}
      >
        <div className="content-viewport h-full flex flex-col justify-center py-6">
          {/* Subtitle */}
          <div className="text-center mb-6">
            <p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              Every franchisor runs on an operations manual. Depoint makes it digital, dynamic, and effortless to execute — in every store, every shift.
            </p>
          </div>

          {/* Main Content - Split Design */}
          <div className="grid grid-cols-2 gap-8 items-center mb-6">
            
            {/* Left Side - Paper Manual */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-300 shadow-lg transition-none">
                <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Traditional Manual</h3>
                <p className="text-lg text-gray-600 font-medium">Static, complex, quickly outdated</p>
              </div>
            </div>

            {/* Right Side - Depoint Digital */}
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 border-2 border-primary/20 shadow-lg transition-none">
                <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Depoint Platform</h3>
                <p className="text-lg text-primary font-medium">Always updated. Always executed.</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-6">
            <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="text-center">
                <Clipboard className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-700">Compliance & Audits</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-700">Food Safety & Risk</p>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-700">Brand Standards</p>
              </div>
              <div className="text-center">
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-700">Training & Certification</p>
              </div>
            </div>
          </div>

          {/* Bottom Anchor */}
          <div className="text-center">
            <div className="inline-block bg-primary/10 rounded-lg px-6 py-3 border border-primary/20">
              <p className="text-lg font-bold text-primary">
                "From bulky binders to a living system of action."
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideDigitizingOpsManual;