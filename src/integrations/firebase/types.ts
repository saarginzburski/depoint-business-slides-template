// Firebase Firestore types for the application

export interface DeckVariation {
  id: string;
  name: string;
  is_default: boolean;
  share_password?: string; // Optional password for public sharing
  hidden_sections?: string[]; // Array of section IDs that are hidden in this variant
  created_at: string;
  updated_at: string;
}

export interface DeckVariationSection {
  id: string;
  deck_variation_id: string;
  section_id: string;
  created_at: string;
}

export interface DeckVariationSlideOrder {
  id: string;
  deck_variation_id: string;
  slide_id: string;  // Changed from number to string - now uses component names for stability
  section_id: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

// Extended type with sections
export interface DeckVariationWithSections extends DeckVariation {
  sections: string[];
}

