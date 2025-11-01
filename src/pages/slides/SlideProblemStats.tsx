import React from 'react';
import { Monitor, Clock, Users } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideProblemStats = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
      <SlideLayout 
        title="The Hidden Cost of Operational Chaos" 
        slideNumber="2" 
        totalSlides="15" 
        logoSrc={depointLogo} 
        componentName="SlideProblemStats"
      >
        <div className="h-full flex flex-col justify-between py-8">
          
          {/* Subtitle */}
          <div className="text-center px-12">
            <h2 className="text-2xl font-light text-gray-700">
              When Enterprises Lose Control of Their Data & Processes
            </h2>
          </div>

          {/* Three Circular Stats */}
          <div className="flex items-center justify-center gap-12 px-8 flex-1">
            
            {/* BLUE - Systems Chaos */}
            <div className="flex flex-col items-center gap-6 flex-1">
              <div className="relative">
                {/* Circle */}
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-white mb-2">~9</div>
                  </div>
                </div>
                {/* Icon Badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-lg">
                  <Monitor className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Disparate Systems for<br />Managing Store &<br />Employee Data
                </h3>
              </div>
            </div>

            {/* YELLOW - Time Waste */}
            <div className="flex flex-col items-center gap-6 flex-1">
              <div className="relative">
                {/* Circle */}
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-white mb-2">50%</div>
                  </div>
                </div>
                {/* Icon Badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white border-4 border-yellow-500 flex items-center justify-center shadow-lg">
                  <Clock className="w-10 h-10 text-yellow-600" />
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Of Management<br />Time Spent on<br />Chasing Store Managers
                </h3>
              </div>
            </div>

            {/* ORANGE - Turnover Crisis */}
            <div className="flex flex-col items-center gap-6 flex-1">
              <div className="relative">
                {/* Circle */}
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-white mb-2">80%</div>
                  </div>
                </div>
                {/* Icon Badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-orange-600" />
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Avg. Employee<br />Turnover Rate
                </h3>
              </div>
            </div>

          </div>


        </div>
      </SlideLayout>
      
      <SlideFooter text="Fragmented systems don't just waste time—they compound costs and drive talent away" />
    </div>
  );
};

export default SlideProblemStats;

