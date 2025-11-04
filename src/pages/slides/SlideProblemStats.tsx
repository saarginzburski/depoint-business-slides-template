import React from 'react';
import { Monitor, Clock, Users } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideProblemStats = () => {
  return (
    <SlideLayout 
        title="The Real Cost of Losing Operational Control" 
        slideNumber="2" 
        totalSlides="15" 
        logoSrc={depointLogo} 
        componentName="SlideProblemStats"
        backgroundClass="bg-gradient-to-b from-white via-gray-50/30 to-gray-50/50"
        footerTagline="Turning Operational Noise Into Signal"
      >
        <div className="h-full flex flex-col justify-center pb-8 relative px-20">
          
          {/* Subtitle */}
          <div className="text-center mb-20">
            <h2 className="text-xl font-light text-gray-500 tracking-wide">
              When Enterprises Lose Sight of Their Data & Processes
            </h2>
          </div>

          {/* Three Horizontal Glass Bars */}
          <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
            
            {/* METRIC 1 - Blue - Systems */}
            <div className="group">
              <div 
                className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1E73FF 0%, #60A5FA 100%)',
                  boxShadow: '0 8px 32px rgba(30, 115, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 shadow-inner" style={{ boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)' }}></div>
                
                {/* Light reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                
                <div className="relative flex items-center gap-8 px-10 py-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Monitor className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Metric Number */}
                  <div className="flex-shrink-0 text-center min-w-[140px]">
                    <div className="text-7xl font-extralight text-white tracking-tight drop-shadow-lg">~9</div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-px h-16 bg-white/30"></div>
                  
                  {/* Label */}
                  <div className="flex-1">
                    <h3 className="text-xl font-normal text-white/95 leading-relaxed tracking-wide">
                      Disconnected Systems Managing Store & Workforce Data
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* METRIC 2 - Amber - Time */}
            <div className="group">
              <div 
                className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FF9E00 0%, #FACC15 100%)',
                  boxShadow: '0 8px 32px rgba(255, 158, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 shadow-inner" style={{ boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)' }}></div>
                
                {/* Light reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                
                <div className="relative flex items-center gap-8 px-10 py-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Clock className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Metric Number */}
                  <div className="flex-shrink-0 text-center min-w-[140px]">
                    <div className="text-7xl font-extralight text-white tracking-tight drop-shadow-lg">50%</div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-px h-16 bg-white/30"></div>
                  
                  {/* Label */}
                  <div className="flex-1">
                    <h3 className="text-xl font-normal text-white/95 leading-relaxed tracking-wide">
                      Of Management Time Lost to Manual Follow-Ups
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* METRIC 3 - Coral - Turnover */}
            <div className="group">
              <div 
                className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FF5733 0%, #FF7F50 100%)',
                  boxShadow: '0 8px 32px rgba(255, 87, 51, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 shadow-inner" style={{ boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)' }}></div>
                
                {/* Light reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                
                <div className="relative flex items-center gap-8 px-10 py-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Users className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Metric Number */}
                  <div className="flex-shrink-0 text-center min-w-[140px]">
                    <div className="text-7xl font-extralight text-white tracking-tight drop-shadow-lg">80%</div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-px h-16 bg-white/30"></div>
                  
                  {/* Label */}
                  <div className="flex-1">
                    <h3 className="text-xl font-normal text-white/95 leading-relaxed tracking-wide">
                      Average Annual Employee Turnover in Operations
                    </h3>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Dividing line above footer (handled by SlideLayout) */}
        </div>
      </SlideLayout>
  );
};

export default SlideProblemStats;
