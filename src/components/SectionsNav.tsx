import React from 'react';
import { Layers, Monitor, BookOpen, EyeOff, Archive } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Section, SectionKey } from '@/types/deck';

interface SectionsNavProps {
  sections: Section[];
  activeSectionKey: SectionKey | 'all';
  onSelect: (key: SectionKey | 'all') => void;
  onDrop?: (slideIds: string[], targetSection: SectionKey) => void;
}

const SECTION_ICONS: Record<SectionKey | 'all', React.ComponentType<{ className?: string }>> = {
  all: Layers,
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

  // Add "All Slides" option
  const allSlidesSection: Section = {
    key: 'all' as SectionKey,
    label: 'All slides',
    count: sections.reduce((sum, s) => sum + s.count, 0),
  };

  const allSections = [allSlidesSection, ...sections];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-neutral-200">
        <h3 className="text-title-small font-medium text-neutral-900">Sections</h3>
      </div>

      {/* Sections List */}
      <div className="py-2">
        {allSections.map((section) => {
          const isActive = activeSectionKey === section.key;
          const Icon = SECTION_ICONS[section.key] || Layers;
          const isStatus = section.key === 'hidden' || section.key === 'archived';
          const isDropTarget = dragOver === section.key;

          return (
            <button
              key={section.key}
              onClick={() => onSelect(section.key as SectionKey | 'all')}
              onDragOver={(e) => section.key !== 'all' && handleDragOver(e, section.key)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => section.key !== 'all' && handleDrop(e, section.key)}
              className={`group relative w-full flex items-center gap-3 px-4 py-2.5 transition-standard ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : isStatus
                  ? 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
                  : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
              } ${
                isDropTarget ? 'bg-primary/5 ring-2 ring-primary/30 ring-inset' : ''
              }`}
              aria-label={`${section.label} section`}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
              )}

              {/* Icon */}
              <Icon className={`flex-shrink-0 h-5 w-5 ${isActive ? 'text-primary' : ''}`} />

              {/* Label */}
              <span className="flex-1 text-left text-body-medium font-medium truncate">
                {section.label}
              </span>

              {/* Count Badge */}
              {section.count > 0 && (
                <Badge
                  className={`flex-shrink-0 px-2 py-0.5 text-label-small rounded-full ${
                    isActive
                      ? 'bg-primary text-white'
                      : isStatus
                      ? 'bg-neutral-100 text-neutral-600'
                      : 'bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {section.count}
                </Badge>
              )}

              {/* Drop indicator */}
              {isDropTarget && (
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none" />
              )}
            </button>
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

