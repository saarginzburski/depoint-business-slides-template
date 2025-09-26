import { CheckCircle, TrendingUp, Users, DollarSign, Zap, Brain, Shield, Globe, Star, Award, BarChart3, Target, Briefcase, UserCheck, Code, Handshake, Server, Clock, RefreshCw } from "lucide-react";
import depointLogo from "@/assets/depoint-logo-new.png";
import mcdonaldsLogo from "@/assets/mcdonalds-logo-new.png";
import jollibeeLogo from "@/assets/jollibee-logo-new.png";
const ExecutiveOnePager = () => {
  return <div className="w-full min-h-screen bg-gradient-premium font-['Inter'] text-foreground overflow-x-hidden">
      {/* Hero Section - Full Width Impact */}
      <section className="relative bg-gradient-hero text-white px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 order-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <span className="text-depoint-gold text-base sm:text-lg font-semibold tracking-wide uppercase mb-4 sm:mb-0">Enterprise Operations Intelligence</span>
                {/* Depoint Logo - Mobile/Tablet */}
                <div className="lg:hidden flex justify-center sm:justify-end">
                  <img src={depointLogo} alt="Depoint" className="h-16 sm:h-20 opacity-90 hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-hero font-black leading-tight mb-6">
                Built with <span className="text-mcdonalds-gold">McDonald's</span>.<br />
                Scaled by <span className="text-jollibee-red">Jollibee</span>.<br />
                <span className="text-depoint-gold">Trusted by Global Operators.</span><br />
              </h1>
              <p className="text-lg sm:text-xl font-medium opacity-95 mb-6 max-w-2xl">Thousands of stores. Millions of tasks. One data-first operations platform.</p>
              <p className="text-base sm:text-lg font-medium opacity-90 mb-8 max-w-2xl">The only data-first operations platform trusted by global restaurant chains. 2,500+ stores live. $1.4M ARR. Strategic investors onboard.</p>
              
              {/* Logo Row */}
              
              
            </div>
            <div className="lg:col-span-4 order-2">
              {/* Depoint Logo - Desktop */}
              <div className="hidden lg:flex justify-end items-start mb-8">
                <img src={depointLogo} alt="Depoint" className="h-24 opacity-90 hover:opacity-100 transition-opacity duration-200" />
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-3xl sm:text-4xl font-black text-depoint-gold mb-2">$1.4M</div>
                  <div className="text-base sm:text-lg font-semibold mb-4">Annual Recurring Revenue</div>
                  
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center mb-4">
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg">🌍</span>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-white">2,500+</div>
                      <div className="text-xs opacity-80">Stores</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg">💰</span>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-white">$5M Raise </div>
                      <div className="text-xs opacity-80">Open</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg">👥</span>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-white">15</div>
                      <div className="text-xs opacity-80">Lean Team</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg">🔁</span>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-white">100%</div>
                      <div className="text-xs opacity-80">Capital Efficient</div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Investor Summary */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-display font-black text-depoint-navy mb-4 sm:mb-6">
              The Operating System of Global Store Execution
            </h2>
            <p className="text-lg sm:text-xl text-enterprise-gray max-w-4xl mx-auto leading-relaxed">Depoint unifies execution, data, and intelligence into one data-first platform, purpose-built for global scale and continuous optimization. Think SAP power, with WhatsApp simplicity.</p>
            <div className="flex justify-center mt-6">
              <div className="bg-depoint-navy text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold">Data-Native · API-First · Franchise-Scale</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <div className="text-center p-8 bg-gradient-premium rounded-2xl shadow-card">
              <div className="w-16 h-16 bg-depoint-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-depoint-navy mb-4">Data-First Architecture</h3>
              <p className="text-enterprise-gray mb-4">Predictive insights, automated workflows, intelligent recommendations driving 50% faster task completion.</p>
              <div className="text-sm text-success-green font-semibold">Used in 1M+ checklists monthly</div>
            </div>
            <div className="text-center p-8 bg-gradient-premium rounded-2xl shadow-card">
              <div className="w-16 h-16 bg-depoint-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-depoint-navy mb-4">Enterprise Grade</h3>
              <p className="text-enterprise-gray mb-4">ISO compliant, 99.9% uptime, global deployment ready with enterprise configurability at scale.</p>
              <div className="text-sm text-success-green font-semibold">Running across 100+ franchise orgs</div>
            </div>
            <div className="text-center p-8 bg-gradient-premium rounded-2xl shadow-card">
              <div className="w-16 h-16 bg-depoint-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-depoint-navy mb-4">Real-Time Operations</h3>
              <p className="text-enterprise-gray mb-4">Live dashboards, instant alerts, mobile-first execution enabling immediate response to operational issues.</p>
              <div className="text-sm text-success-green font-semibold">Cut audit delays by 90%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Validation - Strategic Validation */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-section bg-premium-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-display font-black text-depoint-navy mb-4">
              Strategic Validation by Industry Leaders
            </h2>
            <p className="text-lg sm:text-xl text-enterprise-gray">
              Two of the world's largest QSR chains deploy and invest in Depoint.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-card border-2 border-gray-100">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <img src={mcdonaldsLogo} alt="McDonald's" className="w-8 h-8 sm:w-10 sm:h-10" />
                    <div>
                      <div className="font-bold text-depoint-navy text-sm sm:text-base">McDonald's Israel</div>
                      <div className="text-xs sm:text-sm text-enterprise-gray">Strategic Partner & Investor</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div><span className="font-semibold">260</span> stores deployed</div>
                    <div><span className="font-semibold">10-year</span> contract</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-card border-2 border-gray-100">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <img src={jollibeeLogo} alt="Jollibee" className="w-8 h-8 sm:w-10 sm:h-10" />
                    <div>
                      <div className="font-bold text-depoint-navy text-sm sm:text-base">Jollibee Foods</div>
                      <div className="text-xs sm:text-sm text-enterprise-gray">Global Deployment</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div><span className="font-semibold">1,300</span> stores live</div>
                    <div><span className="font-semibold">100+</span> franchisees</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-premium border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4 mb-6">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-depoint-gold flex-shrink-0 mt-1" />
                <blockquote className="text-base sm:text-lg italic text-enterprise-gray leading-relaxed">
                  "We decided to invest in Depoint because we believe that Depoint technology 
                  will optimize how we deliver operational instructions and fundamentally transform 
                  store execution across our global network."
                </blockquote>
              </div>
              <div className="border-l-4 border-depoint-gold pl-4">
                <div className="font-bold text-depoint-navy text-sm sm:text-base">Lior Hamisha</div>
                <div className="text-xs sm:text-sm text-enterprise-gray">Head of Commercial, McDonald's Israel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity & Strategic Position */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-display font-black text-depoint-navy mb-4">
              A $127B Category. We're Defining It.
            </h2>
            <p className="text-lg sm:text-xl text-enterprise-gray mb-6 sm:mb-8">Zero real competition in enterprise-scale, Data-first operations intelligence.</p>
            
            {/* Competitive landscape */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-4 opacity-50">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold">J</span>
                </div>
                <span className="text-gray-500 line-through text-sm sm:text-base">Jolt</span>
                <span className="text-red-500 text-lg sm:text-xl">❌</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 opacity-50">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold">Z</span>
                </div>
                <span className="text-gray-500 line-through text-sm sm:text-base">Zenput</span>
                <span className="text-red-500 text-lg sm:text-xl">❌</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 opacity-50">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold">M</span>
                </div>
                <span className="text-gray-500 line-through text-sm sm:text-base">MeazureUp</span>
                <span className="text-red-500 text-lg sm:text-xl">❌</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="space-y-6 sm:space-y-8 h-full">
              
              <div className="bg-gradient-hero text-white p-6 sm:p-8 rounded-2xl shadow-premium relative py-[32px]">
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs bg-white/20 rounded-full px-2 py-1">
                  Post-PMF, Scaling Phase
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Revenue Trajectory</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black mb-2 text-depoint-gold">$732K</div>
                    <div className="text-xs sm:text-sm opacity-80">2023 Actual</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black mb-2 text-depoint-gold">$972K</div>
                    <div className="text-xs sm:text-sm opacity-80">2024 Actual</div>
                  </div>
                  <div className="relative">
                    <div className="text-2xl sm:text-3xl font-black mb-2 text-success-green shadow-lg glow-effect">$1.65M</div>
                    <div className="text-xs sm:text-sm opacity-80">2025 Target</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm">Efficient growth, proven monetization. Capital efficiency.</div>
              </div>
              
              {/* Enterprise Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-6 sm:p-8 bg-gradient-premium rounded-xl border border-gray-200 flex flex-col items-center justify-center min-h-[120px]">
                  <div className="w-8 h-8 bg-depoint-navy rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-depoint-navy">3-10 years</div>
                  <div className="text-xs sm:text-sm text-enterprise-gray">Enterprise Contracts</div>
                </div>
                <div className="text-center p-6 sm:p-8 bg-gradient-premium rounded-xl border border-gray-200 flex flex-col items-center justify-center min-h-[120px]">
                  <div className="w-8 h-8 bg-depoint-navy rounded-full flex items-center justify-center mb-3">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-depoint-navy">85%</div>
                  <div className="text-xs sm:text-sm text-enterprise-gray">Pilot-to-Rollout</div>
                </div>
                <div className="text-center p-6 sm:p-8 bg-gradient-premium rounded-xl border border-gray-200 flex flex-col items-center justify-center min-h-[120px]">
                  <div className="w-8 h-8 bg-depoint-navy rounded-full flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-depoint-navy">&lt;60 days</div>
                  <div className="text-xs sm:text-sm text-enterprise-gray">Time-to-Value</div>
                </div>
              </div>
              
              {/* Strategic Exit Path - Enhanced with logos */}
              <div className="bg-premium-gray p-6 sm:p-8 rounded-xl border border-gray-200 min-h-[240px] flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-depoint-navy mb-4 sm:mb-6 text-center">Strategic Exit: Natural Fit for Global Platforms</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <span className="font-semibold text-depoint-navy text-sm sm:text-base">SAP</span>
                      </div>
                      <span className="text-xs sm:text-sm text-enterprise-gray">ERP Expansion</span>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <span className="font-semibold text-depoint-navy text-sm sm:text-base">ServiceNow</span>
                      </div>
                      <span className="text-xs sm:text-sm text-enterprise-gray">Workflow Intelligence</span>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">T</span>
                        </div>
                        <span className="font-semibold text-depoint-navy text-sm sm:text-base">Toast</span>
                      </div>
                      <span className="text-xs sm:text-sm text-enterprise-gray">Ops Execution for Restaurants</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs text-enterprise-gray bg-white px-3 py-1 rounded-full">Multiple strategic acquirer interest</span>
                </div>
              </div>
            </div>
            
            {/* Capital Deployment - Visual Grid Layout */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-premium border border-gray-200 mt-6 lg:mt-0 h-full flex flex-col">
              {/* Series A Badge */}
              <div className="flex justify-center mb-4">
                <span className="bg-success-green text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">OPEN ROUND — SERIES A</span>
              </div>
              
              {/* Title */}
              
              
              {/* Large stat callout */}
              <div className="text-center mb-6">
                <div className="text-2xl sm:text-3xl font-black text-depoint-navy">$5M Total Raise</div>
              </div>
              
              {/* 2x3 Grid Layout */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-grow">
                {/* Row 1 */}
                <div className="bg-gradient-premium rounded-lg border border-gray-100 p-3 sm:p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-depoint-navy" />
                    <div className="font-bold text-depoint-navy text-sm sm:text-base">Sales & GTM</div>
                    <div className="font-bold text-depoint-navy text-xl">36%</div>
                    <div className="text-xs text-enterprise-gray">Expand enterprise sales teams</div>
                  </div>
                </div>
                
                <div className="bg-gradient-premium rounded-lg border border-gray-100 p-3 sm:p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Brain className="w-6 h-6 text-depoint-navy" />
                    <div className="font-bold text-depoint-navy text-sm sm:text-base">AI & Product Dev</div>
                    <div className="font-bold text-depoint-navy text-xl">24%</div>
                    <div className="text-xs text-enterprise-gray">Enhance predictive models</div>
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="bg-gradient-premium rounded-lg border border-gray-100 p-3 sm:p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Globe className="w-6 h-6 text-depoint-navy" />
                    <div className="font-bold text-depoint-navy text-sm sm:text-base">Partners</div>
                    <div className="font-bold text-depoint-navy text-xl">14%</div>
                    <div className="text-xs text-enterprise-gray">Regional channels (APAC, EU)</div>
                  </div>
                </div>
                
                <div className="bg-gradient-premium rounded-lg border border-gray-100 p-3 sm:p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Server className="w-6 h-6 text-depoint-navy" />
                    <div className="font-bold text-depoint-navy text-sm sm:text-base">Infra Scaling</div>
                    <div className="font-bold text-depoint-navy text-xl">12%</div>
                    <div className="text-xs text-enterprise-gray">10,000+ location capacity</div>
                  </div>
                </div>
                
                {/* Row 3 */}
                <div className="bg-gradient-premium rounded-lg border border-gray-100 p-3 sm:p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <RefreshCw className="w-6 h-6 text-depoint-navy" />
                    <div className="font-bold text-depoint-navy text-sm sm:text-base">Runway</div>
                    <div className="font-bold text-depoint-navy text-xl">14%</div>
                    <div className="text-xs text-enterprise-gray">&gt;12 months post-break-even</div>
                  </div>
                </div>
                
                {/* Supporting stat box */}
                <div className="bg-gradient-hero text-white rounded-lg p-3 sm:p-4 text-center flex flex-col justify-center">
                  <div className="text-lg sm:text-xl font-bold mb-1">Strategic</div>
                  <div className="text-xs opacity-90">Growth Capital</div>
                </div>
              </div>
              
              {/* Enhanced Footer CTA */}
              
            </div>
          </div>
          
          {/* Market Leadership - Full Width Below */}
          <div className="mt-12 lg:mt-16">
            
          </div>
          
          {/* Optional microcopy */}
          <div className="text-center mt-8">
            <p className="text-lg text-enterprise-gray font-medium">🚀 Let's scale this category together.</p>
          </div>
        </div>
      </section>

      {/* Investor CTA - Strategic Focus */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-section bg-depoint-navy text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-display font-black mb-4 sm:mb-6">
            Backed by Operations. Built for Strategic Scale.
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90">
            Join McDonald's and Jollibee in revolutionizing store execution with AI-first operations intelligence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="p-6 lg:p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-4 text-depoint-gold" />
              <div className="text-lg sm:text-xl font-bold mb-4">Strategic Fit</div>
              <div className="text-xs sm:text-sm opacity-80">Depoint is a natural acquisition for ERP, workflow, and retail tech platforms.</div>
            </div>
            <div className="p-6 lg:p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-4 text-depoint-gold" />
              <div className="text-lg sm:text-xl font-bold mb-4">Validated Execution</div>
              <div className="text-xs sm:text-sm opacity-80">Used daily in 2,500+ stores, 15,000+ users, and 100+ franchise orgs.</div>
            </div>
            <div className="p-6 lg:p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-4 text-depoint-gold" />
              <div className="text-lg sm:text-xl font-bold mb-4">Capital Efficiency</div>
              <div className="text-xs sm:text-sm opacity-80">Break-even, lean team, and 3x expansion in progress.</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="hidden sm:block absolute bottom-4 left-4">
              <img src={depointLogo} alt="Depoint" className="h-6 sm:h-8 opacity-80 hover:opacity-100 transition-opacity duration-200" />
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="text-center mb-4 sm:mb-6 text-xs sm:text-sm italic opacity-80">
                Now raising $5M to scale globally. Join our lead investors.
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-depoint-gold">Executive Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <a href="https://www.linkedin.com/in/sginzburski/" className="bg-depoint-gold text-depoint-navy px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  Connect with CEO
                </a>
                <a href="https://depoint.ai/investors" className="bg-depoint-gold/20 border-2 border-depoint-gold px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-bold hover:bg-depoint-gold/30 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Investor Deck
                </a>
                <a href="https://calendar.app.google/CGnGa3uprrwdn2fU7" className="bg-white/20 border border-white/30 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  Schedule 15-min Call
                </a>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <div className="font-bold text-base sm:text-lg">Saar Ginzburski</div>
                <div className="text-xs sm:text-sm opacity-80 mb-2">CEO & Founder</div>
                <div className="text-xs sm:text-sm text-depoint-gold">saar@depoint.ai | depoint.ai</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ExecutiveOnePager;