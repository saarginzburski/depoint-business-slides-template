import React from 'react';
import { Brain, DollarSign, AlertTriangle, Shield, TrendingUp, ChevronRight, BarChart3, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideDashboardIntro = () => {
  const navigate = useNavigate();

  const dashboardCategories = [
    {
      title: "💰 Protect Margin",
      subtitle: "Control costs & eliminate waste",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      titleColor: "text-green-700",
      subtitleColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      icon: DollarSign,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      dashboards: [
        { name: "Oil Monitoring", slideId: 22, icon: "🛢️" },
        { name: "Issues Dashboard", slideId: 23, icon: "🔧" }
      ]
    },
    {
      title: "⚠️ Reduce Risk",
      subtitle: "Prevent failures & avoid penalties",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      titleColor: "text-orange-700",
      subtitleColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      icon: AlertTriangle,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      dashboards: [
        { name: "Equipment Monitoring", slideId: 24, icon: "⚙️" },
        { name: "Audit Report", slideId: 25, icon: "📋" },
        { name: "Task Compliance", slideId: 26, icon: "✅" }
      ]
    },
    {
      title: "🔒 Protect Revenue",
      subtitle: "Safeguard sales with consistent quality",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      titleColor: "text-blue-700",
      subtitleColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      icon: Shield,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      dashboards: [
        { name: "Product Gold Standard", slideId: 27, icon: "🏆" }
      ]
    },
    {
      title: "📈 Accelerate Growth",
      subtitle: "Drive revenue through execution speed & insights",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      titleColor: "text-purple-700",
      subtitleColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      icon: TrendingUp,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      dashboards: [
        { name: "Speed of Service", slideId: 28, icon: "⚡" },
        { name: "Users Engagement", slideId: 29, icon: "👥" },
        { name: "Sales Management", slideId: 30, icon: "💼" }
      ]
    }
  ];

  const handleDashboardClick = (slideId: number) => {
    navigate(`/investor-deck/slide/${slideId}`);
  };

  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="The Intelligence Layer: Why Dashboards Matter"
        slideNumber="20"
        totalSlides="31"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex flex-col px-6 py-3">
        
        {/* Central Message - 100% wide, reduced height */}
        <div className="mb-3 flex-shrink-0">
          <div className="bg-blue-600 rounded-xl px-6 py-3 text-white shadow-xl w-full">
            <div className="flex items-center gap-4">
              <div className="bg-white/15 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold leading-tight mb-2">
                  Dashboards are not features — they prove the unmatched depth of <span className="text-blue-200">Depoint's intelligence engine</span>
                </h3>
                <p className="text-sm text-blue-100 font-medium">
                  Each dashboard represents millions of data points transformed into strategic insight
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 4-Column Grid for better space utilization */}
        <div className="grid grid-cols-4 gap-3 flex-1 min-h-0">
          {dashboardCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className={`${category.bgColor} rounded-lg shadow-lg border-2 ${category.borderColor} p-3 flex flex-col hover:shadow-xl transition-all duration-200`}>
                {/* Category Header - Compact */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 ${category.iconBg} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`w-4 h-4 ${category.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm font-bold ${category.titleColor} leading-tight`}>{category.title}</h3>
                    <p className={`text-xs ${category.subtitleColor}`}>{category.subtitle}</p>
                  </div>
                </div>
                
                {/* Dashboard Buttons - Compact */}
                <div className="space-y-2 flex-1">
                  {category.dashboards.map((dashboard, dashIndex) => (
                    <button
                      key={dashIndex}
                      onClick={() => handleDashboardClick(dashboard.slideId)}
                      className={`w-full ${category.buttonColor} hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 rounded-lg px-3 py-2 text-white text-xs font-medium`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{dashboard.icon}</span>
                          <span className="truncate">{dashboard.name}</span>
                        </div>
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Stats Footer - Compact */}
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-3 h-3" />
                      Live
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Real-time
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
        
      </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideDashboardIntro;