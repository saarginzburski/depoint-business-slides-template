import React from 'react';
import { Zap, TrendingUp, RefreshCw, BarChart3 } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import solutionImage from '@/assets/depointsolution.png';

const SlideSolutionOverview = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Modernizing Operations:",
      description: "Replacing outdated, manual processes with streamlined, data-driven efficiency.",
      gradient: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Unlocking KPI Growth:",
      description: "Connecting disparate data sources to reveal hidden revenue and optimize KPIs.",
      gradient: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50"
    },
    {
      icon: RefreshCw,
      title: "Eliminating Repetitive Tasks:",
      description: "Flexible customization to maintain brand uniqueness.",
      gradient: "from-red-400 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: BarChart3,
      title: "Empowering Data-Driven Action:",
      description: "Advanced analytics powered by Google Looker for actionable insights.",
      gradient: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <SlideLayout 
      title="Our Solution" 
      slideNumber="4" 
      totalSlides="37" 
      logoSrc={depointLogo} 
      componentName="SlideSolutionOverview"
      backgroundClass="bg-gradient-to-b from-white to-gray-50/30"
    >
      <div className="h-full flex items-center gap-12 px-16 pb-8">
        
        {/* Left Side - Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            <img 
              src={solutionImage} 
              alt="Depoint Solution" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side - Solution Points */}
        <div className="flex-1 flex flex-col gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                    {solution.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </SlideLayout>
  );
};

export default SlideSolutionOverview;

