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
            <h2 className="text-2xl font-light text-gray-700 mb-2">
              When Enterprises Lose Control of Their Operations
            </h2>
            <p className="text-base text-gray-500 italic">
              The real cost isn't in the technology—it's in the chaos that follows
            </p>
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
                  Disconnected Systems
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Store operations, employee data, scheduling, inventory, compliance—each in its own silo, 
                  creating a maze of manual reconciliation
                </p>
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
                  Management Time Lost
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Half of every manager's day spent chasing updates, hunting for reports, 
                  and firefighting issues that should have been caught days earlier
                </p>
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
                  Employee Turnover Rate
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Frontline teams burned out by broken processes, unclear expectations, 
                  and tools that work against them instead of for them
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Impact Statement */}
          <div className="text-center px-12 pb-4">
            <div className="inline-block bg-red-50 border-2 border-red-200 rounded-xl px-8 py-4">
              <p className="text-lg font-semibold text-red-800">
                <span className="text-red-600">💸</span> This isn't just inefficiency—it's a compounding crisis. 
                <span className="block mt-2 text-base font-normal text-red-700">
                  Every hour managers spend chasing data is an hour not spent leading. 
                  Every employee who quits takes institutional knowledge with them.
                  Every disconnected system multiplies the risk of critical failures.
                </span>
              </p>
            </div>
          </div>

        </div>
      </SlideLayout>
      
      <SlideFooter text="Fragmented systems don't just waste time—they compound costs and drive talent away" />
    </div>
  );
};

export default SlideProblemStats;

