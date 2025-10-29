import React from 'react';
import { ArrowRight, AlertCircle, Globe, UserSearch } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideWhatsNext = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout 
        title="What's Next" 
        slideNumber="9" 
        totalSlides="35" 
        logoSrc={depointLogo} 
        componentName="SlideWhatsNext"
        footerTagline="We proved ourselves at scale, what will come next?"
        backgroundClass="bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="content-viewport h-full flex flex-col justify-center px-12 py-8">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
            
            {/* Card 1: Lessons Learned */}
            <div className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-9 h-9 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">Lessons Learned</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    What is missing to the other PH brands
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-red-600 font-semibold">
                    <span className="text-sm">Critical insights for future growth</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: International Expansion */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-9 h-9 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">Jollibee International Brands</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Currently using Zenput or other competing solutions
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold">
                    <span className="text-sm">Opportunity for platform consolidation</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Depoint US */}
            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <UserSearch className="w-9 h-9 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">Depoint US</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Finding the right president to lead our American expansion
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold">
                    <span className="text-sm">Strategic leadership for market entry</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </SlideLayout>
    </div>
  );
};

export default SlideWhatsNext;

