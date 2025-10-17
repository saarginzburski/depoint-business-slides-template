import React, { useState, useRef, useEffect } from 'react';
import { Eye, Copy, Trash2, MoreVertical, GripVertical } from 'lucide-react';
import { Slide } from '@/types/deck';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { SlidePreviewPopover } from '@/components/SlidePreviewPopover';

interface SlideGridProps {
  slides: Slide[];
  selectedSlideIds: Set<string>;
  onToggleSelection: (slideId: string, isCtrlOrCmd: boolean) => void;
  onContextMenu: (slideId: string, x: number, y: number) => void;
  viewMode?: 'grid' | 'list';
  showCheckboxes?: boolean;
}

export const SlideGrid: React.FC<SlideGridProps> = ({
  slides,
  selectedSlideIds,
  onToggleSelection,
  onContextMenu,
  viewMode = 'grid',
  showCheckboxes = false,
}) => {
  const [hoveredSlideId, setHoveredSlideId] = useState<string | null>(null);
  const [previewSlideId, setPreviewSlideId] = useState<string | null>(null);
  const [previewPosition, setPreviewPosition] = useState<{ x: number; y: number } | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (slideId: string, event: React.MouseEvent) => {
    setHoveredSlideId(slideId);
    
    // Start preview timer
    hoverTimeoutRef.current = setTimeout(() => {
      const rect = event.currentTarget.getBoundingClientRect();
      setPreviewPosition({
        x: rect.right + 16,
        y: rect.top,
      });
      setPreviewSlideId(slideId);
    }, 800); // 800ms delay before showing preview
  };

  const handleMouseLeave = () => {
    setHoveredSlideId(null);
    
    // Clear preview timer
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // Don't hide preview immediately - let user move mouse to it
    setTimeout(() => {
      setPreviewSlideId(null);
      setPreviewPosition(null);
    }, 300);
  };

  const handleCardClick = (slideId: string, event: React.MouseEvent) => {
    if (event.target instanceof HTMLInputElement) return; // Don't toggle if clicking checkbox
    onToggleSelection(slideId, event.metaKey || event.ctrlKey);
  };

  const handleContextMenu = (slideId: string, event: React.MouseEvent) => {
    event.preventDefault();
    onContextMenu(slideId, event.clientX, event.clientY);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  if (viewMode === 'list') {
    return (
      <div className="space-y-2">
        {slides.map((slide) => {
          const isSelected = selectedSlideIds.has(slide.id);
          const isHovered = hoveredSlideId === slide.id;

          return (
            <Card
              key={slide.id}
              className={`
                flex items-center gap-4 p-3 cursor-pointer transition-all duration-200 group
                ${isSelected ? 'ring-2 ring-primary-600 bg-primary-50/30' : 'hover:elevation-2'}
                ${isHovered ? 'elevation-1' : ''}
                animate-slide-enter
              `}
              onClick={(e) => handleCardClick(slide.id, e)}
              onContextMenu={(e) => handleContextMenu(slide.id, e)}
              onMouseEnter={(e) => handleMouseEnter(slide.id, e)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Drag Handle */}
              <div className="flex-shrink-0 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical className="w-5 h-5 text-neutral-400" />
              </div>

              {/* Checkbox */}
              {showCheckboxes && (
                <div className="flex-shrink-0">
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => onToggleSelection(slide.id, false)}
                  />
                </div>
              )}

              {/* Thumbnail */}
              <div className="flex-shrink-0 w-32 h-18 bg-neutral-100 rounded border border-neutral-200 overflow-hidden">
                <img
                  src={slide.thumbnailUrl || '/placeholder.svg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slide Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-neutral-900 truncate">
                  {slide.title}
                </h3>
                <p className="text-xs text-neutral-600 truncate mt-1">
                  {slide.section} {slide.tags && slide.tags.length > 0 && `• ${slide.tags.join(', ')}`}
                </p>
              </div>

              {/* Action Toolbar (visible on hover) */}
              <div className={`
                flex items-center gap-1 flex-shrink-0 transition-opacity
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}>
                <button
                  className="p-1.5 hover:bg-neutral-100 rounded transition-colors"
                  aria-label="Preview slide"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle preview action
                  }}
                >
                  <Eye className="w-4 h-4 text-neutral-600" />
                </button>
                <button
                  className="p-1.5 hover:bg-neutral-100 rounded transition-colors"
                  aria-label="Duplicate slide"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle duplicate action
                  }}
                >
                  <Copy className="w-4 h-4 text-neutral-600" />
                </button>
                <button
                  className="p-1.5 hover:bg-neutral-100 rounded transition-colors"
                  aria-label="More options"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContextMenu(slide.id, e);
                  }}
                >
                  <MoreVertical className="w-4 h-4 text-neutral-600" />
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }

  // Grid view
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4" role="list" aria-label="Slides">
        {slides.map((slide) => {
          const isSelected = selectedSlideIds.has(slide.id);
          const isHovered = hoveredSlideId === slide.id;

          return (
            <Card
              key={slide.id}
              className={`
                relative group cursor-pointer transition-all duration-200
                ${isSelected ? 'ring-2 ring-primary-600 bg-primary-50/30' : 'hover:elevation-2'}
                ${isHovered ? 'elevation-1' : ''}
                animate-slide-enter
              `}
              onClick={(e) => handleCardClick(slide.id, e)}
              onContextMenu={(e) => handleContextMenu(slide.id, e)}
              onMouseEnter={(e) => handleMouseEnter(slide.id, e)}
              onMouseLeave={handleMouseLeave}
              role="listitem"
              aria-label={`${slide.title}${isSelected ? ', selected' : ''}`}
              aria-selected={isSelected}
              tabIndex={0}
            >
              {/* Drag Handle (top-left corner) */}
              <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing">
                <div className="p-1 bg-white rounded shadow-sm">
                  <GripVertical className="w-4 h-4 text-neutral-600" />
                </div>
              </div>

              {/* Checkbox (top-left, when enabled or selected) */}
              {(showCheckboxes || isSelected) && (
                <div className="absolute top-2 left-2 z-10">
                  <div className="p-0.5 bg-white rounded shadow-sm">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => onToggleSelection(slide.id, false)}
                    />
                  </div>
                </div>
              )}

              {/* Action Toolbar (top-right corner, visible on hover) */}
              <div className={`
                absolute top-2 right-2 z-10 flex items-center gap-1 transition-opacity
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}>
                <button
                  className="p-1.5 bg-white hover:bg-neutral-100 rounded shadow-sm transition-colors"
                  aria-label="Preview slide"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle preview action
                  }}
                >
                  <Eye className="w-4 h-4 text-neutral-600" />
                </button>
                <button
                  className="p-1.5 bg-white hover:bg-neutral-100 rounded shadow-sm transition-colors"
                  aria-label="Duplicate slide"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle duplicate action
                  }}
                >
                  <Copy className="w-4 h-4 text-neutral-600" />
                </button>
                <button
                  className="p-1.5 bg-white hover:bg-neutral-100 rounded shadow-sm transition-colors"
                  aria-label="More options"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContextMenu(slide.id, e);
                  }}
                >
                  <MoreVertical className="w-4 h-4 text-neutral-600" />
                </button>
              </div>

              {/* Thumbnail */}
              <div className="aspect-video bg-neutral-100 rounded-t overflow-hidden">
                <img
                  src={slide.thumbnailUrl || '/placeholder.svg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slide Info */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-neutral-900 truncate" title={slide.title}>
                  {slide.title}
                </h3>
                {slide.tags && slide.tags.length > 0 && (
                  <div className="flex items-center gap-1 mt-2 flex-wrap">
                    {slide.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {slide.tags.length > 2 && (
                      <span className="text-xs text-neutral-500">
                        +{slide.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Slide Preview Popover */}
      {previewSlideId && previewPosition && (
        <SlidePreviewPopover
          slide={slides.find(s => s.id === previewSlideId)!}
          position={previewPosition}
          onClose={() => {
            setPreviewSlideId(null);
            setPreviewPosition(null);
          }}
        />
      )}
    </>
  );
};

