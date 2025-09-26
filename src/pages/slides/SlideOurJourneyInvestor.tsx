import React from 'react';
import { Globe, Handshake, Rocket } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideOurJourneyInvestor = () => {
  return (
    <SlideLayout
      title="From Pilots to Scale"
      slideNumber="4"
      totalSlides="14"
      logoSrc={depointLogo}
    >
      <div className="flex items-start gap-20 py-6 px-16">
        
        {/* Left: Timeline with 3 phases */}
        <div className="flex-1 space-y-16">
          
          {/* Phase 1: 2020-2021 Exploration */}
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Globe className="w-8 h-8" />
              </div>
              <div className="w-1 h-20 bg-orange-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-bold text-slate-900">2020–2021 | Exploration</h3>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Pilots Phase</span>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"Pilots with Zara, Nespresso, Tiv Taam, Kingstore. Validated adoption but fragmented demand."</p>
            </div>
          </div>

          {/* Phase 2: 2022 Inflection Point */}
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white">
                <Handshake className="w-8 h-8" />
              </div>
              <div className="w-1 h-20 bg-purple-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-bold text-slate-900">2022 | Inflection Point</h3>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Strategic Pivot</span>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"McDonald's 10-year agreement + strategic investment. Pivot to enterprise Operational Intelligence."</p>
            </div>
          </div>

          {/* Phase 3: 2023-2025 Scale */}
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <Rocket className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-bold text-slate-900">2023–2025 | Scale</h3>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Enterprise Expansion</span>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"Jollibee: 1,331 stores, $799K ARR • Greenwich: 108 stores, $19K ARR • Mary Grace: 71 stores, $43K ARR • Papa John's (USA): 29 stores, $11K ARR • Jollibee International pilot: 39 stores, $7K ARR"</p>
            </div>
          </div>
        </div>

        {/* Right: Enterprise Scale Today */}
        <div className="w-80 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">Enterprise Scale Today</h3>
          
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="text-4xl">👑</div>
              <div>
                <div className="text-4xl font-black text-slate-900">180+</div>
                <div className="text-lg font-medium text-slate-600">franchise owners</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-4xl">🏢</div>
              <div>
                <div className="text-4xl font-black text-slate-900">2,000+</div>
                <div className="text-lg font-medium text-slate-600">stores live worldwide</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-4xl">👥</div>
              <div>
                <div className="text-4xl font-black text-slate-900">15,000+</div>
                <div className="text-lg font-medium text-slate-600">people use Depoint daily</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-4xl">🌍</div>
              <div>
                <div className="text-4xl font-black text-slate-900">12</div>
                <div className="text-lg font-medium text-slate-600">enterprise brands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideOurJourneyInvestor;