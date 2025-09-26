import React from 'react';
import { Building2, TrendingUp, Users, CheckCircle, Mail, Globe, Store, User, Check, DollarSign, Settings, BarChart, Smile, Network, Clock, Smartphone, Database, Layers, Target, Award, Zap, Shield } from 'lucide-react';
import depointLogoBlack from '@/assets/Depoint-Logo-black.png';
import depointLogoWhite from '@/assets/depoint-logo-white.png';
import mcdonaldsLogo from '@/assets/mcdonalds-logo-real.png';
import jollibeeLogo from '@/assets/jollibee-logo-real.png';

const InvestorOnePager = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-inter relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-32 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-56 h-56 bg-green-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 pb-4 sm:pb-6 border-b border-slate-700 gap-4">
          <img src={depointLogoBlack} alt="Depoint" className="h-10 sm:h-12 brightness-0 invert" />
          <div className="text-xs sm:text-sm text-slate-400 font-medium">
            CONFIDENTIAL INVESTOR BRIEF • Q3 2025
          </div>
        </header>
        
        {/* Section 1: Headline */}
        <section className="mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight relative z-10">
            Depoint: The System of Record for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Frontline Execution</span>
          </h1>
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-6 sm:mb-8 relative z-10">
            The SAP of Store Execution
          </div>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-300 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
            <span className="text-white font-semibold">Co-developed over 3 years with the world's most demanding QSR brands</span> — enterprise-grade, battle-tested, and ready to scale.
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
            Proven across 2,000+ stores in 8 global brands with measurable impact on operations, compliance, and profitability.
          </p>
        </section>

        {/* Section 2: KPI Bar (Operational Metrics) */}
        <section className="mb-8 sm:mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 sm:p-6 rounded-2xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-green-400/30">
              <Store className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 opacity-90" />
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">2,000+</div>
              <div className="text-xs sm:text-sm font-medium opacity-95">Stores Live</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 sm:p-6 rounded-2xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-blue-400/30">
              <Users className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 opacity-90" />
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">15,000</div>
              <div className="text-xs sm:text-sm font-medium opacity-95">Active Users</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 sm:p-6 rounded-2xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-orange-400/30">
              <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 opacity-90" />
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">95%+</div>
              <div className="text-xs sm:text-sm font-medium opacity-95">User Adoption</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 sm:p-6 rounded-2xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-green-400/30">
              <TrendingUp className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 opacity-90" />
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 drop-shadow-lg">Break-Even</div>
              <div className="text-xs sm:text-sm font-medium opacity-95">Achieved</div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Validation */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Strategic Validation</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-6 sm:mb-8 mx-auto"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img src={mcdonaldsLogo} alt="McDonald's" className="h-10 sm:h-12" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">McDonald's Partnership</h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">10-Year Agreement + Strategic Investment</div>
              <p className="text-slate-300 text-base sm:text-lg">Long-term commitment with equity backing from a global QSR leader.</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img src={jollibeeLogo} alt="Jollibee" className="h-10 sm:h-12" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Jollibee Scale Success</h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4">Corporate +1,300 Franchises</div>
              <p className="text-slate-300 text-base sm:text-lg">Scaled from corporate stores to 1,300+ franchises and initiated expansion into UK, Singapore & Brunei.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Market Problem & Solution */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-b from-slate-800/30 to-slate-800/50 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 rounded-3xl border-t-4 border-t-orange-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Problem */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-orange-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10">Market Problem</h2>
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-6 sm:mb-8 relative z-10">The $100B Blind Spot</div>
              <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 mb-6 sm:mb-8"></div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 relative z-10">
                70% of enterprise retail chains operate with fragmented, analog processes. 
                The $100B+ QSR and retail operations market lacks integrated systems of record 
                for frontline execution.
              </p>
              
              <div className="space-y-3 sm:space-y-4 relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10">
                  <div className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-white">Paper-Based Processes</div>
                    <div className="text-xs sm:text-sm text-slate-300">manual, error-prone, costly</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10">
                  <div className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-white">Fragmented Data Systems</div>
                    <div className="text-xs sm:text-sm text-slate-300">no unified visibility</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10">
                  <div className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-white">Reactive Management</div>
                    <div className="text-xs sm:text-sm text-slate-300">slow issue response across locations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl"></div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10">Solution Overview</h2>
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 sm:mb-8 relative z-10">Operations Intelligence</div>
              <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-6 sm:mb-8"></div>
              <p className="text-slate-200 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed relative z-10">
                Depoint provides comprehensive operations intelligence with real-time execution 
                tracking, predictive analytics, and automated workflow management across 
                distributed locations.
              </p>
              
              {/* Operations Dashboard mockup */}
              <div className="bg-slate-900/90 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    ● LIVE
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-white font-bold text-base sm:text-lg">Operations Dashboard</h3>
                  <div className="text-xs text-slate-400">Real-time Intelligence</div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-2 sm:p-3 text-center">
                    <div className="text-green-400 font-bold text-base sm:text-lg">98%</div>
                    <div className="text-xs text-slate-300">Compliance</div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-2 sm:p-3 text-center">
                    <div className="text-blue-400 font-bold text-base sm:text-lg">2.3min</div>
                    <div className="text-xs text-slate-300">Avg Response</div>
                  </div>
                  <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-2 sm:p-3 text-center">
                    <div className="text-orange-400 font-bold text-base sm:text-lg">15</div>
                    <div className="text-xs text-slate-300">Active Issues</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded border border-slate-600/30">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-slate-300">Store #432 - Daily Checklist</span>
                    </div>
                    <span className="text-xs text-green-400">Complete</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded border border-slate-600/30">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-slate-300">Store #156 - Temperature Alert</span>
                    </div>
                    <span className="text-xs text-orange-400">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Customer-Proven Impact */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 rounded-3xl border border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Customer-Proven Impact</h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-8 sm:mb-10 mx-auto"></div>
          
          {/* Financial & Business Metrics KPI Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 sm:p-6 rounded-2xl text-center shadow-2xl border border-green-400/30">
              <DollarSign className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 opacity-90" />
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">$1.26M</div>
              <div className="text-xs sm:text-sm font-medium opacity-95">ARR (Q3 2025)</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 sm:p-6 rounded-2xl text-center shadow-2xl border border-blue-400/30">
              <Target className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 opacity-90" />
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">40%</div>
              <div className="text-xs sm:text-sm font-medium opacity-95">Error Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 sm:p-6 rounded-2xl text-center shadow-2xl border border-orange-400/30">
              <Award className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 opacity-90" />
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">24%</div>
              <div className="text-xs sm:text-sm font-medium opacity-95">Compliance Lift</div>
            </div>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 text-white p-4 sm:p-6 rounded-2xl text-center shadow-2xl border border-slate-500/30">
              <Clock className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 opacity-90" />
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">60-Day</div>
              <div className="text-xs sm:text-sm font-medium opacity-95">Time-to-Value</div>
            </div>
          </div>

          {/* Pivot Timeline (3 Phases) */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Evolution Journey</h3>
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
              
              {/* Phase 1: Exploration */}
              <div className="flex-1 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                <div className="text-lg sm:text-xl font-bold text-white mb-2">2020–2021</div>
                <div className="text-base sm:text-lg font-bold text-blue-400 mb-3 sm:mb-4">Exploration</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Pilots across multiple verticals (Zara, Nespresso, Kingstore, Tiv Taam). 
                  Validated adoption, but demand was fragmented.
                </p>
              </div>

              {/* Phase 2: Inflection Point */}
              <div className="flex-1 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
                <div className="text-lg sm:text-xl font-bold text-white mb-2">2022</div>
                <div className="text-base sm:text-lg font-bold text-green-400 mb-3 sm:mb-4">Inflection Point</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Signed McDonald's with a 10-year agreement and strategic investment. 
                  Pivoted to enterprise Operational Intelligence focused on QSR.
                </p>
              </div>

              {/* Phase 3: Scale */}
              <div className="flex-1 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                <div className="text-lg sm:text-xl font-bold text-white mb-2">2023–2025</div>
                <div className="text-base sm:text-lg font-bold text-orange-400 mb-3 sm:mb-4">Scale</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Expanded to Jollibee (1,331 stores), added group brand Greenwich (108 stores), 
                  secured Mary Grace (71-store independent café/QSR), and entered the U.S. market 
                  via Papa John's franchise groups (29 stores).
                </p>
              </div>
            </div>
          </div>

          {/* Flagship Customer Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* McDonald's */}
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <img src={mcdonaldsLogo} alt="McDonald's" className="h-10" />
                <h3 className="text-lg font-bold text-white">McDonald's</h3>
              </div>
              <div className="text-lg font-bold text-yellow-400 mb-2">10-year agreement + strategic investor</div>
              <p className="text-slate-300 text-sm mb-3">232 stores live, $149K ARR</p>
            </div>

            {/* Jollibee */}
            <div className="bg-white/5 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              <div className="flex items-center gap-3 mb-4">
                <img src={jollibeeLogo} alt="Jollibee" className="h-10" />
                <h3 className="text-lg font-bold text-white">Jollibee</h3>
              </div>
              <div className="text-lg font-bold text-red-400 mb-2">Anchor scale-up customer</div>
              <p className="text-slate-300 text-sm mb-3">1,331 stores live, $799K ARR</p>
            </div>

            {/* Greenwich */}
            <div className="bg-white/5 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">GW</span>
                </div>
                <h3 className="text-lg font-bold text-white">Greenwich</h3>
              </div>
              <div className="text-lg font-bold text-orange-400 mb-2">(Jollibee Group)</div>
              <p className="text-slate-300 text-sm mb-3">108 stores live within Jollibee Foods portfolio</p>
            </div>

            {/* Mary Grace */}
            <div className="bg-white/5 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MG</span>
                </div>
                <h3 className="text-lg font-bold text-white">Mary Grace</h3>
              </div>
              <div className="text-lg font-bold text-green-400 mb-2">71-store independent café/QSR brand in the Philippines</div>
              <p className="text-slate-300 text-sm mb-3">Proof of traction beyond Jollibee ecosystem</p>
            </div>

            {/* Papa John's */}
            <div className="bg-white/5 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PJ</span>
                </div>
                <h3 className="text-lg font-bold text-white">Papa John's (USA)</h3>
              </div>
              <div className="text-lg font-bold text-blue-400 mb-2">29 stores live across two franchise groups</div>
              <p className="text-slate-300 text-sm mb-3">Early foothold in the largest QSR market</p>
            </div>
          </div>

          {/* Closing Takeaway */}
          <div className="text-center mt-8 sm:mt-10">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <p className="text-lg sm:text-xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  "Depoint has evolved from broad multi-vertical pilots into the enterprise system of record for frontline execution, scaling from &lt;$0.1M ARR in 2021 to $1.26M ARR in 2025 with flagship global brands including McDonald's and Jollibee."
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Competitive Advantages */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Built Like SAP. Loved Like WhatsApp.</h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-8 sm:mb-10 mx-auto"></div>
          
          {/* Platform Differentiators */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Platform Differentiators</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-blue-400 flex-shrink-0" />
                  <h4 className="text-lg sm:text-xl font-bold text-white">Enterprise-Grade Architecture</h4>
                </div>
                <p className="text-slate-300">Built for global QSR scale</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Smile className="w-8 sm:w-10 h-8 sm:h-10 text-green-400 flex-shrink-0" />
                  <h4 className="text-lg sm:text-xl font-bold text-white">Consumer-Grade Adoption</h4>
                </div>
                <p className="text-slate-300">95%+ adoption across frontline users</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Database className="w-8 sm:w-10 h-8 sm:h-10 text-orange-400 flex-shrink-0" />
                  <h4 className="text-lg sm:text-xl font-bold text-white">Powered by Google Elite Tools</h4>
                </div>
                <p className="text-slate-300">Natively integrated with Looker, BigQuery, Gemini AI/ML</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Layers className="w-8 sm:w-10 h-8 sm:h-10 text-purple-400 flex-shrink-0" />
                  <h4 className="text-lg sm:text-xl font-bold text-white">Future-Proof Platform</h4>
                </div>
                <p className="text-slate-300">Modular, API-first, enabling continuous innovation and expansion</p>
              </div>
            </div>
          </div>

          {/* Disciplined Scale with ICPs */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Disciplined Scale with ICPs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center shadow-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">3-Year</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Co-Development with McDonald's & Jollibee</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center shadow-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Pilot-to-Rollout Conversion (when ICP aligned)</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center shadow-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">60-Day</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Time-to-Value proven at enterprise scale</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center shadow-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">3x</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Revenue Expansion post-rollout with Jollibee</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center shadow-2xl col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">6+ Year</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Contract Durations with ICPs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Market Opportunity */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Market Opportunity</h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-8 sm:mb-10 mx-auto"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="text-4xl sm:text-5xl font-bold text-green-400 mb-3 sm:mb-4">$1.26B</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Serviceable Addressable Market</div>
              <p className="text-slate-300">Bottom-up calculation based on current penetration.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-3 sm:mb-4">$14B</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Total Addressable Market</div>
              <p className="text-slate-300">Including adjacent market consolidation opportunities.</p>
            </div>
          </div>
        </section>

        {/* Section 8: Closing Section */}
        <section className="pb-6 sm:pb-8">
          <div className="bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-600/50 shadow-2xl">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-white text-xl sm:text-2xl font-semibold">
                Now scaling our enterprise-proven platform into new markets and verticals — let's talk.
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              {/* Left side - CEO info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg flex-shrink-0">
                  <img src="/lovable-uploads/bf8bf50e-2128-4c5a-8fc5-17f941d04c43.png" alt="Saar Ginzburski" className="w-full h-full object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Saar Ginzburski</h3>
                  <p className="text-slate-300 text-base sm:text-lg mb-3 sm:mb-4">CEO & Founder</p>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <div className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm sm:text-base">saar@depoint.ai</span>
                    </div>
                    <div className="bg-green-600 hover:bg-green-700 px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-white font-medium text-sm sm:text-base">+972-52-630-3332</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Logo and tagline */}
              <div className="text-center">
                <img src={depointLogoBlack} alt="Depoint" className="h-16 sm:h-20 mb-2 mx-auto brightness-0 invert" style={{width: 'auto'}} />
                <p className="text-slate-400 text-xs sm:text-sm font-medium mb-2">Enterprise-grade like SAP. Adoption loved like WhatsApp.</p>
                <p className="text-slate-300 text-base sm:text-lg font-medium">Enterprise Operations Intelligence</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default InvestorOnePager;