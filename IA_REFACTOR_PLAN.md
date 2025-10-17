# Information Architecture Refactor - Implementation Plan

## 🎯 **Overview**

This is a **major architectural refactor** that transforms the entire application from a panel-based UI to a sidebar-filtered approach. This is a **multi-day effort** requiring significant code changes.

**Status:** 🚧 **IN PROGRESS** (3/10 components complete)

---

## ✅ **What's Been Completed**

### 1. **Data Model** (`src/types/deck.ts`)
```typescript
// New unified data model
- Slide (with section as status field)
- Variant (with countBySection)
- Section (key-based with Hidden/Archived as filters)
- BulkAction (unified API contract)
- DeckFilters (query params)
```

### 2. **VariantsNav Component** (`src/components/VariantsNav.tsx`)
✅ Radio selection (active variant)  
✅ Search with real-time filtering  
✅ Context menu (Rename, Duplicate, Set default, Delete)  
✅ Drag handle for manual ordering  
✅ Inline rename editing  
✅ Default badge (star icon)  
✅ Material 3 styling  
✅ Keyboard accessible  

### 3. **SectionsNav Component** (`src/components/SectionsNav.tsx`)
✅ All sections: All, Main, Demo, Appendices, Hidden, Archived  
✅ Hidden/Archived as filters (not separate panels)  
✅ Drag-and-drop target areas  
✅ Count badges  
✅ Active indicator  
✅ Material 3 design  

---

## 🚧 **Remaining Work** (Estimated 2-3 days)

### **Phase 1: Core Components** (Day 1)

#### 1. TopAppBar Component
**File:** `src/components/TopAppBar.tsx`

**Features:**
- Breadcrumb with deck name (editable)
- Search input (250ms debounce)
- Filter dropdowns:
  - Tags (multi-select)
  - Edited time (Last hour, Today, This week, This month)
- Sort dropdown (Updated, Title, Section)
- Stats chip: "23 slides • ~35 min"
- Primary buttons: Present, Print
- Profile menu (right side)

**Props:**
```typescript
interface TopAppBarProps {
  deckName: string;
  onDeckNameChange: (name: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: DeckFilters;
  onFiltersChange: (filters: DeckFilters) => void;
  slideCount: number;
  estimatedMinutes: number;
  onPresent: () => void;
  onPrint: () => void;
}
```

---

#### 2. SlideGrid Refactor
**File:** `src/components/SlideGrid.tsx`

**Changes:**
- Remove bottom action bar from cards
- Add hover toolbar with icons only:
  - ⇅ Reorder (drag handle)
  - 👁 Hide/Show
  - 📄 Duplicate
  - ✕ Remove
- Keep preview popover on hover
- Add keyboard navigation:
  - Arrow keys for focus
  - Space for selection
  - Enter for preview
- Add role="grid" for accessibility

**Props:**
```typescript
interface SlideGridProps {
  items: Slide[];
  selection: string[];
  onSelect: (ids: string[]) => void;
  onReorder: (srcId: string, dstId: string) => void;
  onMove: (ids: string[], toSection: SectionKey) => void;
  onHide: (ids: string[]) => void;
  onDuplicate: (ids: string[]) => void;
  onRemove: (ids: string[]) => void;
  onPreview: (id: string) => void;
}
```

---

#### 3. SlideGridVirtualized Component
**File:** `src/components/SlideGridVirtualized.tsx`

**Purpose:** Handle 1000+ slides smoothly

**Implementation:**
- Use `react-window` or `react-virtuoso`
- Render only visible slides
- Dynamic height based on grid columns
- Preserve selection state
- Smooth scrolling

**Props:**
```typescript
interface SlideGridVirtualizedProps extends SlideGridProps {
  dataSource: (params: {
    query?: string;
    filters?: DeckFilters;
    section?: SectionKey;
    variant?: string;
    cursor?: string;
  }) => Promise<{
    items: Slide[];
    nextCursor?: string;
  }>;
}
```

---

### **Phase 2: User Actions** (Day 2)

#### 4. QuickActionsBar Update
**File:** `src/components/QuickActionsBar.tsx`

