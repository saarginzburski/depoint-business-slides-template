import React from 'react';
import { X, EyeOff, Copy, Trash2, MoveHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface QuickActionsBarProps {
  selectedCount: number;
  onClearSelection: () => void;
  onHideSlides: () => void;
  onDuplicateSlides: () => void;
  onMoveToDeck: (deckId: string) => void;
  onDeleteSlides: () => void;
  availableDecks: Array<{ id: string; name: string }>;
}

export const QuickActionsBar: React.FC<QuickActionsBarProps> = ({
  selectedCount,
  onClearSelection,
  onHideSlides,
  onDuplicateSlides,
  onMoveToDeck,
  onDeleteSlides,
  availableDecks,
}) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-slide-up">
      <div className="bg-neutral-900 text-white rounded-full shadow-elevation-5 px-6 py-3 flex items-center gap-4">
        {/* Selection Info */}
        <div className="flex items-center gap-3">
          <span className="text-body-medium font-medium">
            {selectedCount} {selectedCount === 1 ? 'slide' : 'slides'} selected
          </span>
          <button
            onClick={onClearSelection}
            className="h-5 w-5 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            title="Clear selection"
          >
            <X className="h-3 w-3" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-white/20" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Hide */}
          <Button
            size="sm"
            variant="ghost"
            onClick={onHideSlides}
            className="h-8 gap-2 hover:bg-white/10 text-white border-0"
            title="Remove from deck (H)"
          >
            <EyeOff className="h-4 w-4" />
            <span className="text-body-small">Remove</span>
          </Button>

          {/* Duplicate */}
          <Button
            size="sm"
            variant="ghost"
            onClick={onDuplicateSlides}
            className="h-8 gap-2 hover:bg-white/10 text-white border-0"
            title="Duplicate (Ctrl+D)"
          >
            <Copy className="h-4 w-4" />
            <span className="text-body-small">Duplicate</span>
          </Button>

          {/* Move to Deck */}
          <Select onValueChange={onMoveToDeck}>
            <SelectTrigger className="h-8 gap-2 bg-transparent hover:bg-white/10 text-white border-0 min-w-[140px]">
              <MoveHorizontal className="h-4 w-4" />
              <SelectValue placeholder="Move to..." />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 text-white border-neutral-700">
              {availableDecks.map((deck) => (
                <SelectItem
                  key={deck.id}
                  value={deck.id}
                  className="hover:bg-white/10 focus:bg-white/10"
                >
                  {deck.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Delete */}
          <Button
            size="sm"
            variant="ghost"
            onClick={onDeleteSlides}
            className="h-8 gap-2 hover:bg-red-600 text-white border-0"
            title="Delete slides"
          >
            <Trash2 className="h-4 w-4" />
            <span className="text-body-small">Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

