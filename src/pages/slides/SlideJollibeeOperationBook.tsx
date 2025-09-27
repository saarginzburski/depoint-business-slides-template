import React from 'react';
import { 
  Users, 
  Target, 
  CheckCircle, 
  Award, 
  Droplets, 
  Rocket, 
  Shield, 
  Zap, 
  ClipboardCheck, 
  HeadphonesIcon, 
  GraduationCap, 
  BookOpen 
} from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import jollibeeLogo from "@/assets/jollibee-logo-new.png";

const SlideJollibeeOperationBook = () => {
  const operationItems = [
    {
      icon: Users,
      title: "Shift management & endorsements",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Target,
      title: "Game planning & plan analysis", 
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: CheckCircle,
      title: "Station & food safety checklists",
      subtitle: "(with Bluetooth thermometer integration)",
      color: "bg-red-50 border-red-200", 
      iconColor: "text-red-600"
    },
    {
      icon: Award,
      title: "Golden Standard compliance",
      subtitle: "(flagship & leading products)",
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600"
    },
    {
      icon: Droplets,
      title: "Oil care & fryer management",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: Rocket,
      title: "New product launch toolkits",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Accreditations & certificates management",
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      icon: Zap,
      title: "Environmental, safety & security requirements",
      color: "bg-cyan-50 border-cyan-200",
      iconColor: "text-cyan-600"
    },
    {
      icon: ClipboardCheck,
      title: "Audits & control processes",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600"
    },
    {
      icon: HeadphonesIcon,
      title: "Ticketing & helpdesk for store issues",
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Training & micro-learning modules",
      color: "bg-violet-50 border-violet-200",
      iconColor: "text-violet-600"
    },
    {
      icon: BookOpen,
      title: "Knowledge base for continuous learning",
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Jollibee: Fully Digitized Operational Book"
        slideNumber="7"
        totalSlides="31"
        logoSrc={depointLogo}
        hideFooter={true}
      >
        <div className="content-viewport h-full flex flex-col overflow-auto py-4">
          
          {/* Header with Logo */}
          <div className="text-center mb-6">
            <img src={jollibeeLogo} alt="Jollibee" className="h-12 mx-auto mb-3" />
            <p className="text-lg text-neutral-700 max-w-5xl mx-auto">
              Every aspect of Jollibee's operations manual is now digitized, trackable, and optimized through Depoint's platform.
            </p>
          </div>

          {/* Operations Grid - 4 columns, 3 rows */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
              {operationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className={`text-center rounded-lg p-4 border shadow-sm ${item.color} hover:shadow-md transition-shadow duration-200`}
                  >
                    <IconComponent className={`w-8 h-8 mx-auto mb-3 ${item.iconColor}`} />
                    <h4 className="text-sm font-semibold text-neutral-800 leading-tight mb-1">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-xs text-neutral-600 leading-tight">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-6">
            <div className="inline-block bg-jollibee-red/10 rounded-lg px-6 py-3 border border-jollibee-red/20">
              <p className="text-lg font-bold text-jollibee-red">
                "Every operational procedure, digitized and synchronized across 1,324 locations."
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideJollibeeOperationBook;