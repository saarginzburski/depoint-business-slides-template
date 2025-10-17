import React, { useEffect, useRef } from 'react';
import { Eye, EyeOff, Copy, Edit2, Trash2, MoveHorizontal } from 'lucide-react';

interface ContextMenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  shortcut?: string;
  danger?: boolean;
  onClick: () => void;
}

interface SlideContextMenuProps {
  x: number;
  y: number;
  isHidden: boolean;
  onClose: () => void;
  onAddToDeck: () => void;
  onRemoveFromDeck: () => void;
  onDuplicate: () => void;
  onRename: () => void;
  onPreview: () => void;
  onDelete: () => void;
}

export const SlideContextMenu: React.FC<SlideContextMenuProps> = ({
  x,
  y,
  isHidden,
  onClose,
  onAddToDeck,
  onRemoveFromDeck,
  onDuplicate,
  onRename,
  onPreview,
  onDelete,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems: ContextMenuItem[] = [
    {
      id: 'preview',
      label: 'Preview',
      icon: Eye,
      onClick: () => {
        onPreview();
        onClose();
      },
    },
    {
      id: 'toggle-visibility',
      label: isHidden ? 'Add to deck' : 'Remove from deck',
      icon: isHidden ? Eye : EyeOff,
      shortcut: isHidden ? 'R' : 'H',
      onClick: () => {
        if (isHidden) {
          onAddToDeck();
        } else {
          onRemoveFromDeck();
        }
        onClose();
      },
    },
    {
      id: 'duplicate',
      label: 'Duplicate',
      icon: Copy,
      shortcut: '⌘D',
      onClick: () => {
        onDuplicate();
        onClose();
      },
    },
    {
      id: 'rename',
      label: 'Rename',
      icon: Edit2,
      onClick: () => {
        onRename();
        onClose();
      },
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: Trash2,
      danger: true,
      onClick: () => {
        onDelete();
        onClose();
      },
    },
  ];

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Adjust position to stay within viewport
  useEffect(() => {
    if (menuRef.current) {
      const menu = menuRef.current;
      const rect = menu.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let adjustedX = x;
      let adjustedY = y;

      // Adjust horizontal position
      if (rect.right > viewportWidth) {
        adjustedX = viewportWidth - rect.width - 8;
      }

      // Adjust vertical position
      if (rect.bottom > viewportHeight) {
        adjustedY = viewportHeight - rect.height - 8;
      }

      menu.style.left = `${adjustedX}px`;
      menu.style.top = `${adjustedY}px`;
    }
  }, [x, y]);

  return (
    <>
      {/* Invisible backdrop to catch clicks */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Context Menu */}
      <div
        ref={menuRef}
        className="fixed z-50 min-w-[220px] bg-surface rounded-lg shadow-elevation-3 border border-neutral-200 py-2 animate-fade-in"
        style={{ left: x, top: y }}
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <React.Fragment key={item.id}>
              {/* Divider before delete */}
              {index === menuItems.length - 1 && (
                <div className="my-1 border-t border-neutral-200" />
              )}

              <button
                onClick={item.onClick}
                className={`w-full flex items-center gap-3 px-4 py-2 transition-colors ${
                  item.danger
                    ? 'text-red-600 hover:bg-red-50'
                    : 'text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1 text-left text-body-medium font-medium">
                  {item.label}
                </span>
                {item.shortcut && (
                  <kbd className="px-1.5 py-0.5 text-label-small font-medium bg-neutral-100 border border-neutral-300 rounded text-neutral-600">
                    {item.shortcut}
                  </kbd>
                )}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

