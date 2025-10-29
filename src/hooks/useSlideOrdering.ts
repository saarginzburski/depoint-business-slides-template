import { useState, useEffect } from 'react';
import { db } from '@/integrations/firebase/client';
import { collection, getDocs, query, where, orderBy, addDoc, deleteDoc } from 'firebase/firestore';
import { slideConfig } from '@/pages/slides/slideConfig';
import { toast } from '@/hooks/use-toast';

interface SlideOrder {
  slide_id: string;  // Now uses component name for stability
  section_id: string;
  order_index: number;
}

interface Section {
  id: string;
  name: string;
  description: string;
  color: string;
  slides: string[];  // Now uses component names instead of numbers
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
      // Use default ordering - assign all slides from slideConfig to their sections
      sections.forEach(section => {
        orderedSections[section.id] = slideConfig.filter(slide => 
          section.slides.includes(slide.id)
        ).sort((a, b) => a.displayOrder - b.displayOrder); // Sort by displayOrder to maintain order
      });
    } else {
      // Use custom ordering from database
      slideOrders
        .sort((a, b) => a.order_index - b.order_index)
        .forEach(order => {
          const slide = slideConfig.find(s => s.id === order.slide_id);
          if (slide && orderedSections[order.section_id]) {
            orderedSections[order.section_id].push(slide);
          }
        });
      
      // Add any slides from slideConfig that aren't in the database yet
      // This ensures all 32 slides are always shown
      const assignedSlideIds = new Set(slideOrders.map(o => o.slide_id));
      slideConfig.forEach(slide => {
        if (!assignedSlideIds.has(slide.id)) {
          // Find which section this slide should be in based on default config
          const defaultSection = sections.find(s => s.slides.includes(slide.id));
          if (defaultSection && orderedSections[defaultSection.id]) {
            orderedSections[defaultSection.id].push(slide);
          }
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

  const updateSlideOrders = async (newOrders: Record<string, typeof slideConfig>) => {
    if (!variationId) {
      return;
    }

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
      
      Object.entries(newOrders).forEach(([sectionId, slides]) => {
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

      await loadSlideOrders();
    } catch (error) {
      console.error('Error updating slide orders:', error);
      toast({
        title: "Error",
        description: "Failed to update slide orders",
        variant: "destructive",
      });
      throw error;
    }
  };

  const moveSlideToSection = async (slideId: string, targetSection: string) => {
    if (!variationId) {
      return;
    }

    try {
      const orderedSections = getOrderedSlidesBySection();
      
      // Find and remove the slide from its current section
      let slideData: typeof slideConfig[0] | null = null;
      Object.entries(orderedSections).forEach(([sectionId, slides]) => {
        const index = slides.findIndex(s => s.id === slideId);
        if (index !== -1) {
          slideData = slides[index];
          orderedSections[sectionId] = slides.filter(s => s.id !== slideId);
        }
      });

      // If slide not found in ordered sections, get from slideConfig
      if (!slideData) {
        slideData = slideConfig.find(s => s.id === slideId) || null;
      }

      // Add to target section
      if (slideData && orderedSections[targetSection]) {
        orderedSections[targetSection].push(slideData);
      }

      await updateSlideOrders(orderedSections);
    } catch (error) {
      console.error('Error moving slide to section:', error);
      toast({
        title: "Error",
        description: "Failed to move slide",
        variant: "destructive",
      });
      throw error;
    }
  };

  return {
    slideOrders,
    loading,
    getOrderedSlidesBySection,
    getVisibleSlides,
    updateSlideOrders,
    moveSlideToSection,
    refetch: loadSlideOrders
  };
};