# UX Refactor Status - Google Workspace Power User Interface

## ✅ Phase 1: Core Components Complete (937139b)

All foundational components for the Google Workspace-style power user interface have been created and are ready for integration.

---

## 📦 Components Built

### 1. **HiddenSlidesDrawer** ✅
**Path:** `src/components/HiddenSlidesDrawer.tsx`

**Features:**
- Modal drawer that slides in from the right
- Three tabs: Hidden, Archived, All Slides
- Search with real-time filtering
- Filter by section + sort options (Recent, Name, ID)
- Multi-select with checkboxes
- Bulk actions: Restore to deck, Delete
- 3-column grid view with slide thumbnails
- Hover actions on each slide (Preview, Delete)
- Empty states with helpful messaging

**Props:**
```typescript
interface HiddenSlidesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  hiddenSlides: SlideData[];
  archivedSlides?: SlideData[];
  allSlides: SlideData[];
  onRestoreSlides: (slideIds: number[], targetSection: string) => void;
  onDeleteSlides: (slideIds: number[]) => void;
  onPreviewSlide: (slideId: number) => void;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  sections: Array<{ id: string; name: string }>;
}
```

---

### 2. **NavigationRail** ✅
**Path:** `src/components/NavigationRail.tsx`

**Features:**
- Google Drive-style left sidebar
- Collapsible design (icons-only or expanded)
- Active indicator bar on selected item
- Badge counts for hidden slides
- Navigation items: Decks, Hidden Slides, Templates, Settings
- Smooth width transitions

**Props:**
```typescript
interface NavigationRailProps {
  activeItem?: string;
  onItemClick: (itemId: string) => void;
  hiddenCount?: number;
}
```

**Usage:**
```tsx
<NavigationRail 
  activeItem="decks"
  onItemClick={(id) => {
    if (id === 'hidden') setDrawerOpen(true);
  }}
  hiddenCount={hiddenSlides.length}
/>
```

---

### 3. **CommandPalette** ✅
**Path:** `src/components/CommandPalette.tsx`

**Features:**
- Ctrl/Cmd+K to open
- Full keyboard navigation (↑↓ arrows, Enter, Escape)
- Grouped results by category (Slides, Decks, Actions, Navigation)
- Search across all commands
- Keyboard shortcuts displayed inline
- Type-ahead filtering
- Auto-scroll selected item into view

**Props:**
```typescript
interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  commands: CommandItem[];
}

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  shortcut?: string;
  category: 'slide' | 'deck' | 'action' | 'navigation';
  onSelect: () => void;
}
```

**Example Commands:**
```typescript
const commands: CommandItem[] = [
  {
    id: 'duplicate-deck',
    label: 'Duplicate deck',
    description: 'Create a copy of the current deck',
    icon: Copy,
    category: 'action',
    shortcut: '⌘D',
    onSelect: () => handleDuplicateDeck(),
  },
  {
    id: 'go-to-hidden',
    label: 'Go to Hidden slides',
    icon: EyeOff,
    category: 'navigation',
    onSelect: () => setDrawerOpen(true),
  },
];
```

---

### 4. **QuickActionsBar** ✅
**Path:** `src/components/QuickActionsBar.tsx`

**Features:**
- Bottom floating bar (Google Slides style)
- Appears when slides are selected
- Actions: Hide, Duplicate, Move to deck, Delete
- Dark theme with white text
- Slide-up animation on appear
- Selection count display
- Clear selection button

**Props:**
```typescript
interface QuickActionsBarProps {
  selectedCount: number;
  onClearSelection: () => void;
  onHideSlides: () => void;
  onDuplicateSlides: () => void;
  onMoveToDeck: (deckId: string) => void;
  onDeleteSlides: () => void;
  availableDecks: Array<{ id: string; name: string }>;
}
```

---

### 5. **SlideContextMenu** ✅
**Path:** `src/components/SlideContextMenu.tsx`

**Features:**
- Right-click context menu
- Actions: Preview, Add/Remove from deck, Duplicate, Rename, Delete
- Keyboard shortcuts shown (H, R, ⌘D)
- Auto-positioning to stay within viewport
- Click-outside or Escape to close
- Danger styling for delete action

**Props:**
```typescript
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
```

