import { useEffect } from 'react';

export interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  alt?: boolean;
  action: () => void;
  description?: string;
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
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        // Allow Command Palette shortcut even in inputs
        if (!(event.key === 'k' && (event.ctrlKey || event.metaKey))) {
          return;
        }
      }

      for (const shortcut of shortcuts) {
        const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase();
        const ctrlMatches = !!shortcut.ctrl === event.ctrlKey;
        const metaMatches = !!shortcut.meta === event.metaKey;
        const shiftMatches = !!shortcut.shift === event.shiftKey;
        const altMatches = !!shortcut.alt === event.altKey;

        // Handle Ctrl/Meta as interchangeable (for cross-platform)
        const modifierMatches =
          (shortcut.ctrl || shortcut.meta) ? (event.ctrlKey || event.metaKey) : (!event.ctrlKey && !event.metaKey);

        if (
          keyMatches &&
          ((shortcut.ctrl || shortcut.meta) ? modifierMatches : (ctrlMatches && metaMatches)) &&
          shiftMatches &&
          altMatches
        ) {
          event.preventDefault();
          shortcut.action();
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts, enabled]);
};

// Pre-defined shortcuts
export const commonShortcuts = {
  commandPalette: { key: 'k', meta: true, description: 'Open command palette' },
  hide: { key: 'h', description: 'Hide selected slides' },
  restore: { key: 'r', description: 'Restore hidden slides' },
  duplicate: { key: 'd', meta: true, description: 'Duplicate selected slides' },
  delete: { key: 'Delete', description: 'Delete selected slides' },
  selectAll: { key: 'a', meta: true, description: 'Select all slides' },
  escape: { key: 'Escape', description: 'Clear selection / Close dialogs' },
  arrowUp: { key: 'ArrowUp', description: 'Navigate up' },
  arrowDown: { key: 'ArrowDown', description: 'Navigate down' },
  arrowLeft: { key: 'ArrowLeft', description: 'Navigate left' },
  arrowRight: { key: 'ArrowRight', description: 'Navigate right' },
};

