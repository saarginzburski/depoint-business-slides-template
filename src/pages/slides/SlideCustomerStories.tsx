import React from 'react';
import { Award, Star, TrendingUp, Users, Building2, Zap, Quote } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import mcdonaldsLogo from "@/assets/mcdonalds-logo-new.png";
import jollibeeLogo from "@/assets/jollibee-logo-new.png";

const SlideCustomerStories = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Trusted by Global Leaders"
        slideNumber="5"
        totalSlides="15"
        logoSrc={depointLogo}
      >
      {/* World-class design - optimized for perfect fit */}
      <div className="h-full flex flex-col justify-center py-6 max-w-7xl mx-auto">
        
        {/* Hero Grid Layout - Two Premium Brand Showcases */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          
          {/* Jollibee Showcase - Left Panel */}
          <div className="relative bg-white rounded-2xl border-2 border-red-100/50 shadow-hero overflow-hidden" style={{backgroundColor: 'white'}}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-white" style={{backgroundColor: 'white'}}></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center px-6 py-6">
              {/* Premium Logo Section */}
              <div className="text-center mb-4">
                <img src={jollibeeLogo} alt="Jollibee" className="h-20 mx-auto filter drop-shadow-lg" />
                <div className="w-12 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
              </div>
              
              {/* Metric Showcase - Large, Bold Numbers */}
              <div className="space-y-4 text-center">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-black text-jollibee-red leading-none mb-1 tracking-tight">1,331</div>
                  <div className="text-lg font-bold text-neutral-dark tracking-wide">Stores Live</div>
                </div>
                
                <div className="flex justify-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-neutral-dark mb-1">100+</div>
                    <div className="text-sm font-semibold text-muted-foreground">Franchisees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-neutral-dark mb-1">$799K</div>
                    <div className="text-sm font-semibold text-muted-foreground">ARR</div>
                  </div>
                </div>
                
                {/* Impact Highlight */}
                <div className="bg-white rounded-xl p-3 border border-enterprise-green/20" style={{backgroundColor: 'white'}}>
                  <div className="text-3xl font-black text-enterprise-green mb-1">+24%</div>
                  <div className="text-sm font-bold text-neutral-dark">Compliance Increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* McDonald's Showcase - Right Panel */}
          <div className="relative bg-white rounded-2xl border-2 border-yellow-100/50 shadow-hero overflow-hidden" style={{backgroundColor: 'white'}}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-white" style={{backgroundColor: 'white'}}></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center px-6 py-6">
              {/* Premium Logo Section */}
              <div className="text-center mb-4">
                <img src={mcdonaldsLogo} alt="McDonald's" className="h-20 mx-auto filter drop-shadow-lg" />
                <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
              </div>
              
              {/* Strategic Partnership Emphasis */}
              <div className="mb-4">
                <div className="bg-yellow-100 rounded-xl p-3 border-2 border-yellow-400 text-center shadow-enterprise">
                  <div className="text-sm font-black text-yellow-700 uppercase tracking-wider">Strategic</div>
                  <div className="text-lg font-black text-yellow-700">Co-Development Partner</div>
                </div>
              </div>
              
              {/* Metric Showcase */}
              <div className="space-y-4 text-center">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-black text-mcdonalds-gold leading-none mb-2 tracking-tight">232</div>
                  <div className="text-lg font-bold text-neutral-dark tracking-wide">Stores Live</div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-yellow-200/50" style={{backgroundColor: 'white'}}>
                  <div className="text-3xl font-black text-neutral-dark mb-1">$149K</div>
                  <div className="text-sm font-bold text-neutral-dark">Annual Recurring Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Trust Signal - Compact */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-3 bg-blue-50 rounded-xl px-6 py-2 border border-blue-200 shadow-card">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-lg font-bold text-blue-600 tracking-wide">Enterprise-Proven • De-Risked • Scale-Ready</span>
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      </SlideLayout>
      
    </div>
  );
};

export default SlideCustomerStories;