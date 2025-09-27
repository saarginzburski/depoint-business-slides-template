import React from 'react';
import { X, CheckCircle, ArrowUp, Building2, Smartphone, BarChart3, Shield, FileText, Clock, Unlink, ArrowRight, TrendingUp, AlertTriangle, FileSpreadsheet, ClipboardList, MessageCircle, PenTool, Mail, Gauge, Wrench } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
const SlideProblem = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout title="The $1 Trillion Disconnect" slideNumber="2" totalSlides="15" logoSrc={depointLogo} componentName="SlideProblem">
        <div className="h-full flex flex-col justify-center py-gutter gap-gutter">
          
          {/* Main Comparison Boxes */}
          <div className="flex gap-gutter flex-1">
            {/* LEFT BOX - Current State - Reduced clutter, straightened alignment */}
            <div className="relative flex-1 bg-red-500 rounded-2xl border-2 border-red-600 overflow-hidden flex flex-col">
              {/* Subtle overlay for emotional impact */}
              <div className="absolute inset-0 bg-red-800/10 pointer-events-none"></div>
              
              {/* TODAY Tag - straightened */}
              <div className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 rounded text-xs font-bold border border-red-800">
                TODAY ⚠️
              </div>
              
              {/* Header */}
              <div className="p-card pb-2 flex-shrink-0 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-5 h-5 text-white" />
                  <h3 className="slide-subhead text-white">Chaos Today ⚠️</h3>
                </div>
                <p className="slide-caption text-red-100 uppercase font-semibold">MESSY. SLOW. RISKY. FRUSTRATING.</p>
              </div>
              
              {/* Toolkit Title */}
              <div className="px-card pb-2 flex-shrink-0">
                <div className="slide-body text-red-100 font-bold">Current "toolkit" frontline teams use:</div>
              </div>
              
              {/* REDUCED and STRAIGHTENED chaos elements */}
              <div className="absolute inset-x-card top-20 bottom-32 flex flex-col">
                <div className="relative h-full">
                  
                  {/* Reduced from 8+ elements to 4 key ones - all straightened (no rotation) */}
                  
                  {/* Excel File - Top Left - straightened */}
                  <div className="absolute top-4 left-4 bg-green-50 border border-green-300 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <FileSpreadsheet className="w-5 h-5 text-green-600" />
                      <span className="slide-body font-bold text-green-700">Excel_Audit_FINAL.xlsx</span>
                    </div>
                    <div className="slide-caption text-green-600">Last updated: 2 weeks ago</div>
                  </div>
                  
                  {/* WhatsApp Group - Top Right - straightened */}
                  <div className="absolute top-4 right-4 bg-green-50 border border-green-300 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      <span className="slide-body font-bold text-green-700">WhatsApp Updates</span>
                    </div>
                    <div className="slide-caption text-green-600">"Anyone has latest file??"</div>
                  </div>
                  
                  {/* Daily Tasks - Center Left - straightened */}
                  <div className="absolute top-20 left-4 bg-yellow-50 border border-yellow-300 rounded p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <ClipboardList className="w-5 h-5 text-yellow-600" />
                      <span className="slide-body font-semibold text-yellow-700">Daily Tasks (paper)</span>
                    </div>
                    <div className="slide-caption text-yellow-600">Coffee stains & unclear writing</div>
                  </div>
                  
                  {/* Email Chain - Center Right - straightened */}
                  <div className="absolute top-20 right-4 bg-blue-50 border border-blue-300 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="slide-body font-bold text-blue-700">Email Chains</span>
                    </div>
                    <div className="slide-caption text-blue-600">"Fwd: Re: Updated Procedures"</div>
                  </div>
                  
                </div>
              </div>
              
              {/* Warning boxes at bottom */}
              <div className="absolute bottom-4 left-card right-card flex-shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 p-2 bg-red-700/60 rounded border border-red-800">
                    <AlertTriangle className="w-4 h-4 text-yellow-200 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="slide-body font-bold text-white">Manual paperwork</div>
                      <div className="slide-caption text-red-200">No real-time visibility</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-red-700/60 rounded border border-red-800">
                    <AlertTriangle className="w-4 h-4 text-yellow-200 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="slide-body font-bold text-white">Scattered data</div>
                      <div className="slide-caption text-red-200">Disconnected systems</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-gray-200 flex-shrink-0"></div>
            
            {/* RIGHT BOX - Enhanced KPI tiles with +2pt fonts and better icons */}
            <div className="relative flex-1 bg-blue-50 rounded-2xl border border-blue-200 overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-4 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="slide-caption text-gray-300 text-center">Execute<br />→ Measure<br />→ Analyze<br />→ Improve</div>
                  </div>
                </div>
              </div>
              
              {/* LIVE Badge */}
              <div className="absolute top-4 right-4 bg-pillar-margin text-white px-4 py-2 rounded-full slide-caption font-bold animate-pulse">
                LIVE ✅
              </div>
              
              {/* Header */}
              <div className="p-card pb-2 relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-6 h-6 text-depoint-blue" />
                  <h3 className="slide-subhead text-depoint-blue">Operations Intelligence ✅</h3>
                </div>
                <p className="slide-caption text-gray-600 italic">Digital, connected, predictive</p>
                <p className="slide-body font-semibold text-depoint-blue mt-2">From firefighting every shift… to control, clarity, and peace of mind.</p>
              </div>
              
              {/* Enhanced KPI tiles with +2pt fonts */}
              <div className="px-card pb-2 space-y-2">
                
                {/* ROW 1 - Critical QSR Operational KPIs - Enhanced fonts +2pt */}
                <div className="bg-white/80 rounded-lg p-card border border-blue-200">
                  <div className="grid grid-cols-5 gap-2">
                    {/* Overall Ops Score */}
                    <div className="bg-green-50 p-2 rounded text-center border border-green-200">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Gauge className="w-4 h-4 text-pillar-margin" />
                        <div className="slide-body text-pillar-margin font-medium">Overall Score</div>
                      </div>
                      <div className="text-2xl font-bold text-pillar-margin">94%</div>
                      <div className="slide-caption text-gray-500">vs 83% industry</div>
                    </div>
                    
                    {/* Critical Issues Open */}
                    <div className="bg-orange-50 p-2 rounded text-center border border-orange-200">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <AlertTriangle className="w-4 h-4 text-depoint-orange" />
                        <div className="slide-body text-depoint-orange font-medium">Issues</div>
                      </div>
                      <div className="text-2xl font-bold text-depoint-orange">37</div>
                      <div className="bg-orange-100 text-orange-700 px-1 py-0.5 rounded slide-caption">↑ Predictive</div>
                    </div>
                    
                    {/* Equipment Units Down */}
                    <div className="bg-red-50 p-2 rounded text-center border border-red-200">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Wrench className="w-4 h-4 text-pillar-risk" />
                        <div className="slide-body text-pillar-risk font-medium">Equipment</div>
                      </div>
                      <div className="text-2xl font-bold text-pillar-risk">12</div>
                      <div className="slide-caption text-gray-500">Refrigeration, fryers</div>
                    </div>
                    
                    {/* Compliance Rate */}
                    <div className="bg-green-50 p-2 rounded text-center border border-green-200">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Shield className="w-4 h-4 text-pillar-margin" />
                        <div className="slide-body text-pillar-margin font-medium">Compliance</div>
                      </div>
                      <div className="text-2xl font-bold text-pillar-margin">98%</div>
                      <div className="slide-caption text-gray-500">Food safety ready</div>
                    </div>
                    
                    {/* Response Time */}
                    <div className="bg-purple-50 p-2 rounded text-center border border-purple-200">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-4 h-4 text-pillar-growth" />
                        <div className="slide-body text-pillar-growth font-medium">Response</div>
                      </div>
                      <div className="text-2xl font-bold text-pillar-growth">4.2</div>
                      <div className="slide-caption text-gray-500">min vs weeks</div>
                    </div>
                  </div>
                </div>

                {/* ROW 2 - Platform Features - Enhanced */}
                <div className="space-y-1 flex-shrink-0">
                  <div className="flex items-center gap-2 p-2 bg-white/60 rounded border border-blue-200">
                    <BarChart3 className="w-5 h-5 text-depoint-blue flex-shrink-0" />
                    <div className="flex-1">
                      <div className="slide-body font-semibold text-foreground">Real-time Dashboards</div>
                      <div className="slide-caption text-muted-foreground">Instant visibility across operations</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-white/60 rounded border border-blue-200">
                    <Shield className="w-5 h-5 text-pillar-margin flex-shrink-0" />
                    <div className="flex-1">
                      <div className="slide-body font-semibold text-foreground">Smart Risk Detection</div>
                      <div className="slide-caption text-muted-foreground">Automated alerts before issues escalate</div>
                    </div>
                    <div className="bg-purple-100 text-pillar-growth px-2 py-1 rounded slide-caption font-medium">7 Live</div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-white/60 rounded border border-blue-200">
                    <Smartphone className="w-5 h-5 text-depoint-orange flex-shrink-0" />
                    <div className="flex-1">
                      <div className="slide-body font-semibold text-foreground">Mobile-First Platform</div>
                      <div className="slide-caption text-muted-foreground">Seamless workflows on any device</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    </div>
  );
};

export default SlideProblem;