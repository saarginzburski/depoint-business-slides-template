import React from 'react';
import { Building2, CheckCircle, Mail, Globe, Store, User, Check, DollarSign, Settings, BarChart, Smartphone, Database, Layers, Target, Shield, Users, Clock, Zap, Network, Award } from 'lucide-react';
import depointLogoBlack from '@/assets/Depoint-Logo-black.png';
import mcdonaldsLogo from '@/assets/mcdonalds-logo-real.png';
import jollibeeLogo from '@/assets/jollibee-logo-real.png';

const QuoteYarazinSela09092025 = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

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
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 lg:mb-10 pb-4 sm:pb-6 border-b border-slate-700 gap-4">
          <img src={depointLogoBlack} alt="Depoint" className="h-8 sm:h-10 lg:h-12 brightness-0 invert" />
          <div className="text-xs sm:text-sm lg:text-base text-slate-400 font-medium">
            QUOTE PROPOSAL • {currentDate.toUpperCase()}
          </div>
        </header>
        
        {/* Section 1: Headline */}
        <section className="mb-6 sm:mb-8 lg:mb-12 relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl"></div>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-2">Proposal for:</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight relative z-10">
              Yarazin Sela
            </h1>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight relative z-10">
            Depoint: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">The Operating System for Enterprise</span>
          </h3>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4 sm:mb-6 lg:mb-8 relative z-10">
            Bringing efficiency & transparency to process management in global chains
          </div>
          <div className="w-16 sm:w-24 lg:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4 sm:mb-6 lg:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
            <span className="text-white font-semibold">Trusted by global brands including McDonald's, Jollibee, and more</span> — enterprise-grade platform for seamless operations management.
          </p>
        </section>

        {/* Section 2: Platform Features */}
        <section className="mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 text-center">Platform Capabilities</h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4 sm:mb-6 lg:mb-8 mx-auto"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <Smartphone className="w-8 sm:w-10 h-8 sm:h-10 text-blue-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">Single platform for enterprise data, processes & people effectiveness</h3>
              <p className="text-slate-300 text-sm sm:text-base">Unified system integrating all operational aspects</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <Network className="w-8 sm:w-10 h-8 sm:h-10 text-yellow-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">Support for complex, multi-dimensional business hierarchies</h3>
              <p className="text-slate-300 text-sm sm:text-base">Manage complex organizational structures effortlessly</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl sm:col-span-2 lg:col-span-1">
              <Database className="w-8 sm:w-10 h-8 sm:h-10 text-orange-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">Hundreds of out-of-the-box, best-practice processes</h3>
              <p className="text-slate-300 text-sm sm:text-base">Pre-built workflows ready for immediate deployment</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <BarChart className="w-8 sm:w-10 h-8 sm:h-10 text-green-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">Customizable Client Dashboards</h3>
              <p className="text-slate-300 text-sm sm:text-base">Personalized dashboards showcasing metrics that matter most</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <Clock className="w-8 sm:w-10 h-8 sm:h-10 text-purple-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">Real-Time Data Updates</h3>
              <p className="text-slate-300 text-sm sm:text-base">Up-to-the-minute insights to drive informed decisions</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm border border-teal-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-teal-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">Embedded Analytics</h3>
              <p className="text-slate-300 text-sm sm:text-base">Seamlessly integrated dashboards for cohesive experience</p>
            </div>
          </div>
        </section>

        {/* Section 3: Client Success Stories */}
        <section className="mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 text-center">Trusted by Global Leaders</h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4 sm:mb-6 lg:mb-8 mx-auto"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img src={mcdonaldsLogo} alt="McDonald's" className="h-8 sm:h-10 lg:h-12" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">McDonald's</h3>
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 mb-2 sm:mb-3 lg:mb-4">Global QSR Leader</div>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg">Streamlined operations across thousands of locations with real-time compliance tracking and process optimization.</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img src={jollibeeLogo} alt="Jollibee" className="h-8 sm:h-10 lg:h-12" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Jollibee</h3>
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400 mb-2 sm:mb-3 lg:mb-4">Asia's Largest QSR Chain</div>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg">Enhanced franchise operations management with comprehensive dashboard analytics and mobile-first execution.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Custom Pricing for Yarazin Sela */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-b from-slate-800/30 to-slate-800/50 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 rounded-3xl border-t-4 border-t-blue-500/30 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Yarazin Sela - Pricing Proposal</h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-8 sm:mb-10 mx-auto"></div>
          
          {/* Payment Terms Notice */}
          <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Payment Terms</h3>
            <p className="text-slate-300 text-sm sm:text-base">
              <span className="font-bold text-blue-400">All prices are monthly rates.</span> Payment is collected quarterly (3 months) in advance.
            </p>
          </div>
          
          {/* Custom Pricing Table */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Monthly Pricing Structure</h3>
            
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-[500px] sm:min-w-0">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-2 sm:px-4 font-bold text-blue-400 text-sm sm:text-base"># of Emp per Site</th>
                      <th className="text-center py-3 px-2 sm:px-4 font-bold text-blue-400 text-sm sm:text-base"># of Stores</th>
                      <th className="text-center py-3 px-2 sm:px-4 font-bold text-blue-400 text-sm sm:text-base">Price per Store</th>
                      <th className="text-right py-3 px-2 sm:px-4 font-bold text-blue-400 text-sm sm:text-base">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-slate-300 text-sm sm:text-base">1-2</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">6</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">$10</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-bold text-green-400 text-sm sm:text-base">$60</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-slate-300 text-sm sm:text-base">3-7</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">17</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">$50</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-bold text-green-400 text-sm sm:text-base">$850</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-slate-300 text-sm sm:text-base">8-20</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">14</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">$100</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-bold text-green-400 text-sm sm:text-base">$1,400</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-slate-300 text-sm sm:text-base">21-40</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">5</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">$200</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-bold text-green-400 text-sm sm:text-base">$1,000</td>
                    </tr>
                    <tr className="border-b-2 border-blue-500/50">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-slate-300 text-sm sm:text-base">41+</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">3</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-slate-300 text-sm sm:text-base">$300</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-bold text-green-400 text-sm sm:text-base">$900</td>
                    </tr>
                    <tr className="bg-slate-800/50">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 font-bold text-white text-sm sm:text-base" colSpan={3}>Subtotal</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-bold text-blue-400 text-base sm:text-lg">$4,210</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <Settings className="w-8 sm:w-10 h-8 sm:h-10 text-blue-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Platform Fee</h3>
              <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Core platform access, infrastructure, and support</p>
              <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base font-medium text-blue-200">This fee includes unlimited usage for small, unoccupied kitchens</p>
              <div className="text-xl sm:text-2xl font-bold text-blue-400">$2,000</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <Globe className="w-8 sm:w-10 h-8 sm:h-10 text-purple-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Multi Language Support</h3>
              <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                <span className="font-semibold text-purple-300">Currently supported:</span> Hebrew/English side by side<br/>
                <span className="font-semibold text-purple-300">Enhanced option:</span> Real-time translations from any language to any language
              </p>
              <div className="text-xl sm:text-2xl font-bold text-purple-400">$1,500</div>
            </div>
          </div>

          {/* Total */}
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Total Investment</h3>
            <div className="text-4xl sm:text-5xl font-bold text-green-400 mb-2">$7,710</div>
            <p className="text-slate-300">Complete platform implementation for Yarazin Sela</p>
          </div>
        </section>

        {/* Section 5: Pilot Program Details */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Pilot Program</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mb-6 sm:mb-8 mx-auto"></div>
          
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl mb-6">
            <h3 className="text-xl font-bold text-white mb-6">Pilot Overview</h3>
            
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                The pilot period will begin through collaboration between our team and your team, led by Hadar, 
                to characterize the needs and content you want to examine.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                The pilot will be carried out in several restaurants/kitchens/stations to enable comparison between different units.
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg font-bold text-white mb-4">Setup Includes:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">100 working hours for characterization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">Implementation support</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">Team training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">HiBob system integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pilot Pricing */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl mb-6">
            <h3 className="text-xl font-bold text-white mb-6">Pilot Pricing</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Work hour cost:</span>
                  <span className="text-white font-bold">200 ₪</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Standard setup cost (100 hours):</span>
                  <span className="text-slate-400 line-through">20,000 ₪</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-bold">Pilot discount (75%):</span>
                  <span className="text-green-400 font-bold">-15,000 ₪</span>
                </div>
                <div className="border-t border-slate-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-lg">Total setup cost:</span>
                    <span className="text-green-400 font-bold text-xl">5,000 ₪</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-4">
                <h4 className="text-orange-400 font-bold mb-2">Pilot Duration</h4>
                <p className="text-slate-300 text-sm">
                  30 days from go-live date and actual start of employee system usage
                </p>
                <div className="mt-3 pt-3 border-t border-orange-400/30">
                  <p className="text-slate-300 text-sm">
                    Payment for system usage during pilot period according to attached price list, 
                    based on number of activated units.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Post-Pilot Benefits */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">After Pilot Period</h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-2">Additional 100 Hours - FREE</h4>
                <p className="text-slate-300">
                  An additional 100 hours will be provided at no cost for adaptation and individual 
                  characterization according to different countries and group sites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact Information */}
        <section className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 rounded-3xl border border-white/10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">THANK YOU</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 mb-6 sm:mb-8">QUESTIONS?</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Liron Samra</h4>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-base sm:text-lg">📞</span>
                    </div>
                    <span className="text-slate-300 text-base sm:text-lg">+972504653943</span>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <span className="text-slate-300 text-base sm:text-lg">lirons@depoint.ai</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 mt-6 sm:mt-8">
                  <p className="text-white font-medium text-sm sm:text-base">
                    Contact us today to schedule your consultation and begin your digital transformation journey.
                  </p>
                </div>
              </div>

              <div className="flex justify-center order-1 lg:order-2">
                <div className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 rounded-full overflow-hidden border-2 sm:border-4 border-white/20 shadow-2xl">
                  <img 
                    src="/lovable-uploads/40de6a5f-1d94-47ee-ad2b-8a6fdb93e010.png" 
                    alt="Liron Samra" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuoteYarazinSela09092025;