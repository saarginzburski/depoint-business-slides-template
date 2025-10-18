# Presentation Mode Feature

## Overview
Added a full-screen presentation mode that hides **all** UI elements (app top bar, left sidebar, viewer top bar, and filmstrip) for a completely clean, distraction-free presentation experience where the slide takes up 100% of the screen.

## Features

### 1. **Presentation Mode Toggle**
   - **Button**: Added a Presentation icon button in the top bar
   - **Keyboard Shortcut**: Press `P` to toggle presentation mode
   - **Location**: Between the Actions menu and Fullscreen button

### 2. **UI Behavior**
   When presentation mode is active:
   - ✅ **App top bar** is completely hidden (search, filters, view/print buttons)
   - ✅ **Left sidebar** is completely hidden (variants and sections navigation)
   - ✅ **Viewer top bar** is completely hidden (deck name, slide count, navigation controls)
   - ✅ **Filmstrip** at the bottom is hidden
   - ✅ **"Show Filmstrip" toggle button** is hidden
   - ✅ **Only the slide content** is visible, taking up 100% of the screen
   - ✅ Background remains neutral-50 for better contrast

### 3. **Navigation in Presentation Mode**
   All keyboard shortcuts remain functional:
   - `←` / `→` or `K` / `J`: Navigate between slides
   - `Escape`: Exit presentation mode (priority over fullscreen/close)
   - `P`: Exit presentation mode (toggle)
   - `F`: Toggle fullscreen (works independently)

### 4. **User Guidance**
   - **Auto-appearing hint**: Shows for 3 seconds when entering presentation mode
   - **Mouse movement hint**: Reappears on mouse movement, fades after 2 seconds
   - **Hint content**: 
     - Arrow keys for navigation
     - ESC to exit
     - P for menu
   - **Visual styling**: Semi-transparent black background, white text, centered at bottom

### 5. **Exit Behavior**
   Presentation mode can be exited via:
   1. `ESC` key (primary method)
   2. `P` key (toggle)
   
   Priority order for `ESC` key:
   1. Exit presentation mode (if active)
   2. Exit fullscreen (if active)
   3. Close viewer (if neither active)

## Technical Implementation

### Files Modified
- `src/components/SlidesViewer.tsx`
- `src/pages/DeckOverviewNew.tsx`

### Key Changes

#### SlidesViewer.tsx
1. **State Management**
   ```typescript
   const [isPresentationMode, setIsPresentationMode] = useState(false);
   const [showPresentationHint, setShowPresentationHint] = useState(false);
   const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   ```

2. **New Prop Interface**
   ```typescript
   interface SlidesViewerProps {
     // ... existing props
     onPresentationModeChange?: (isPresenting: boolean) => void;
   }
   ```

3. **Parent Communication**
   - Calls `onPresentationModeChange` callback when presentation mode toggles
   - Parent component (DeckOverviewNew) handles hiding app-level UI

4. **Keyboard Handler Updates**
   - Added `P` key handler for toggling presentation mode
   - Updated `ESC` key handler with priority logic

5. **Conditional Rendering (Viewer Level)**
   - Viewer top bar: `{!isPresentationMode && (<ViewerTopBar />)}`
   - Filmstrip: `{!isPresentationMode && showFilmstrip && (<Filmstrip />)}`
   - Show Filmstrip button: `{!isPresentationMode && !showFilmstrip && (<Button />)}`

6. **Mouse Movement Detection**
   - useEffect hook listens for mouse movement in presentation mode
   - Automatically shows/hides hint based on activity

7. **New Icon**
   - Added `Presentation` from lucide-react icons

#### DeckOverviewNew.tsx
1. **State Management**
   ```typescript
   const [isPresentationMode, setIsPresentationMode] = useState(false);
   ```

2. **Conditional Rendering (App Level)**
   - App top bar: `{!isPresentationMode && (<TopAppBar />)}`
   - Left sidebar: `{!isPresentationMode && (<LeftSidebar />)}`

3. **Callback Prop**
   - Passes `onPresentationModeChange={setIsPresentationMode}` to SlidesViewer
   - Enables SlidesViewer to control app-level UI visibility

## User Experience

### Entering Presentation Mode
1. User clicks the Presentation button (📊 icon) OR presses `P`
2. **All UI elements instantly disappear:**
   - App top bar vanishes
   - Left sidebar (variants & sections) vanishes
   - Viewer top bar vanishes
   - Filmstrip vanishes
3. Slide takes up 100% of the screen with only minimal padding
4. Hint appears for 3 seconds showing navigation instructions
5. User can navigate with arrow keys

### During Presentation
- Move mouse → hint reappears briefly
- All keyboard shortcuts work normally
- Can combine with fullscreen mode (`F` key) for maximum immersion

### Exiting Presentation Mode
- Press `ESC` → returns to normal viewer mode
- Press `P` → toggles back to normal viewer mode
- UI elements smoothly fade back in

## Benefits
- ✅ **Truly full-screen experience** - slide takes up 100% of the screen
- ✅ **Zero distractions** - all UI elements completely hidden
- ✅ **Professional presentation mode** - perfect for client meetings, demos, pitches
- ✅ Intuitive keyboard shortcuts
- ✅ Helpful on-screen guidance that auto-hides
- ✅ Works independently from fullscreen mode
- ✅ Can be combined with fullscreen for maximum immersion
- ✅ Instant toggle - no animations to wait for
- ✅ Maintains all functionality (navigation, shortcuts, etc.)
- ✅ Easy exit with ESC key

## Future Enhancements (Optional)
- [ ] Auto-advance timer option
- [ ] Presenter notes overlay (toggle with another key)
- [ ] Slide thumbnails preview (mini-filmstrip on hover)
- [ ] Laser pointer cursor option
- [ ] Drawing/annotation tools

