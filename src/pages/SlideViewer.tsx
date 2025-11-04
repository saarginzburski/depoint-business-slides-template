import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { slideConfig, getSlideInfo } from './slides/slideConfig';
import PrintButton from '@/components/PrintButton';
import { SLIDE_CONFIG } from '@/lib/slideConfig';
import AuthHeader from '@/components/AuthHeader';

// Lazy load all slide components
const slideComponents = {
  SlideCover: lazy(() => import('./slides/SlideCover')),
  SlideExecutiveSummary: lazy(() => import('./slides/SlideExecutiveSummary')),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform')),
  SlideOurJourney: lazy(() => import('./slides/SlideOurJourney')),
  SlideOurJourneyInvestor: lazy(() => import('./slides/SlideOurJourneyInvestor')),
  SlideProblem: lazy(() => import('./slides/SlideProblem')),
  SlideProblemStats: lazy(() => import('./slides/SlideProblemStats')),
  SlideSolution: lazy(() => import('./slides/SlideSolution')),
  SlideSolutionOverview: lazy(() => import('./slides/SlideSolutionOverview')),
  SlideDigitizingOpsManual: lazy(() => import('./slides/SlideDigitizingOpsManual')),
  SlideFranchisorFranchisee: lazy(() => import('./slides/SlideFranchisorFranchisee')),
  SlideRealityNotChecklists: lazy(() => import('./slides/SlideRealityNotChecklists')),
  SlideJollibeeCase: lazy(() => import('./slides/SlideJollibeeCase')),
  SlideJollibeeOperationBook: lazy(() => import('./slides/SlideJollibeeOperationBook')),
  SlideWhatsNext: lazy(() => import('./slides/SlideWhatsNext')),
  SlidePlatformEcosystem: lazy(() => import('./slides/SlidePlatformEcosystem')),
  SlideInsightsEngine: lazy(() => import('./slides/SlideInsightsEngine')),
  SlideCustomerStories: lazy(() => import('./slides/SlideCustomerStories')),
  SlideCrossIndustryPlatform: lazy(() => import('./slides/SlideCrossIndustryPlatform')),
  SlideMarketOpportunity: lazy(() => import('./slides/SlideMarketOpportunity')),
  SlideCompetitiveLandscape: lazy(() => import('./slides/SlideCompetitiveLandscape')),
  SlideGTMStrategy: lazy(() => import('./slides/SlideGTMStrategy')),
  SlideGlobalBrands: lazy(() => import('./slides/SlideGlobalBrands')),
  SlideFinancial: lazy(() => import('./slides/SlideFinancial')),
  SlideStrategicFit: lazy(() => import('./slides/SlideStrategicFit')),
  SlideArchitectureOverview: lazy(() => import('./slides/SlideArchitectureOverview')),
  SlideTeam: lazy(() => import('./slides/SlideTeam')),
  SlideClosing: lazy(() => import('./slides/SlideClosing')),
  SlideIntegrations: lazy(() => import('./slides/SlideIntegrations')),
  SlideAppendices: lazy(() => import('./slides/SlideAppendices')),
  SlideDashboardsDemo: lazy(() => import('./slides/SlideDashboardsDemo')),
  SlideConsultingPartners: lazy(() => import('./slides/SlideConsultingPartners')),
  SlideDashboardIntro: lazy(() => import('./slides/SlideDashboardIntro')),
  SlideDashboardFeatures: lazy(() => import('./slides/SlideDashboardFeatures')),
  Slide360Management: lazy(() => import('./slides/Slide360Management')),
  SlideOutOfTheBox: lazy(() => import('./slides/SlideOutOfTheBox')),
  SlideAnalyticsPlatform: lazy(() => import('./slides/SlideAnalyticsPlatform')),
  SlideTaskComplianceDashboard: lazy(() => import('./slides/SlideTaskComplianceDashboard')),
  SlideUsersEngagementDashboard: lazy(() => import('./slides/SlideUsersEngagementDashboard')),
  SlideSalesManagementDashboard: lazy(() => import('./slides/SlideSalesManagementDashboard')),
  SlideEnterpriseStack: lazy(() => import('./slides/SlideEnterpriseStack')),
  SlideProductGoldStandardDashboard: lazy(() => import('./slides/SlideProductGoldStandardDashboard')),
  SlideCleanlinessConditionDashboard: lazy(() => import('./slides/SlideCleanlinessConditionDashboard')),
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
  const [availableSlides, setAvailableSlides] = useState<typeof slideConfig>([]);
  
  // Handle both numeric IDs (legacy) and component names (new system)
  const currentSlideId = slideId || 'SlideCover';
  const slideInfo = slideConfig.find(s => 
    s.id === currentSlideId || 
    s.component === currentSlideId ||
    s.id === parseInt(currentSlideId)
  );
  const deckName = decodeURIComponent(searchParams.get('deckName') || 'Investor Deck');
  const slidesParam = searchParams.get('slides');
  const componentsParam = searchParams.get('components');

  useEffect(() => {
    if (componentsParam) {
      const names = componentsParam.split(',').map((s) => s.trim()).filter(Boolean);
      const orderedSlides = names
        .map((name) => slideConfig.find((s) => s.component === name))
        .filter((s): s is typeof slideConfig[number] => Boolean(s));
      setAvailableSlides(orderedSlides);
    } else if (slidesParam && slidesParam !== 'all') {
      const slideIds = slidesParam
        .split(',')
        .map((n) => parseInt(n, 10))
        .filter((n) => !Number.isNaN(n));
      const orderedSlides = slideIds
        .map((id) => slideConfig.find((s) => s.id === id))
        .filter((s): s is typeof slideConfig[number] => Boolean(s));
      setAvailableSlides(orderedSlides);
    } else {
      setAvailableSlides(slideConfig);
    }
  }, [componentsParam, slidesParam]);

  useEffect(() => {
    if (availableSlides.length === 0) return;
    const idx = availableSlides.findIndex((s) => 
      s.id === currentSlideId || 
      s.component === currentSlideId ||
      s.id === parseInt(currentSlideId)
    );
    if (idx === -1) {
      const qs = searchParams.toString();
      navigate(`/deck/slide/${availableSlides[0].id}?${qs}`);
    }
  }, [availableSlides, currentSlideId, navigate, searchParams]);

  if (!slideInfo) {
    navigate('/deck/slide/SlideCover');
    return null;
  }

  const componentKey = slideInfo.component as keyof typeof slideComponents;
  const SlideComponent = slideComponents[componentKey];
  
  const handleNextSlide = () => {
    if (typeof window !== 'undefined' && navigate && availableSlides.length > 0) {
      const currentIndex = availableSlides.findIndex(slide => slide.id === currentSlideId);
      const nextIndex = (currentIndex + 1) % availableSlides.length;
      const nextId = availableSlides[nextIndex].id;
      const qs = searchParams.toString();
      navigate(`/deck/slide/${nextId}?${qs}`);
    }
  };

  const handlePrevSlide = () => {
    if (typeof window !== 'undefined' && navigate && availableSlides.length > 0) {
      const currentIndex = availableSlides.findIndex(slide => slide.id === currentSlideId);
      const prevIndex = currentIndex === 0 ? availableSlides.length - 1 : currentIndex - 1;
      const prevId = availableSlides[prevIndex].id;
      const qs = searchParams.toString();
      navigate(`/deck/slide/${prevId}?${qs}`);
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
      {/* Auth Header - Fixed position in top right */}
      <AuthHeader />
      
      <div className="relative" style={{ width: SLIDE_CONFIG.cssWidth }}>
        {/* Professional Navigation Bar - Fixed Layout */}
        <div className="grid grid-cols-3 items-center bg-slate-900 rounded-xl px-8 py-4 mb-6 border border-slate-700/50">
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
            <div className="bg-slate-800 rounded-lg px-4 py-2 border border-slate-600/50 max-w-xs">
              <span className="text-white font-medium text-sm truncate block">
                {availableSlides.findIndex(slide => slide.id === currentSlideId) + 1} / {availableSlides.length} - {slideInfo.name}
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
        <div className="bg-white rounded-lg overflow-hidden" style={{ height: SLIDE_CONFIG.cssHeight }}>
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
