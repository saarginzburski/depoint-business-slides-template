import React from 'react';
import { DollarSign, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import HumorFooter from '@/components/HumorFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideSolution = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout 
        title="From Chaos to Intelligence" 
        slideNumber="3" 
        totalSlides="15" 
        logoSrc={depointLogo}
        hideFooter={true}
      >
      {/* Content balanced for proper viewport fit within 78% content area */}
      <div className="h-full flex flex-col justify-center py-6 gap-6">
        
        {/* Hero Solution Statement */}
        <div className="text-center flex-shrink-0">
          <h2 className="text-3xl font-bold text-electric-blue mb-3">Operations Intelligence</h2>
          <p className="text-lg text-gray-600">Instead of scattered tools, one unified platform shows exactly what's happening</p>
        </div>

        {/* 4 Key Metrics - Properly sized for readability */}
        <div className="grid grid-cols-4 gap-5 max-w-6xl mx-auto">
          {/* Protect Margin */}
          <div className="bg-green-50 rounded-xl p-5 text-center border-2 border-green-200 shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <DollarSign className="w-7 h-7 text-green-600" />
            </div>
            <div className="text-3xl font-black text-green-600 mb-2">+5%</div>
            <div className="text-sm font-bold text-green-700 mb-1">Margin Protection Uplift</div>
            <div className="text-xs text-gray-600">Stop leaks. Lift EBITDA.</div>
          </div>
          
          {/* Reduce Risk */}
          <div className="bg-orange-50 rounded-xl p-5 text-center border-2 border-orange-200 shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="w-7 h-7 text-orange-600" />
            </div>
            <div className="text-3xl font-black text-orange-600 mb-2">98%</div>
            <div className="text-sm font-bold text-orange-700 mb-1">Compliance</div>
            <div className="text-xs text-gray-600">Fewer fines. Fewer fires.</div>
          </div>
          
          {/* Protect Revenue */}
          <div className="bg-blue-50 rounded-xl p-5 text-center border-2 border-blue-200 shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <Shield className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-3xl font-black text-blue-600 mb-2">$280K</div>
            <div className="text-sm font-bold text-blue-700 mb-1">Sales Saved Per Store</div>
            <div className="text-xs text-gray-600">Consistency customers trust.</div>
          </div>
          
          {/* Accelerate Growth */}
          <div className="bg-purple-50 rounded-xl p-5 text-center border-2 border-purple-200 shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-7 h-7 text-purple-600" />
            </div>
            <div className="text-3xl font-black text-purple-600 mb-2">4.2x</div>
            <div className="text-sm font-bold text-purple-700 mb-1">Faster Issue Resolution</div>
            <div className="text-xs text-gray-600">Scale stores without scaling chaos.</div>
          </div>
        </div>

        {/* Business Impact Statement */}
        <div className="bg-white rounded-xl shadow-card border p-5 max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-5 text-neutral-dark">What This Means for Your Business</h3>
          <div className="grid grid-cols-2 gap-4">
            
            {/* Protect Margin */}
            <div className="bg-white rounded-lg border-2 border-green-200 p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-green-700">💰 Protect Margin</h3>
                <p className="text-sm text-green-600">Stop leaks. Lift EBITDA.</p>
              </div>
            </div>
            
            {/* Reduce Risk */}
            <div className="bg-white rounded-lg border-2 border-orange-200 p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-orange-700">⚠️ Reduce Risk</h3>
                <p className="text-sm text-orange-600">Fewer fines. Fewer fires.</p>
              </div>
            </div>
            
            {/* Protect Revenue */}
            <div className="bg-white rounded-lg border-2 border-blue-200 p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-blue-700">🔒 Protect Revenue</h3>
                <p className="text-sm text-blue-600">Consistency customers trust.</p>
              </div>
            </div>
            
            {/* Accelerate Growth */}
            <div className="bg-white rounded-lg border-2 border-purple-200 p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-purple-700">📈 Accelerate Growth</h3>
                <p className="text-sm text-purple-600">Scale stores without scaling chaos.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <HumorFooter 
        text="If your staff are guessing, your P&L is too."
        avatarStyle="consultant"
        highlightWords={['guessing', 'P&L']}
        highlightColor="blue"
      />
    </div>
  );
};

export default SlideSolution;