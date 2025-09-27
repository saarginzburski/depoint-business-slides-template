import React, { lazy, Suspense } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { slideConfig, getSlideInfo, getNextSlideId, getPrevSlideId } from './slides/slideConfig';
import PDFExporter from '@/components/PDFExporter';
import { SLIDE_CONFIG } from '@/lib/slideConfig';

// Lazy load all slide components
const slideComponents = {
  SlideCover: lazy(() => import('./slides/SlideCover')),
  SlideExecutiveSummary: lazy(() => import('./slides/SlideExecutiveSummary')),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform')),
  SlideOurJourney: lazy(() => import('./slides/SlideOurJourney')),
  SlideOurJourneyInvestor: lazy(() => import('./slides/SlideOurJourneyInvestor')),
  SlideProblem: lazy(() => import('./slides/SlideProblem')),
  SlideSolution: lazy(() => import('./slides/SlideSolution')),
  SlideDigitizingOpsManual: lazy(() => import('./slides/SlideDigitizingOpsManual')),
  SlideFranchisorFranchisee: lazy(() => import('./slides/SlideFranchisorFranchisee')),
  SlideJollibeeCase: lazy(() => import('./slides/SlideJollibeeCase')),
  SlideJollibeeOperationBook: lazy(() => import('./slides/SlideJollibeeOperationBook')),
  SlidePlatformEcosystem: lazy(() => import('./slides/SlidePlatformEcosystem')),
  SlideInsightsEngine: lazy(() => import('./slides/SlideInsightsEngine')),
  SlideCustomerStories: lazy(() => import('./slides/SlideCustomerStories')),
  SlideCrossIndustryPlatform: lazy(() => import('./slides/SlideCrossIndustryPlatform')),
  SlideMarketOpportunity: lazy(() => import('./slides/SlideMarketOpportunity')),
  SlideCompetitiveLandscape: lazy(() => import('./slides/SlideCompetitiveLandscape')),
  SlideGTMStrategy: lazy(() => import('./slides/SlideGTMStrategy')),
  SlideFinancial: lazy(() => import('./slides/SlideFinancial')),
  SlideStrategicFit: lazy(() => import('./slides/SlideStrategicFit')),
  SlideTeam: lazy(() => import('./slides/SlideTeam')),
  SlideClosing: lazy(() => import('./slides/SlideClosing')),
  SlideIntegrations: lazy(() => import('./slides/SlideIntegrations')),
  SlideAppendices: lazy(() => import('./slides/SlideAppendices')),
  SlideDashboardsDemo: lazy(() => import('./slides/SlideDashboardsDemo')),
  SlideConsultingPartners: lazy(() => import('./slides/SlideConsultingPartners')),
  SlideDashboardIntro: lazy(() => import('./slides/SlideDashboardIntro')),
  SlideTaskComplianceDashboard: lazy(() => import('./slides/SlideTaskComplianceDashboard')),
  SlideUsersEngagementDashboard: lazy(() => import('./slides/SlideUsersEngagementDashboard')),
  SlideSalesManagementDashboard: lazy(() => import('./slides/SlideSalesManagementDashboard')),
  SlideEnterpriseStack: lazy(() => import('./slides/SlideEnterpriseStack')),
  SlideProductGoldStandardDashboard: lazy(() => import('./slides/SlideProductGoldStandardDashboard')),
  SlideSpeedOfServiceDashboard: lazy(() => import('./slides/SlideSpeedOfServiceDashboard')),
  SlideOilMonitoringDashboard: lazy(() => import('./slides/SlideOilMonitoringDashboard')),
  SlideEquipmentMonitoringDashboard: lazy(() => import('./slides/SlideEquipmentMonitoringDashboard')),
  SlideAuditReportDashboard: lazy(() => import('./slides/SlideAuditReportDashboard')),
  SlideIssuesDashboard: lazy(() => import('./slides/SlideIssuesDashboard')),
  SlideDashboardSummary: lazy(() => import('./slides/SlideDashboardSummary')),
};

const SlideViewer = () => {
  const { slideId } = useParams<{ slideId: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const currentSlideId = parseInt(slideId || '1');
  const slideInfo = getSlideInfo(currentSlideId);
  const deckName = decodeURIComponent(searchParams.get('deckName') || 'Investor Deck');

  if (!slideInfo) {
    navigate('/deck/slide/1');
    return null;
  }

  const componentKey = slideInfo.component as keyof typeof slideComponents;
  const SlideComponent = slideComponents[componentKey];
  
  const handleNextSlide = () => {
    if (typeof window !== 'undefined' && navigate) {
      const nextId = getNextSlideId(currentSlideId);
      navigate(`/deck/slide/${nextId}?deckName=${encodeURIComponent(deckName)}`);
    }
  };

  const handlePrevSlide = () => {
    if (typeof window !== 'undefined' && navigate) {
      const prevId = getPrevSlideId(currentSlideId);
      navigate(`/deck/slide/${prevId}?deckName=${encodeURIComponent(deckName)}`);
    }
  };

  const handleBackToOverview = () => {
    if (typeof window !== 'undefined' && navigate) {
      navigate('/');
    }
  };

  // Remove the old printToPDF function since we're using PDFExporter component

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="relative" style={{ width: SLIDE_CONFIG.cssWidth }}>
        {/* Professional Navigation Bar - Fixed Layout */}
        <div className="grid grid-cols-3 items-center bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-sm rounded-xl px-8 py-4 shadow-xl mb-6 border border-slate-700/50">
          {/* Left Section - Logo & Title */}
          <div className="flex items-center gap-6">
            <img src="/lovable-uploads/96869f4f-a193-4264-973e-1221a0ec5fb9.png" alt="Depoint" className="h-8" />
            <div className="h-6 w-px bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-lg">{deckName}</span>
            </div>
          </div>

          {/* Center Section - Navigation Buttons (Fixed Position) */}
          <div className="flex items-center justify-center gap-4">
            <Button 
              onClick={handlePrevSlide}
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 w-24 flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <Button 
              onClick={handleNextSlide}
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 w-24 flex-shrink-0"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Right Section - Slide Info & Actions */}
          <div className="flex justify-end items-center gap-4">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-600/50 max-w-xs">
              <span className="text-white font-medium text-sm truncate block">
                {currentSlideId} / {slideConfig.length} - {slideInfo.name}
              </span>
            </div>
            
            <Button 
              onClick={handleBackToOverview}
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2"
            >
              <Home className="w-4 h-4 mr-2" />
              Overview
            </Button>
          </div>
        </div>

        {/* Slide Container */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ height: SLIDE_CONFIG.cssHeight }}>
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          }>
            {SlideComponent ? (
              <SlideComponent />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-600 text-sm">
                  Unknown component: {slideInfo.component}
                </div>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SlideViewer;
