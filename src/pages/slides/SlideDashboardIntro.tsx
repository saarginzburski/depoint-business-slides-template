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
      color: "from-emerald-500 to-green-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      icon: DollarSign,
      dashboards: [
        { name: "Oil Monitoring Dashboard", slideId: 22, icon: "🛢️" },
        { name: "Issues Dashboard", slideId: 23, icon: "🔧" }
      ]
    },
    {
      title: "⚠️ Reduce Risk",
      subtitle: "Prevent failures & avoid penalties",
      color: "from-orange-500 to-red-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      icon: AlertTriangle,
      dashboards: [
        { name: "Equipment Monitoring", slideId: 24, icon: "⚙️" },
        { name: "Audit Report", slideId: 25, icon: "📋" },
        { name: "Task Compliance", slideId: 26, icon: "✅" }
      ]
    },
    {
      title: "🔒 Protect Revenue",
      subtitle: "Safeguard sales with consistent quality",
      color: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      icon: Shield,
      dashboards: [
        { name: "Product Gold Standard", slideId: 27, icon: "🏆" }
      ]
    },
    {
      title: "📈 Accelerate Growth",
      subtitle: "Drive revenue through execution speed & insights",
      color: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      icon: TrendingUp,
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
    <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-blue-50">
      <SlideLayout
        title="Dashboard Intelligence Hub"
        slideNumber="20"
        totalSlides="31"
        logoSrc={depointLogo}
        hideFooter={true}
      >
      <div className="h-full flex flex-col px-6 py-4">
        
        {/* Hero Section */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl mb-4">
            <div className="bg-white/20 rounded-full p-3">
              <Brain className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-1">Intelligence Layer</h2>
              <p className="text-blue-100 text-sm">Click any dashboard to explore live insights</p>
            </div>
          </div>
        </div>
        
        {/* Dashboard Categories Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          {dashboardCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col hover:shadow-2xl transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`w-7 h-7 ${category.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.subtitle}</p>
                  </div>
                </div>
                
                {/* Dashboard Cards */}
                <div className="space-y-3 flex-1">
                  {category.dashboards.map((dashboard, dashIndex) => (
                    <button
                      key={dashIndex}
                      onClick={() => handleDashboardClick(dashboard.slideId)}
                      className={`w-full group bg-gradient-to-r ${category.color} hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-4 text-white`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{dashboard.icon}</span>
                          <span className="font-semibold text-sm">{dashboard.name}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Stats Footer */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-3 h-3" />
                      Live Analytics
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