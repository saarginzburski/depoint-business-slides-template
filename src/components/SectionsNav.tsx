import React, { useState } from 'react';
import { Layers, Monitor, BookOpen, EyeOff, Archive, Eye, Plus, ChevronUp, ChevronDown, Edit2, Trash2, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section, SectionKey } from '@/types/deck';
import { AddSectionDialog } from './AddSectionDialog';
import * as Icons from 'lucide-react';

interface SectionsNavProps {
  sections: Array<{
    key: string;
    label: string;
    count: number;
    id?: string;
    icon?: string;
    is_default?: boolean;
    locked?: boolean;
    order_index?: number;
  }>;
  activeSectionKey: string;
  onSelect: (key: string) => void;
  onDrop?: (slideIds: string[], targetSection: string) => void;
  onToggleSectionVisibility?: (sectionKey: string) => void;
  hiddenSections?: Set<string>;
  onAddSection?: (name: string, description: string) => Promise<void>;
  onReorderSections?: (newOrder: Array<{ id: string; order_index: number; is_default: boolean }>) => Promise<void>;
  onDeleteSection?: (sectionId: string) => Promise<void>;
}

const SECTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  main: Layers,
  demo: Monitor,
  appendix: BookOpen,
  hidden: EyeOff,
  archived: Archive,
};

// Map icon names to lucide-react components
const getIconComponent = (iconName?: string): React.ComponentType<{ className?: string }> => {
  if (!iconName) return Layers;
  
  // Check default icons first
  if (SECTION_ICONS[iconName]) return SECTION_ICONS[iconName];
  
  // Try to get from lucide-react
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Layers;
};

// Color mapping for section indicators
const getColorClasses = (color?: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
    red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-300' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-300' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-300' },
    slate: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' },
    gray: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
  };
  
  return colorMap[color || 'blue'] || colorMap.blue;
};

