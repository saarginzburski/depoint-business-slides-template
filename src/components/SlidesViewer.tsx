import React, { Suspense, useEffect, useCallback, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Grid3x3, MoreVertical, Eye, EyeOff, Copy, Trash2, MoveRight, Maximize, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slide } from '@/types/deck';
import { FilmstripThumb } from './FilmstripThumb';
import SLIDE_CONFIG from '@/lib/slideConfig';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SlidesViewerProps {
  slides: Slide[];
  currentSlideId: string;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (id: string) => void;
  onMoveTo: (slideId: string, sectionKey: string) => void;
  onDuplicate: (id: string) => void;
  onHide: (id: string) => void;
  onRestore: (id: string) => void;
  deckName: string;
  onPresentationModeChange?: (isPresenting: boolean) => void;
}

export const SlidesViewer: React.FC<SlidesViewerProps> = ({
  slides,
  currentSlideId,
  slideComponents,
  onClose,
  onPrev,
  onNext,
  onJump,
  onMoveTo,
  onDuplicate,
  onHide,
  onRestore,
  deckName,
  onPresentationModeChange,
}) => {
  const [showFilmstrip, setShowFilmstrip] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [showPresentationHint, setShowPresentationHint] = useState(false);
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndex = slides.findIndex(s => s.id === currentSlideId);
  const currentSlide = slides[currentIndex];
  const isHidden = currentSlide?.status === 'hidden';

  // Fullscreen handlers
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      viewerContainerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Presentation mode handler
  const togglePresentationMode = useCallback(() => {
    setIsPresentationMode(prev => {
      const newState = !prev;
      if (newState) {
        // Show hint when entering presentation mode
        setShowPresentationHint(true);
        // Auto-hide after 3 seconds
        if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = setTimeout(() => {
          setShowPresentationHint(false);
        }, 3000);
      } else {
        setShowPresentationHint(false);
        if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
      }
      // Notify parent component about presentation mode change
      onPresentationModeChange?.(newState);
      return newState;
    });
  }, [onPresentationModeChange]);

  // Show hint on mouse movement in presentation mode
  useEffect(() => {
    if (!isPresentationMode) return;

    const handleMouseMove = () => {
      setShowPresentationHint(true);
      if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = setTimeout(() => {
        setShowPresentationHint(false);
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
    };
  }, [isPresentationMode]);

  // Track fullscreen state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Cleanup: Reset presentation mode when component unmounts
  useEffect(() => {
    return () => {
      if (isPresentationMode) {
        onPresentationModeChange?.(false);
      }
    };
  }, [isPresentationMode, onPresentationModeChange]);

  // Auto-enter fullscreen if requested via URL param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shouldFullscreen = params.get('fullscreen') === 'true';
    
    if (shouldFullscreen && viewerContainerRef.current && !document.fullscreenElement) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        viewerContainerRef.current?.requestFullscreen();
        // Remove the fullscreen param from URL
        params.delete('fullscreen');
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent shortcuts when typing in inputs
      if ((e.target as HTMLElement).tagName === 'INPUT' || 
          (e.target as HTMLElement).tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case 'ArrowLeft':
        case 'k':
        case 'K':
          e.preventDefault();
          onPrev();
          break;
        case 'ArrowRight':
        case 'j':
        case 'J':
          e.preventDefault();
          onNext();
          break;
        case 'Escape':
          e.preventDefault();
          if (isPresentationMode) {
            setIsPresentationMode(false);
            onPresentationModeChange?.(false);
          } else if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            onClose();
          }
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          togglePresentationMode();
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          setShowFilmstrip(prev => !prev);
          break;
        case 'h':
        case 'H':
          e.preventDefault();
          if (isHidden) {
            onRestore(currentSlideId);
          } else {
            onHide(currentSlideId);
          }
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          if (isHidden) {
            onRestore(currentSlideId);
          }
          break;
        case 'd':
        case 'D':
          e.preventDefault();
          onDuplicate(currentSlideId);
          break;
        case '1':
          e.preventDefault();
          onMoveTo(currentSlideId, 'main');
          break;
        case '2':
          e.preventDefault();
          onMoveTo(currentSlideId, 'demo');
          break;
        case '3':
          e.preventDefault();
          onMoveTo(currentSlideId, 'appendix');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideId, isHidden, isPresentationMode, onPrev, onNext, onClose, onHide, onRestore, onDuplicate, onMoveTo, toggleFullscreen, togglePresentationMode, onPresentationModeChange]);

  // Scroll filmstrip to show current slide
  useEffect(() => {
    const thumbElement = document.getElementById(`filmstrip-thumb-${currentSlideId}`);
    if (thumbElement) {
      thumbElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentSlideId]);

  if (!currentSlide) {
    return (
      <div className="flex-1 flex items-center justify-center bg-neutral-50" role="document">
        <div className="text-center">
          <h2 className="text-xl font-medium text-neutral-900 mb-2">Slide not found</h2>
          <Button onClick={onClose} variant="outline">
            <Grid3x3 className="w-4 h-4 mr-2" />
            Back to grid
          </Button>
        </div>
      </div>
    );
  }

  const SlideComponent = slideComponents[currentSlide.component];

  return (
    <div 
      ref={viewerContainerRef}
      className="flex-1 flex flex-col bg-neutral-50 overflow-hidden animate-in fade-in duration-200" 
      role="document"
    >
      {/* Top Viewer Bar - Hidden in presentation mode */}
      {!isPresentationMode && (
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-neutral-200">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium text-neutral-900">{deckName}</h2>
          <span className="text-sm text-neutral-600">
            {currentIndex + 1} / {slides.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <Button
            onClick={onPrev}
            disabled={currentIndex === 0}
            variant="outline"
            size="sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          {/* Next Button */}
          <Button
            onClick={onNext}
            disabled={currentIndex === slides.length - 1}
            variant="outline"
            size="sm"
            aria-label="Next slide"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>

          {/* Actions Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" aria-label="More options">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => onMoveTo(currentSlideId, 'main')}>
                <MoveRight className="w-4 h-4 mr-2" />
                Move to Main Deck
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMoveTo(currentSlideId, 'demo')}>
                <MoveRight className="w-4 h-4 mr-2" />
                Move to Demo
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMoveTo(currentSlideId, 'appendix')}>
                <MoveRight className="w-4 h-4 mr-2" />
                Move to Appendices
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => isHidden ? onRestore(currentSlideId) : onHide(currentSlideId)}>
                {isHidden ? (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Restore to deck
                  </>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Hide from deck
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDuplicate(currentSlideId)}>
                <Copy className="w-4 h-4 mr-2" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Presentation Mode Button */}
          <Button 
            onClick={togglePresentationMode} 
            variant="outline" 
            size="sm" 
            aria-label="Start presentation mode"
            title="Presentation mode (P) - Hide all UI"
          >
            <Presentation className="w-4 h-4" />
          </Button>

          {/* Fullscreen Button */}
          <Button 
            onClick={toggleFullscreen} 
            variant="outline" 
            size="sm" 
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title={isFullscreen ? "Exit fullscreen (F)" : "Enter fullscreen (F)"}
          >
            <Maximize className="w-4 h-4" />
          </Button>

          {/* Overview Button */}
          <Button onClick={onClose} variant="outline" size="sm" aria-label="Back to overview">
            <Grid3x3 className="w-4 h-4 mr-1" />
            Overview
          </Button>

          {/* Close Button */}
          <Button onClick={onClose} variant="ghost" size="sm" aria-label="Close viewer">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
      )}

      {/* Slide Canvas - Container that scales to 100% height */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden">
        <div 
          className="relative bg-white rounded-md shadow-lg border border-neutral-200 overflow-hidden"
          style={{ 
            aspectRatio: `${SLIDE_CONFIG.width} / ${SLIDE_CONFIG.height}`,
            height: '100%',
            width: 'auto',
            maxHeight: '100%',
            maxWidth: '100%',
          }}
        >
          {/* Slide content at native size, scaled to fit container by height */}
          <div 
            style={{
              width: SLIDE_CONFIG.width,
              height: SLIDE_CONFIG.height,
              transformOrigin: 'top left',
              transform: 'scale(var(--slide-scale))',
            }}
            ref={(el) => {
              if (el && el.parentElement) {
                const containerHeight = el.parentElement.offsetHeight;
                const scale = containerHeight / SLIDE_CONFIG.height;
                el.style.setProperty('--slide-scale', scale.toString());
                // Set container width to match scaled slide width
                el.parentElement.style.width = `${SLIDE_CONFIG.width * scale}px`;
              }
            }}
          >
            <Suspense
              fallback={
                <div 
                  className="flex items-center justify-center bg-neutral-100"
                  style={{
                    width: SLIDE_CONFIG.width,
                    height: SLIDE_CONFIG.height,
                  }}
                >
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
                </div>
              }
            >
              {SlideComponent ? (
                <SlideComponent onNavigateToSlide={onJump} />
              ) : (
                <div 
                  className="flex items-center justify-center"
                  style={{
                    width: SLIDE_CONFIG.width,
                    height: SLIDE_CONFIG.height,
                  }}
                >
                  <div className="text-neutral-600 text-sm">
                    Unknown component: {currentSlide.component}
                  </div>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>

      {/* Filmstrip - Hidden in presentation mode */}
      {!isPresentationMode && showFilmstrip && (
        <div className="bg-white border-t border-neutral-200 p-4 animate-in slide-in-from-bottom duration-200">
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
            {slides.map((slide) => (
              <div key={slide.id} id={`filmstrip-thumb-${slide.id}`}>
                <FilmstripThumb
                  slide={slide}
                  isSelected={slide.id === currentSlideId}
                  slideComponent={slideComponents[slide.component]}
                  onClick={() => onJump(slide.id)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    // Context menu would go here
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filmstrip Toggle (when hidden) - Hidden in presentation mode */}
      {!isPresentationMode && !showFilmstrip && (
        <Button
          onClick={() => setShowFilmstrip(true)}
          variant="outline"
          size="sm"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 shadow-lg"
        >
          Show Filmstrip (O)
        </Button>
      )}

      {/* Presentation Mode Hint */}
      {isPresentationMode && showPresentationHint && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              <ChevronRight className="w-4 h-4" />
              Navigate
            </span>
            <span className="text-neutral-400">•</span>
            <span>ESC to exit</span>
            <span className="text-neutral-400">•</span>
            <span>P for menu</span>
          </div>
        </div>
      )}
    </div>
  );
};

