import React from 'react';
import { Handshake, Rocket, Store, Users, Globe2 } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import mcdonaldsLogo from '@/assets/mcdonalds-logo-real.png';
import jollibeeLogo from '@/assets/jollibee-logo-real.png';

const SlideOurJourney = () => {
  return (
    <SlideLayout
      title="From Pilots to Global Scale"
      slideNumber="3"
      totalSlides="7"
      logoSrc={depointLogo}
    >
      {/* Clean, professional growth arc */}
      <div className="h-full flex items-center gap-16 py-12 px-8">
        
        {/* Left: Growth Journey - Progressive Scale */}
        <div className="flex-1 space-y-20">
          
          {/* Milestone 1: Global Proof - Small & Muted */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center shadow-sm">
              <div className="text-[10px] font-bold text-slate-400 mb-0.5">ZARA</div>
              <div className="text-[10px] font-bold text-slate-400">NESPRESSO</div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-700 mb-1">Global Proof</h3>
              <p className="text-sm text-slate-600">Pilots with Zara & Nespresso validated demand</p>
            </div>
          </div>

          {/* Milestone 2: McDonald's Bet - Medium, Logo Hero */}
          <div className="flex items-center gap-6">
            <div className="w-36 h-36 bg-yellow-50 rounded-xl border-2 border-yellow-200 flex items-center justify-center shadow-lg relative">
              <img src={mcdonaldsLogo} alt="McDonald's" className="h-32 w-32 object-contain" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <Handshake className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 mb-2">McDonald's Bet</h3>
              <p className="text-base font-bold text-yellow-700">10-year contract + strategic investor</p>
            </div>
          </div>

          {/* Milestone 3: Jollibee at Scale - Large & Bold, Logo Hero */}
          <div className="flex items-center gap-6">
            <div className="w-44 h-44 bg-red-50 rounded-xl border-3 border-red-300 flex items-center justify-center shadow-xl relative">
              <img src={jollibeeLogo} alt="Jollibee" className="h-36 w-36 object-contain" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Jollibee at Scale</h3>
              <p className="text-lg font-bold text-red-600 mb-1">1,300+ stores live in weeks, 95%+ compliance</p>
            </div>
          </div>
        </div>

        {/* Flow Arrow - Connected to Jollibee */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-red-500 rounded-full"></div>
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-red-600 mt-1"></div>
          <div className="text-xs font-bold text-slate-600 mt-3 text-center">
            PROVEN<br/>RESULTS
          </div>
        </div>

        {/* Right: Enterprise Scale Today - Doubled Size */}
        <div className="w-96 bg-white rounded-xl border-2 border-slate-200 p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Enterprise Scale Today</h3>
          
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="text-4xl">👑</div>
              <div>
                <div className="text-4xl font-black text-slate-900">100+</div>
                <div className="text-lg font-medium text-slate-600">franchise owners</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-4xl">🏬</div>
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

export default SlideOurJourney;