import React from 'react';
import { Monitor, Clock, Users } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideProblemStats = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <SlideLayout 
        title="The Hidden Cost of Operational Chaos" 
        slideNumber="2" 
        totalSlides="15" 
        logoSrc={depointLogo} 
        componentName="SlideProblemStats"
      >
        <div className="h-full flex flex-col justify-between py-6 relative">
          
          {/* Subtitle */}
          <div className="text-center px-12 mb-4">
            <h2 className="text-2xl font-light text-gray-600 tracking-wide">
              When Enterprises Lose Control of Their Data & Processes
            </h2>
          </div>

          {/* Three Circular Stats */}
          <div className="flex items-center justify-center gap-16 px-12 flex-1">
            
            {/* BLUE - Systems Chaos */}
            <div className="flex flex-col items-center gap-8 flex-1 group">
              <div className="relative transform transition-all duration-500 group-hover:scale-105">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Circle with enhanced gradient */}
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.7)] transition-all duration-500">
                  {/* Inner shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="text-8xl font-bold text-white drop-shadow-lg">~9</div>
                  </div>
                </div>
                
                {/* Icon Badge with better styling */}
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-gradient-to-br from-white to-blue-50 border-4 border-blue-500 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] group-hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.8)] transition-all duration-500">
                  <Monitor className="w-12 h-12 text-blue-600" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  Disparate Systems for<br />Managing Store &<br />Employee Data
                </h3>
              </div>
            </div>

            {/* YELLOW - Time Waste */}
            <div className="flex flex-col items-center gap-8 flex-1 group">
              <div className="relative transform transition-all duration-500 group-hover:scale-105">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-amber-400 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Circle with enhanced gradient */}
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(251,191,36,0.5)] group-hover:shadow-[0_25px_70px_-15px_rgba(251,191,36,0.7)] transition-all duration-500">
                  {/* Inner shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="text-8xl font-bold text-white drop-shadow-lg">50%</div>
                  </div>
                </div>
                
                {/* Icon Badge with better styling */}
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-gradient-to-br from-white to-amber-50 border-4 border-amber-500 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(251,191,36,0.6)] group-hover:shadow-[0_15px_40px_-10px_rgba(251,191,36,0.8)] transition-all duration-500">
                  <Clock className="w-12 h-12 text-amber-600" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  Of Management<br />Time Spent on<br />Chasing Store Managers
                </h3>
              </div>
            </div>

            {/* ORANGE - Turnover Crisis */}
            <div className="flex flex-col items-center gap-8 flex-1 group">
              <div className="relative transform transition-all duration-500 group-hover:scale-105">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Circle with enhanced gradient */}
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(249,115,22,0.5)] group-hover:shadow-[0_25px_70px_-15px_rgba(249,115,22,0.7)] transition-all duration-500">
                  {/* Inner shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="text-8xl font-bold text-white drop-shadow-lg">80%</div>
                  </div>
                </div>
                
                {/* Icon Badge with better styling */}
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-gradient-to-br from-white to-orange-50 border-4 border-orange-500 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] group-hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.8)] transition-all duration-500">
                  <Users className="w-12 h-12 text-orange-600" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  Avg. Employee<br />Turnover Rate
                </h3>
              </div>
            </div>

          </div>


        </div>
      </SlideLayout>
      
      <SlideFooter tagline="Fragmented systems don't just waste time—they compound costs and drive talent away" />
    </div>
  );
};

export default SlideProblemStats;

