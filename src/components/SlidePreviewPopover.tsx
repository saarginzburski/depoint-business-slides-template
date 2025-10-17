import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SlidePreviewPopoverProps {
  slide: {
    id: number;
    name: string;
    title: string;
    component: string;
  };
  slideComponent: React.LazyExoticComponent<any>;
  anchorEl: HTMLElement | null;
  position: 'left' | 'right' | 'top' | 'bottom';
}

export const SlidePreviewPopover: React.FC<SlidePreviewPopoverProps> = ({
  slide,
  slideComponent: SlideComponent,
  anchorEl,
  position = 'right',
}) => {
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!anchorEl || !popoverRef.current) return;

    const anchorRect = anchorEl.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = 0;
    let left = 0;

    switch (position) {
      case 'right':
        left = anchorRect.right + 16;
        top = anchorRect.top + (anchorRect.height / 2) - (popoverRect.height / 2);
        // Fallback to left if not enough space
        if (left + popoverRect.width > viewportWidth) {
          left = anchorRect.left - popoverRect.width - 16;
        }
        break;
      case 'left':
        left = anchorRect.left - popoverRect.width - 16;
        top = anchorRect.top + (anchorRect.height / 2) - (popoverRect.height / 2);
        break;
      case 'top':
        top = anchorRect.top - popoverRect.height - 16;
        left = anchorRect.left + (anchorRect.width / 2) - (popoverRect.width / 2);
        break;
      case 'bottom':
        top = anchorRect.bottom + 16;
        left = anchorRect.left + (anchorRect.width / 2) - (popoverRect.width / 2);
        break;
    }

    // Ensure popover stays within viewport
    if (top < 16) top = 16;
    if (top + popoverRect.height > viewportHeight - 16) {
      top = viewportHeight - popoverRect.height - 16;
    }
    if (left < 16) left = 16;
    if (left + popoverRect.width > viewportWidth - 16) {
      left = viewportWidth - popoverRect.width - 16;
    }

    setCoords({ top, left });
  }, [anchorEl, position]);

  if (!anchorEl) return null;

  return (
    <>
      {/* Invisible backdrop */}
      <div className="fixed inset-0 z-30 pointer-events-none" />

      {/* Preview Popover */}
      <Card
        ref={popoverRef}
        className="fixed z-40 w-[480px] shadow-elevation-5 border-2 border-primary/20 animate-fade-in overflow-hidden"
        style={{ top: coords.top, left: coords.left }}
      >
        {/* Slide Preview */}
        <div className="relative w-full aspect-[16/9] bg-neutral-900 overflow-hidden">
          <div
            className="w-full h-full transform scale-[0.3] origin-top-left"
            style={{ width: '333%', height: '333%' }}
          >
            <Suspense
              fallback={
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                  <div className="animate-pulse text-neutral-600 text-6xl">{slide.id}</div>
                </div>
              }
            >
              <SlideComponent />
            </Suspense>
          </div>
        </div>

        {/* Slide Info */}
        <div className="px-4 py-3 bg-surface border-t border-neutral-200">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-body-medium font-semibold text-neutral-900">{slide.name}</h4>
            <Badge className="bg-neutral-100 text-neutral-700 text-label-small">
              Slide {slide.id}
            </Badge>
          </div>
          <p className="text-body-small text-neutral-600">{slide.title}</p>
        </div>
      </Card>
    </>
  );
};

