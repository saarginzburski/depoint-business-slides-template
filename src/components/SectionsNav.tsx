import React from 'react';
import { Layers, Monitor, BookOpen, EyeOff, Archive, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Section, SectionKey } from '@/types/deck';

interface SectionsNavProps {
  sections: Section[];
  activeSectionKey: SectionKey;
  onSelect: (key: SectionKey) => void;
  onDrop?: (slideIds: string[], targetSection: SectionKey) => void;
  onToggleSectionVisibility?: (sectionKey: SectionKey) => void;
  hiddenSections?: Set<SectionKey>;
}

const SECTION_ICONS: Record<SectionKey, React.ComponentType<{ className?: string }>> = {
  main: Layers,
  demo: Monitor,
  appendix: BookOpen,
  hidden: EyeOff,
  archived: Archive,
};

export const SectionsNav: React.FC<SectionsNavProps> = ({
  sections,
  activeSectionKey,
  onSelect,
  onDrop,
  onToggleSectionVisibility,
  hiddenSections = new Set(),
}) => {
  const [dragOver, setDragOver] = React.useState<SectionKey | null>(null);

  const handleDragOver = (e: React.DragEvent, sectionKey: SectionKey) => {
    e.preventDefault();
    setDragOver(sectionKey);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = (e: React.DragEvent, sectionKey: SectionKey) => {
    e.preventDefault();
    setDragOver(null);

    const slideIds = e.dataTransfer.getData('slideIds')?.split(',').filter(Boolean);
    if (slideIds && slideIds.length > 0 && onDrop) {
      onDrop(slideIds, sectionKey);
    }
  };

  // Sections that can be toggled (exclude hidden and archived)
  const toggleableSections: SectionKey[] = ['main', 'demo', 'appendix'];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-neutral-200">
        <h3 className="text-title-small font-medium text-neutral-900">Sections</h3>
      </div>

      {/* Sections List */}
      <div className="py-2">
        {sections.map((section) => {
          const isActive = activeSectionKey === section.key;
          const Icon = SECTION_ICONS[section.key] || Layers;
          const isStatus = section.key === 'hidden' || section.key === 'archived';
          const isDropTarget = dragOver === section.key;
          const isToggleable = toggleableSections.includes(section.key);
          const isSectionHidden = hiddenSections.has(section.key);

          return (
            <div
              key={section.key}
              className={`group relative w-full flex items-center gap-3 px-4 py-2.5 transition-standard ${
                isSectionHidden && isToggleable
                  ? 'opacity-50'
                  : ''
              } ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : isStatus
                  ? 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
                  : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
              } ${
                isDropTarget ? 'bg-primary/5 ring-2 ring-primary/30 ring-inset' : ''
              }`}
              onDragOver={(e) => handleDragOver(e, section.key)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, section.key)}
            >
              <button
                onClick={() => onSelect(section.key)}
                className="flex-1 flex items-center gap-3 text-left"
                aria-label={`${section.label} section${isSectionHidden ? ' (hidden from presentation)' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                )}

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

              {/* Drop indicator */}
              {isDropTarget && (
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* Help Text for Drag & Drop */}
      {sections.some((s) => s.count > 0) && (
        <div className="px-4 py-3 mt-auto border-t border-neutral-200">
          <p className="text-label-small text-neutral-500 leading-relaxed">
            Drag slides to sections to move them
          </p>
        </div>
      )}
    </div>
  );
};

