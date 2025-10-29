import React, { Suspense, useState, useEffect, useRef } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  UniqueIdentifier,
  useDroppable,
} from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { GripVertical, Eye, EyeOff, Copy } from 'lucide-react';
import { slideConfig } from '@/pages/slides/slideConfig';
import { db } from '@/integrations/firebase/client';
import { collection, addDoc, getDocs, deleteDoc, query, where } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { SlidePreviewPopover } from '@/components/SlidePreviewPopover';

interface Section {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  slides: string[];  // Now uses component names instead of numbers
  color: string;
}

interface SlideData {
  id: string;  // Now uses component name for stability
  name: string;
  title: string;
  component: string;
}

interface DraggableSlideGridProps {
  sections: Section[];
  selectedSections: Set<string>;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  onSlideClick: (slideId: string) => void;
  variationId: string | null;
  orderedSlidesBySection: Record<string, SlideData[]>;
  onOrdersChanged?: () => void;
  selectedSlideIds?: Set<string>;
  onToggleSelection?: (slideId: string, ctrlKey: boolean) => void;
  onContextMenu?: (e: React.MouseEvent, slideId: string) => void;
}

interface DraggableSlideProps {
  slide: SlideData;
  sectionId: string;
  sectionColor: string;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  onSlideClick: (slideId: string) => void;
  onMoveSlide: (slideId: string, fromSection: string, toSection: string) => void;
  isSelected?: boolean;
  onToggleSelection?: (slideId: string, ctrlKey: boolean) => void;
  onContextMenu?: (e: React.MouseEvent, slideId: string) => void;
}

interface DroppableSectionProps {
  section: Section;
  slides: SlideData[];
  children: React.ReactNode;
}

const DraggableSlide: React.FC<DraggableSlideProps> = ({ 
  slide, 
  sectionId, 
  sectionColor, 
  slideComponents, 
  onSlideClick,
  onMoveSlide,
  isSelected = false,
  onToggleSelection,
  onContextMenu
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: `${sectionId}-${slide.id}`,
    data: { slide, sectionId }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const componentKey = slide.component as keyof typeof slideComponents;
  const SlideComponent = slideComponents[componentKey];
  const isHidden = sectionId === 'hidden';

  // Hover preview state with delay
  const [showPreview, setShowPreview] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) return;
    
    setAnchorEl(e.currentTarget);
    hoverTimeoutRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 800); // 800ms delay before showing preview
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowPreview(false);
    setAnchorEl(null);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleToggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isHidden) {
      // Move to first non-hidden section (deck by default)
      onMoveSlide(slide.id, sectionId, 'deck');
    } else {
      // Move to hidden section
      onMoveSlide(slide.id, sectionId, 'hidden');
    }
  };

  return (
    <>
      <Card
        ref={(node) => {
          setNodeRef(node);
          cardRef.current = node;
        }}
        style={style}
        className={`group relative overflow-hidden rounded-xl border transition-standard animate-slide-enter ${
          isSelected 
            ? 'ring-2 ring-primary border-primary shadow-elevation-2' 
            : 'border-neutral-200 hover:border-neutral-300'
        } ${
          isDragging ? 'opacity-40 scale-105' : 'hover:shadow-elevation-2'
        }`}
        onContextMenu={(e) => onContextMenu?.(e, slide.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      {/* Multi-Select Checkbox */}
      {onToggleSelection && (
        <div className="absolute top-2 left-2 z-10">
          <Checkbox
            checked={isSelected}
            onCheckedChange={() => onToggleSelection(slide.id, false)}
            className="bg-surface shadow-sm border-neutral-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSelection(slide.id, e.ctrlKey || e.metaKey);
            }}
          />
        </div>
      )}

      {/* Icon-Only Hover Toolbar */}
      <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Drag Handle */}
        <button
          {...listeners}
          {...attributes}
          className="h-8 w-8 p-0 bg-surface/90 backdrop-blur-sm hover:bg-primary/10 rounded-full shadow-sm flex items-center justify-center transition-standard cursor-grab active:cursor-grabbing"
          onClick={(e) => e.stopPropagation()}
          title="Drag to reorder"
        >
          <GripVertical className="h-4 w-4 text-neutral-700" />
        </button>

        {/* Hide/Show Toggle */}
        <button
          onClick={handleToggleVisibility}
          className={`h-8 w-8 p-0 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center transition-standard ${
            isHidden 
              ? 'bg-green-50/90 hover:bg-green-100 text-green-700' 
              : 'bg-surface/90 hover:bg-primary/10 text-neutral-700'
          }`}
          title={isHidden ? 'Add to deck' : 'Remove from deck'}
        >
          {isHidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </button>
      </div>

      {/* Slide Preview */}
      <div 
        className="relative w-full aspect-[16/9] bg-neutral-50 overflow-hidden cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (onToggleSelection && (e.ctrlKey || e.metaKey)) {
            onToggleSelection(slide.id, true);
          } else {
            onSlideClick(slide.id);
          }
        }}
      >
        <div className="w-full h-full transform scale-[0.2] origin-top-left" style={{ width: '500%', height: '500%' }}>
          <Suspense fallback={
            <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
              <div className="animate-pulse text-neutral-400 text-6xl">{slide.id}</div>
            </div>
          }>
            {SlideComponent ? (
              <SlideComponent />
            ) : (
              <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                <div className="text-neutral-400 text-6xl font-bold">{slide.id}</div>
              </div>
            )}
          </Suspense>
        </div>
        
        {/* Hover Overlay - Drive-style */}
        <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-standard pointer-events-none" />
      </div>
      
      {/* Slide Info */}
      <div className="px-3 py-2 border-t border-neutral-200">
        <h4 className="text-body-small font-medium text-neutral-900 truncate">{slide.name}</h4>
        <p className="text-label-small text-neutral-600">Slide {slide.id}</p>
      </div>
      </Card>

      {/* Hover Preview Popover */}
      {showPreview && !isDragging && anchorEl && SlideComponent && (
        <SlidePreviewPopover
          slide={slide}
          slideComponent={SlideComponent}
          anchorEl={anchorEl}
          position="right"
        />
      )}
    </>
  );
};

