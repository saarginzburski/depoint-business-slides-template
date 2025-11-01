import { useState, useEffect } from 'react';
import { db } from '@/integrations/firebase/client';
import { 
  collection, 
  doc,
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import type { DeckVariationWithSections } from '@/integrations/firebase/types';

export type { DeckVariationWithSections };

export const useDeckVariations = () => {
  const [variations, setVariations] = useState<DeckVariationWithSections[]>([]);
  const [currentVariation, setCurrentVariation] = useState<DeckVariationWithSections | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchVariations = async () => {
    try {
      setLoading(true);
      
      // Fetch variations
      const variationsQuery = query(
        collection(db, 'deck_variations'),
        orderBy('created_at', 'asc')
      );
      const variationsSnapshot = await getDocs(variationsQuery);
      
      // Fetch sections for each variation
      const variationsWithSections: DeckVariationWithSections[] = [];
      
      for (const variationDoc of variationsSnapshot.docs) {
        const variationData = variationDoc.data();
        
        // Fetch sections for this variation
        const sectionsQuery = query(
          collection(db, 'deck_variation_sections'),
          where('deck_variation_id', '==', variationDoc.id)
        );
        const sectionsSnapshot = await getDocs(sectionsQuery);
        
        variationsWithSections.push({
          id: variationDoc.id,
          name: variationData.name,
          is_default: variationData.is_default || false,
          share_password: variationData.share_password,
          created_at: variationData.created_at,
          updated_at: variationData.updated_at,
          sections: sectionsSnapshot.docs.map(doc => doc.data().section_id)
        });
      }

      setVariations(variationsWithSections);
      
      // Set current variation based on localStorage, default, or first one
      if (!currentVariation) {
        const savedVariationId = localStorage.getItem('selectedDeckVariation');
        let targetVariation = null;
        
        if (savedVariationId) {
          targetVariation = variationsWithSections.find(v => v.id === savedVariationId);
        }
        
        if (!targetVariation) {
          targetVariation = variationsWithSections.find(v => v.is_default) || variationsWithSections[0];
        }
        
        if (targetVariation) {
          setCurrentVariation(targetVariation);
        }
      }
      
    } catch (error) {
      console.error('Error fetching variations:', error);
      toast({
        title: "Error",
        description: "Failed to load deck variations",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createVariation = async (name: string, sections: string[]) => {
    try {
      const now = new Date().toISOString();
      
      // Create variation document
      const variationRef = await addDoc(collection(db, 'deck_variations'), {
        name,
        is_default: false,
        created_at: now,
        updated_at: now
      });

      // Insert sections
      if (sections.length > 0) {
        const sectionPromises = sections.map(sectionId => 
          addDoc(collection(db, 'deck_variation_sections'), {
            deck_variation_id: variationRef.id,
            section_id: sectionId,
            created_at: now
          })
        );
        await Promise.all(sectionPromises);
      }

      await fetchVariations();
      
      toast({
        title: "Success",
        description: "Deck variation created successfully",
      });

      return { id: variationRef.id, name };
    } catch (error) {
      console.error('Error creating variation:', error);
      toast({
        title: "Error",
        description: "Failed to create deck variation",
        variant: "destructive",
      });
      return null;
    }
  };

  const updateVariation = async (id: string, name: string, sections: string[]) => {
    try {
      const now = new Date().toISOString();
      
      // Update variation name
      const variationRef = doc(db, 'deck_variations', id);
      await updateDoc(variationRef, { 
        name,
        updated_at: now
      });

      // Delete existing sections
      const sectionsQuery = query(
        collection(db, 'deck_variation_sections'),
        where('deck_variation_id', '==', id)
      );
      const sectionsSnapshot = await getDocs(sectionsQuery);
      const deletePromises = sectionsSnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      // Insert new sections
      if (sections.length > 0) {
        const insertPromises = sections.map(sectionId =>
          addDoc(collection(db, 'deck_variation_sections'), {
            deck_variation_id: id,
            section_id: sectionId,
            created_at: now
          })
        );
        await Promise.all(insertPromises);
      }

      await fetchVariations();
      
      toast({
        title: "Success",
        description: "Deck variation updated successfully",
      });
    } catch (error) {
      console.error('Error updating variation:', error);
      toast({
        title: "Error",
        description: "Failed to update deck variation",
        variant: "destructive",
      });
    }
  };

  const updateVariationSections = async (id: string, sections: string[]) => {
    try {
      const now = new Date().toISOString();
      
      // Delete existing sections
      const sectionsQuery = query(
        collection(db, 'deck_variation_sections'),
        where('deck_variation_id', '==', id)
      );
      const sectionsSnapshot = await getDocs(sectionsQuery);
      const deletePromises = sectionsSnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      // Insert new sections
      if (sections.length > 0) {
        const insertPromises = sections.map(sectionId =>
          addDoc(collection(db, 'deck_variation_sections'), {
            deck_variation_id: id,
            section_id: sectionId,
            created_at: now
          })
        );
        await Promise.all(insertPromises);
      }

      // Update local state
      setVariations(prev => prev.map(v => 
        v.id === id ? { ...v, sections } : v
      ));
      
      if (currentVariation?.id === id) {
        setCurrentVariation(prev => prev ? { ...prev, sections } : null);
      }

    } catch (error) {
      console.error('Error updating variation sections:', error);
      toast({
        title: "Error",
        description: "Failed to update sections",
        variant: "destructive",
      });
    }
  };

  const updateSharePassword = async (id: string, password: string | null) => {
    try {
      const variationRef = doc(db, 'deck_variations', id);
      await updateDoc(variationRef, {
        share_password: password || null,
        updated_at: new Date().toISOString()
      });

      // Update local state
      setVariations(prev => prev.map(v =>
        v.id === id ? { ...v, share_password: password || undefined } : v
      ));

      if (currentVariation?.id === id) {
        setCurrentVariation(prev => prev ? { ...prev, share_password: password || undefined } : null);
      }

      toast({
        title: "Success",
        description: password ? "Share password set successfully" : "Share password removed",
      });
    } catch (error) {
      console.error('Error updating share password:', error);
      toast({
        title: "Error",
        description: "Failed to update share password",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteVariation = async (id: string) => {
    try {
      // Delete the variation document (cascade deletes handled by app)
      // First delete related sections
      const sectionsQuery = query(
        collection(db, 'deck_variation_sections'),
        where('deck_variation_id', '==', id)
      );
      const sectionsSnapshot = await getDocs(sectionsQuery);
      const sectionDeletePromises = sectionsSnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(sectionDeletePromises);
      
      // Delete related slide orders
      const ordersQuery = query(
        collection(db, 'deck_variation_slide_orders'),
        where('deck_variation_id', '==', id)
      );
      const ordersSnapshot = await getDocs(ordersQuery);
      const orderDeletePromises = ordersSnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(orderDeletePromises);
      
      // Delete the variation itself
      const variationRef = doc(db, 'deck_variations', id);
      await deleteDoc(variationRef);

      // Fetch updated variations list
      await fetchVariations();
      
      toast({
        title: "Success",
        description: "Deck variation deleted successfully",
      });
      
      // Return the ID of deleted variation so caller can handle redirect
      return id;
    } catch (error) {
      console.error('Error deleting variation:', error);
      toast({
        title: "Error",
        description: "Failed to delete deck variation",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchVariations();
  }, []);

  const persistentSetCurrentVariation = (variation: DeckVariationWithSections | null) => {
    setCurrentVariation(variation);
    if (variation) {
      localStorage.setItem('selectedDeckVariation', variation.id);
    } else {
      localStorage.removeItem('selectedDeckVariation');
    }
  };

  return {
    variations,
    currentVariation,
    setCurrentVariation: persistentSetCurrentVariation,
    loading,
    createVariation,
    updateVariation,
    updateVariationSections,
    updateSharePassword,
    deleteVariation,
    refetch: fetchVariations
  };
};