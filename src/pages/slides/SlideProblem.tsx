import React from 'react';
import { X, CheckCircle, ArrowUp, Building2, Smartphone, BarChart3, Shield, FileText, Clock, Unlink, ArrowRight, TrendingUp, AlertTriangle, FileSpreadsheet, ClipboardList, MessageCircle, PenTool, Mail, Gauge, Wrench } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
const SlideProblem = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout title="The $1 Trillion Disconnect" slideNumber="2" totalSlides="15" logoSrc={depointLogo} hideFooter={true}>
      {/* Reserve space for humor footer so borders are visible */}
      <div className="h-full flex flex-col justify-center py-6 gap-6">
        
        {/* Section Labels */}
        

        {/* Main Comparison Boxes */}
        <div className="flex gap-6 flex-1">
          {/* LEFT BOX - Current State - Enhanced with Emotional Stress Elements */}
          <div className="relative flex-1 bg-red-600 rounded-2xl shadow-2xl border-2 border-red-700 overflow-hidden flex flex-col">
            {/* Red stress overlay for emotional impact */}
            <div className="absolute inset-0 bg-red-900/20 pointer-events-none"></div>
            
            {/* TODAY Tag */}
            <div className="absolute top-4 right-4 bg-red-800 text-white px-3 py-1 rounded-sm text-xs font-bold transform rotate-6 border-2 border-red-900 shadow-lg">
              TODAY ⚠️
            </div>
            
            {/* Header */}
            <div className="p-3 pb-2 flex-shrink-0 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <X className="w-5 h-5 text-white drop-shadow-lg" />
                <h3 className="text-lg font-bold text-white drop-shadow-lg">Chaos Today ⚠️</h3>
              </div>
              <p className="text-xs font-semibold text-red-100 uppercase">MESSY. SLOW. RISKY. FRUSTRATING.</p>
            </div>
            
            {/* Toolkit Title */}
            <div className="px-3 pb-1 flex-shrink-0">
              <div className="text-sm text-red-100 font-bold">Current "toolkit" frontline teams use:</div>
            </div>
            
            {/* Expanded Professional Messy Toolkit - Fills entire red space */}
            <div className="absolute inset-x-3 top-20 bottom-32 flex flex-col">
            {/* Scattered chaos elements filling the red area - removed overlapping items */}
            <div className="relative h-full">
                
                {/* Excel File - Top Left */}
                <div className="absolute top-4 left-2 bg-green-50 border-2 border-green-400 rounded-lg p-4 shadow-lg transform rotate-3 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <FileSpreadsheet className="w-6 h-6 text-green-700" />
                    <span className="text-base font-bold text-green-800">Excel_Audit_v14_FINAL.xlsx</span>
                  </div>
                  <div className="text-sm text-green-600">Last updated: 2 weeks ago</div>
                </div>
                
                {/* WhatsApp Chat - Top Right */}
                <div className="absolute top-8 right-4 bg-green-100 border-2 border-green-400 rounded-2xl p-4 shadow-lg transform -rotate-2 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-green-700" />
                    <span className="text-base font-bold text-green-800">WhatsApp Group</span>
                  </div>
                  <div className="text-sm text-green-700">"Audit updates?"</div>
                  <div className="text-sm text-green-600">"Anyone has latest file??"</div>
                </div>
                
                {/* Daily Tasks - Center Left */}
                <div className="absolute top-32 left-8 bg-yellow-100 border border-yellow-400 rounded p-4 shadow-lg transform -rotate-3 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <ClipboardList className="w-5 h-5 text-yellow-700" />
                    <span className="text-base font-semibold text-yellow-800">Daily Tasks</span>
                  </div>
                  <div className="text-sm text-yellow-600">(coffee stains)</div>
                </div>
                
                {/* Viber Chat - Center */}
                <div className="absolute top-28 right-12 bg-purple-100 border-2 border-purple-400 rounded-2xl p-4 shadow-lg transform rotate-1 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-purple-700" />
                    <span className="text-base font-bold text-purple-800">Viber</span>
                  </div>
                  <div className="text-sm text-purple-700">"Shift photos"</div>
                  <div className="text-sm text-purple-600">"Unclear handwriting again"</div>
                </div>
                
                {/* Handwritten Notes - Middle Left */}
                <div className="absolute top-56 left-4 bg-yellow-200 border border-yellow-500 rounded p-4 shadow-lg transform rotate-2 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <PenTool className="w-5 h-5 text-gray-700" />
                    <span className="text-base font-bold text-gray-800">Fridge temp logs</span>
                  </div>
                  <div className="text-sm text-gray-600">Handwritten notes</div>
                </div>
                
                {/* Email Chain - Bottom Right */}
                <div className="absolute bottom-32 right-2 bg-blue-50 border-2 border-blue-400 rounded-lg p-4 shadow-lg transform -rotate-1 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-blue-700" />
                    <span className="text-base font-bold text-blue-800">Email Chain</span>
                  </div>
                  <div className="text-sm text-blue-600">"Fwd: Re: Updated Procedures"</div>
                </div>
                
                {/* Additional scattered sticky note for density - only one in middle */}
                <div className="absolute top-44 right-8 bg-orange-200 border border-orange-400 rounded p-3 shadow-md transform -rotate-6 text-sm text-orange-700">
                  Call manager ASAP
                </div>
                
                {/* Background scattered papers effect */}
                <div className="absolute top-12 left-16 w-16 h-20 bg-white/30 border border-white/50 rounded transform rotate-45 opacity-50"></div>
                <div className="absolute top-40 right-20 w-12 h-16 bg-white/30 border border-white/50 rounded transform -rotate-12 opacity-50"></div>
                
            </div>
            </div>
            
            {/* Warning boxes - Aligned to bottom of parent box */}
            <div className="absolute bottom-4 left-3 right-3 flex-shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-1.5 bg-red-800/80 rounded border border-red-900">
                  <AlertTriangle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">Manual paperwork</div>
                    <div className="text-xs text-red-200">No real-time visibility</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-1.5 bg-red-800/80 rounded border border-red-900">
                  <AlertTriangle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">Audit delays</div>
                    <div className="text-xs text-red-200">Weeks between issues and action</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-1.5 bg-red-800/80 rounded border border-red-900">
                  <AlertTriangle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">Scattered data</div>
                    <div className="text-xs text-red-200">Outdated, disconnected systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-gray-300 flex-shrink-0"></div>
          
          {/* RIGHT BOX - Depoint Solution - Enhanced with Calm/Relief Elements */}
          <div className="relative flex-1 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-enterprise border border-blue-200 overflow-hidden">
            {/* Calm blue/green gradient overlay for emotional peace */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-green-100/30 pointer-events-none"></div>
            
            {/* Background Pattern - Operations Flywheel (faint) */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border-4 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="text-xs font-bold text-gray-400 text-center">Execute<br />→ Measure<br />→ Analyze<br />→ Improve</div>
                </div>
              </div>
            </div>
            
            {/* LIVE Badge */}
            <div className="absolute top-4 right-4 bg-enterprise-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
              LIVE ✅
            </div>
            
            {/* Header */}
            <div className="p-4 pb-2 relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-electric-blue" />
                <h3 className="text-lg font-bold text-electric-blue">Operations Intelligence ✅</h3>
              </div>
              <p className="text-xs text-gray-600 italic">Digital, connected, predictive</p>
              <p className="text-xs font-semibold text-blue-700 mt-2">From firefighting every shift… to control, clarity, and peace of mind.</p>
            </div>
            
            {/* 4-Row Structured Content */}
            <div className="px-4 pb-2 space-y-2">
              
              {/* ROW 1 - Critical QSR Operational KPIs */}
              <div className="bg-white/80 rounded-lg p-3 border border-blue-200">
                <div className="grid grid-cols-5 gap-2">
                  {/* Overall Ops Score */}
                  <div className="bg-green-50 p-2 rounded text-center border border-green-300">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Gauge className="w-3 h-3 text-enterprise-green" />
                      <div className="text-xs text-enterprise-green">Overall Ops Score</div>
                    </div>
                    <div className="text-lg font-bold text-enterprise-green">94%</div>
                    <div className="text-xs text-gray-500">vs 83% industry avg</div>
                  </div>
                  
                  {/* Critical Issues Open */}
                  <div className="bg-orange-50 p-2 rounded text-center border border-orange-300">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <AlertTriangle className="w-3 h-3 text-subtle-orange" />
                      <div className="text-xs text-subtle-orange">Critical Issues</div>
                    </div>
                    <div className="text-lg font-bold text-subtle-orange">37</div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="bg-orange-200 text-orange-700 px-1 py-0.5 rounded text-xs">↑ Predictive alerts</div>
                    </div>
                  </div>
                  
                  {/* Equipment Units Down */}
                  <div className="bg-red-50 p-2 rounded text-center border border-red-300">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Wrench className="w-3 h-3 text-risk-red" />
                      <div className="text-xs text-risk-red">Equipment Down</div>
                    </div>
                    <div className="text-lg font-bold text-risk-red">12</div>
                    <div className="text-xs text-gray-500">Refrigeration, fryers</div>
                  </div>
                  
                  {/* Compliance Rate */}
                  <div className="bg-green-50 p-2 rounded text-center border border-green-300">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Shield className="w-3 h-3 text-enterprise-green" />
                      <div className="text-xs text-enterprise-green">Compliance</div>
                    </div>
                    <div className="text-lg font-bold text-enterprise-green">98%</div>
                    <div className="text-xs text-gray-500">Food safety ready</div>
                  </div>
                  
                  {/* Avg Response Time */}
                  <div className="bg-purple-50 p-2 rounded text-center border border-purple-300">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-purple-600" />
                      <div className="text-xs text-purple-600">Response Time</div>
                    </div>
                    <div className="text-lg font-bold text-purple-600">4.2</div>
                    <div className="text-xs text-gray-500">min vs weeks before</div>
                  </div>
                </div>
              </div>

              {/* ROW 2 - Operational KPIs (Progress Bars) - 4 Lines */}
              <div className="bg-white/80 rounded-lg p-3 border border-blue-200">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-enterprise-green rounded-full"></div>
                    <span className="text-xs font-medium w-16">Food Safety</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-enterprise-green h-2 rounded-full" style={{
                      width: '98%'
                    }}></div>
                    </div>
                    <span className="text-xs font-bold w-8">98%</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                    <span className="text-xs font-medium w-16">Service Quality</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-electric-blue h-2 rounded-full" style={{
                      width: '91%'
                    }}></div>
                    </div>
                    <span className="text-xs font-bold w-8">91%</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-xs font-medium w-16">Operational Efficiency</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{
                      width: '87%'
                    }}></div>
                    </div>
                    <span className="text-xs font-bold w-8">87%</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-subtle-orange rounded-full"></div>
                    <span className="text-xs font-medium w-16">Customer Satisfaction</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-subtle-orange h-2 rounded-full" style={{
                      width: '89%'
                    }}></div>
                    </div>
                    <span className="text-xs font-bold w-8">89%</span>
                  </div>
                </div>
              </div>

              {/* ROW 3 - Platform Features */}
              <div className="space-y-1 flex-shrink-0">
                <div className="flex items-center gap-2 p-2 bg-white/60 rounded border border-blue-200">
                  <BarChart3 className="w-4 h-4 text-electric-blue flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-neutral-dark">Real-time Dashboards</div>
                    <div className="text-xs text-gray-600">Instant visibility across operations</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-2 bg-white/60 rounded border border-blue-200">
                  <Shield className="w-4 h-4 text-enterprise-green flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-neutral-dark">Smart Risk Detection</div>
                    <div className="text-xs text-gray-600">Automated alerts before issues escalate</div>
                  </div>
                  <div className="text-xs bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">7 Live</div>
                </div>
                
                <div className="flex items-center gap-2 p-2 bg-white/60 rounded border border-blue-200">
                  <Smartphone className="w-4 h-4 text-subtle-orange flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-neutral-dark">Mobile-First Platform</div>
                    <div className="text-xs text-gray-600">Seamless workflows on any device</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
    
    {/* Custom Humor Footer */}
    <SlideFooter />
  </div>
);
};
export default SlideProblem;