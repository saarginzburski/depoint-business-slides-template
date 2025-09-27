import React from 'react';
import { X, CheckCircle, ArrowUp, Building2, Smartphone, BarChart3, Shield, FileText, Clock, Unlink, ArrowRight, TrendingUp, AlertTriangle, FileSpreadsheet, ClipboardList, MessageCircle, PenTool, Mail, Gauge, Wrench } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
const SlideProblem = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout title="The $1 Trillion Disconnect" slideNumber="2" totalSlides="15" logoSrc={depointLogo} componentName="SlideProblem">
      {/* Reserve space for humor footer so borders are visible */}
      <div className="h-full flex flex-col justify-center py-6 gap-6">
        
        {/* Section Labels */}
        

        {/* Main Comparison Boxes */}
        <div className="flex gap-6 flex-1">
          {/* LEFT BOX - Current State - Apple-grade flat design */}
          <div className="relative flex-1 bg-pillar-risk/80 rounded-2xl border-2 border-pillar-risk overflow-hidden flex flex-col">
            {/* Flat stress overlay for emotional impact */}
            <div className="absolute inset-0 bg-pillar-risk/10 pointer-events-none"></div>
            
            {/* TODAY Tag - straightened */}
            <div className="absolute top-4 right-4 bg-pillar-risk text-white px-3 py-1 rounded text-xs font-bold border-2 border-red-800">
              TODAY ⚠️
            </div>
            
            {/* Header */}
            <div className="p-3 pb-2 flex-shrink-0 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <X className="w-5 h-5 text-white" />
                <h3 className="slide-subhead text-white">Chaos Today ⚠️</h3>
              </div>
              <p className="slide-caption text-red-100 uppercase">MESSY. SLOW. RISKY. FRUSTRATING.</p>
            </div>
            
            {/* Toolkit Title */}
            <div className="px-3 pb-1 flex-shrink-0">
              <div className="slide-body text-red-100 font-bold">Current "toolkit" frontline teams use:</div>
            </div>
            
            {/* REDUCED chaos elements - fewer items, straightened alignment */}
            <div className="absolute inset-x-3 top-20 bottom-32 flex flex-col">
            <div className="relative h-full">
                
                {/* Excel File - Top Left - straightened */}
                <div className="absolute top-4 left-2 bg-green-50 border border-green-400 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <FileSpreadsheet className="w-5 h-5 text-green-700" />
                    <span className="text-sm font-bold text-green-800">Excel_Audit_v14_FINAL.xlsx</span>
                  </div>
                  <div className="text-xs text-green-600">Last updated: 2 weeks ago</div>
                </div>
                
                {/* WhatsApp Group - straightened */}
                <div className="absolute top-8 right-4 bg-green-50 border border-green-400 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-green-700" />
                    <span className="text-sm font-bold text-green-800">WhatsApp Group</span>
                  </div>
                  <div className="text-xs text-green-700">"Audit updates?"</div>
                  <div className="text-xs text-green-600">"Anyone has latest file??"</div>
                </div>
                
                {/* Daily Tasks - straightened, single item */}
                <div className="absolute top-32 left-8 bg-yellow-50 border border-yellow-400 rounded p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <ClipboardList className="w-4 h-4 text-yellow-700" />
                    <span className="text-sm font-semibold text-yellow-800">Daily Tasks</span>
                  </div>
                  <div className="text-xs text-yellow-600">(coffee stains)</div>
                </div>
                
                {/* Handwritten Notes - straightened */}
                <div className="absolute top-56 left-4 bg-yellow-50 border border-yellow-400 rounded p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <PenTool className="w-4 h-4 text-gray-700" />
                    <span className="text-sm font-bold text-gray-800">Fridge temp logs</span>
                  </div>
                  <div className="text-xs text-gray-600">Handwritten notes</div>
                </div>
                
            </div>
            </div>
            
            {/* Warning boxes - Apple-grade flat design */}
            <div className="absolute bottom-4 left-3 right-3 flex-shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-pillar-risk border border-red-800 rounded">
                  <AlertTriangle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="slide-body font-bold text-white">Manual paperwork</div>
                    <div className="slide-caption text-red-200">No real-time visibility</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-2 bg-pillar-risk border border-red-800 rounded">
                  <AlertTriangle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="slide-body font-bold text-white">Audit delays</div>
                    <div className="slide-caption text-red-200">Weeks between issues and action</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-2 bg-pillar-risk border border-red-800 rounded">
                  <AlertTriangle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="slide-body font-bold text-white">Scattered data</div>
                    <div className="slide-caption text-red-200">Outdated, disconnected systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-gray-300 flex-shrink-0"></div>
          
          {/* RIGHT BOX - Depoint Solution - Apple-grade flat design */}
          <div className="relative flex-1 bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden">
            {/* Clean flat background */}
            
            {/* Background Pattern - Operations Flywheel (faint) */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border-4 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="slide-caption font-bold text-gray-400 text-center">Execute<br />→ Measure<br />→ Analyze<br />→ Improve</div>
                </div>
              </div>
            </div>
            
            {/* LIVE Badge - flat design */}
            <div className="absolute top-4 right-4 bg-pillar-margin text-white px-4 py-2 rounded text-sm font-bold">
              LIVE ✅
            </div>
            
            {/* Header */}
            <div className="p-4 pb-2 relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-depoint-blue" />
                <h3 className="slide-subhead text-depoint-blue">Operations Intelligence ✅</h3>
              </div>
              <p className="slide-caption text-gray-600 italic">Digital, connected, predictive</p>
              <p className="slide-body font-semibold text-depoint-blue mt-2">From firefighting every shift… to control, clarity, and peace of mind.</p>
            </div>
            
            {/* 4-Row Structured Content */}
            <div className="px-4 pb-2 space-y-2">
              
              {/* ROW 1 - Critical QSR Operational KPIs */}
              <div className="bg-white/80 rounded-lg p-3 border border-blue-200">
                <div className="grid grid-cols-5 gap-2">
                  {/* Overall Ops Score - enhanced with +2pt font */}
                  <div className="bg-pillar-margin/10 p-2 rounded text-center border border-pillar-margin/30">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Gauge className="w-4 h-4 text-pillar-margin" />
                      <div className="slide-caption text-pillar-margin">Overall Ops Score</div>
                    </div>
                    <div className="text-xl font-bold text-pillar-margin">94%</div>
                    <div className="slide-caption text-gray-600">vs 83% industry avg</div>
                  </div>
                  
                  {/* Critical Issues Open - enhanced */}
                  <div className="bg-depoint-orange/10 p-2 rounded text-center border border-depoint-orange/30">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <AlertTriangle className="w-4 h-4 text-depoint-orange" />
                      <div className="slide-caption text-depoint-orange">Critical Issues</div>
                    </div>
                    <div className="text-xl font-bold text-depoint-orange">37</div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="bg-depoint-orange/20 text-depoint-orange px-1 py-0.5 rounded slide-caption">↑ Predictive alerts</div>
                    </div>
                  </div>
                  
                  {/* Equipment Units Down - enhanced */}
                  <div className="bg-pillar-risk/10 p-2 rounded text-center border border-pillar-risk/30">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Wrench className="w-4 h-4 text-pillar-risk" />
                      <div className="slide-caption text-pillar-risk">Equipment Down</div>
                    </div>
                    <div className="text-xl font-bold text-pillar-risk">12</div>
                    <div className="slide-caption text-gray-600">Refrigeration, fryers</div>
                  </div>
                  
                  {/* Compliance Rate - enhanced */}
                  <div className="bg-pillar-margin/10 p-2 rounded text-center border border-pillar-margin/30">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Shield className="w-4 h-4 text-pillar-margin" />
                      <div className="slide-caption text-pillar-margin">Compliance</div>
                    </div>
                    <div className="text-xl font-bold text-pillar-margin">98%</div>
                    <div className="slide-caption text-gray-600">Food safety ready</div>
                  </div>
                  
                  {/* Avg Response Time - enhanced */}
                  <div className="bg-pillar-growth/10 p-2 rounded text-center border border-pillar-growth/30">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-4 h-4 text-pillar-growth" />
                      <div className="slide-caption text-pillar-growth">Response Time</div>
                    </div>
                    <div className="text-xl font-bold text-pillar-growth">4.2</div>
                    <div className="slide-caption text-gray-600">min vs weeks before</div>
                  </div>
                </div>
              </div>

              {/* ROW 2 - Operational KPIs (Progress Bars) - Apple-grade flat */}
              <div className="bg-background/80 rounded-lg p-3 border border-gray-200">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pillar-margin rounded-full"></div>
                    <span className="slide-caption font-medium w-16">Food Safety</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-pillar-margin h-2 rounded-full" style={{
                      width: '98%'
                    }}></div>
                    </div>
                    <span className="slide-caption font-bold w-8">98%</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-depoint-blue rounded-full"></div>
                    <span className="slide-caption font-medium w-16">Service Quality</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-depoint-blue h-2 rounded-full" style={{
                      width: '91%'
                    }}></div>
                    </div>
                    <span className="slide-caption font-bold w-8">91%</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pillar-growth rounded-full"></div>
                    <span className="slide-caption font-medium w-16">Operational Efficiency</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-pillar-growth h-2 rounded-full" style={{
                      width: '87%'
                    }}></div>
                    </div>
                    <span className="slide-caption font-bold w-8">87%</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-depoint-orange rounded-full"></div>
                    <span className="slide-caption font-medium w-16">Customer Satisfaction</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-depoint-orange h-2 rounded-full" style={{
                      width: '89%'
                    }}></div>
                    </div>
                    <span className="slide-caption font-bold w-8">89%</span>
                  </div>
                </div>
              </div>

              {/* ROW 3 - Platform Features - Apple-grade flat */}
              <div className="space-y-1 flex-shrink-0">
                <div className="flex items-center gap-2 p-2 bg-background/60 rounded border border-gray-200">
                  <BarChart3 className="w-4 h-4 text-depoint-blue flex-shrink-0" />
                  <div className="flex-1">
                    <div className="slide-caption font-semibold text-foreground">Real-time Dashboards</div>
                    <div className="slide-caption text-gray-600">Instant visibility across operations</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-2 bg-background/60 rounded border border-gray-200">
                  <Shield className="w-4 h-4 text-pillar-margin flex-shrink-0" />
                  <div className="flex-1">
                    <div className="slide-caption font-semibold text-foreground">Smart Risk Detection</div>
                    <div className="slide-caption text-gray-600">Automated alerts before issues escalate</div>
                  </div>
                  <div className="slide-caption bg-pillar-growth/20 text-pillar-growth px-1 py-0.5 rounded">7 Live</div>
                </div>
                
                <div className="flex items-center gap-2 p-2 bg-background/60 rounded border border-gray-200">
                  <Smartphone className="w-4 h-4 text-depoint-orange flex-shrink-0" />
                  <div className="flex-1">
                    <div className="slide-caption font-semibold text-foreground">Mobile-First Platform</div>
                    <div className="slide-caption text-gray-600">Seamless workflows on any device</div>
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