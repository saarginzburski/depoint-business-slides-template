import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { slideConfig } from './slides/slideConfig';
import { getSlideStyle } from '@/lib/slideConfig';

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

const ResellersSlideViewer = () => {
  const { slideId } = useParams<{ slideId: string }>();
  const navigate = useNavigate();
  const [isControlsVisible, setIsControlsVisible] = useState(true);

  const currentSlideId = parseInt(slideId || '1');
  const currentSlide = slideConfig.find(slide => slide.id === currentSlideId);
  
  // Auto-hide controls after 3 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsControlsVisible(false);
    }, 3000);

    const handleMouseMove = () => {
      setIsControlsVisible(true);
      clearTimeout(timer);
      setTimeout(() => setIsControlsVisible(false), 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Redirect to first slide if invalid slide ID
  useEffect(() => {
    if (!currentSlide) {
      navigate('/resellers-deck/slide/1');
    }
  }, [currentSlideId, currentSlide, navigate]);

  const handleNext = () => {
    const nextId = currentSlideId + 1;
    if (nextId <= slideConfig.length) {
      navigate(`/resellers-deck/slide/${nextId}`);
    }
  };

  const handlePrevious = () => {
    const prevId = currentSlideId - 1;
    if (prevId >= 1) {
      navigate(`/resellers-deck/slide/${prevId}`);
    }
  };

  const handleHome = () => {
    navigate('/resellers-deck');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        handleHome();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideId]);

  if (!currentSlide) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const SlideComponent = slideComponents[currentSlide.component as keyof typeof slideComponents];

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Navigation Controls */}
      <div className={`absolute top-4 left-4 right-4 z-50 transition-opacity duration-300 ${
        isControlsVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex items-center justify-between">
          {/* Left Controls */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleHome}
              variant="ghost"
              size="sm"
              className="bg-black/70 backdrop-blur-sm text-white border border-white/20 hover:bg-white/10"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Deck
            </Button>
            
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
              <span className="text-white font-semibold text-lg">Resellers Deck</span>
            </div>
          </div>

          {/* Center - Slide Counter */}
          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <span className="text-white font-medium">
              {currentSlideId} / {slideConfig.length}
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handlePrevious}
              disabled={currentSlideId === 1}
              variant="ghost"
              size="sm"
              className="bg-black/70 backdrop-blur-sm text-white border border-white/20 hover:bg-white/10 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={currentSlideId === slideConfig.length}
              variant="ghost"
              size="sm"
              className="bg-black/70 backdrop-blur-sm text-white border border-white/20 hover:bg-white/10 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[90vw] max-h-[90vh]" style={getSlideStyle()}>
          <Suspense 
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
                <div className="text-white/20 text-6xl font-bold">
                  {currentSlideId}
                </div>
              </div>
            }
          >
            <SlideComponent />
          </Suspense>
        </div>
      </div>

      {/* Click Areas for Navigation */}
      <div className="absolute inset-0 flex">
        {/* Left third - Previous */}
        <div 
          className="flex-1 cursor-pointer"
          onClick={handlePrevious}
          style={{ visibility: currentSlideId === 1 ? 'hidden' : 'visible' }}
        />
        {/* Middle third - Toggle controls */}
        <div 
          className="flex-1 cursor-pointer"
          onClick={() => setIsControlsVisible(!isControlsVisible)}
        />
        {/* Right third - Next */}
        <div 
          className="flex-1 cursor-pointer"
          onClick={handleNext}
          style={{ visibility: currentSlideId === slideConfig.length ? 'hidden' : 'visible' }}
        />
      </div>
    </div>
  );
};

export default ResellersSlideViewer;