**New Features:**
- Destination picker for "Move to..." action
- Show target sections with counts
- Disable current section
- "Restore" action (for Hidden/Archived)
  - Restores to lastSection if known
  - Otherwise, shows section picker
- Undo toast after each action

**Props:**
```typescript
interface QuickActionsBarProps {
  selectedCount: number;
  selectedSlides: Slide[]; // Need to know current sections
  onClearSelection: () => void;
  onMove: (ids: string[], toSection: SectionKey) => void;
  onHide: (ids: string[]) => void;
  onRestore: (ids: string[], toSection?: SectionKey) => void;
  onDuplicate: (ids: string[]) => void;
  onRemove: (ids: string[]) => void;
  sections: Section[];
}
```

---

#### 5. CommandPalette Update
**File:** `src/components/CommandPalette.tsx`

**New Commands:**
- Switch variant… (shows all variants)
- Move selection to [Section]
- Go to Hidden
- Go to Archived
- Duplicate deck
- Set [Variant] as default

**Enhanced Search:**
- Search across variants: "variant: [name]"
- Search across sections: "section: hidden"
- Search slides: "[slide name]"

**Keyboard Shortcuts Displayed:**
- V - Open variant switcher
- H - Hide selection
- R - Restore selection
- ⌘D - Duplicate
- ⌘K - Command palette

---

#### 6. ToastRegion Component
**File:** `src/components/ToastRegion.tsx`

**Features:**
- Bottom-left positioning
- Undo button for destructive actions
- Auto-dismiss after 5s
- aria-live="polite"
- Stack multiple toasts

**Example:**
```typescript
toast({
  title: '3 slides moved to Demo',
  action: {
    label: 'Undo',
    onClick: () => undoLastAction()
  },
  duration: 5000
});
```

---

### **Phase 3: Integration** (Day 2-3)

#### 7. URL Routing
**File:** `src/App.tsx` or `src/routes.tsx`

**Route Structure:**
```
/decks/:deckId
  ?variant=:variantId
  &section=main|demo|appendix|hidden|archived|all
  &q=searchQuery
  &sort=updated|title|section
  &tags=tag1,tag2
```

**Implementation:**
- Use `react-router-dom` v6
- `useSearchParams` for query params
- Update URL on every filter change
- Parse URL on page load
- Migrate old `?drawer=hidden` → `?section=hidden`

---

#### 8. Comprehensive Keyboard Navigation
**File:** `src/hooks/useKeyboardNavigation.ts`

**Keyboard Map:**
```
Arrow keys → Move focus in grid
Enter → Open preview
Space → Toggle selection
V → Open variant switcher modal
H → Hide selected slides
R → Restore selected slides
Delete → Remove selected slides
⌘/Ctrl + D → Duplicate selected
⌘/Ctrl + K → Command palette
⌘/Ctrl + Arrow → Reorder within section
⌘/Ctrl + A → Select all
Escape → Clear selection / Close dialogs
Tab / Shift+Tab → Navigation
```

**Implementation:**
```typescript
export const useKeyboardNavigation = (config: {
  gridRef: RefObject<HTMLElement>;
  selection: string[];
  onSelect: (ids: string[]) => void;
  onHide: () => void;
  onRestore: () => void;
  // ... other handlers
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ... handle all keyboard shortcuts
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [/* dependencies */]);
};
```

---

#### 9. Accessibility Enhancements
**Files:** All components

**Requirements:**
- ✅ role="grid" on SlideGrid with rows and cells
- ✅ aria-label on all icon buttons
- ✅ Visible focus ring using design tokens
- ✅ aria-live="polite" on ToastRegion
- ✅ aria-current on active section
- ✅ Keyboard navigation for all interactions
- ✅ Screen reader announcements for actions

---

#### 10. DeckOverview Integration
**File:** `src/pages/DeckOverview.tsx`

