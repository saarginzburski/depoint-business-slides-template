import React, { Suspense, useState, useEffect } from 'react';
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
import { GripVertical, Eye, EyeOff } from 'lucide-react';
import { slideConfig } from '@/pages/slides/slideConfig';
import { db } from '@/integrations/firebase/client';
import { collection, addDoc, getDocs, deleteDoc, query, where } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';

interface Section {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  slides: number[];
  color: string;
}

interface SlideData {
  id: number;
  name: string;
  title: string;
  component: string;
}

interface DraggableSlideGridProps {
  sections: Section[];
  selectedSections: Set<string>;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  onSlideClick: (slideId: number) => void;
  variationId: string | null;
  orderedSlidesBySection: Record<string, SlideData[]>;
  onOrdersChanged?: () => void;
}

interface DraggableSlideProps {
  slide: SlideData;
  sectionId: string;
  sectionColor: string;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  onSlideClick: (slideId: number) => void;
  onMoveSlide: (slideId: number, fromSection: string, toSection: string) => void;
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
  onMoveSlide
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

  const handleToggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isHidden) {
      // Move to first non-hidden section (main-deck by default)
      onMoveSlide(slide.id, sectionId, 'main-deck');
    } else {
      // Move to hidden section
      onMoveSlide(slide.id, sectionId, 'hidden');
    }
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`group relative p-3 transition-all hover:shadow-md ${
        isDragging ? 'opacity-50 scale-105 z-50' : 'hover:scale-105'
      }`}
    >
      <div 
        className="w-full aspect-[16/9] bg-white rounded border mb-2 overflow-hidden cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onSlideClick(slide.id);
        }}
      >
        <div className="w-full h-full transform scale-[0.2] origin-top-left" style={{ width: '500%', height: '500%' }}>
          <Suspense fallback={<div className="w-full h-full bg-gray-100 flex items-center justify-center"><div className="animate-pulse text-gray-400">{slide.id}</div></div>}>
            {SlideComponent ? <SlideComponent /> : <div className="w-full h-full bg-gray-100 flex items-center justify-center"><div className="text-gray-400 text-6xl font-bold">{slide.id}</div></div>}
          </Suspense>
        </div>
      </div>
      
      {/* Slide Info */}
      <div className="mb-2">
        <h4 className="text-xs font-medium text-gray-900 truncate">{slide.name}</h4>
        <p className="text-xs text-gray-500">Slide {slide.id}</p>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center gap-2 pt-2 border-t">
        {/* Drag Handle */}
        <button
          {...listeners}
          {...attributes}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors cursor-grab active:cursor-grabbing"
          onClick={(e) => e.stopPropagation()}
          title="Drag to reorder"
        >
          <GripVertical className="h-3 w-3" />
          <span>Move</span>
        </button>

        {/* Hide/Show Toggle */}
        <button
          onClick={handleToggleVisibility}
          className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors ${
            isHidden 
              ? 'text-green-600 hover:text-green-900 hover:bg-green-50' 
              : 'text-orange-600 hover:text-orange-900 hover:bg-orange-50'
          }`}
          title={isHidden ? 'Show slide' : 'Hide slide'}
        >
          {isHidden ? (
            <>
              <Eye className="h-3 w-3" />
              <span>Show</span>
            </>
          ) : (
            <>
              <EyeOff className="h-3 w-3" />
              <span>Hide</span>
            </>
          )}
        </button>
      </div>
    </Card>
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
      className={`${gridClasses} min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
        isOver 
          ? 'border-blue-400 bg-blue-50' 
          : 'border-transparent'
      }`}
    >
      {children}
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
  onOrdersChanged
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

  const handleMoveSlide = async (slideId: number, fromSection: string, toSection: string) => {
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
        <div className="flex-1 space-y-8">
          {regularSections.map(section => {
            const sectionSlideList = sectionSlides[section.id] || [];
            if (sectionSlideList.length === 0) return null;
            
            const Icon = section.icon;
            const colorClasses = {
              blue: 'border-blue-200 bg-blue-50',
              slate: 'border-slate-200 bg-slate-50', 
              green: 'border-green-200 bg-green-50',
            };
            
            return (
              <div key={section.id} className={`border rounded-lg p-6 ${colorClasses[section.color as keyof typeof colorClasses]}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-gray-700" />
                  <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                  <span className="text-sm text-gray-500">({sectionSlideList.length} slides)</span>
                  <Badge variant="outline" className="text-xs">
                    Drag & Drop Enabled
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
                  <div className="border-2 border-gray-300 bg-gray-50 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 text-gray-700" />
                      <h3 className="text-lg font-semibold text-gray-900">{hiddenSection.name}</h3>
                      <span className="text-sm text-gray-500">({sectionSlideList.length})</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4">
                      Drag slides here to hide them from the presentation
                    </p>
                    
                    <SortableContext
                      items={sectionSlideList.map(slide => `${hiddenSection.id}-${slide.id}`)}
                      strategy={rectSortingStrategy}
                    >
                      <DroppableSection section={hiddenSection} slides={sectionSlideList}>
                        {sectionSlideList.length === 0 ? (
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-400">
                            Drop slides here
                          </div>
                        ) : (
                          sectionSlideList.map(slide => (
                            <DraggableSlide
                              key={slide.id}
                              slide={slide}
                              sectionId={hiddenSection.id}
                              sectionColor={hiddenSection.color}
                              slideComponents={slideComponents}
                              onSlideClick={onSlideClick}
                              onMoveSlide={handleMoveSlide}
                            />
                          ))
                        )}
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