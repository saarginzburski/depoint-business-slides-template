# Slide Viewer Integration

## Overview
Integrated a full-screen slide viewer that replaces the grid area when a slide is opened, maintaining the left sidebar with Variants and Sections navigation.

## Architecture

### Components Created

#### 1. **SlidesViewer** (`src/components/SlidesViewer.tsx`)
The main viewer component that displays slides in presentation mode.

**Features:**
- Top bar with deck name, pagination (N/M), Previous/Next buttons, and Overview/Close buttons
- Canvas area with 16:9 aspect ratio, max-width 1280px, centered
- Bottom filmstrip with thumbnail navigation (toggleable with 'O' key)
- Overflow menu with actions: Move to sections, Hide/Restore, Duplicate, Delete
- Smooth fade-in animations (200ms)
- Keyboard shortcuts for all actions

**Props:**
```typescript
{
  slides: Slide[];
  currentSlideId: string;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (id: string) => void;
  onMoveTo: (slideId: string, sectionKey: string) => void;
  onDuplicate: (id: string) => void;
  onHide: (id: string) => void;
  onRestore: (id: string) => void;
  deckName: string;
}
```

#### 2. **FilmstripThumb** (`src/components/FilmstripThumb.tsx`)
Thumbnail component for the filmstrip with scaled-down slide preview.

**Features:**
- Selected state with blue ring
- Hover state with gray ring
- Slide number display
- Context menu support
- Lazy-loaded slide content

#### 3. **useGridScrollRestoration** (`src/hooks/useGridScrollRestoration.ts`)
Hook to save and restore scroll positions when navigating between grid and viewer.

**API:**
```typescript
{
  saveScrollPosition: (key: string, scrollY: number) => void;
  getScrollPosition: (key: string) => number;
  restoreScrollPosition: (key: string, element: HTMLElement | null) => void;
}
```

### Integration in DeckOverviewNew

#### URL-Based State Management
- Grid view: `/decks/:deckId?variant=:v&section=:s&q=search`
- Viewer: Add `&slide=:id` parameter
- Deep links directly open viewer
- All query params preserved across transitions

#### Navigation Flow
1. Click any slide card → Opens viewer with that slide
2. Navigate with Previous/Next buttons or arrow keys
3. Click Overview/Close or press Esc → Returns to grid at saved scroll position
4. Filmstrip allows jumping to any slide
5. Actions from overflow menu update immediately

#### Scroll Position Restoration
- Saves scroll position per section when opening viewer
- Automatically restores position when closing viewer
- Tracks position during scrolling in grid view
- Returns to exact position after viewer navigation

## Keyboard Shortcuts

### Navigation
- **Arrow Left** or **K**: Previous slide
- **Arrow Right** or **J**: Next slide
- **Escape**: Close viewer and return to grid

### Actions
- **O**: Toggle filmstrip visibility
- **H**: Hide current slide (or restore if already hidden)
- **R**: Restore hidden slide
- **D**: Duplicate current slide
- **1**: Move to Main Deck
- **2**: Move to Demo
- **3**: Move to Appendices

## UI Patterns

### Layout
- Viewer replaces entire grid area
- Left sidebar (Variants + Sections) remains visible
- Top AppBar with View Deck and Print buttons stays visible
- Search and filters remain accessible

### Transitions
- Fade and scale in on open (200ms)
- Smooth slide navigation
- No layout shift in header or sidebar
- GPU-optimized transforms

### Visual Design
- Slide canvas: white background, subtle border, md radius, elevation level 1
- Page background: neutral-50 surface token
- Centered responsive container
- Filmstrip with horizontal scroll

### Empty States
- "Slide not found": Inline error with "Back to grid" button
- Graceful fallback if slide component missing

## Accessibility

- `role="document"` on slide canvas
- All buttons have `aria-label`
- Keyboard focus management
- Toast notifications with `aria-live="polite"`

## Performance

- Lazy loading of slide components
- Preloading of adjacent slides (next/previous)
- Virtualization-ready filmstrip structure
- Debounced scroll tracking
- GPU-friendly CSS transforms

## Testing Checklist

- [x] Open slide from grid → Viewer displays correctly
- [x] Navigate with Previous/Next buttons
- [x] Navigate with arrow keys (Left/Right, K/J)
- [x] Close with Esc or Close button
- [x] Returns to exact scroll position
- [x] Filmstrip shows current selection
- [x] Click filmstrip thumb to jump
- [x] Toggle filmstrip with 'O' key
- [x] Deep link with `?slide=X` opens viewer
- [x] All keyboard shortcuts work
- [x] Move to section actions work
- [x] Hide/Restore actions work
- [x] Duplicate action works
- [x] URL updates on navigation
- [x] Query params preserved
- [x] Smooth 60fps interactions

## Future Enhancements

1. **Virtualized Filmstrip**: For decks with 100+ slides
2. **Preloading**: Load next/prev slide HTML in background
3. **Transitions**: Slide left/right animation on next/prev
4. **Zoom Controls**: Allow zooming into slide details
5. **Presentation Mode**: Full-screen mode with no controls
6. **Slide Notes**: Display speaker notes below canvas
7. **Grid Preview**: Picture-in-picture grid while in viewer

