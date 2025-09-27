import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { slideConfig } from '@/pages/slides/slideConfig';
import { toast } from '@/hooks/use-toast';

interface SlideOrder {
  slide_id: number;
  section_id: string;
  order_index: number;
}

interface Section {
  id: string;
  name: string;
  description: string;
  color: string;
  slides: number[];
}

export const useSlideOrdering = (variationId: string | null, sections: Section[]) => {
  const [slideOrders, setSlideOrders] = useState<SlideOrder[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (variationId) {
      loadSlideOrders();
    }
  }, [variationId]);

  const loadSlideOrders = async () => {
    if (!variationId) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('deck_variation_slide_orders')
        .select('*')
        .eq('deck_variation_id', variationId)
        .order('order_index');

      if (error) throw error;

      setSlideOrders(data || []);
    } catch (error) {
      console.error('Error loading slide orders:', error);
      toast({
        title: "Error",
        description: "Failed to load slide orders",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getOrderedSlidesBySection = () => {
    const orderedSections: Record<string, typeof slideConfig> = {};
    
    // Initialize with default sections
    sections.forEach(section => {
      orderedSections[section.id] = [];
    });

    if (slideOrders.length === 0) {
      // Use default ordering
      sections.forEach(section => {
        orderedSections[section.id] = slideConfig.filter(slide => 
          section.slides.includes(slide.id)
        );
      });
    } else {
      // Use custom ordering
      slideOrders
        .sort((a, b) => a.order_index - b.order_index)
        .forEach(order => {
          const slide = slideConfig.find(s => s.id === order.slide_id);
          if (slide && orderedSections[order.section_id]) {
            orderedSections[order.section_id].push(slide);
          }
        });
    }

    return orderedSections;
  };

  const getVisibleSlides = (selectedSections: Set<string>) => {
    const orderedSections = getOrderedSlidesBySection();
    const visibleSlides: typeof slideConfig = [];

    sections.forEach(section => {
      if (selectedSections.has(section.id) && section.id !== 'hidden') {
        visibleSlides.push(...orderedSections[section.id]);
      }
    });

    return visibleSlides;
  };

  return {
    slideOrders,
    loading,
    getOrderedSlidesBySection,
    getVisibleSlides,
    refetch: loadSlideOrders
  };
};