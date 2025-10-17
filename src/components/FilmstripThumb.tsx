import React, { Suspense } from 'react';
import { Card } from '@/components/ui/card';
import { Slide } from '@/types/deck';

interface FilmstripThumbProps {
  slide: Slide;
  isSelected: boolean;
  slideComponent?: React.LazyExoticComponent<any>;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent) => void;
}

export const FilmstripThumb: React.FC<FilmstripThumbProps> = ({
  slide,
  isSelected,
  slideComponent,
  onClick,
  onContextMenu,
}) => {
  return (
    <Card
      className={`
        flex-shrink-0 w-32 cursor-pointer transition-all duration-200
        ${isSelected ? 'ring-2 ring-blue-600 shadow-md' : 'hover:ring-2 hover:ring-neutral-300'}
      `}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-neutral-50 rounded-t overflow-hidden relative">
        <div className="w-full h-full transform scale-[0.2] origin-top-left" style={{ width: '500%', height: '500%' }}>
          <Suspense
            fallback={
              <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                <div className="animate-pulse text-neutral-400 text-4xl font-bold">{slide.id}</div>
              </div>
            }
          >
            {slideComponent ? (
              React.createElement(slideComponent)
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <div className="text-neutral-400 text-4xl font-bold">{slide.id}</div>
              </div>
            )}
          </Suspense>
        </div>
      </div>

      {/* Slide number and title */}
      <div className="p-2 text-center">
        <span className="text-xs font-medium text-neutral-700 truncate block" title={`#${slide.id} - ${slide.title}`}>
          #{slide.id} - {slide.title}
        </span>
      </div>
    </Card>
  );
};

