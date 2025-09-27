import React, { useState, useEffect } from 'react';
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
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GripVertical, Save, X } from 'lucide-react';
import { slideConfig } from '@/pages/slides/slideConfig';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface Section {
  id: string;
  name: string;
  description: string;
  color: string;
  slides: number[];
}

interface SlideOrder {
  slide_id: number;
  section_id: string;
  order_index: number;
}

interface DragDropSlideReordererProps {
  sections: Section[];
  variationId: string;
  onClose: () => void;
}

interface DraggableSlideProps {
  slide: { id: number; name: string; title: string };
  sectionId: string;
  sectionColor: string;
}

const DraggableSlide: React.FC<DraggableSlideProps> = ({ slide, sectionId, sectionColor }) => {
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
        isDragging ? 'opacity-50 scale-105' : 'hover:shadow-md'
      } ${getSectionStyles(sectionColor).card}`}
      {...attributes}
    >
      <div
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-1 text-gray-400 hover:text-gray-600"
      >
        <GripVertical className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs font-mono">
            {slide.id}
          </Badge>
          <span className="font-medium text-sm truncate">{slide.name}</span>
        </div>
        <p className="text-xs text-gray-500 truncate mt-1">{slide.title}</p>
      </div>
    </div>
  );
};

const getSectionStyles = (color: string) => {
  const styles = {
    blue: {
      card: 'bg-blue-50 border-blue-200',
      header: 'text-blue-900 bg-blue-100 border-blue-300'
    },
    slate: {
      card: 'bg-slate-50 border-slate-200',
      header: 'text-slate-900 bg-slate-100 border-slate-300'
    },
    green: {
      card: 'bg-green-50 border-green-200',
      header: 'text-green-900 bg-green-100 border-green-300'
    },
    gray: {
      card: 'bg-gray-50 border-gray-200',
      header: 'text-gray-900 bg-gray-100 border-gray-300'
    }
  };
  return styles[color as keyof typeof styles] || styles.gray;
};

export const DragDropSlideReorderer: React.FC<DragDropSlideReordererProps> = ({
  sections,
  variationId,
  onClose
}) => {
  const [sectionSlides, setSectionSlides] = useState<Record<string, { id: number; name: string; title: string; }[]>>({});
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [saving, setSaving] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    loadSlideOrders();
  }, [variationId]);

  const loadSlideOrders = async () => {
    try {
      const { data: orders, error } = await supabase
        .from('deck_variation_slide_orders')
        .select('*')
        .eq('deck_variation_id', variationId)
        .order('order_index');

      if (error) throw error;

      // Initialize with default section assignments
      const initialSections: Record<string, { id: number; name: string; title: string; }[]> = {};
      
      sections.forEach(section => {
        initialSections[section.id] = [];
      });

      // Add all slides to their default sections first
      slideConfig.forEach(slide => {
        const defaultSection = sections.find(s => s.slides.includes(slide.id));
        if (defaultSection) {
          initialSections[defaultSection.id].push({
            id: slide.id,
            name: slide.name,
            title: slide.title
          });
        }
      });

      // Apply custom ordering if exists
      if (orders && orders.length > 0) {
        const orderedSections: Record<string, { id: number; name: string; title: string; }[]> = {};
        sections.forEach(section => {
          orderedSections[section.id] = [];
        });

        orders
          .sort((a, b) => a.order_index - b.order_index)
          .forEach(order => {
            const slide = slideConfig.find(s => s.id === order.slide_id);
            if (slide && orderedSections[order.section_id]) {
              orderedSections[order.section_id].push({
                id: slide.id,
                name: slide.name,
                title: slide.title
              });
            }
          });

        setSectionSlides(orderedSections);
      } else {
        setSectionSlides(initialSections);
      }
    } catch (error) {
      console.error('Error loading slide orders:', error);
      toast({
        title: "Error",
        description: "Failed to load slide orders",
        variant: "destructive",
      });
    }
  };

  const saveSlideOrders = async () => {
    try {
      setSaving(true);

      // Delete existing orders
      await supabase
        .from('deck_variation_slide_orders')
        .delete()
        .eq('deck_variation_id', variationId);

      // Create new orders
      const newOrders: { deck_variation_id: string; slide_id: number; section_id: string; order_index: number; }[] = [];
      
      Object.entries(sectionSlides).forEach(([sectionId, slides]) => {
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
        title: "Success",
        description: "Slide order saved successfully",
      });

      onClose();
    } catch (error) {
      console.error('Error saving slide orders:', error);
      toast({
        title: "Error",
        description: "Failed to save slide orders",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
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

    if (!activeData || !overData) return;

    const activeSection = activeData.sectionId;
    const overSection = overData.sectionId;
    const activeSlide = activeData.slide;
    const overSlide = overData.slide;

    setSectionSlides(prev => {
      const newSections = { ...prev };

      if (activeSection === overSection) {
        // Same section - reorder
        const sectionSlides = [...newSections[activeSection]];
        const activeIndex = sectionSlides.findIndex(s => s.id === activeSlide.id);
        const overIndex = sectionSlides.findIndex(s => s.id === overSlide.id);
        
        newSections[activeSection] = arrayMove(sectionSlides, activeIndex, overIndex);
      } else {
        // Different sections - move
        newSections[activeSection] = newSections[activeSection].filter(s => s.id !== activeSlide.id);
        
        const overIndex = newSections[overSection].findIndex(s => s.id === overSlide.id);
        newSections[overSection].splice(overIndex, 0, activeSlide);
      }

      return newSections;
    });
  };

  const activeSlide = activeId ? 
    Object.values(sectionSlides).flat().find(slide => 
      Object.keys(sectionSlides).some(sectionId => `${sectionId}-${slide.id}` === activeId)
    ) : null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden bg-white">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Reorder Slides</h2>
          <div className="flex gap-2">
            <Button onClick={saveSlideOrders} disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Saving...' : 'Save Order'}
            </Button>
            <Button variant="outline" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div className="grid grid-cols-2 gap-6">
              {sections.map(section => (
                <div key={section.id} className="space-y-3">
                  <div className={`p-3 rounded-lg border-2 ${getSectionStyles(section.color).header}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{section.name}</h3>
                        <p className="text-sm opacity-80">{section.description}</p>
                      </div>
                      <Badge variant="secondary">
                        {sectionSlides[section.id]?.length || 0}
                      </Badge>
                    </div>
                  </div>

                  <SortableContext
                    items={sectionSlides[section.id]?.map(slide => `${section.id}-${slide.id}`) || []}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="space-y-2 min-h-[200px] p-3 rounded-lg border-2 border-dashed border-gray-200">
                      {sectionSlides[section.id]?.map(slide => (
                        <DraggableSlide
                          key={slide.id}
                          slide={slide}
                          sectionId={section.id}
                          sectionColor={section.color}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </div>
              ))}
            </div>

            <DragOverlay>
              {activeSlide && (
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-white shadow-lg">
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
              )}
            </DragOverlay>
          </DndContext>
        </div>
      </Card>
    </div>
  );
};