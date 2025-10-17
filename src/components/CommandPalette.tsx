import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, ArrowRight, Command, Hash, Layers } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  shortcut?: string;
  category: 'slide' | 'deck' | 'variant' | 'action' | 'navigation';
  badge?: string; // e.g., "Default", "Active"
  onSelect: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  commands: CommandItem[];
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  commands,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter commands based on search query
  const filteredCommands = useMemo(() => {
    if (!searchQuery.trim()) return commands;

    const query = searchQuery.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(query) ||
        cmd.description?.toLowerCase().includes(query) ||
        cmd.category.toLowerCase().includes(query)
    );
  }, [commands, searchQuery]);

  // Group commands by category
  const groupedCommands = useMemo(() => {
    const groups: Record<string, CommandItem[]> = {
      slide: [],
      deck: [],
      variant: [],
      action: [],
      navigation: [],
    };

    filteredCommands.forEach((cmd) => {
      groups[cmd.category].push(cmd);
    });

    return Object.entries(groups).filter(([_, items]) => items.length > 0);
  }, [filteredCommands]);

  // Reset selected index when filtered commands change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].onSelect();
            onClose();
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      selectedElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'slide':
        return Hash;
      case 'deck':
      case 'variant':
        return Layers;
      default:
        return Command;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'slide':
        return 'Slides';
      case 'deck':
        return 'Decks';
      case 'variant':
        return 'Variants';
      case 'action':
        return 'Actions';
      case 'navigation':
        return 'Navigation';
      default:
        return category;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/40 z-50 transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Command Palette Modal */}
      <div className="fixed top-[20vh] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 animate-fade-in">
        <div className="bg-surface rounded-xl shadow-elevation-5 border border-neutral-200 overflow-hidden">
          {/* Search Input */}
          <div className="relative border-b border-neutral-200">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-20 py-4 text-body-large border-0 focus:ring-0 bg-transparent"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <kbd className="px-2 py-1 text-label-small font-medium bg-neutral-100 border border-neutral-300 rounded text-neutral-600">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Results */}
          <div
            ref={listRef}
            className="max-h-[60vh] overflow-y-auto py-2"
          >
            {filteredCommands.length === 0 ? (
              <div className="px-4 py-12 text-center">
                <Search className="h-10 w-10 mx-auto mb-3 text-neutral-400" />
                <p className="text-body-medium text-neutral-600">No results found</p>
                <p className="text-body-small text-neutral-500 mt-1">
                  Try adjusting your search
                </p>
              </div>
            ) : (
              groupedCommands.map(([category, items], groupIndex) => {
                const CategoryIcon = getCategoryIcon(category);
                let currentIndex = 0;
                
                // Calculate starting index for this group
                for (let i = 0; i < groupIndex; i++) {
                  currentIndex += groupedCommands[i][1].length;
                }

                return (
                  <div key={category} className="mb-3">
                    {/* Category Header */}
                    <div className="flex items-center gap-2 px-4 py-2 text-label-small font-medium text-neutral-600 uppercase tracking-wide">
                      <CategoryIcon className="h-3 w-3" />
                      {getCategoryLabel(category)}
                    </div>

                    {/* Category Items */}
                    <div className="space-y-0.5">
                      {items.map((cmd, itemIndex) => {
                        const Icon = cmd.icon;
                        const globalIndex = currentIndex + itemIndex;
                        const isSelected = globalIndex === selectedIndex;

                        return (
                          <button
                            key={cmd.id}
                            data-index={globalIndex}
                            onClick={() => {
                              cmd.onSelect();
                              onClose();
                            }}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors ${
                              isSelected
                                ? 'bg-primary/10 text-primary'
                                : 'text-neutral-900 hover:bg-neutral-100'
                            }`}
                          >
                            {/* Icon */}
                            {Icon && (
                              <Icon className="flex-shrink-0 h-4 w-4" />
                            )}

                            {/* Label and Description */}
                            <div className="flex-1 text-left min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-body-medium font-medium truncate">
                                  {cmd.label}
                                </span>
                                {cmd.badge && (
                                  <span className="flex-shrink-0 px-1.5 py-0.5 text-xs bg-primary-100 text-primary-700 rounded">
                                    {cmd.badge}
                                  </span>
                                )}
                              </div>
                              {cmd.description && (
                                <div className="text-body-small text-neutral-600 truncate">
                                  {cmd.description}
                                </div>
                              )}
                            </div>

                            {/* Shortcut or Arrow */}
                            {cmd.shortcut ? (
                              <kbd className="flex-shrink-0 px-2 py-1 text-label-small font-medium bg-neutral-100 border border-neutral-300 rounded text-neutral-600">
                                {cmd.shortcut}
                              </kbd>
                            ) : isSelected ? (
                              <ArrowRight className="flex-shrink-0 h-4 w-4" />
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-neutral-200 px-4 py-2 bg-neutral-50 flex items-center gap-4 text-label-small text-neutral-600">
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-neutral-200 border border-neutral-300 rounded text-[10px]">
                ↑↓
              </kbd>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-neutral-200 border border-neutral-300 rounded text-[10px]">
                ↵
              </kbd>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-neutral-200 border border-neutral-300 rounded text-[10px]">
                ESC
              </kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

