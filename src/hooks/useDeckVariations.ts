import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export interface DeckVariation {
  id: string;
  name: string;
  user_id: string | null;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface DeckVariationWithSections extends DeckVariation {
  sections: string[];
}

export const useDeckVariations = () => {
  const [variations, setVariations] = useState<DeckVariationWithSections[]>([]);
  const [currentVariation, setCurrentVariation] = useState<DeckVariationWithSections | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchVariations = async () => {
    try {
      setLoading(true);
      
      // Fetch variations
      const { data: variationsData, error: variationsError } = await supabase
        .from('deck_variations')
        .select('*')
        .order('created_at', { ascending: true });

      if (variationsError) throw variationsError;

      // Fetch sections for each variation
      const variationsWithSections: DeckVariationWithSections[] = [];
      
      for (const variation of variationsData || []) {
        const { data: sectionsData, error: sectionsError } = await supabase
          .from('deck_variation_sections')
          .select('section_id')
          .eq('deck_variation_id', variation.id);

        if (sectionsError) throw sectionsError;

        variationsWithSections.push({
          ...variation,
          sections: sectionsData?.map(s => s.section_id) || []
        });
      }

      setVariations(variationsWithSections);
      
      // Set current variation to default or first one
      const defaultVariation = variationsWithSections.find(v => v.is_default) || variationsWithSections[0];
      if (defaultVariation && !currentVariation) {
        setCurrentVariation(defaultVariation);
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
      const { data: variation, error: variationError } = await supabase
        .from('deck_variations')
        .insert([{ name, user_id: null }])
        .select()
        .single();

      if (variationError) throw variationError;

      // Insert sections
      if (sections.length > 0) {
        const { error: sectionsError } = await supabase
          .from('deck_variation_sections')
          .insert(
            sections.map(sectionId => ({
              deck_variation_id: variation.id,
              section_id: sectionId
            }))
          );

        if (sectionsError) throw sectionsError;
      }

      await fetchVariations();
      
      toast({
        title: "Success",
        description: "Deck variation created successfully",
      });

      return variation;
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
      // Update variation name
      const { error: variationError } = await supabase
        .from('deck_variations')
        .update({ name })
        .eq('id', id);

      if (variationError) throw variationError;

      // Delete existing sections
      const { error: deleteError } = await supabase
        .from('deck_variation_sections')
        .delete()
        .eq('deck_variation_id', id);

      if (deleteError) throw deleteError;

      // Insert new sections
      if (sections.length > 0) {
        const { error: sectionsError } = await supabase
          .from('deck_variation_sections')
          .insert(
            sections.map(sectionId => ({
              deck_variation_id: id,
              section_id: sectionId
            }))
          );

        if (sectionsError) throw sectionsError;
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
      // Delete existing sections
      const { error: deleteError } = await supabase
        .from('deck_variation_sections')
        .delete()
        .eq('deck_variation_id', id);

      if (deleteError) throw deleteError;

      // Insert new sections
      if (sections.length > 0) {
        const { error: sectionsError } = await supabase
          .from('deck_variation_sections')
          .insert(
            sections.map(sectionId => ({
              deck_variation_id: id,
              section_id: sectionId
            }))
          );

        if (sectionsError) throw sectionsError;
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

  const deleteVariation = async (id: string) => {
    try {
      const { error } = await supabase
        .from('deck_variations')
        .delete()
        .eq('id', id);

      if (error) throw error;

      await fetchVariations();
      
      toast({
        title: "Success",
        description: "Deck variation deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting variation:', error);
      toast({
        title: "Error",
        description: "Failed to delete deck variation",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchVariations();
  }, []);

  return {
    variations,
    currentVariation,
    setCurrentVariation,
    loading,
    createVariation,
    updateVariation,
    updateVariationSections,
    deleteVariation,
    refetch: fetchVariations
  };
};