**New Layout:**
```
┌─────────────────────────────────────────────────────┐
│ TopAppBar (breadcrumb, search, filters, stats)     │
├─────────┬───────────────────────────────────────────┤
│ 256px   │                                           │
│ Sidebar │           SlideGrid                       │
│         │      (virtualized, keyboard nav)          │
│ ├─────┤ │                                           │
│ │Vars │ │                                           │
│ │     │ │                                           │
│ ├─────┤ │                                           │
│ │Secs │ │                                           │
│ │     │ │                                           │
│ └─────┘ │                                           │
└─────────┴───────────────────────────────────────────┘
                                                       
QuickActionsBar (bottom, conditional)                 
CommandPalette (modal, Cmd+K)                         
ToastRegion (bottom-left)                             
```

**State Management:**
```typescript
const [activeVariantId, setActiveVariantId] = useState<string>();
const [activeSectionKey, setActiveSectionKey] = useState<SectionKey | 'all'>('all');
const [searchQuery, setSearchQuery] = useState('');
const [filters, setFilters] = useState<DeckFilters>({});
const [selection, setSelection] = useState<string[]>([]);
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
```

**Remove:**
- ❌ Old NavigationRail component
- ❌ HiddenSlidesDrawer component
- ❌ Right-side hidden panel
- ❌ Old DeckVariationsManager (move to sidebar)

---

## 📊 **Data Migration**

### Current Schema → New Schema

**Before (Firestore):**
```
deck_variations/
  {id, name, is_default, sections: string[]}

deck_variation_sections/
  {deck_variation_id, section_id}

deck_variation_slide_orders/
  {deck_variation_id, section_id, slide_id, order_index}
```

**After:**
```
variants/
  {
    id,
    deckId,
    name,
    isDefault,
    countBySection: {
      main: number,
      demo: number,
      appendix: number,
      hidden: number,
      archived: number
    },
    updatedAt,
    order
  }

slides/
  {
    id,
    deckId,
    variantId,
    section: 'main'|'demo'|'appendix'|'hidden'|'archived',
    lastSection: 'main'|'demo'|'appendix', // for restore
    title,
    name,
    component,
    updatedAt,
    tags: string[],
    order
  }
```

**Migration Script Needed:**
- Move section assignments to slide documents
- Calculate countBySection for variants
- Set lastSection before hiding slides
- Update all references

---

## 🧪 **Testing Strategy**

### Manual Testing Checklist

**Variants:**
- [ ] Create new variant
- [ ] Rename variant
- [ ] Duplicate variant
- [ ] Set default variant
- [ ] Delete variant (non-default only)
- [ ] Reorder variants via drag
- [ ] Search variants
- [ ] Switch between variants (2 clicks max)

**Sections:**
- [ ] Filter by All slides
- [ ] Filter by Main
- [ ] Filter by Demo
- [ ] Filter by Appendices
- [ ] Filter by Hidden
- [ ] Filter by Archived
- [ ] Drag slides to sections

**Slide Operations:**
- [ ] Select single slide (click)
- [ ] Multi-select (Ctrl/Cmd+click)
- [ ] Select all (Cmd+A)
- [ ] Hide selected (H key)
- [ ] Restore selected (R key)
- [ ] Duplicate selected (Cmd+D)
- [ ] Remove selected (Delete key)
- [ ] Move to section (drag or bulk action)
- [ ] Reorder within section (drag)
- [ ] Preview on hover (800ms delay)

**Search & Filters:**
- [ ] Search slides by name
- [ ] Filter by tags
- [ ] Filter by edit time
- [ ] Sort by updated
- [ ] Sort by title
- [ ] Sort by section
- [ ] Search with 250ms debounce

**Keyboard Navigation:**
- [ ] Arrow keys move focus
- [ ] Enter opens preview
- [ ] Space toggles selection
- [ ] V opens variant switcher
- [ ] Cmd+K opens command palette
- [ ] Tab navigation works throughout
- [ ] Escape clears selection/closes dialogs

**URL & Persistence:**
- [ ] URL updates on variant change
- [ ] URL updates on section change
- [ ] URL updates on search
- [ ] URL updates on filters
- [ ] Page refresh preserves state
- [ ] Sidebar collapse persists in localStorage

**Performance:**
- [ ] Grid renders smoothly with 100 slides
- [ ] Grid renders smoothly with 500 slides
- [ ] Grid renders smoothly with 1000 slides
- [ ] Virtualization kicks in properly
- [ ] Search doesn't lag
- [ ] Drag-and-drop is smooth