**Usage:**
```tsx
const [contextMenu, setContextMenu] = useState<{x: number, y: number, slideId: number} | null>(null);

// On slide card
<div 
  onContextMenu={(e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, slideId: slide.id });
  }}
>
  {/* slide content */}
</div>

{contextMenu && (
  <SlideContextMenu
    x={contextMenu.x}
    y={contextMenu.y}
    isHidden={slide.section === 'hidden'}
    onClose={() => setContextMenu(null)}
    // ... action handlers
  />
)}
```

---

### 6. **useKeyboardShortcuts Hook** ✅
**Path:** `src/hooks/useKeyboardShortcuts.ts`

**Features:**
- Global keyboard shortcut management
- Cross-platform (Ctrl/Cmd)
- Ignores shortcuts when typing in inputs (except Cmd+K)
- Pre-defined common shortcuts
- Easy to extend

**Usage:**
```typescript
import { useKeyboardShortcuts, commonShortcuts } from '@/hooks/useKeyboardShortcuts';

// In component
useKeyboardShortcuts([
  {
    ...commonShortcuts.commandPalette,
    action: () => setCommandPaletteOpen(true),
  },
  {
    key: 'h',
    action: () => handleHideSelected(),
    description: 'Hide selected slides',
  },
  {
    key: 'r',
    action: () => handleRestoreSelected(),
    description: 'Restore selected slides',
  },
  {
    ...commonShortcuts.duplicate,
    action: () => handleDuplicateSelected(),
  },
], enabled);
```

**Available Shortcuts:**
- `Cmd/Ctrl + K` - Command Palette
- `H` - Hide selected slides
- `R` - Restore selected slides
- `Cmd/Ctrl + D` - Duplicate selected slides
- `Delete` - Delete selected slides
- `Cmd/Ctrl + A` - Select all slides
- `Escape` - Clear selection / Close dialogs
- `Arrow Up/Down/Left/Right` - Navigate slides

---

### 7. **CSS Animations** ✅
**Path:** `src/index.css`

**Added Animations:**
```css
/* Drawer slide-in from right */
.animate-drawer-slide-in-right

/* Drawer slide-in from left */
.animate-drawer-slide-in-left

/* Quick actions bar slide up */
.animate-slide-up
```

---

## 🚧 Phase 2: Integration (In Progress)

### TODO: Multi-Select State Management

Need to add to `DeckOverview.tsx`:

```typescript
// State for multi-select
const [selectedSlideIds, setSelectedSlideIds] = useState<Set<number>>(new Set());

// Toggle slide selection
const toggleSlideSelection = (slideId: number, ctrlKey: boolean = false) => {
  const newSet = new Set(selectedSlideIds);
  if (ctrlKey) {
    // Add to selection
    if (newSet.has(slideId)) {
      newSet.delete(slideId);
    } else {
      newSet.add(slideId);
    }
  } else {
    // Replace selection
    newSet.clear();
    newSet.add(slideId);
  }
  setSelectedSlideIds(newSet);
};

// Clear selection
const clearSelection = () => setSelectedSlideIds(new Set());

// Select all
const selectAll = () => {
  const allIds = visibleSlides.map(s => s.id);
  setSelectedSlideIds(new Set(allIds));
};
```

---

### TODO: Refactor DraggableSlide to Icon-Only Toolbar

Update `DraggableSlideGrid.tsx` slide cards:

**Before:**
```tsx
<div className="flex items-center gap-1 px-2 py-2">
  <button>
    <GripVertical className="h-4 w-4" />
    <span>Reorder</span>  {/* Remove text */}
  </button>
  <button>
    <EyeOff className="h-4 w-4" />
    <span>Remove</span>  {/* Remove text */}
  </button>
</div>
```

**After:**
```tsx
{/* Hover-only icon toolbar */}
<div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
  <button
    {...listeners}
    {...attributes}
    className="h-8 w-8 p-0 bg-surface/90 backdrop-blur-sm hover:bg-primary/10 rounded-full shadow-sm"
    title="Drag to reorder"
  >
    <GripVertical className="h-4 w-4" />
  </button>
  <button
    onClick={handleToggleVisibility}
    className="h-8 w-8 p-0 bg-surface/90 backdrop-blur-sm hover:bg-primary/10 rounded-full shadow-sm"
    title={isHidden ? 'Add to deck' : 'Remove from deck'}
  >
    {isHidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
  </button>
  <button
    onClick={handleDuplicate}
    className="h-8 w-8 p-0 bg-surface/90 backdrop-blur-sm hover:bg-primary/10 rounded-full shadow-sm"
    title="Duplicate slide"
  >
    <Copy className="h-4 w-4" />
  </button>
</div>
```

