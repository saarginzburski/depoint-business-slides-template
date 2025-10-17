import React, { useState } from 'react';
import { X, EyeOff, Copy, Trash2, MoveHorizontal, FolderInput } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Variant {
  id: string;
  name: string;
  isDefault?: boolean;
}

interface QuickActionsBarProps {
  selectedCount: number;
  onClearSelection: () => void;
  onHideSlides: () => void;
  onRestoreSlides?: () => void;
  onDuplicateSlides: () => void;
  onMoveToSection: (section: 'main' | 'demo' | 'appendix') => void;
  onMoveToVariant: (variantId: string) => void;
  onDeleteSlides: () => void;
  availableVariants: Variant[];
  currentVariantId?: string;
  showRestoreAction?: boolean;
}

export const QuickActionsBar: React.FC<QuickActionsBarProps> = ({
  selectedCount,
  onClearSelection,
  onHideSlides,
  onRestoreSlides,
  onDuplicateSlides,
  onMoveToSection,
  onMoveToVariant,
  onDeleteSlides,
  availableVariants,
  currentVariantId,
  showRestoreAction = false,
}) => {
  if (selectedCount === 0) return null;

  const sections = [
    { id: 'main', label: 'Main Deck', description: 'Core presentation content' },
    { id: 'demo', label: 'Demo', description: 'Product demonstration slides' },
    { id: 'appendix', label: 'Appendices', description: 'Supporting materials' },
  ];

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
            aria-label="Clear selection"
          >
            <X className="h-3 w-3" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-white/20" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Hide / Restore */}
          {showRestoreAction ? (
            <Button
              size="sm"
              variant="ghost"
              onClick={onRestoreSlides}
              className="h-8 gap-2 hover:bg-white/10 text-white border-0"
              title="Add back to deck (R)"
            >
              <EyeOff className="h-4 w-4 rotate-180" />
              <span className="text-body-small">Restore</span>
            </Button>
          ) : (
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
          )}

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

          {/* Move to Section */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 gap-2 hover:bg-white/10 text-white border-0"
                title="Move to section"
              >
                <FolderInput className="h-4 w-4" />
                <span className="text-body-small">Move to</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-neutral-900 text-white border-neutral-700 min-w-[220px]"
              align="end"
            >
              <DropdownMenuLabel className="text-neutral-400 text-xs uppercase tracking-wide">
                Move to Section
              </DropdownMenuLabel>
              {sections.map((section) => (
                <DropdownMenuItem
                  key={section.id}
                  onClick={() => onMoveToSection(section.id as 'main' | 'demo' | 'appendix')}
                  className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"
                >
                  <div>
                    <div className="font-medium">{section.label}</div>
                    <div className="text-xs text-neutral-400">{section.description}</div>
                  </div>
                </DropdownMenuItem>
              ))}
              
              {availableVariants.filter(v => v.id !== currentVariantId).length > 0 && (
                <>
                  <DropdownMenuSeparator className="bg-neutral-700" />
                  <DropdownMenuLabel className="text-neutral-400 text-xs uppercase tracking-wide">
                    Move to Variant
                  </DropdownMenuLabel>
                  {availableVariants
                    .filter(v => v.id !== currentVariantId)
                    .map((variant) => (
                      <DropdownMenuItem
                        key={variant.id}
                        onClick={() => onMoveToVariant(variant.id)}
                        className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span>{variant.name}</span>
                          {variant.isDefault && (
                            <span className="text-xs bg-primary-600 px-1.5 py-0.5 rounded">
                              Default
                            </span>
                          )}
                        </div>
                      </DropdownMenuItem>
                    ))}
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Delete */}
          <Button
            size="sm"
            variant="ghost"
            onClick={onDeleteSlides}
            className="h-8 gap-2 hover:bg-red-600 text-white border-0"
            title="Delete slides (Del)"
          >
            <Trash2 className="h-4 w-4" />
            <span className="text-body-small">Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

