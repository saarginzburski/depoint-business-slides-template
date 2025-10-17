import React, { useEffect, useRef, Suspense } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SlidePreviewPopoverProps {
  slide: {
    id: string;
    title: string;
    section: string;
    tags: string[];
    component: string;
  };
  position: { x: number; y: number };
  onClose: () => void;
  slideComponent?: React.LazyExoticComponent<any>;
}

export const SlidePreviewPopover: React.FC<SlidePreviewPopoverProps> = ({
  slide,
  position,
  onClose,
  slideComponent: SlideComponent,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  // Adjust position to keep popover in viewport
  const adjustedPosition = React.useMemo(() => {
    if (!popoverRef.current) return position;

    const popoverWidth = 320;
    const popoverHeight = 200;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let { x, y } = position;

    // Keep within horizontal bounds
    if (x + popoverWidth > viewportWidth - 16) {
      x = viewportWidth - popoverWidth - 16;
    }
    if (x < 16) x = 16;

    // Keep within vertical bounds
    if (y + popoverHeight > viewportHeight - 16) {
      y = viewportHeight - popoverHeight - 16;
    }
    if (y < 16) y = 16;

    return { x, y };
  }, [position]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Preview Popover - No backdrop, just the popover */}
      <Card
        ref={popoverRef}
        className="fixed z-50 w-96 shadow-elevation-5 border-2 border-primary-600 bg-white animate-fade-in"
        style={{ 
          top: `${adjustedPosition.y}px`, 
          left: `${adjustedPosition.x}px` 
        }}
        onMouseLeave={onClose}
      >
        {/* Slide Preview - Larger than thumbnail */}
        <div className="relative w-full aspect-[16/9] bg-neutral-900 overflow-hidden border-b border-neutral-200">
          <div className="w-full h-full transform scale-[0.35] origin-top-left" style={{ width: '285%', height: '285%' }}>
            <Suspense
              fallback={
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-neutral-600 mb-2">
                      {slide.id}
                    </div>
                    <div className="text-sm text-neutral-500 uppercase tracking-wide">
                      Loading...
                    </div>
                  </div>
                </div>
              }
            >
              {SlideComponent ? (
                <SlideComponent />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-neutral-600 mb-2">
                      {slide.id}
                    </div>
                    <div className="text-sm text-neutral-500 uppercase tracking-wide">
                      Preview
                    </div>
                  </div>
                </div>
              )}
            </Suspense>
          </div>
        </div>

        {/* Slide Info */}
        <div className="px-4 py-3">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-sm font-semibold text-neutral-900 flex-1 pr-2">
              {slide.title}
            </h4>
            <Badge className="bg-primary-100 text-primary-700 text-xs flex-shrink-0">
              Slide {slide.id}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-neutral-500 uppercase">
              {slide.section}
            </span>
          </div>

          {slide.tags && slide.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {slide.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-600 rounded"
                >
                  {tag}
                </span>
              ))}
              {slide.tags.length > 3 && (
                <span className="px-2 py-0.5 text-xs text-neutral-500">
                  +{slide.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

