import { useState, useEffect } from 'react';
import { db } from '@/integrations/firebase/client';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  doc 
} from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';

export interface CustomSection {
  id: string;
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

/**
 * Global sections hook - sections are shared across all variants
 * Each variant controls which sections are visible via the deck_variation_sections table
 */
export const useSections = () => {
  const [customSections, setCustomSections] = useState<CustomSection[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCustomSections();
  }, []);

  const loadCustomSections = async () => {
    try {
      setLoading(true);
      // Load global custom sections (no variant filter)
      const sectionsQuery = query(
        collection(db, 'custom_sections'),
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
    const regularSections: any[] = [];
    const statusSections: any[] = [];
    
    // Sort all sections by order_index
    sectionsMap.forEach((section, id) => {
      if (!statusSectionKeys.includes(id)) {
        regularSections.push(section);
      } else {
        statusSections.push(section);
      }
    });
    
    regularSections.sort((a, b) => a.order_index - b.order_index);
    statusSections.sort((a, b) => a.order_index - b.order_index);
    
    // Return regular sections followed by status sections
    return [...regularSections, ...statusSections];
  };

  const addSection = async (name: string, description: string) => {
    try {
      // Random color and icon
      const color = PREDEFINED_COLORS[Math.floor(Math.random() * PREDEFINED_COLORS.length)];
      const icon = PREDEFINED_ICONS[Math.floor(Math.random() * PREDEFINED_ICONS.length)];
      
      // Get max order_index
      const allSections = getAllSections();
      const maxOrder = Math.max(...allSections.map(s => s.order_index), -1);

      const now = new Date().toISOString();
      const docRef = await addDoc(collection(db, 'custom_sections'), {
        name,
        description,
        color,
        icon,
        order_index: maxOrder + 1,
        is_default: false,
        created_at: now,
        updated_at: now,
      });

      // Reload custom sections
      await loadCustomSections();

      toast({
        title: 'Section created',
        description: `${name} has been added globally`,
      });

      return docRef.id;
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
    try {
      const sectionRef = doc(db, 'custom_sections', sectionId);
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
    try {
      const sectionRef = doc(db, 'custom_sections', sectionId);
      await deleteDoc(sectionRef);

      await loadCustomSections();

      toast({
        title: 'Section deleted',
        description: 'The section has been removed from all variants',
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
    try {
      // Update order_index for each custom section
      const updatePromises = newOrder
        .filter(item => !item.is_default) // Only update custom sections
        .map(item => {
          const sectionRef = doc(db, 'custom_sections', item.id);
          return updateDoc(sectionRef, {
            order_index: item.order_index,
            updated_at: new Date().toISOString(),
          });
        });

      await Promise.all(updatePromises);
      await loadCustomSections();

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
    refetch: loadCustomSections,
    DEFAULT_SECTIONS,
    PREDEFINED_ICONS,
  };
};
