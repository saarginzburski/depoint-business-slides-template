# Presentation Mode Feature

## Overview
Added a full-screen presentation mode to `SlidesViewer` that hides all UI elements (top bar and filmstrip) for a clean, distraction-free presentation experience.

## Features

### 1. **Presentation Mode Toggle**
   - **Button**: Added a Presentation icon button in the top bar
   - **Keyboard Shortcut**: Press `P` to toggle presentation mode
   - **Location**: Between the Actions menu and Fullscreen button

### 2. **UI Behavior**
   When presentation mode is active:
   - ✅ Top navigation bar is completely hidden
   - ✅ Filmstrip at the bottom is hidden
   - ✅ "Show Filmstrip" toggle button is hidden
   - ✅ Only the slide content is visible with minimal padding
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

### Key Changes
1. **State Management**
   ```typescript
   const [isPresentationMode, setIsPresentationMode] = useState(false);
   const [showPresentationHint, setShowPresentationHint] = useState(false);
   const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   ```

2. **Keyboard Handler Updates**
   - Added `P` key handler for toggling presentation mode
   - Updated `ESC` key handler with priority logic

3. **Conditional Rendering**
   - Top bar: `{!isPresentationMode && (<TopBar />)}`
   - Filmstrip: `{!isPresentationMode && showFilmstrip && (<Filmstrip />)}`
   - Show Filmstrip button: `{!isPresentationMode && !showFilmstrip && (<Button />)}`

4. **Mouse Movement Detection**
   - useEffect hook listens for mouse movement in presentation mode
   - Automatically shows/hides hint based on activity

5. **New Icon**
   - Added `Presentation` from lucide-react icons

## User Experience

### Entering Presentation Mode
1. User clicks the Presentation button (📊 icon) OR presses `P`
2. Top bar and filmstrip fade out
3. Hint appears for 3 seconds showing navigation instructions
4. User can navigate with arrow keys

### During Presentation
- Move mouse → hint reappears briefly
- All keyboard shortcuts work normally
- Can combine with fullscreen mode (`F` key) for maximum immersion

### Exiting Presentation Mode
- Press `ESC` → returns to normal viewer mode
- Press `P` → toggles back to normal viewer mode
- UI elements smoothly fade back in

## Benefits
- ✅ Clean, distraction-free presentation experience
- ✅ Intuitive keyboard shortcuts
- ✅ Helpful on-screen guidance
- ✅ Works independently from fullscreen mode
- ✅ Can be combined with fullscreen for best experience
- ✅ Smooth animations and transitions
- ✅ Maintains all functionality (navigation, etc.)

## Future Enhancements (Optional)
- [ ] Auto-advance timer option
- [ ] Presenter notes overlay (toggle with another key)
- [ ] Slide thumbnails preview (mini-filmstrip on hover)
- [ ] Laser pointer cursor option
- [ ] Drawing/annotation tools