**Accessibility:**
- [ ] Screen reader announces variant selection
- [ ] Screen reader announces section navigation
- [ ] Screen reader announces bulk actions
- [ ] Focus visible on all interactive elements
- [ ] Keyboard-only operation works throughout
- [ ] ARIA labels present on all icon buttons

---

## 🎨 **Design Tokens Usage**

From `depoint-design-tokens.json`:

**Colors:**
```css
--primary: #1A73E8 (Google Blue)
--depoint-orange: #F29900
--neutral-[0-900]: Grayscale palette
```

**Spacing:**
```css
Sidebar: 256px (16 * 16px)
Section padding: 16px
Card gaps: 16px
Icon size: 20px
```

**Elevation:**
```css
Sidebar: elevation-2
Cards: elevation-1
Menus: elevation-3
Command palette: elevation-5
```

**Motion:**
```css
Duration: 200ms
Easing: cubic-bezier(0.2, 0, 0, 1) (Material standard)
```

**Radius:**
```css
Cards: 12px (md)
Menus: 16px (lg)
Buttons: 8px (sm)
```

---

## 📝 **Implementation Order**

### Day 1 Morning: Core Components
1. ✅ Data types (`types/deck.ts`)
2. ✅ VariantsNav (`components/VariantsNav.tsx`)
3. ✅ SectionsNav (`components/SectionsNav.tsx`)
4. ⏳ TopAppBar (`components/TopAppBar.tsx`)

### Day 1 Afternoon: Slide Grid
5. ⏳ SlideGrid refactor (`components/SlideGrid.tsx`)
6. ⏳ SlideGridVirtualized (`components/SlideGridVirtualized.tsx`)

### Day 2 Morning: Actions
7. ⏳ QuickActionsBar update (`components/QuickActionsBar.tsx`)
8. ⏳ CommandPalette update (`components/CommandPalette.tsx`)
9. ⏳ ToastRegion (`components/ToastRegion.tsx`)

### Day 2 Afternoon: Integration
10. ⏳ URL routing (`App.tsx`, routes)
11. ⏳ Keyboard navigation hook (`hooks/useKeyboardNavigation.ts`)
12. ⏳ DeckOverview integration (`pages/DeckOverview.tsx`)

### Day 3: Polish & Testing
13. ⏳ Accessibility pass (ARIA, roles, focus)
14. ⏳ Data migration script
15. ⏳ Performance optimization
16. ⏳ End-to-end testing
17. ⏳ Documentation updates

---

## 🚀 **Next Steps**

**Immediate (Day 1):**
1. Create TopAppBar component
2. Refactor SlideGrid (remove bottom toolbar, add hover toolbar)
3. Add SlideGridVirtualized wrapper

**Then (Day 2):**
4. Update QuickActionsBar with destination picker
5. Update CommandPalette with variant switching
6. Create ToastRegion component

**Finally (Day 2-3):**
7. Add URL routing
8. Implement keyboard navigation
9. Integrate into DeckOverview
10. Remove old components
11. Test thoroughly

---

## ⚠️ **Breaking Changes**

This refactor will **temporarily break** the application until all components are integrated. The app will not work properly until:

1. All components are created
2. DeckOverview is updated with new layout
3. Old components are removed
4. Data migration is complete

**Estimated Total Time:** 2-3 full days of development

---

## 📚 **Reference**

**Design System:**
- Material 3 Guidelines: https://m3.material.io/
- Google Workspace Patterns: https://workspace.google.com/

**Dependencies:**
- `react-window` or `react-virtuoso` for virtualization
- `react-router-dom` v6 for routing
- Existing: `@dnd-kit/*` for drag-and-drop

**Files to Review:**
- `depoint-design-tokens.json` - Design system source of truth
- `src/types/deck.ts` - New data model
- `src/components/VariantsNav.tsx` - Completed sidebar component
- `src/components/SectionsNav.tsx` - Completed sidebar component

---

**Status:** 🚧 30% Complete | ⏱️ 2-3 days remaining

Would you like me to continue with the remaining components, or do you want to pause and review what's been built so far?

