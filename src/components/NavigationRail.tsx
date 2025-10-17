import React, { useState } from 'react';
import { Layers, EyeOff, FileText, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  count?: number;
}

interface NavigationRailProps {
  activeItem?: string;
  onItemClick: (itemId: string) => void;
  hiddenCount?: number;
}

export const NavigationRail: React.FC<NavigationRailProps> = ({
  activeItem = 'decks',
  onItemClick,
  hiddenCount = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const navigationItems: NavigationItem[] = [
    { id: 'decks', label: 'Decks', icon: Layers },
    { id: 'hidden', label: 'Hidden Slides', icon: EyeOff, count: hiddenCount },
    { id: 'templates', label: 'Templates', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav
      className={`relative h-full bg-surface border-r border-neutral-200 transition-all duration-200 ${
        isExpanded ? 'w-60' : 'w-20'
      }`}
    >
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-6 z-10 h-6 w-6 p-0 rounded-full bg-surface border border-neutral-200 shadow-sm hover:shadow-md"
        title={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        {isExpanded ? (
          <ChevronLeft className="h-3 w-3" />
        ) : (
          <ChevronRight className="h-3 w-3" />
        )}
      </Button>

      {/* Navigation Items */}
      <div className="py-6 px-3 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
              title={!isExpanded ? item.label : undefined}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
              )}

              {/* Icon */}
              <Icon
                className={`flex-shrink-0 ${
                  isExpanded ? 'h-5 w-5' : 'h-6 w-6'
                } transition-all`}
              />

              {/* Label */}
              {isExpanded && (
                <>
                  <span className="flex-1 text-left text-body-medium font-medium truncate">
                    {item.label}
                  </span>

                  {/* Count Badge */}
                  {item.count !== undefined && item.count > 0 && (
                    <span className="flex-shrink-0 px-2 py-0.5 text-label-small font-medium bg-neutral-200 text-neutral-700 rounded-full">
                      {item.count}
                    </span>
                  )}
                </>
              )}

              {/* Tooltip for collapsed state */}
              {!isExpanded && item.count !== undefined && item.count > 0 && (
                <span className="absolute top-1 right-1 flex items-center justify-center h-4 w-4 text-[10px] font-bold bg-primary text-white rounded-full">
                  {item.count > 9 ? '9+' : item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Branding (optional) */}
      {isExpanded && (
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <div className="text-label-small text-neutral-500 text-center">
            Depoint Templates
          </div>
        </div>
      )}
    </nav>
  );
};

