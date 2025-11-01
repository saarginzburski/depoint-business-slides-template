import React, { useState, useRef } from 'react';
import { Plus, Search, MoreVertical, GripVertical, Star, Copy, Edit2, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Variant } from '@/types/deck';

interface VariantsNavProps {
  variants: Variant[];
  activeVariantId: string;
  onSelect: (id: string) => void;
  onCreate: () => void;
  onRename: (id: string, name: string) => void;
  onDuplicate: (id: string) => void;
  onSetDefault: (id: string) => void;
  onDelete: (id: string) => void;
  onReorder: (srcId: string, dstId: string) => void;
}

interface ContextMenuState {
  variantId: string;
  x: number;
  y: number;
}

export const VariantsNav: React.FC<VariantsNavProps> = ({
  variants,
  activeVariantId,
  onSelect,
  onCreate,
  onRename,
  onDuplicate,
  onSetDefault,
  onDelete,
  onReorder,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(() => {
    const saved = localStorage.getItem('variantsExpanded');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Filter variants by search
  const filteredVariants = variants.filter((v) =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContextMenu = (e: React.MouseEvent, variantId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({ variantId, x: e.clientX, y: e.clientY });
  };

  const startRename = (variant: Variant) => {
    setEditingId(variant.id);
    setEditValue(variant.name);
    setContextMenu(null);
  };

  const handleRenameSubmit = () => {
    if (editingId && editValue.trim()) {
      onRename(editingId, editValue.trim());
    }
    setEditingId(null);
    setEditValue('');
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRenameSubmit();
    } else if (e.key === 'Escape') {
      setEditingId(null);
      setEditValue('');
    }
  };

  const toggleExpanded = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    localStorage.setItem('variantsExpanded', JSON.stringify(newState));
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleExpanded}
            className="flex items-center gap-2 flex-1 text-left hover:opacity-70 transition-opacity"
          >
            <h3 className="text-title-small font-medium text-neutral-900">Variants</h3>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-neutral-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-neutral-500" />
            )}
          </button>
          <Button
            size="sm"
            variant="ghost"
            onClick={onCreate}
            className="h-7 w-7 p-0 rounded-full hover:bg-primary/10"
            title="New variant"
            aria-label="Create new variant"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Search - only show when expanded */}
        {isExpanded && (
          <div className="relative mt-3">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
            <Input
              type="text"
              placeholder="Search variants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 pl-8 text-body-small border-neutral-300 focus:border-primary"
            />
          </div>
        )}
      </div>

      {/* Variants List - only show when expanded */}
      {isExpanded && (
      <div className="flex-1 overflow-y-auto py-2">
        {filteredVariants.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <p className="text-body-small text-neutral-500">
              {searchQuery ? 'No matches' : 'No variants'}
            </p>
          </div>
        ) : (
          filteredVariants.map((variant) => {
            const isActive = variant.id === activeVariantId;
            const isEditing = editingId === variant.id;

            return (
              <div
                key={variant.id}
                className={`group relative mx-2 mb-1 rounded-lg transition-standard ${
                  isActive
                    ? 'bg-primary/10 ring-1 ring-primary/20'
                    : 'hover:bg-neutral-100'
                }`}
              >
                {/* Drag Handle */}
                <div
                  className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing transition-opacity"
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('variantId', variant.id);
                  }}
                  title="Drag to reorder"
                >
                  <GripVertical className="h-3 w-3 text-neutral-400" />
                </div>

                <div
                  className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${
                    isActive ? 'pl-6' : 'pl-8'
                  }`}
                  onClick={() => !isEditing && onSelect(variant.id)}
                  onContextMenu={(e) => handleContextMenu(e, variant.id)}
                >
                  {/* Radio Indicator */}
                  <div
                    className={`flex-shrink-0 w-4 h-4 rounded-full border-2 transition-standard ${
                      isActive
                        ? 'border-primary bg-primary'
                        : 'border-neutral-400 group-hover:border-neutral-500'
                    }`}
                  >
                    {isActive && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  {isEditing ? (
                    <Input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleRenameSubmit}
                      onKeyDown={handleRenameKeyDown}
                      className="flex-1 h-6 text-body-medium px-2 py-0"
                      autoFocus
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-body-medium font-medium text-neutral-900 truncate">
                          {variant.name}
                        </span>
                        {variant.isDefault && (
                          <Star className="h-3 w-3 text-depoint-orange fill-depoint-orange flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Context Menu Button */}
                  {!isEditing && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleContextMenu(e, variant.id);
                      }}
                      title="More actions"
                      aria-label="Variant actions menu"
                    >
                      <MoreVertical className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      )}

      {/* Context Menu */}
      {contextMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setContextMenu(null)}
          />
          <div
            className="fixed z-50 min-w-[180px] bg-surface rounded-lg shadow-elevation-3 border border-neutral-200 py-1"
            style={{ left: contextMenu.x, top: contextMenu.y }}
          >
            {[
              {
                icon: Edit2,
                label: 'Rename',
                onClick: () => {
                  const variant = variants.find((v) => v.id === contextMenu.variantId);
                  if (variant) startRename(variant);
                },
              },
              {
                icon: Copy,
                label: 'Duplicate',
                onClick: () => {
                  onDuplicate(contextMenu.variantId);
                  setContextMenu(null);
                },
              },
              {
                icon: Star,
                label: 'Set as default',
                onClick: () => {
                  onSetDefault(contextMenu.variantId);
                  setContextMenu(null);
                },
                disabled: variants.find((v) => v.id === contextMenu.variantId)?.isDefault,
              },
              {
                icon: Trash2,
                label: 'Delete',
                onClick: () => {
                  if (confirm('Delete this variant? This cannot be undone.')) {
                    onDelete(contextMenu.variantId);
                  }
                  setContextMenu(null);
                },
                danger: true,
                disabled: variants.find((v) => v.id === contextMenu.variantId)?.isDefault,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-body-small font-medium transition-colors ${
                    item.disabled
                      ? 'text-neutral-400 cursor-not-allowed'
                      : item.danger
                      ? 'text-red-600 hover:bg-red-50'
                      : 'text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

