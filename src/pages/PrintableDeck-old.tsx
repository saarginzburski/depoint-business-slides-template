import React, { Suspense, lazy, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// Lazy load all slide components
const slideComponents = {
  SlideCover: lazy(() => import('./slides/SlideCover')),
  SlideExecutiveSummary: lazy(() => import('./slides/SlideExecutiveSummary')),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform')),
  SlideOurJourney: lazy(() => import('./slides/SlideOurJourney')),
  SlideProblem: lazy(() => import('./slides/SlideProblem')),
  SlidePlatformEcosystem: lazy(() => import('./slides/SlidePlatformEcosystem')),
  SlideInsightsEngine: lazy(() => import('./slides/SlideInsightsEngine')),
  SlideCustomerStories: lazy(() => import('./slides/SlideCustomerStories')),
  SlideMarketOpportunity: lazy(() => import('./slides/SlideMarketOpportunity')),
  SlideCompetitiveLandscape: lazy(() => import('./slides/SlideCompetitiveLandscape')),
  SlideGTMStrategy: lazy(() => import('./slides/SlideGTMStrategy')),
  SlideFinancial: lazy(() => import('./slides/SlideFinancial')),
  SlideStrategicFit: lazy(() => import('./slides/SlideStrategicFit')),
  SlideClosing: lazy(() => import('./slides/SlideClosing')),
};

import { slideConfig } from './slides/slideConfig';
import { SLIDE_CONFIG } from '@/lib/slideConfig';

const PrintableDeck = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get slides to print from URL params (e.g., ?slides=1,2,3 or ?slides=all)
  const slidesParam = searchParams.get('slides') || 'all';
  const autoprint = searchParams.get('autoprint') === 'true';
  
  const slidesToRender = slidesParam === 'all' 
    ? slideConfig.map(s => s.id)
    : slidesParam.split(',').map(s => parseInt(s.trim())).filter(Boolean);

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
        navigate('/investor-deck');
      }
    };

    window.addEventListener('afterprint', handleAfterPrint);
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, [autoprint, navigate]);

  return (
    <>
      {/* Include external print CSS */}
      <link rel="stylesheet" href="/print.css" media="print" />
      
      {/* Force exact 1:1 Legal paper printing */}
      <style>{`
        @page {
          size: legal landscape;
          margin: 0;
        }
        
        @media print {
          * {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
          }
          
          body {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          
          .slide-container {
            page-break-after: always;
            page-break-inside: avoid;
            margin: 0 !important;
            width: 100% !important;
            height: 100% !important;
            box-sizing: border-box !important;
            position: relative !important;
            overflow: visible !important;
            display: flex !important;
            flex-direction: column !important;
          }
          
          .slide-container:first-child {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          
          #root {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .slide-container:last-child {
            page-break-after: auto;
          }
          
          /* Preserve Tailwind layouts in print */
          .flex { display: flex !important; }
          .flex-col { flex-direction: column !important; }
          .flex-row { flex-direction: row !important; }
          .justify-between { justify-content: space-between !important; }
          .justify-center { justify-content: center !important; }
          .items-center { align-items: center !important; }
          .items-start { align-items: flex-start !important; }
          .grid { display: grid !important; }
          .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .gap-3 { gap: 0.75rem !important; }
          .gap-4 { gap: 1rem !important; }
          .gap-6 { gap: 1.5rem !important; }
          .gap-8 { gap: 2rem !important; }
          .w-full { width: 100% !important; }
          .h-full { height: 100% !important; }
          .flex-1 { flex: 1 1 0% !important; }
          .mb-1 { margin-bottom: 0.25rem !important; }
          .mb-6 { margin-bottom: 1.5rem !important; }
          .mb-8 { margin-bottom: 2rem !important; }
          .p-4 { padding: 1rem !important; }
          .p-6 { padding: 1.5rem !important; }
          .p-8 { padding: 2rem !important; }
          
          .slide-content {
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            transform: none !important;
            scale: 1 !important;
          }
          
          /* Hide print controls */
          .no-print {
            display: none !important;
          }
        }
        
        @media screen {
          .slide-container {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f3f4f6;
            padding: 20px 0;
          }
          
          .slide-content {
            width: ${SLIDE_CONFIG.cssWidth};
            height: ${SLIDE_CONFIG.cssHeight};
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
          }
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        @media print {
          .printable-deck-container {
            margin: 0 !important;
            padding: 0 !important;
            padding-top: 0 !important;
          }
          
          .printable-deck-container.pt-20 {
            padding-top: 0 !important;
          }
          
          .printable-deck-container > .slide-container:first-child {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
        }
      `}</style>

      {/* Print controls - only visible on screen */}
      <div className="no-print fixed top-4 left-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Printable Deck ({slidesToRender.length} slides)
            </h2>
            <div className="text-sm text-gray-600">
              <p className="mb-2">Use Ctrl+P (Cmd+P on Mac) to print.</p>
              <p className="font-medium text-blue-600">📋 CRITICAL Print Settings for 1:1 Output:</p>
              <ul className="text-xs mt-1 space-y-1">
                <li>🔴 <strong>MUST SELECT:</strong> Paper Size: <strong>Legal</strong> (8.5" × 14")</li>
                <li>🔴 <strong>MUST SELECT:</strong> Orientation: <strong>Landscape</strong></li>
                <li>✅ Margins: <strong>None/Minimum</strong> (0" all sides)</li>
                <li>✅ Scale: <strong>100%</strong> (Default - NO custom scaling)</li>
                <li>✅ Background Graphics: <strong>Enabled</strong></li>
                <li>✅ Pages: <strong>All</strong> (prints all {slidesToRender.length} slides)</li>
              </ul>
              <p className="text-xs mt-2 text-red-600">
                ⚠️ <strong>IMPORTANT:</strong> Browser MUST detect Legal paper size for 1:1 printing!
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Print to PDF
            </button>
            <button
              onClick={() => navigate('/investor-deck')}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Deck
            </button>
          </div>
        </div>
      </div>

      {/* Render all slides */}
      <div className="pt-20 printable-deck-container">
        {slidesToRender.map((slideId, index) => {
          const slideInfo = slideConfig.find(s => s.id === slideId);
          if (!slideInfo) return null;

          const SlideComponent = slideComponents[slideInfo.component as keyof typeof slideComponents];
          
          return (
            <div key={slideId} className="slide-container">
              {/* Debug info - visible in print preview but hidden in final print */}
              <div className="absolute top-2 left-2 z-50 bg-black/70 text-white px-2 py-1 text-xs rounded print:opacity-20">
                Slide {slideId} of {slidesToRender.length}
              </div>
              
              <div className="slide-content">
                <Suspense 
                  fallback={
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading slide {slideId}...</p>
                      </div>
                    </div>
                  }
                >
                  <SlideComponent />
                </Suspense>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PrintableDeck;
