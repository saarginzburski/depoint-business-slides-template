import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import HumorFooter from '@/components/HumorFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideTeam = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Our Team"
        slideNumber="14"
        totalSlides="15"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex flex-col justify-center items-center px-12">
        <div className="max-w-4xl w-full grid grid-cols-3 gap-8">
          {/* CEO - Saar Ginzburski */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border">
              <img src="/lovable-uploads/2f6a400a-429e-446e-9549-e1aeb975f6a5.png" alt="Saar Ginzburski" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Saar Ginzburski</h3>
            <div className="text-sm text-gray-600 mb-2">CEO & Founder</div>
            <p className="text-sm text-gray-700">Built enterprise platforms adopted by global brands; obsessively focused on frontline execution.</p>
          </div>

          {/* Placeholder Exec 1 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border">
              <img src="/lovable-uploads/20791821-761a-4d44-9c6f-b6c14a826e64.png" alt="Executive" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Head of Engineering</h3>
            <div className="text-sm text-gray-600 mb-2">Ex-SaaS, AI Systems</div>
            <p className="text-sm text-gray-700">Scaled secure, API-first platforms; SOC 2 and enterprise integrations expert.</p>
          </div>

          {/* Placeholder Exec 2 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border">
              <img src="/lovable-uploads/3afda8ba-cd7c-4f4d-99f4-11235db17ffd.png" alt="Executive" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Head of GTM</h3>
            <div className="text-sm text-gray-600 mb-2">Enterprise Sales</div>
            <p className="text-sm text-gray-700">Built repeatable land-expand-embed motions across multi-unit enterprises.</p>
          </div>
        </div>
      </div>
      </SlideLayout>
    </div>
  );
};

export default SlideTeam;
