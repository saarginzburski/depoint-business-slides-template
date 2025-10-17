import React, { useState, Suspense } from 'react';
import { Eye, Copy, Trash2, MoreVertical, GripVertical } from 'lucide-react';
import { Slide } from '@/types/deck';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { SlidePreviewPopover } from '@/components/SlidePreviewPopover';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SlideGridProps {
  slides: Slide[];
  selectedSlideIds: Set<string>;
  onToggleSelection: (slideId: string, isCtrlOrCmd: boolean) => void;
  onContextMenu: (slideId: string, x: number, y: number) => void;
  viewMode?: 'grid' | 'list';
  showCheckboxes?: boolean;
  slideComponents?: Record<string, React.LazyExoticComponent<any>>;
  onReorder?: (slides: Slide[]) => void;
}

// Draggable slide card component
interface DraggableSlideCardProps {
  slide: Slide;
  isSelected: boolean;
  isHovered: boolean;
  showCheckboxes: boolean;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  onCardClick: (e: React.MouseEvent) => void;
  onContextMenuClick: (slideId: string, e: React.MouseEvent) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggleSelection: () => void;
  onPreviewClick: (e: React.MouseEvent) => void;
}

const DraggableSlideCard: React.FC<DraggableSlideCardProps> = ({
  slide,
  isSelected,
  isHovered,
  showCheckboxes,
  slideComponents,
  onCardClick,
  onContextMenuClick,
  onMouseEnter,
  onMouseLeave,
  onToggleSelection,
  onPreviewClick,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: slide.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`
        relative group cursor-pointer transition-all duration-200
        ${isSelected ? 'ring-2 ring-primary-600 bg-primary-50/30' : 'hover:elevation-2'}
        ${isHovered ? 'elevation-1' : ''}
        ${isDragging ? 'opacity-50' : ''}
        animate-slide-enter
      `}
      onClick={onCardClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenuClick(slide.id, e);
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="listitem"
      aria-label={`${slide.title}${isSelected ? ', selected' : ''}`}
      aria-selected={isSelected}
      tabIndex={0}
    >
      {/* Drag Handle - supports both within-section reordering and cross-section moving */}
      <div
        {...attributes}
        {...listeners}
        draggable
        onDragStart={(e) => {
          // For native HTML5 drag to sections
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('slideIds', slide.id);
        }}
        className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing"
      >
        <div className="p-1 bg-white rounded shadow-sm">
          <GripVertical className="w-4 h-4 text-neutral-600" />
        </div>
      </div>

      {/* Checkbox */}
      {(showCheckboxes || isSelected) && (
        <div className="absolute top-2 left-10 z-10">
          <div className="p-0.5 bg-white rounded shadow-sm">
            <Checkbox
              checked={isSelected}
              onCheckedChange={onToggleSelection}
            />
          </div>
        </div>
      )}

      {/* Action Toolbar */}
      <div className={`
        absolute top-2 right-2 z-10 flex items-center gap-1 transition-opacity
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}>
        <button
          className="p-1.5 bg-white hover:bg-neutral-100 rounded shadow-sm transition-colors"
          aria-label="Preview slide"
          onClick={onPreviewClick}
        >
          <Eye className="w-4 h-4 text-neutral-600" />
        </button>
      </div>

      {/* Thumbnail */}
      <div className="aspect-video bg-neutral-50 rounded-t overflow-hidden relative">
        <div className="w-full h-full transform scale-[0.2] origin-top-left" style={{ width: '500%', height: '500%' }}>
          <Suspense
            fallback={
              <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                <div className="animate-pulse text-neutral-400 text-6xl font-bold">{slide.id}</div>
              </div>
            }
          >
            {slideComponents[slide.component] ? (
              React.createElement(slideComponents[slide.component])
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <div className="text-neutral-400 text-6xl font-bold">{slide.id}</div>
              </div>
            )}
          </Suspense>
        </div>
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
};

export const SlideGrid: React.FC<SlideGridProps> = ({
  slides,
  selectedSlideIds,
  onToggleSelection,
  onContextMenu,
  viewMode = 'grid',
  showCheckboxes = false,
  slideComponents = {},
  onReorder,
}) => {
  const [hoveredSlideId, setHoveredSlideId] = useState<string | null>(null);
  const [previewSlideId, setPreviewSlideId] = useState<string | null>(null);
  const [previewPosition, setPreviewPosition] = useState<{ x: number; y: number } | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleMouseEnter = (slideId: string) => {
    setHoveredSlideId(slideId);
  };

  const handleMouseLeave = () => {
    setHoveredSlideId(null);
  };

  const handlePreviewClick = (slideId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    const card = target.closest('[role="listitem"]') as HTMLElement;
    if (card) {
      const rect = card.getBoundingClientRect();
      setPreviewPosition({
        x: rect.right + 16,
        y: rect.top,
      });
      setPreviewSlideId(slideId);
    }
  };

  const handleCardClick = (slideId: string, event: React.MouseEvent) => {
    if (event.target instanceof HTMLInputElement) return; // Don't toggle if clicking checkbox
    onToggleSelection(slideId, event.metaKey || event.ctrlKey);
  };

  const handleContextMenu = (slideId: string, event: React.MouseEvent) => {
    event.preventDefault();
    onContextMenu(slideId, event.clientX, event.clientY);
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = slides.findIndex((s) => s.id === active.id);
    const newIndex = slides.findIndex((s) => s.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const newSlides = arrayMove(slides, oldIndex, newIndex);
      onReorder?.(newSlides);
    }
  };

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

  // Grid view with drag-and-drop
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={slides.map(s => s.id)} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4" role="list" aria-label="Slides">
            {slides.map((slide) => {
              const isSelected = selectedSlideIds.has(slide.id);
              const isHovered = hoveredSlideId === slide.id;

              return (
                <DraggableSlideCard
                  key={slide.id}
                  slide={slide}
                  isSelected={isSelected}
                  isHovered={isHovered}
                  showCheckboxes={showCheckboxes}
                  slideComponents={slideComponents}
                  onCardClick={(e) => handleCardClick(slide.id, e)}
                  onContextMenuClick={(slideId, e) => {
                    e.preventDefault();
                    onContextMenu(slideId, e.clientX, e.clientY);
                  }}
                  onMouseEnter={() => handleMouseEnter(slide.id)}
                  onMouseLeave={handleMouseLeave}
                  onToggleSelection={() => onToggleSelection(slide.id, false)}
                  onPreviewClick={(e) => handlePreviewClick(slide.id, e)}
                />
              );
            })}
          </div>
        </SortableContext>
        
        {/* Drag Overlay */}
        <DragOverlay>
          {activeId ? (() => {
            const draggedSlide = slides.find(s => s.id === activeId);
            if (!draggedSlide) return null;
            
            return (
              <Card className="cursor-grabbing opacity-80 shadow-lg rotate-3">
                {/* Thumbnail */}
                <div className="aspect-video bg-neutral-50 rounded-t overflow-hidden relative">
                  <div className="w-full h-full transform scale-[0.2] origin-top-left" style={{ width: '500%', height: '500%' }}>
                    <Suspense
                      fallback={
                        <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                          <div className="animate-pulse text-neutral-400 text-6xl font-bold">{draggedSlide.id}</div>
                        </div>
                      }
                    >
                      {slideComponents[draggedSlide.component] ? (
                        React.createElement(slideComponents[draggedSlide.component])
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                          <div className="text-neutral-400 text-6xl font-bold">{draggedSlide.id}</div>
                        </div>
                      )}
                    </Suspense>
                  </div>
                </div>

                {/* Slide Info */}
                <div className="p-3">
                  <h3 className="text-sm font-medium text-neutral-900 truncate">
                    {draggedSlide.title}
                  </h3>
                </div>
              </Card>
            );
          })() : null}
        </DragOverlay>
      </DndContext>

      {/* Slide Preview Popover */}
      {previewSlideId && previewPosition && (() => {
        const slide = slides.find(s => s.id === previewSlideId);
        const SlideComponent = slide ? slideComponents[slide.component] : undefined;
        return slide ? (
          <SlidePreviewPopover
            slide={slide}
            position={previewPosition}
            slideComponent={SlideComponent}
            onClose={() => {
              setPreviewSlideId(null);
              setPreviewPosition(null);
            }}
          />
        ) : null;
      })()}
    </>
  );
};

