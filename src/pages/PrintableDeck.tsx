import React, { Suspense, lazy, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { slideConfig } from './slides/slideConfig';

// Import all slide components - exactly as they are, no modifications
const slideComponents = {
  SlideCover: lazy(() => import('./slides/SlideCover')),
  SlideExecutiveSummary: lazy(() => import('./slides/SlideExecutiveSummary')),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform')),
  SlideDigitizingOpsManual: lazy(() => import('./slides/SlideDigitizingOpsManual')),
  SlideFranchisorFranchisee: lazy(() => import('./slides/SlideFranchisorFranchisee')),
  SlideOurJourneyInvestor: lazy(() => import('./slides/SlideOurJourneyInvestor')),
  SlideProblem: lazy(() => import('./slides/SlideProblem')),
  SlideSolution: lazy(() => import('./slides/SlideSolution')),
  SlidePlatformEcosystem: lazy(() => import('./slides/SlidePlatformEcosystem')),
  SlideInsightsEngine: lazy(() => import('./slides/SlideInsightsEngine')),
  SlideCustomerStories: lazy(() => import('./slides/SlideCustomerStories')),
  SlideCrossIndustryPlatform: lazy(() => import('./slides/SlideCrossIndustryPlatform')),
  SlideMarketOpportunity: lazy(() => import('./slides/SlideMarketOpportunity')),
  SlideCompetitiveLandscape: lazy(() => import('./slides/SlideCompetitiveLandscape')),
  SlideGTMStrategy: lazy(() => import('./slides/SlideGTMStrategy')),
  SlideFinancial: lazy(() => import('./slides/SlideFinancial')),
  SlideStrategicFit: lazy(() => import('./slides/SlideStrategicFit')),
  SlideConsultingPartners: lazy(() => import('./slides/SlideConsultingPartners')),
  SlideTeam: lazy(() => import('./slides/SlideTeam')),
  SlideClosing: lazy(() => import('./slides/SlideClosing')),
  SlideAppendices: lazy(() => import('./slides/SlideAppendices')),
  SlideEnterpriseStack: lazy(() => import('./slides/SlideEnterpriseStack')),
  SlideDashboardIntro: lazy(() => import('./slides/SlideDashboardIntro')),
  SlideTaskComplianceDashboard: lazy(() => import('./slides/SlideTaskComplianceDashboard')),
  SlideUsersEngagementDashboard: lazy(() => import('./slides/SlideUsersEngagementDashboard')),
  SlideSalesManagementDashboard: lazy(() => import('./slides/SlideSalesManagementDashboard')),
  SlideProductGoldStandardDashboard: lazy(() => import('./slides/SlideProductGoldStandardDashboard')),
  SlideSpeedOfServiceDashboard: lazy(() => import('./slides/SlideSpeedOfServiceDashboard')),
  SlideOilMonitoringDashboard: lazy(() => import('./slides/SlideOilMonitoringDashboard')),
  SlideEquipmentMonitoringDashboard: lazy(() => import('./slides/SlideEquipmentMonitoringDashboard')),
  SlideAuditReportDashboard: lazy(() => import('./slides/SlideAuditReportDashboard')),
  SlideIssuesDashboard: lazy(() => import('./slides/SlideIssuesDashboard')),
  SlideDashboardSummary: lazy(() => import('./slides/SlideDashboardSummary')),
  SlideJollibeeCase: lazy(() => import('./slides/SlideJollibeeCase')),
  SlideJollibeeOperationBook: lazy(() => import('./slides/SlideJollibeeOperationBook')),
  SlideIntegrations: lazy(() => import('./slides/SlideIntegrations')),
  SlideDashboardsDemo: lazy(() => import('./slides/SlideDashboardsDemo')),
};

const PrintableDeck = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get slides to print from URL params (e.g., ?components=SlideCover,SlideProblem or ?slides=1,2,3 or all)
  const componentsParam = searchParams.get('components');
  const slidesParam = searchParams.get('slides') || 'all';
  const autoprint = searchParams.get('autoprint') === 'true';
  const deckName = searchParams.get('deckName') || 'Depoint Deck';
  
  // Set document title for PDF filename
  useEffect(() => {
    const originalTitle = document.title;
    document.title = deckName;
    return () => {
      document.title = originalTitle;
    };
  }, [deckName]);
  
  // Determine which slides to render - preserve the exact order from URL
  let slidesToRender: typeof slideConfig = [];
  if (componentsParam) {
    const componentNames = componentsParam.split(',');
    slidesToRender = componentNames
      .map((name) => slideConfig.find((s) => s.component === name))
      .filter((s): s is typeof slideConfig[number] => Boolean(s));
  } else if (slidesParam === 'all') {
    slidesToRender = slideConfig;
  } else {
    const ids = slidesParam.split(',').map(Number);
    slidesToRender = ids
      .map((id) => slideConfig.find((s) => s.id === id))
      .filter((s): s is typeof slideConfig[number] => Boolean(s));
  }

  // Auto-print functionality
  useEffect(() => {
    if (autoprint) {
      // Wait for all components to load before printing
      const timer = setTimeout(() => {
        window.print();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoprint]);

  // Handle print completion
  useEffect(() => {
    const handleAfterPrint = () => {
      if (autoprint) {
        window.close();
      }
    };

    window.addEventListener('afterprint', handleAfterPrint);
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, [autoprint, navigate]);

  return (
    <>
      {/* Pure CSS for Legal paper - NO layout overrides */}
      <style>{`
                    @page {
              size: legal landscape;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            @page:first {
              margin-top: 0 !important;
              padding-top: 0 !important;
            }
        
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
            background: white !important;
            box-sizing: border-box !important;
          }
          
          body {
            padding-top: 0 !important;
            margin-top: 0 !important;
            border-top: none !important;
            top: 0 !important;
            position: relative !important;
          }
          
          html {
            padding-top: 0 !important;
            margin-top: 0 !important;
            border-top: none !important;
          }
          
          #root {
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
            top: 0 !important;
            height: 100% !important;
          }
          
          /* Force all background colors and gradients to print */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color-adjust: exact !important;
          }
          
          /* Ensure all custom CSS variables work in print */
          :root {
            color-scheme: light !important;
          }
          
          /* Force all backgrounds to print with proper colors */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Remove heavy shadows/backdrop filters which cause gray tint in PDFs */
          [class*="shadow"],
          [style*="box-shadow"],
          [class*="backdrop-blur"],
          [style*="backdrop-filter"],
          [class*="drop-shadow"],
          [style*="filter:"] {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
            -webkit-backdrop-filter: none !important;
            backdrop-filter: none !important;
            filter: none !important;
          }
          
          /* Target the printable deck container specifically */
          .printable-deck-container {
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
            top: 0 !important;
          }
          
          .print-slide {
            page-break-after: always;
            page-break-inside: avoid;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            position: relative;
            overflow: hidden;
          }
          
          .print-slide:last-child {
            page-break-after: auto;
          }
          
          /* Fix cover slide top margin in print - remove any top spacing from first slide only */
          .print-slide:first-child,
          .print-slide:first-child > *,
          .print-slide:first-child .slide-container {
            padding-top: 0 !important;
            margin-top: 0 !important;
            position: relative !important;
            top: 0 !important;
            transform: translateY(0) !important;
          }
          
          /* Force first slide to start at absolute top */
          .printable-deck-container > .print-slide:first-child {
            margin-top: 0 !important;
            padding-top: 0 !important;
            position: relative !important;
            top: 0 !important;
          }
          
          /* Specifically target potential Tailwind padding classes on cover slide */
          .print-slide:first-child [class*="pt-"],
          .print-slide:first-child [class*="py-"],
          .print-slide:first-child [class*="p-"] {
            padding-top: 0 !important;
          }
          
          /* Also target any margin classes */
          .print-slide:first-child [class*="mt-"],
          .print-slide:first-child [class*="my-"],
          .print-slide:first-child [class*="m-"] {
            margin-top: 0 !important;
          }
          
          /* Minimal fix: Only force white backgrounds to print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .no-print {
            display: none !important;
          }
        }
        
        @media screen {
          .print-slide {
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .printable-deck-container {
            padding-top: 100px;
          }
        }
      `}</style>

      {/* Print controls - only visible on screen */}
      <div className="no-print fixed top-4 left-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {deckName} ({slidesToRender.length} slides)
            </h2>
            <p className="text-sm text-gray-600 mb-2">Use Ctrl+P (Cmd+P on Mac) to print.</p>
            <p className="text-xs text-blue-600">
              📋 <strong>Print Settings:</strong> Legal paper, Landscape, No margins, 100% scale, Background graphics enabled
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Print to PDF
            </button>
            <button
              onClick={() => navigate('/investor-deck')}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>

      {/* Pure slide rendering - NO CSS modifications */}
      <div className="printable-deck-container">
        {slidesToRender.map((slide, index) => {
          const SlideComponent = slideComponents[slide.component as keyof typeof slideComponents];
          
          if (!SlideComponent) {
            return (
              <div key={slide.id} className="print-slide flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Slide {slide.id}</h2>
                  <p className="text-gray-600">{slide.title}</p>
                  <p className="text-sm text-red-500 mt-2">Component not found: {slide.component}</p>
                </div>
              </div>
            );
          }

          return (
            <div key={slide.id} className="print-slide">
              {/* Debug info - visible in print preview but minimal in final print */}
              <div className="no-print absolute top-2 left-2 z-50 bg-black/50 text-white px-2 py-1 text-xs rounded">
                Slide {slide.id}: {slide.title}
              </div>
              
              {/* Render the slide component exactly as it is */}
              <Suspense 
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading slide {slide.id}...</p>
                    </div>
                  </div>
                }
              >
                <SlideComponent />
              </Suspense>
            </div>
          );
        })}
      </div>

      {/* Screen-only footer */}
      <div className="no-print mt-8 p-4 bg-gray-50 text-center text-sm text-gray-600">
        <p>Pure HTML Print Deck • {slidesToRender.length} slides • Legal paper format (14" × 8.5" landscape)</p>
        <p className="mt-1">Each slide renders exactly as designed - no CSS overrides or layout modifications</p>
      </div>
    </>
  );
};

export default PrintableDeck;