---

### TODO: Add Checkbox for Multi-Select

Add to each slide card in `DraggableSlide`:

```tsx
<Card className="group relative ...">
  {/* Multi-select checkbox */}
  <div className="absolute top-2 left-2 z-10">
    <Checkbox
      checked={isSelected}
      onCheckedChange={() => onToggleSelection(slide.id)}
      className="bg-surface shadow-sm"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
  
  {/* ... rest of card */}
</Card>
```

---

### TODO: Integrate Components into DeckOverview

```tsx
// Add state
const [drawerOpen, setDrawerOpen] = useState(false);
const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
const [selectedSlideIds, setSelectedSlideIds] = useState<Set<number>>(new Set());
const [contextMenu, setContextMenu] = useState<{x: number, y: number, slideId: number} | null>(null);
const [navActiveItem, setNavActiveItem] = useState('decks');

// Add keyboard shortcuts
useKeyboardShortcuts([
  {
    key: 'k',
    meta: true,
    action: () => setCommandPaletteOpen(true),
    description: 'Open command palette',
  },
  {
    key: 'h',
    action: () => {
      if (selectedSlideIds.size > 0) {
        handleHideSelected();
      }
    },
    description: 'Hide selected slides',
  },
  // ... more shortcuts
], true);

// Build command list
const commands: CommandItem[] = [
  {
    id: 'open-hidden',
    label: 'Open hidden slides',
    icon: EyeOff,
    category: 'navigation',
    shortcut: 'H',
    onSelect: () => setDrawerOpen(true),
  },
  // ... more commands
];

// Layout
return (
  <div className="flex h-screen">
    {/* Navigation Rail */}
    <NavigationRail
      activeItem={navActiveItem}
      onItemClick={(id) => {
        setNavActiveItem(id);
        if (id === 'hidden') setDrawerOpen(true);
      }}
      hiddenCount={orderedSlidesBySection.hidden?.length || 0}
    />

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden">
      <WorkspaceAppBar ... />
      
      <div className="flex-1 overflow-y-auto">
        {/* Deck info, variations, slides grid */}
      </div>
    </div>

    {/* Hidden Slides Drawer */}
    <HiddenSlidesDrawer
      isOpen={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      hiddenSlides={orderedSlidesBySection.hidden || []}
      allSlides={visibleSlides}
      onRestoreSlides={handleRestoreSlides}
      onDeleteSlides={handleDeleteSlides}
      onPreviewSlide={handleSlideClick}
      slideComponents={slideComponents}
      sections={sections.filter(s => s.id !== 'hidden')}
    />

    {/* Command Palette */}
    <CommandPalette
      isOpen={commandPaletteOpen}
      onClose={() => setCommandPaletteOpen(false)}
      commands={commands}
    />

    {/* Quick Actions Bar */}
    <QuickActionsBar
      selectedCount={selectedSlideIds.size}
      onClearSelection={() => setSelectedSlideIds(new Set())}
      onHideSlides={handleHideSelected}
      onDuplicateSlides={handleDuplicateSelected}
      onMoveToDeck={handleMoveSelectedToDeck}
      onDeleteSlides={handleDeleteSelected}
      availableDecks={sections.filter(s => s.id !== 'hidden').map(s => ({ id: s.id, name: s.name }))}
    />

    {/* Context Menu */}
    {contextMenu && (
      <SlideContextMenu
        x={contextMenu.x}
        y={contextMenu.y}
        isHidden={/* check if slide is hidden */}
        onClose={() => setContextMenu(null)}
        onAddToDeck={handleAddToDeck}
        onRemoveFromDeck={handleRemoveFromDeck}
        onDuplicate={handleDuplicate}
        onRename={handleRename}
        onPreview={() => handleSlideClick(contextMenu.slideId)}
        onDelete={handleDelete}
      />
    )}
  </div>
);
```

