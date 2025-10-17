import { useState, useEffect } from 'react';
import { db } from '@/integrations/firebase/client';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
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
      const ordersQuery = query(
        collection(db, 'deck_variation_slide_orders'),
        where('deck_variation_id', '==', variationId),
        orderBy('order_index', 'asc')
      );
      const ordersSnapshot = await getDocs(ordersQuery);
      
      const orders: SlideOrder[] = ordersSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          slide_id: data.slide_id,
          section_id: data.section_id,
          order_index: data.order_index
        };
      });

      setSlideOrders(orders);
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
    if (slideOrders.length === 0) {
      // Use default ordering - section by section
      const orderedSections = getOrderedSlidesBySection();
      const visibleSlides: typeof slideConfig = [];

      sections.forEach(section => {
        if (selectedSections.has(section.id) && section.id !== 'hidden') {
          visibleSlides.push(...orderedSections[section.id]);
        }
      });

      return visibleSlides;
    } else {
      // Use custom ordering but respect section sequence (deck -> appendices -> demo; exclude hidden)
      const orderedSections = getOrderedSlidesBySection();
      const visibleSlides: typeof slideConfig = [];

      sections.forEach(section => {
        if (selectedSections.has(section.id) && section.id !== 'hidden') {
          visibleSlides.push(...orderedSections[section.id]);
        }
      });

      return visibleSlides;
    }
  };

  return {
    slideOrders,
    loading,
    getOrderedSlidesBySection,
    getVisibleSlides,
    refetch: loadSlideOrders
  };
};