export const SectionsNav: React.FC<SectionsNavProps> = ({
  sections,
  activeSectionKey,
  onSelect,
  onDrop,
  onToggleSectionVisibility,
  hiddenSections = new Set(),
  onAddSection,
  onReorderSections,
  onDeleteSection,
}) => {
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; sectionId: string } | null>(null);
  const [isExpanded, setIsExpanded] = useState(() => {
    const saved = localStorage.getItem('sectionsExpanded');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Slide drop handlers
  const handleSlideDragOver = (e: React.DragEvent, sectionKey: string) => {
    e.preventDefault();
    // Only set drag over if we're dragging slides (not sections)
    if (e.dataTransfer.types.includes('slideid') || e.dataTransfer.types.includes('text/plain')) {
      setDragOver(sectionKey);
    }
  };

  const handleSlideDragLeave = () => {
    setDragOver(null);
  };

  const handleSlideDrop = (e: React.DragEvent, sectionKey: string) => {
    e.preventDefault();
    setDragOver(null);

    const slideIds = e.dataTransfer.getData('slideIds')?.split(',').filter(Boolean);
    if (slideIds && slideIds.length > 0 && onDrop) {
      onDrop(slideIds, sectionKey);
    }
  };

  // Section reorder handlers using arrows
  const handleMoveUp = async (sectionId: string) => {
    if (!onReorderSections) return;
    
    const currentIndex = sections.findIndex(s => (s.id || s.key) === sectionId);
    
    if (currentIndex <= 0) return;
    
    const previousSection = sections[currentIndex - 1];
    if (previousSection.locked) return;
    
    // Swap with previous section
    const newSections = [...sections];
    [newSections[currentIndex - 1], newSections[currentIndex]] = 
      [newSections[currentIndex], newSections[currentIndex - 1]];
    
    // Create new order array
    const newOrder = newSections.map((section, index) => ({
      id: section.id || section.key,
      order_index: index,
      is_default: section.is_default !== false,
    }));
    
    try {
      await onReorderSections(newOrder);
    } catch (error) {
      console.error('Error during reorder:', error);
    }
  };

  const handleMoveDown = async (sectionId: string) => {
    if (!onReorderSections) return;
    
    const currentIndex = sections.findIndex(s => (s.id || s.key) === sectionId);
    
    if (currentIndex === -1 || currentIndex >= sections.length - 1) return;
    
    const nextSection = sections[currentIndex + 1];
    if (nextSection.locked) return;
    
    // Swap with next section
    const newSections = [...sections];
    [newSections[currentIndex], newSections[currentIndex + 1]] = 
      [newSections[currentIndex + 1], newSections[currentIndex]];
    
    // Create new order array
    const newOrder = newSections.map((section, index) => ({
      id: section.id || section.key,
      order_index: index,
      is_default: section.is_default !== false,
    }));
    
    try {
      await onReorderSections(newOrder);
    } catch (error) {
      console.error('Error during reorder:', error);
    }
  };

  // Context menu handlers
  const handleContextMenu = (e: React.MouseEvent, sectionId: string, isDefault: boolean) => {
    if (isDefault) return; // No context menu for default sections
    
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({ x: e.clientX, y: e.clientY, sectionId });
  };

  const handleDeleteSection = async (sectionId: string) => {
    if (!onDeleteSection) return;
    
    if (window.confirm('Delete this section? Slides in this section will be moved to Main.')) {
      await onDeleteSection(sectionId);
      setContextMenu(null);
    }
  };

  // Sections that can be toggled (exclude hidden and archived)
  const toggleableSections = ['main', 'demo', 'appendix'];

  const toggleExpanded = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    localStorage.setItem('sectionsExpanded', JSON.stringify(newState));
  };

  return (
    <>
      <div className="flex flex-col">
        {/* Header with Add Button */}
        <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
          <button
            onClick={toggleExpanded}
            className="flex items-center gap-2 flex-1 text-left hover:opacity-70 transition-opacity"
          >
            <h3 className="text-title-small font-medium text-neutral-900">Sections</h3>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-neutral-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-neutral-500" />
            )}
          </button>
          {onAddSection && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowAddDialog(true)}
              className="h-7 w-7 p-0 rounded-full hover:bg-primary/10"
              title="Add section"
              aria-label="Add new section"
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Sections List - only show when expanded */}
        {isExpanded && (
        <div className="flex-1 overflow-y-auto py-2">
          {sections.map((section, index) => {
            const sectionId = section.id || section.key;
            const isActive = activeSectionKey === section.key;
            const Icon = getIconComponent(section.icon || section.key);
            const isStatus = section.key === 'hidden' || section.key === 'archived';
            const isDropTarget = dragOver === section.key; // For slide drops
            const isToggleable = toggleableSections.includes(section.key);
            const isSectionHidden = hiddenSections.has(section.key);
            const isLocked = section.locked === true; // Only true if explicitly true
            const isDefault = section.is_default !== false;
            
            // Check if this is the first status section (to add divider)
            const prevSection = index > 0 ? sections[index - 1] : null;
            const isFirstStatusSection = isStatus && prevSection && prevSection.key !== 'hidden' && prevSection.key !== 'archived';
            
            // Check adjacent sections for locked status
            const prevLocked = index > 0 ? (sections[index - 1].locked === true) : false;
            const nextLocked = index < sections.length - 1 ? (sections[index + 1].locked === true) : false;
            
            const canMoveUp = index > 0 && !isLocked && !prevLocked;
            const canMoveDown = index < sections.length - 1 && !isLocked && !nextLocked;

            return (
              <div key={sectionId}>
                {/* Divider before status sections */}
                {isFirstStatusSection && (
                  <div className="my-2 mx-4 border-t border-neutral-200" />
                )}
                
              <div
                className={`group relative w-full flex items-center gap-2 px-4 py-2.5 transition-colors ${
                  isSectionHidden && isToggleable ? 'opacity-50' : ''
                } ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : isStatus
                    ? 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
                    : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                } ${
                  isDropTarget ? 'bg-primary/5 ring-2 ring-primary/30 ring-inset' : ''
                }`}
                onContextMenu={(e) => handleContextMenu(e, sectionId, isDefault)}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                )}

                {/* Reorder Arrows (only for non-locked sections) */}
                {!isLocked && onReorderSections && (
                  <div className="flex flex-col gap-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveUp(sectionId);
                      }}
                      disabled={!canMoveUp}
                      className={`p-0.5 rounded hover:bg-neutral-200 transition-colors ${
                        !canMoveUp ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                      }`}
                      title={canMoveUp ? 'Move section up' : 'Cannot move up'}
                      aria-label="Move section up"
                    >
                      <ChevronUp className="w-3 h-3 text-neutral-600" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveDown(sectionId);
                      }}
                      disabled={!canMoveDown}
                      className={`p-0.5 rounded hover:bg-neutral-200 transition-colors ${
                        !canMoveDown ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                      }`}
                      title={canMoveDown ? 'Move section down' : 'Cannot move down'}
                      aria-label="Move section down"
                    >
                      <ChevronDown className="w-3 h-3 text-neutral-600" />
                    </button>
                  </div>
                )}

                {/* Locked Icon (for hidden/archived) */}
                {isLocked && (
                  <Lock className="flex-shrink-0 w-3.5 h-3.5 text-neutral-400" />
                )}

                {/* Section Content - handles both slide drops and clicks */}
                <div
                  className="flex-1 flex items-center gap-3"
                  onDragOver={(e) => handleSlideDragOver(e, section.key)}
                  onDragLeave={handleSlideDragLeave}
                  onDrop={(e) => handleSlideDrop(e, section.key)}
                >
                  <button
                    onClick={() => onSelect(section.key)}
                    className="flex-1 flex items-center gap-3 text-left"
                    aria-label={`${section.label} section${isSectionHidden ? ' (hidden from presentation)' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Icon */}
                    <Icon className={`flex-shrink-0 h-5 w-5 ${isActive ? 'text-primary' : ''}`} />

                    {/* Label */}
                    <span className="flex-1 text-body-medium font-medium truncate">
                      {section.label}
                    </span>

                    {/* Count Badge */}
                    {section.count > 0 && (
                      <Badge
                        className={`flex-shrink-0 px-2 py-0.5 text-label-small rounded-full ${
                          isSectionHidden && isToggleable
                            ? 'bg-neutral-100 text-neutral-400 line-through'
                            : isActive
                            ? 'bg-primary text-white'
                            : isStatus
                            ? 'bg-neutral-100 text-neutral-600'
                            : 'bg-neutral-200 text-neutral-700'
                        }`}
                      >
                        {section.count}
                      </Badge>
                    )}
                  </button>

                  {/* Show/Hide Toggle for main, demo, appendix */}
                  {isToggleable && onToggleSectionVisibility && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSectionVisibility(section.key);
                      }}
                      className="flex-shrink-0 p-1 hover:bg-neutral-200/50 rounded transition-colors opacity-0 group-hover:opacity-100"
                      title={isSectionHidden ? 'Show section in presentation' : 'Hide section from presentation'}
                      aria-label={isSectionHidden ? `Show ${section.label}` : `Hide ${section.label}`}
                    >
                      {isSectionHidden ? (
                        <EyeOff className="w-4 h-4 text-neutral-500" />
                      ) : (
                        <Eye className="w-4 h-4 text-neutral-500" />
                      )}
                    </button>
                  )}
                </div>

                {/* Drop indicator for slides */}
                {isDropTarget && (
                  <div className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none" />
                )}
              </div>
              </div>
            );
          })}
        </div>
        )}
      </div>

      {/* Add Section Dialog */}
      {onAddSection && (
        <AddSectionDialog
          open={showAddDialog}
          onOpenChange={setShowAddDialog}
          onAdd={onAddSection}
        />
      )}

      {/* Context Menu for Custom Sections */}
      {contextMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setContextMenu(null)}
          />
          <div
            className="fixed z-50 min-w-[180px] bg-white rounded-lg shadow-elevation-3 border border-neutral-200 py-1"
            style={{ left: contextMenu.x, top: contextMenu.y }}
          >
            <button
              onClick={() => handleDeleteSection(contextMenu.sectionId)}
              className="w-full flex items-center gap-3 px-3 py-2 text-body-small font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="h-4 w-4 flex-shrink-0" />
              <span>Delete Section</span>
            </button>
          </div>
        </>
      )}
    </>
  );
};