---

## 📋 Remaining Tasks

### High Priority
1. ✅ Create all core components
2. ⏳ Add multi-select state management
3. ⏳ Refactor slide cards to icon-only hover toolbars
4. ⏳ Integrate NavigationRail into DeckOverview
5. ⏳ Integrate HiddenSlidesDrawer
6. ⏳ Integrate CommandPalette with Cmd+K
7. ⏳ Integrate QuickActionsBar
8. ⏳ Add context menu to slides
9. ⏳ Connect keyboard shortcuts

### Medium Priority
10. ⏳ Add virtualization for large slide lists (react-window or react-virtuoso)
11. ⏳ Add toast notifications for user feedback
12. ⏳ Implement responsive design (drawer → full-screen on mobile)
13. ⏳ Add loading states and skeleton screens
14. ⏳ Implement undo/redo for bulk actions

### Low Priority
15. ⏳ Add slide preview on hover (larger thumbnail popover)
16. ⏳ Add keyboard navigation between slides (arrow keys)
17. ⏳ Add drag-and-drop between sections
18. ⏳ Add animation when slides enter/exit hidden section
19. ⏳ Add search highlighting in command palette results

---

## 🎨 Design Tokens Applied

All components use the Material 3 design system from `depoint-design-tokens.json`:

- **Colors:** Google Blue (#1A73E8), Depoint Orange (#F29900), Neutral grayscale
- **Typography:** Google Sans/Roboto with Material 3 scale
- **Spacing:** 4px-based system (4, 8, 16, 24, 32)
- **Shadows:** elevation-1 through elevation-5
- **Motion:** 200ms transitions with cubic-bezier easing
- **Border Radius:** rounded-xl (12px) for cards, rounded-full for badges

---

## 🧪 Testing Recommendations

### Component Testing
```bash
# Test each component in isolation
npm run dev
# Navigate to http://localhost:7777/overview
```

### Keyboard Shortcuts Testing
1. Test Cmd/Ctrl+K for command palette
2. Test H for hide
3. Test R for restore
4. Test Cmd/Ctrl+D for duplicate
5. Test arrow keys for navigation
6. Test Escape for closing dialogs

### Multi-Select Testing
1. Click slide with Ctrl/Cmd to add to selection
2. Click slide without modifier to replace selection
3. Test bulk actions with multiple slides selected
4. Test clear selection

### Drawer Testing
1. Test search filtering
2. Test section filter
3. Test sort options
4. Test bulk restore
5. Test bulk delete
6. Test responsive behavior

---

## 📚 Implementation Guide

### Step 1: Add State Management
Add all necessary state to `DeckOverview.tsx` for:
- Drawer open/close
- Command palette open/close
- Selected slides
- Context menu position
- Navigation rail active item

### Step 2: Integrate NavigationRail
Replace the current sidebar (if any) with NavigationRail. Update layout to use flexbox with rail on left.

### Step 3: Replace Hidden Section
Remove the floating hidden section panel from `DraggableSlideGrid`. Hidden slides should only be accessible via the drawer.

### Step 4: Add Multi-Select to Slides
Update `DraggableSlide` component to include:
- Checkbox in top-left corner
- Selected state styling (ring-2 ring-primary)
- Click handler that respects Ctrl/Cmd key

### Step 5: Refactor Slide Actions
Move action buttons from bottom bar to hover overlay with icon-only design.

### Step 6: Add Keyboard Shortcuts
Integrate `useKeyboardShortcuts` hook with all major actions.

### Step 7: Add Context Menu
Add `onContextMenu` handler to slide cards to show context menu.

### Step 8: Add Command Palette
Build command list from available actions and integrate with Cmd+K.

### Step 9: Add Quick Actions Bar
Show when slides are selected with all bulk actions.

### Step 10: Test & Refine
Test all interactions, keyboard shortcuts, and edge cases.

---

## 🚀 Next Steps

1. Review this document
2. Start with Step 1 (State Management)
3. Proceed through integration steps sequentially
4. Test thoroughly after each step
5. Commit progress incrementally
6. Deploy when all features are integrated

---

## 📖 References

- [Material Design 3](https://m3.material.io/)
- [Google Workspace Design](https://workspace.google.com/)
- [React DnD Kit](https://dndkit.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

