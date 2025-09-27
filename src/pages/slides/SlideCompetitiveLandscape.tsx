import React from 'react';
import { Building2, Network, Globe, Store, Users, Zap, Shield, Database, CheckCircle } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';

const SlideCompetitiveLandscape = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Designed for a Complexity Others Can't Handle"
        slideNumber="11"
        totalSlides="15"
        logoSrc={depointLogo}
      >
        <div className="h-full flex flex-col justify-center py-6 max-w-7xl mx-auto">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          
          {/* Left Column - The Old Way */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm h-full flex flex-col justify-center">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">The Old Way</h2>
              <h3 className="text-xl text-gray-600 mb-4">(Digital Checklists)</h3>
              
              {/* Competitor Logos - Single Line */}
              <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-2 h-10 flex items-center justify-center min-w-[60px]">
                  <span className="text-xs font-bold text-gray-700">Zenput</span>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-2 h-10 flex items-center justify-center min-w-[60px]">
                  <span className="text-xs font-bold text-purple-600">Xenia</span>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-2 h-10 flex items-center justify-center min-w-[60px]">
                  <span className="text-xs font-bold text-teal-600">KNOW</span>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-2 h-10 flex items-center justify-center min-w-[60px]">
                  <span className="text-xs font-bold text-blue-600">Jolt</span>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg px-2 py-2 h-10 flex items-center justify-center min-w-[60px]">
                  <span className="text-xs font-bold text-blue-500">YOOBIC</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Competitors like Zenput offer <strong>digitized forms</strong>. They are simple tools for SMBs that provide a rearview mirror of what already happened.
              </p>
            </div>
            
            {/* Limitation badges */}
            <div className="space-y-3 text-center">
              <div className="bg-white border border-gray-300 rounded-lg p-3">
                <span className="text-sm text-gray-600">📋 Digital forms and checklists</span>
              </div>
              <div className="bg-white border border-gray-300 rounded-lg p-3">
                <span className="text-sm text-gray-600">🏪 SMB-focused tools</span>
              </div>
              <div className="bg-white border border-gray-300 rounded-lg p-3">
                <span className="text-sm text-gray-600">📊 Reactive reporting only</span>
              </div>
              <div className="bg-white border border-gray-300 rounded-lg p-3">
                <span className="text-sm text-gray-600">🚫 No enterprise integration</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Depoint */}
          <div className="bg-blue-600 rounded-xl p-8 shadow-2xl text-white h-full flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Depoint</h2>
              <h3 className="text-xl text-blue-100 mb-6">(The Intelligence Engine)</h3>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg text-blue-100 leading-relaxed">
                Depoint is an <strong className="text-white">enterprise-grade intelligence platform</strong>. We provide a GPS for the future.
              </p>
            </div>
            
            {/* Depoint advantages */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">Enterprise-Grade Architecture</h4>
                  <p className="text-blue-100 text-sm">Built for ERP/POS integration and global scale.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">Purpose-Built for Franchises</h4>
                  <p className="text-blue-100 text-sm">Manages the complexity of multi-unit, cross-country operations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">Predictive AI Engine</h4>
                  <p className="text-blue-100 text-sm">Our data flywheel turns execution into foresight.</p>
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

export default SlideCompetitiveLandscape;