const DroppableSection: React.FC<DroppableSectionProps> = ({ section, slides, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `section-${section.id}`,
    data: { sectionId: section.id, type: 'section' }
  });

  // Use single column layout for hidden section, multi-column for regular sections
  const gridClasses = section.id === 'hidden' 
    ? 'grid grid-cols-1 gap-3' 
    : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4';

  return (
    <div
      ref={setNodeRef}
      className={`${gridClasses} min-h-[200px] p-6 rounded-xl transition-standard ${
        isOver 
          ? 'bg-primary/5 ring-2 ring-primary/30 ring-offset-2' 
          : 'bg-transparent'
      }`}
    >
      {slides.length === 0 ? (
        <div className="col-span-full flex items-center justify-center min-h-[160px] text-body-small text-neutral-500 italic">
          Drop slides to include
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export const DraggableSlideGrid: React.FC<DraggableSlideGridProps> = ({
  sections,
  selectedSections,
  slideComponents,
  onSlideClick,
  variationId,
  orderedSlidesBySection,
  onOrdersChanged,
  selectedSlideIds = new Set(),
  onToggleSelection,
  onContextMenu
}) => {
  const [sectionSlides, setSectionSlides] = useState<Record<string, SlideData[]>>(orderedSlidesBySection);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // Update section slides when orderedSlidesBySection changes
  useEffect(() => {
    setSectionSlides(orderedSlidesBySection);
  }, [orderedSlidesBySection]);

  const autoSaveSlideOrders = async (newSectionSlides: Record<string, SlideData[]>) => {
    if (!variationId) return;

    try {
      // Delete existing orders
      const ordersQuery = query(
        collection(db, 'deck_variation_slide_orders'),
        where('deck_variation_id', '==', variationId)
      );
      const ordersSnapshot = await getDocs(ordersQuery);
      const deletePromises = ordersSnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      // Create new orders
      const now = new Date().toISOString();
      const insertPromises: Promise<any>[] = [];
      
      Object.entries(newSectionSlides).forEach(([sectionId, slides]) => {
        slides.forEach((slide, index) => {
          insertPromises.push(
            addDoc(collection(db, 'deck_variation_slide_orders'), {
              deck_variation_id: variationId,
              slide_id: slide.id,
              section_id: sectionId,
              order_index: index,
              created_at: now,
              updated_at: now
            })
          );
        });
      });

      if (insertPromises.length > 0) {
        await Promise.all(insertPromises);
      }

      toast({
        title: "Auto-saved",
        description: "Slide order updated",
      });

      // Trigger refetch to update stats
      if (onOrdersChanged) {
        onOrdersChanged();
      }
    } catch (error) {
      console.error('Error auto-saving slide orders:', error);
      toast({
        title: "Error",
        description: "Failed to save slide order",
        variant: "destructive",
      });
    }
  };

  const handleMoveSlide = async (slideId: string, fromSection: string, toSection: string) => {
    const newSectionSlides = { ...sectionSlides };
    
    // Find and remove the slide from the source section
    const slideToMove = newSectionSlides[fromSection]?.find(s => s.id === slideId);
    if (!slideToMove) return;
    
    newSectionSlides[fromSection] = newSectionSlides[fromSection].filter(s => s.id !== slideId);
    
    // Add the slide to the target section at the end
    if (!newSectionSlides[toSection]) {
      newSectionSlides[toSection] = [];
    }
    newSectionSlides[toSection] = [...newSectionSlides[toSection], slideToMove];
    
    // Update state and auto-save
    setSectionSlides(newSectionSlides);
    await autoSaveSlideOrders(newSectionSlides);
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over || active.id === over.id) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    if (!activeData) return;

    const activeSection = activeData.sectionId;
    const activeSlide = activeData.slide;

    // Determine target section
    let targetSection: string;
    let targetIndex = -1;

    if (overData?.type === 'section') {
      // Dropping into a section container
      targetSection = overData.sectionId;
      targetIndex = -1; // Add to end
    } else if (overData?.sectionId) {
      // Dropping onto another slide
      targetSection = overData.sectionId;
      const overSlide = overData.slide;
      targetIndex = sectionSlides[targetSection]?.findIndex(s => s.id === overSlide.id) ?? -1;
    } else {
      return; // Invalid drop target
    }

    const newSectionSlides = { ...sectionSlides };

    if (activeSection === targetSection) {
      // Same section - reorder
      const slides = [...newSectionSlides[activeSection]];
      const activeIndex = slides.findIndex(s => s.id === activeSlide.id);
      
      if (targetIndex === -1) {
        // Move to end
        targetIndex = slides.length - 1;
      }
      
      newSectionSlides[activeSection] = arrayMove(slides, activeIndex, targetIndex);
    } else {
      // Different sections - move
      newSectionSlides[activeSection] = newSectionSlides[activeSection].filter(s => s.id !== activeSlide.id);
      
      if (targetIndex === -1) {
        // Add to end of target section
        newSectionSlides[targetSection].push(activeSlide);
      } else {
        // Insert at specific position
        newSectionSlides[targetSection].splice(targetIndex, 0, activeSlide);
      }
    }

    setSectionSlides(newSectionSlides);
    
    // Auto-save after drag
    if (variationId) {
      autoSaveSlideOrders(newSectionSlides);
    }
  };

  const activeSlide = activeId ? 
    Object.values(sectionSlides).flat().find(slide => 
      Object.keys(sectionSlides).some(sectionId => `${sectionId}-${slide.id}` === activeId)
    ) : null;

  // Split sections: regular sections and hidden section
  const regularSections = sections.filter(section => section.id !== 'hidden' && selectedSections.has(section.id));
  const hiddenSection = sections.find(section => section.id === 'hidden');

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-6">
        {/* Left side - Regular sections */}
        <div className="flex-1 space-y-6">
          {regularSections.map(section => {
            const sectionSlideList = sectionSlides[section.id] || [];
            if (sectionSlideList.length === 0) return null;
            
            const Icon = section.icon;
            
            return (
              <div key={section.id} className="bg-surface border border-neutral-200 rounded-xl shadow-elevation-1 overflow-hidden">
                {/* Section Header - Pinned Style */}
                <div className="sticky top-0 z-10 flex items-center gap-3 px-6 py-4 bg-surface border-b border-neutral-200">
                  <Icon className="w-5 h-5 text-neutral-600" />
                  <h3 className="text-title-medium font-medium text-neutral-900">{section.name}</h3>
                  <Badge className="bg-neutral-100 text-neutral-700 text-label-small px-2 py-0.5 rounded-full border-0">
                    {sectionSlideList.length}
                  </Badge>
                </div>
                
                <SortableContext
                  items={sectionSlideList.map(slide => `${section.id}-${slide.id}`)}
                  strategy={rectSortingStrategy}
                >
                  <DroppableSection section={section} slides={sectionSlideList}>
                    {sectionSlideList.map(slide => (
                      <DraggableSlide
                        key={slide.id}
                        slide={slide}
                        sectionId={section.id}
                        sectionColor={section.color}
                        slideComponents={slideComponents}
                        onSlideClick={onSlideClick}
                        onMoveSlide={handleMoveSlide}
                        isSelected={selectedSlideIds.has(slide.id)}
                        onToggleSelection={onToggleSelection}
                        onContextMenu={onContextMenu}
                      />
                    ))}
                  </DroppableSection>
                </SortableContext>
              </div>
            );
          })}
        </div>

        {/* Right side - Hidden section (sticky/floating) */}
        {hiddenSection && (
          <div className="w-80 shrink-0">
            <div className="sticky top-6">
              {(() => {
                const sectionSlideList = sectionSlides[hiddenSection.id] || [];
                const Icon = hiddenSection.icon;
                
                return (
                  <div className="bg-surface border-2 border-neutral-300 rounded-xl shadow-elevation-2 overflow-hidden">
                    {/* Hidden Section Header */}
                    <div className="flex items-center gap-3 px-4 py-4 bg-neutral-100 border-b border-neutral-300">
                      <Icon className="w-5 h-5 text-neutral-600" />
                      <h3 className="text-title-medium font-medium text-neutral-900">{hiddenSection.name}</h3>
                      <Badge className="bg-neutral-200 text-neutral-700 text-label-small px-2 py-0.5 rounded-full border-0">
                        {sectionSlideList.length}
                      </Badge>
                    </div>
                    <p className="px-4 py-3 text-body-small text-neutral-600 bg-neutral-50 border-b border-neutral-200">
                      Drop slides to exclude
                    </p>
                    
                    <SortableContext
                      items={sectionSlideList.map(slide => `${hiddenSection.id}-${slide.id}`)}
                      strategy={rectSortingStrategy}
                    >
                      <DroppableSection section={hiddenSection} slides={sectionSlideList}>
                        {sectionSlideList.map(slide => (
                          <DraggableSlide
                            key={slide.id}
                            slide={slide}
                            sectionId={hiddenSection.id}
                            sectionColor={hiddenSection.color}
                            slideComponents={slideComponents}
                            onSlideClick={onSlideClick}
                            onMoveSlide={handleMoveSlide}
                            isSelected={selectedSlideIds.has(slide.id)}
                            onToggleSelection={onToggleSelection}
                            onContextMenu={onContextMenu}
                          />
                        ))}
                      </DroppableSection>
                    </SortableContext>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>

      <DragOverlay>
        {activeSlide && (
          <Card className="p-3 bg-white border-2 border-blue-400 opacity-90">
            <div className="flex items-center gap-3">
              <GripVertical className="h-4 w-4 text-gray-400" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs font-mono">
                    {activeSlide.id}
                  </Badge>
                  <span className="font-medium text-sm truncate">{activeSlide.name}</span>
                </div>
                <p className="text-xs text-gray-500 truncate mt-1">{activeSlide.title}</p>
              </div>
            </div>
          </Card>
        )}
      </DragOverlay>
    </DndContext>
  );
};