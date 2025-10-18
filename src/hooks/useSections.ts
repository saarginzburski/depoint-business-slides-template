import { useState, useEffect } from 'react';
import { db } from '@/integrations/firebase/client';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  doc 
} from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';

export interface CustomSection {
  id: string;
  deck_variation_id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  order_index: number;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

const DEFAULT_SECTIONS = [
  {
    key: 'main',
    name: 'Main Deck',
    description: 'Core presentation',
    color: 'blue',
    icon: 'Layers',
    is_default: true,
    order_index: 0,
  },
  {
    key: 'demo',
    name: 'Demo',
    description: 'Dashboard demonstrations',
    color: 'green',
    icon: 'Monitor',
    is_default: true,
    order_index: 1,
  },
  {
    key: 'appendix',
    name: 'Appendices',
    description: 'Supporting documentation',
    color: 'slate',
    icon: 'BookOpen',
    is_default: true,
    order_index: 2,
  },
  {
    key: 'hidden',
    name: 'Hidden',
    description: 'Hidden slides',
    color: 'gray',
    icon: 'EyeOff',
    is_default: true,
    locked: true,
    order_index: 3,
  },
  {
    key: 'archived',
    name: 'Archived',
    description: 'Archived slides',
    color: 'slate',
    icon: 'Archive',
    is_default: true,
    locked: true,
    order_index: 4,
  },
];

const PREDEFINED_COLORS = [
  'blue', 'green', 'purple', 'orange', 'red', 'pink', 'yellow', 'cyan', 'indigo', 'slate'
];

const PREDEFINED_ICONS = [
  'Layers', 'Monitor', 'BookOpen', 'Target', 'Briefcase', 'Users', 
  'TrendingUp', 'BarChart3', 'PieChart', 'Activity', 'Zap', 'Star',
  'Heart', 'Flag', 'Award', 'Shield'
];

export const useSections = (variationId: string | null) => {
  const [customSections, setCustomSections] = useState<CustomSection[]>([]);
  const [sectionOrder, setSectionOrder] = useState<string[]>([]);  // Ordered list of section IDs
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (variationId) {
      loadCustomSections();
      loadSectionOrder();
    }
  }, [variationId]);

  const loadCustomSections = async () => {
    if (!variationId) return;

    try {
      setLoading(true);
      const sectionsQuery = query(
        collection(db, 'deck_variation_custom_sections'),
        where('deck_variation_id', '==', variationId),
        orderBy('order_index', 'asc')
      );
      const sectionsSnapshot = await getDocs(sectionsQuery);
      
      const sections: CustomSection[] = sectionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as CustomSection));

      setCustomSections(sections);
    } catch (error) {
      console.error('Error loading custom sections:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadSectionOrder = async () => {
    if (!variationId) return;

    try {
      const orderQuery = query(
        collection(db, 'deck_variation_section_order'),
        where('deck_variation_id', '==', variationId)
      );
      const orderSnapshot = await getDocs(orderQuery);
      
      if (orderSnapshot.empty) {
        setSectionOrder([]);
      } else {
        const orderDoc = orderSnapshot.docs[0];
        const order = orderDoc.data().section_ids || [];
        setSectionOrder(order);
      }
    } catch (error) {
      console.error('Error loading section order:', error);
      setSectionOrder([]);
    }
  };

  const getAllSections = () => {
    // Create a map of all sections by ID
    const sectionsMap = new Map();
    
    // Add default sections
    DEFAULT_SECTIONS.forEach(s => {
      sectionsMap.set(s.key, {
        key: s.key,
        name: s.name,
        description: s.description,
        color: s.color,
        icon: s.icon,
        is_default: s.is_default,
        order_index: s.order_index,
        locked: s.locked,
        id: s.key,
      });
    });
    
    // Add custom sections
    customSections.forEach(s => {
      const customSection = {
        key: s.id,
        name: s.name,
        description: s.description,
        color: s.color,
        icon: s.icon,
        is_default: false,
        order_index: s.order_index,
        locked: false, // Custom sections are never locked
        id: s.id,
      };
      sectionsMap.set(s.id, customSection);
    });
    
    // Separate sections into regular and status sections
    const statusSectionKeys = ['hidden', 'archived'];
    const regularSections: typeof sectionsMap extends Map<any, infer V> ? V[] : never[] = [];
    const statusSections: typeof sectionsMap extends Map<any, infer V> ? V[] : never[] = [];
    
    // If we have a saved order, use it for regular sections only
    if (sectionOrder && sectionOrder.length > 0) {
      // Filter order to exclude status sections
      const regularOrder = sectionOrder.filter(id => !statusSectionKeys.includes(id));
      
      regularOrder.forEach(id => {
        const section = sectionsMap.get(id);
        if (section) {
          regularSections.push(section);
        }
      });
      
      // Add any new sections that aren't in the saved order
      sectionsMap.forEach((section, id) => {
        if (!sectionOrder.includes(id) && !statusSectionKeys.includes(id)) {
          regularSections.push(section);
        }
      });
    } else {
      // Use default order for regular sections
      sectionsMap.forEach((section, id) => {
        if (!statusSectionKeys.includes(id)) {
          regularSections.push(section);
        }
      });
      regularSections.sort((a, b) => a.order_index - b.order_index);
    }
    
    // Always add status sections at the end in fixed order
    statusSectionKeys.forEach(key => {
      const section = sectionsMap.get(key);
      if (section) {
        statusSections.push(section);
      }
    });
    
    // Return regular sections followed by status sections
    return [...regularSections, ...statusSections];
  };

  const addSection = async (name: string, description: string) => {
    if (!variationId) return;

    try {
      // Random color and icon
      const color = PREDEFINED_COLORS[Math.floor(Math.random() * PREDEFINED_COLORS.length)];
      const icon = PREDEFINED_ICONS[Math.floor(Math.random() * PREDEFINED_ICONS.length)];
      
      // Get max order_index
      const allSections = getAllSections();
      const maxOrder = Math.max(...allSections.map(s => s.order_index), -1);

      const now = new Date().toISOString();
      const docRef = await addDoc(collection(db, 'deck_variation_custom_sections'), {
        deck_variation_id: variationId,
        name,
        description,
        color,
        icon,
        order_index: maxOrder + 1,
        is_default: false,
        created_at: now,
        updated_at: now,
      });

      const newSectionId = docRef.id;

      // Reload custom sections first
      await loadCustomSections();

      // Add the new section to the order
      const currentOrder = sectionOrder.length > 0 ? sectionOrder : allSections.map(s => s.id);
      const newOrder = [...currentOrder, newSectionId];
      
      // Save the updated order
      const orderQuery = query(
        collection(db, 'deck_variation_section_order'),
        where('deck_variation_id', '==', variationId)
      );
      const orderSnapshot = await getDocs(orderQuery);
      
      if (orderSnapshot.empty) {
        await addDoc(collection(db, 'deck_variation_section_order'), {
          deck_variation_id: variationId,
          section_ids: newOrder,
          created_at: now,
          updated_at: now,
        });
      } else {
        const orderDoc = orderSnapshot.docs[0];
        await updateDoc(orderDoc.ref, {
          section_ids: newOrder,
          updated_at: now,
        });
      }
      
      await loadSectionOrder();

      toast({
        title: 'Section created',
        description: `${name} has been added`,
      });

      return newSectionId;
    } catch (error) {
      console.error('Error adding section:', error);
      toast({
        title: 'Error',
        description: 'Failed to create section',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const updateSection = async (sectionId: string, updates: Partial<CustomSection>) => {
    if (!variationId) return;

    try {
      const sectionRef = doc(db, 'deck_variation_custom_sections', sectionId);
      await updateDoc(sectionRef, {
        ...updates,
        updated_at: new Date().toISOString(),
      });

      await loadCustomSections();

      toast({
        title: 'Section updated',
      });
    } catch (error) {
      console.error('Error updating section:', error);
      toast({
        title: 'Error',
        description: 'Failed to update section',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const deleteSection = async (sectionId: string) => {
    if (!variationId) return;

    try {
      const sectionRef = doc(db, 'deck_variation_custom_sections', sectionId);
      await deleteDoc(sectionRef);

      await loadCustomSections();

      // Remove from order array
      if (sectionOrder.length > 0) {
        const newOrder = sectionOrder.filter(id => id !== sectionId);
        
        const orderQuery = query(
          collection(db, 'deck_variation_section_order'),
          where('deck_variation_id', '==', variationId)
        );
        const orderSnapshot = await getDocs(orderQuery);
        
        if (!orderSnapshot.empty) {
          const orderDoc = orderSnapshot.docs[0];
          await updateDoc(orderDoc.ref, {
            section_ids: newOrder,
            updated_at: new Date().toISOString(),
          });
        }
        
        await loadSectionOrder();
      }

      toast({
        title: 'Section deleted',
      });
    } catch (error) {
      console.error('Error deleting section:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete section',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const reorderSections = async (newOrder: Array<{ id: string; order_index: number; is_default: boolean }>) => {
    if (!variationId) return;

    try {
      // Save the complete order as an array of section IDs
      const sectionIds = newOrder.map(item => item.id);
      
      // Check if order document exists
      const orderQuery = query(
        collection(db, 'deck_variation_section_order'),
        where('deck_variation_id', '==', variationId)
      );
      const orderSnapshot = await getDocs(orderQuery);
      
      const now = new Date().toISOString();
      
      if (orderSnapshot.empty) {
        // Create new order document
        await addDoc(collection(db, 'deck_variation_section_order'), {
          deck_variation_id: variationId,
          section_ids: sectionIds,
          created_at: now,
          updated_at: now,
        });
      } else {
        // Update existing order document
        const orderDoc = orderSnapshot.docs[0];
        await updateDoc(orderDoc.ref, {
          section_ids: sectionIds,
          updated_at: now,
        });
      }
      
      // Reload the section order
      await loadSectionOrder();

      toast({
        title: 'Sections reordered',
      });
    } catch (error) {
      console.error('Error reordering sections:', error);
      toast({
        title: 'Error',
        description: 'Failed to reorder sections',
        variant: 'destructive',
      });
      throw error;
    }
  };

  return {
    customSections,
    loading,
    getAllSections,
    addSection,
    updateSection,
    deleteSection,
    reorderSections,
    DEFAULT_SECTIONS,
    PREDEFINED_ICONS,
  };
};

