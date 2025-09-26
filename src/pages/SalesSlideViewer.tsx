import React, { lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { salesSlideConfig, getSalesSlideInfo, getSalesNextSlideId, getSalesPrevSlideId } from './slides/salesSlideConfig';
import { SLIDE_CONFIG } from '@/lib/slideConfig';

// Lazy load all slide components
const slideComponents = {
  SlideCover: lazy(() => import('./slides/SlideCover')),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform')),
  SlideOurJourney: lazy(() => import('./slides/SlideOurJourney')),
  SlideProblem: lazy(() => import('./slides/SlideProblem')),
  SlidePlatformEcosystem: lazy(() => import('./slides/SlidePlatformEcosystem')),
  SlideInsightsEngine: lazy(() => import('./slides/SlideInsightsEngine')),
  SlideClosing: lazy(() => import('./slides/SlideClosing')),
};

const SalesSlideViewer = () => {
  const { slideId } = useParams<{ slideId: string }>();
  const navigate = useNavigate();
  const currentSlideId = parseInt(slideId || '1');
  const slideInfo = getSalesSlideInfo(currentSlideId);

  if (!slideInfo) {
    navigate('/sales-deck/slide/1');
    return null;
  }

  const SlideComponent = slideComponents[slideInfo.component as keyof typeof slideComponents];
  
  const handleNextSlide = () => {
    if (typeof window !== 'undefined' && navigate) {
      const nextId = getSalesNextSlideId(currentSlideId);
      navigate(`/sales-deck/slide/${nextId}`);
    }
  };

  const handlePrevSlide = () => {
    if (typeof window !== 'undefined' && navigate) {
      const prevId = getSalesPrevSlideId(currentSlideId);
      navigate(`/sales-deck/slide/${prevId}`);
    }
  };

  const handleBackToOverview = () => {
    if (typeof window !== 'undefined' && navigate) {
      navigate('/sales-deck');
    }
  };

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
              <span className="text-white font-semibold text-lg">Sales Deck</span>
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
                {currentSlideId} / {salesSlideConfig.length} - {slideInfo.name}
              </span>
            </div>
            
          </div>
        </div>

        {/* Slide Container */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ height: SLIDE_CONFIG.cssHeight }}>
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          }>
            <SlideComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SalesSlideViewer;