import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { slideConfig, getSlideInfo } from './slides/slideConfig';
import PDFExporter from '@/components/PDFExporter';
import { SLIDE_CONFIG } from '@/lib/slideConfig';
import { supabase } from '@/integrations/supabase/client';

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
  const [availableSlides, setAvailableSlides] = useState<typeof slideConfig>([]);
  
  const currentSlideId = parseInt(slideId || '1');
  const slideInfo = getSlideInfo(currentSlideId);
  const deckName = decodeURIComponent(searchParams.get('deckName') || 'Investor Deck');
  const slidesParam = searchParams.get('slides');

  useEffect(() => {
    if (slidesParam) {
      const slideIds = slidesParam.split(',').map(Number);
      const filteredSlides = slideConfig.filter(slide => slideIds.includes(slide.id));
      setAvailableSlides(filteredSlides);
    } else {
      setAvailableSlides(slideConfig);
    }
  }, [slidesParam]);

  if (!slideInfo) {
    navigate('/deck/slide/1');
    return null;
  }

  const componentKey = slideInfo.component as keyof typeof slideComponents;
  const SlideComponent = slideComponents[componentKey];
  
  const handleNextSlide = () => {
    if (typeof window !== 'undefined' && navigate && availableSlides.length > 0) {
      const currentIndex = availableSlides.findIndex(slide => slide.id === currentSlideId);
      const nextIndex = (currentIndex + 1) % availableSlides.length;
      const nextId = availableSlides[nextIndex].id;
      const slidesQuery = slidesParam ? `&slides=${slidesParam}` : '';
      navigate(`/deck/slide/${nextId}?deckName=${encodeURIComponent(deckName)}${slidesQuery}`);
    }
  };

  const handlePrevSlide = () => {
    if (typeof window !== 'undefined' && navigate && availableSlides.length > 0) {
      const currentIndex = availableSlides.findIndex(slide => slide.id === currentSlideId);
      const prevIndex = currentIndex === 0 ? availableSlides.length - 1 : currentIndex - 1;
      const prevId = availableSlides[prevIndex].id;
      const slidesQuery = slidesParam ? `&slides=${slidesParam}` : '';
      navigate(`/deck/slide/${prevId}?deckName=${encodeURIComponent(deckName)}${slidesQuery}`);
    }
  };

  const handleBackToOverview = () => {
    if (typeof window !== 'undefined' && navigate) {
      navigate('/');
    }
  };

  // Remove the old printToPDF function since we're using PDFExporter component

  return (
    <>
      {/* Add responsive print styles */}
      <style>{`
        @media print {
          .slide-viewer-container {
            width: ${SLIDE_CONFIG.cssWidth} !important;
            height: ${SLIDE_CONFIG.cssHeight} !important;
            max-width: none !important;
            aspect-ratio: none !important;
          }
          .slide-viewer-slide {
            width: ${SLIDE_CONFIG.cssWidth} !important;
            height: ${SLIDE_CONFIG.cssHeight} !important;
            max-width: none !important;
            aspect-ratio: none !important;
          }
          .slide-viewer-nav {
            display: none !important;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
          }
          @page {
            size: legal landscape;
            margin: 0;
          }
        }
        
        @media screen {
          .slide-viewer-container {
            width: 100%;
            max-width: min(95vw, calc(95vh * ${SLIDE_CONFIG.aspectRatio}));
            aspect-ratio: ${SLIDE_CONFIG.width} / ${SLIDE_CONFIG.height};
          }
          .slide-viewer-slide {
            width: 100%;
            aspect-ratio: ${SLIDE_CONFIG.width} / ${SLIDE_CONFIG.height};
          }
        }
      `}</style>

      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="slide-viewer-container relative">
          {/* Professional Navigation Bar - Responsive */}
          <div className="slide-viewer-nav grid grid-cols-1 md:grid-cols-3 items-center bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-sm rounded-xl px-4 md:px-8 py-4 shadow-xl mb-6 border border-slate-700/50 gap-4 md:gap-0">
            {/* Left Section - Logo & Title */}
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-6">
              <img src="/lovable-uploads/96869f4f-a193-4264-973e-1221a0ec5fb9.png" alt="Depoint" className="h-6 md:h-8" />
              <div className="hidden md:block h-6 w-px bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm md:text-lg truncate">{deckName}</span>
              </div>
            </div>

            {/* Center Section - Navigation Buttons */}
            <div className="flex items-center justify-center gap-2 md:gap-4 order-3 md:order-2">
              <Button 
                onClick={handlePrevSlide}
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600/50 rounded-lg px-2 md:px-3 py-2 flex-shrink-0"
              >
                <ChevronLeft className="w-4 h-4 md:mr-1" />
                <span className="hidden md:inline">Previous</span>
              </Button>
              
              <Button 
                onClick={handleNextSlide}
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600/50 rounded-lg px-2 md:px-3 py-2 flex-shrink-0"
              >
                <span className="hidden md:inline">Next</span>
                <ChevronRight className="w-4 h-4 md:ml-1" />
              </Button>
            </div>

            {/* Right Section - Slide Info & Actions */}
            <div className="flex justify-center md:justify-end items-center gap-2 md:gap-4 order-2 md:order-3">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg px-2 md:px-4 py-2 border border-slate-600/50 max-w-xs">
                <span className="text-white font-medium text-xs md:text-sm truncate block">
                  {availableSlides.findIndex(slide => slide.id === currentSlideId) + 1} / {availableSlides.length}
                  <span className="hidden md:inline"> - {slideInfo.name}</span>
                </span>
              </div>
              
              <Button 
                onClick={handleBackToOverview}
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600/50 rounded-lg px-2 md:px-3 py-2"
              >
                <Home className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Overview</span>
              </Button>
            </div>
          </div>

          {/* Slide Container - Responsive with maintained aspect ratio */}
          <div className="slide-viewer-slide bg-white rounded-lg shadow-2xl overflow-hidden">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 md:h-32 w-16 md:w-32 border-b-2 border-blue-600"></div>
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
    </>
  );
};

export default SlideViewer;
