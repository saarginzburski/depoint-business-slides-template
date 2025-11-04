import React, { useState, useEffect } from 'react';
import { DollarSign, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

// Animated counter component
const AnimatedNumber: React.FC<{ value: string; duration?: number }> = ({ value, duration = 1000 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    // Extract numeric part for animation
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }
    
    const targetNum = parseFloat(numMatch[0]);
    const prefix = value.substring(0, numMatch.index);
    const suffix = value.substring(numMatch.index! + numMatch[0].length);
    const isDecimal = numMatch[0].includes('.');
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out animation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;
      
      const formatted = isDecimal 
        ? currentNum.toFixed(1)
        : Math.round(currentNum).toString();
      
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration]);
  
  return <>{displayValue}</>;
};

const SlideSolution = () => {
  return (
    <div className="relative w-full h-full bg-gray-50">
      <SlideLayout 
        title="From Chaos to Control" 
        slideNumber="3" 
        totalSlides="15" 
        logoSrc={depointLogo}
        componentName="SlideSolution"
      >
      {/* Clean, spacious layout with generous breathing room */}
      <div className="h-full flex flex-col justify-start pb-12 gap-10">
        
        {/* Inner Heading & Subhead - Narrative bridge */}
        <div className="text-center flex-shrink-0 space-y-4">
          <h2 className="text-4xl font-bold text-neutral-dark tracking-tight">
            The clarity every COO dreams of.
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            One platform unites data, people, and execution — in real time.
          </p>
        </div>

        {/* 4 Hero Outcome Tiles - Large numbers, minimal text */}
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto w-full px-8">
          {/* Tile 1: Margin Protection */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="w-10 h-10 text-green-600 stroke-[2]" strokeLinecap="round" strokeLinejoin="round" />
            </div>
            <div className="text-5xl font-black text-green-600 mb-3 tracking-tight">
              <AnimatedNumber value="+5%" />
            </div>
            <div className="text-base font-bold text-gray-900 mb-2">
              Margin Protection
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              Stop leaks. Lift EBITDA.
            </div>
          </div>
          
          {/* Tile 2: Compliance */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-10 h-10 text-orange-600 stroke-[2]" strokeLinecap="round" strokeLinejoin="round" />
            </div>
            <div className="text-5xl font-black text-orange-600 mb-3 tracking-tight">
              <AnimatedNumber value="98%" />
            </div>
            <div className="text-base font-bold text-gray-900 mb-2">
              Compliance
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              Fewer fines. Fewer fires.
            </div>
          </div>
          
          {/* Tile 3: Sales Saved */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-10 h-10 text-blue-600 stroke-[2]" strokeLinecap="round" strokeLinejoin="round" />
            </div>
            <div className="text-5xl font-black text-blue-600 mb-3 tracking-tight">
              <AnimatedNumber value="$280K" />
            </div>
            <div className="text-base font-bold text-gray-900 mb-2">
              Sales Saved / Store
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              Consistency customers trust.
            </div>
          </div>
          
          {/* Tile 4: Faster Resolution */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-10 h-10 text-purple-600 stroke-[2]" strokeLinecap="round" strokeLinejoin="round" />
            </div>
            <div className="text-5xl font-black text-purple-600 mb-3 tracking-tight">
              <AnimatedNumber value="4.2x" />
            </div>
            <div className="text-base font-bold text-gray-900 mb-2">
              Faster Resolution
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              Scale stores without scaling chaos.
            </div>
          </div>
        </div>

        {/* Payoff Line - Centered, impactful */}
        <div className="text-center flex-shrink-0">
          <p className="text-2xl font-semibold text-gray-800">
            Protect margin, reduce risk, and grow with confidence.
          </p>
        </div>

        {/* CFO-Friendly Footer - Subtle but persuasive */}
        <div className="text-center flex-shrink-0">
          <p className="text-sm text-gray-500 italic">
            EBITDA protection — the sexiest three letters your CFO has ever heard.
          </p>
        </div>
      </div>
      </SlideLayout>
      
    </div>
  );
};

export default SlideSolution;