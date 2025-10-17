import { useEffect } from 'react';

export interface KeyboardShortcut {
  key: string;
  ctrlOrCmd?: boolean;
  shift?: boolean;
  alt?: boolean;
  handler: (event: KeyboardEvent) => void;
  description?: string;
  preventDefault?: boolean;
}

export const useKeyboardShortcuts = (
  shortcuts: KeyboardShortcut[],
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when user is typing in an input
      const target = event.target as HTMLElement;
      const isInInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      for (const shortcut of shortcuts) {
        const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase();
        const shiftMatches = !!shortcut.shift === event.shiftKey;
        const altMatches = !!shortcut.alt === event.altKey;

        // Handle Ctrl/Meta as interchangeable (for cross-platform)
        const modifierMatches = shortcut.ctrlOrCmd
          ? (event.ctrlKey || event.metaKey)
          : (!event.ctrlKey && !event.metaKey);

        if (keyMatches && modifierMatches && shiftMatches && altMatches) {
          // Allow Command Palette shortcut even in inputs
          const allowInInput = shortcut.key === 'k' && shortcut.ctrlOrCmd;
          
          if (isInInput && !allowInInput) {
            continue;
          }

          if (shortcut.preventDefault !== false) {
            event.preventDefault();
          }
          
          shortcut.handler(event);
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts, enabled]);
};

// Pre-defined shortcut keys (handlers must be provided by the consumer)
export const commonShortcutKeys = {
  commandPalette: { key: 'k', ctrlOrCmd: true, description: 'Open command palette' },
  hide: { key: 'h', description: 'Hide selected slides' },
  restore: { key: 'r', description: 'Restore hidden slides' },
  duplicate: { key: 'd', ctrlOrCmd: true, description: 'Duplicate selected slides' },
  delete: { key: 'Delete', description: 'Delete selected slides' },
  selectAll: { key: 'a', ctrlOrCmd: true, description: 'Select all slides' },
  escape: { key: 'Escape', description: 'Clear selection / Close dialogs' },
  arrowUp: { key: 'ArrowUp', description: 'Navigate up' },
  arrowDown: { key: 'ArrowDown', description: 'Navigate down' },
  arrowLeft: { key: 'ArrowLeft', description: 'Navigate left' },
  arrowRight: { key: 'ArrowRight', description: 'Navigate right' },
  enter: { key: 'Enter', description: 'View slide' },
  space: { key: ' ', description: 'Preview slide' },
  moveUp: { key: 'ArrowUp', ctrlOrCmd: true, description: 'Move slide up' },
  moveDown: { key: 'ArrowDown', ctrlOrCmd: true, description: 'Move slide down' },
};

