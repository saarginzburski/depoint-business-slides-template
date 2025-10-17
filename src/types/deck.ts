// Core data types for the refactored IA

export type SectionKey = 'main' | 'demo' | 'appendix' | 'hidden' | 'archived';

export interface Slide {
  id: string;
  deckId: string;
  variantId: string;
  section: SectionKey;
  title: string;
  name: string;
  component: string;
  thumbUrl?: string;
  updatedAt: string;
  tags: string[];
  lastSection?: 'main' | 'demo' | 'appendix';
}

export interface Variant {
  id: string;
  name: string;
  isDefault: boolean;
  countBySection: Record<SectionKey, number>;
  updatedAt: string;
  order?: number;
}

export interface Section {
  key: SectionKey;
  label: string;
  count: number;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

export interface DeckFilters {
  query?: string;
  tags?: string[];
  section?: SectionKey;
  sort?: 'updated' | 'title' | 'section';
  variant?: string;
}

export interface BulkAction {
  action: 'move' | 'hide' | 'restore' | 'duplicate' | 'remove';
  ids: string[];
  toSection?: SectionKey;
}

