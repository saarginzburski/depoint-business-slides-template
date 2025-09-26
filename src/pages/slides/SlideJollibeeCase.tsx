import React from 'react';
import { MapPin, Users, Building2, CheckCircle, Database, Network } from 'lucide-react';
import SlideLayout from '@/components/SlideLayout';
import SlideFooter from '@/components/SlideFooter';
import depointLogo from '@/assets/Depoint-Logo-black.png';
import jollibeeLogo from "@/assets/jollibee-logo-new.png";

const SlideJollibeeCase = () => {
  return (
    <div className="relative w-full h-full">
      <SlideLayout
        title="Jollibee: Scale & Complexity Made Simple"
        slideNumber="6"
        totalSlides="15"
        logoSrc={depointLogo}
        hideFooter={true}
      >
        <div className="content-viewport h-full flex flex-col overflow-auto">
          
          {/* Header with Logo */}
          <div className="text-center mb-6">
            <img src={jollibeeLogo} alt="Jollibee" className="h-16 mx-auto mb-4" />
            <p className="text-lg text-neutral-700 max-w-5xl mx-auto">
              With over 1,324 locations, Jollibee needed a system to unify corporate and franchisee operations — without sacrificing independence or compliance.
            </p>
          </div>

          {/* Scale & Structure */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">Scale & Structure</h3>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="text-3xl font-black text-jollibee-red mb-1">1,324</div>
                <div className="text-sm font-semibold text-neutral-700">Total Locations</div>
              </div>
              <div className="text-center bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-3xl font-black text-blue-600 mb-1">430</div>
                <div className="text-sm font-semibold text-neutral-700">Corporate-Owned</div>
              </div>
              <div className="text-center bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-3xl font-black text-green-600 mb-1">894</div>
                <div className="text-sm font-semibold text-neutral-700">Franchise-Operated</div>
              </div>
            </div>
            <div className="text-center mt-3">
              <span className="text-lg font-bold text-neutral-700">184 franchisees ranging from 2 to 60 stores each</span>
            </div>
          </div>

          {/* Operations Book Grid */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">Operations Book Digitized in Depoint</h3>
            <div className="grid grid-cols-4 gap-3 max-w-6xl mx-auto">
              <div className="text-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium text-neutral-700">Shift Management</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium text-neutral-700">Safety Checklists</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium text-neutral-700">Golden Standards</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                <Database className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium text-neutral-700">Oil Management</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">Results</h3>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
                <div className="text-2xl font-black text-green-600 mb-1">95%+</div>
                <div className="text-sm font-semibold text-neutral-700">First Week Compliance</div>
                <div className="text-xs text-neutral-600 mt-1">200+ VisMin stores</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 text-center">
                <div className="text-2xl font-black text-blue-600 mb-1">Full Rollout</div>
                <div className="text-sm font-semibold text-neutral-700">Weekly Deployments</div>
                <div className="text-xs text-neutral-600 mt-1">Targeting all 1,324 stores</div>
              </div>
            </div>
          </div>

          {/* Bottom Anchor */}
          <div className="text-center">
            <div className="inline-block bg-jollibee-red/10 rounded-lg px-6 py-3 border border-jollibee-red/20">
              <p className="text-lg font-bold text-jollibee-red">
                "From store-level shifts to enterprise-wide strategy — all in one platform."
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
      
      {/* Custom Humor Footer */}
      <SlideFooter />
    </div>
  );
};

export default SlideJollibeeCase;