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
import { GripVertical } from 'lucide-react';
import { slideConfig } from '@/pages/slides/slideConfig';
import { supabase } from '@/integrations/supabase/client';
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
}

interface DraggableSlideProps {
  slide: SlideData;
  sectionId: string;
  sectionColor: string;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  onSlideClick: (slideId: number) => void;
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
  onSlideClick 
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

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`group relative p-3 transition-all cursor-pointer hover:shadow-md ${
        isDragging ? 'opacity-50 scale-105 z-50' : 'hover:scale-105'
      }`}
      onClick={() => onSlideClick(slide.id)}
    >
      {/* Drag Handle */}
      <div
        {...listeners}
        {...attributes}
        className="absolute top-2 right-2 z-10 cursor-grab active:cursor-grabbing p-1 bg-white/80 rounded shadow-sm opacity-60 group-hover:opacity-100 hover:opacity-100 transition-opacity"
        onClick={(e) => e.stopPropagation()}
      >
        <GripVertical className="h-3 w-3 text-gray-600" />
      </div>

      <div 
        className="w-full aspect-[16/9] bg-white rounded border shadow-sm mb-2 overflow-hidden cursor-pointer group"
        onClick={(e) => {
          e.stopPropagation();
          onSlideClick(slide.id);
        }}
      >
        <div className="w-full h-full transform scale-[0.2] origin-top-left" style={{ width: '500%', height: '500%' }}>
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"><div className="animate-pulse text-gray-400">{slide.id}</div></div>}>
            {SlideComponent ? <SlideComponent /> : <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"><div className="text-gray-400 text-6xl font-bold">{slide.id}</div></div>}
          </Suspense>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xs font-medium text-gray-900 truncate">{slide.name}</h4>
          <p className="text-xs text-gray-500">Slide {slide.id}</p>
        </div>
      </div>
    </Card>
  );
};

const DroppableSection: React.FC<DroppableSectionProps> = ({ section, slides, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `section-${section.id}`,
    data: { sectionId: section.id, type: 'section' }
  });

  return (
    <div
      ref={setNodeRef}
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
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
  orderedSlidesBySection
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
      await supabase
        .from('deck_variation_slide_orders')
        .delete()
        .eq('deck_variation_id', variationId);

      // Create new orders
      const newOrders: { deck_variation_id: string; slide_id: number; section_id: string; order_index: number; }[] = [];
      
      Object.entries(newSectionSlides).forEach(([sectionId, slides]) => {
        slides.forEach((slide, index) => {
          newOrders.push({
            deck_variation_id: variationId,
            slide_id: slide.id,
            section_id: sectionId,
            order_index: index
          });
        });
      });

      if (newOrders.length > 0) {
        const { error } = await supabase
          .from('deck_variation_slide_orders')
          .insert(newOrders);

        if (error) throw error;
      }

      toast({
        title: "Auto-saved",
        description: "Slide order updated",
      });
    } catch (error) {
      console.error('Error auto-saving slide orders:', error);
      toast({
        title: "Error",
        description: "Failed to save slide order",
        variant: "destructive",
      });
    }
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

  // Filter sections by selected sections
  const visibleSections = sections.filter(section => selectedSections.has(section.id));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="space-y-8">
        {visibleSections.map(section => {
          const sectionSlideList = sectionSlides[section.id] || [];
          if (sectionSlideList.length === 0) return null;
          
          const Icon = section.icon;
          const colorClasses = {
            blue: 'border-blue-200 bg-blue-50',
            slate: 'border-slate-200 bg-slate-50', 
            green: 'border-green-200 bg-green-50',
            gray: 'border-gray-200 bg-gray-50',
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
                    />
                  ))}
                </DroppableSection>
              </SortableContext>
            </div>
          );
        })}
      </div>

      <DragOverlay>
        {activeSlide && (
          <Card className="p-3 bg-white shadow-lg border-2 border-blue-400 opacity-90">
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