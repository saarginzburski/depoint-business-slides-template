# New Slide: "Reality Not Checklists"

## Overview
Created a new slide inserted at position 6, between "Franchisor & Franchisee" (slide 5) and "Jollibee Operational Book" (now slide 7).

## Slide Details

### Title
**"Depoint doesn't manage checklists. It manages reality."**

### Position
- **Slide Number:** 6
- **Previous Slide:** Slide 5 - "Franchisor & Franchisee"
- **Next Slide:** Slide 7 - "Jollibee Operational Book"

### Design Elements

#### Background
- Blue gradient from dark `#0047FF` to lighter `#1E90FF`
- Matches Depoint's brand aesthetic

#### Left Side - 3D Phone Mockup
- **Design:** Tilted smartphone with perspective effect (`rotateY(-15deg) rotateX(5deg)`)
- **Phone Frame:** Realistic modern smartphone with rounded corners
- **Screen Content:** Three live alert cards with:
  1. "Store 214 missing 12% of daily checks" (red pulse dot)
  2. "Fridge #7 temperature rising — failure in 3 days" (orange pulse dot)
  3. "Oil changed too early — $280 wasted this month" (yellow pulse dot)
- **Visual Effects:**
  - Translucent blue alert cards with backdrop blur
  - Animated pulsing dots on alerts
  - 3D shadow beneath phone
  - Ambient blue glow effect

#### Right Side - Text Content
- **Main Headline:** Yellow (`#FFD400`) text with hand-drawn underline on "reality"
- **Subheadline:** White text with bold underlined "live intelligence" with pulse indicator
- **Feature Highlights:**
  - Real-time alerts on what matters
  - Predictive insights, not just records
  - Action-driven intelligence
- **Comparison Callout:** Semi-transparent card comparing checklist apps vs Depoint

#### Bottom Tagline
- Italic gray text: _"Depoint transforms frontline operations into live business intelligence."_

### Animations
1. **Fade-in:** Overall slide and right-side text (0.2s - 0.3s delay)
2. **Phone entrance:** Slides in from left with 3D tilt
3. **Alert cards:** Sequential slide-up animation with staggered delays (0.4s, 0.6s, 0.8s)
4. **Headline underline:** Animated drawing effect (1.5s)
5. **Pulse effects:** Continuous on alert dots and "live intelligence" indicator

### Typography
- **Main headline:** 6xl, black weight, tight tracking
- **Subheadline:** 2xl, semibold
- **Feature bullets:** lg, medium weight
- **All fonts:** Same sans-serif font family as rest of deck

## Files Modified

### 1. New Slide Component
**File:** `src/pages/slides/SlideRealityNotChecklists.tsx`
- Full React component with animations
- Responsive design matching existing deck
- Uses `SlideLayout` wrapper for consistency

### 2. Slide Configuration
**File:** `src/pages/slides/slideConfig.ts`
- Inserted new slide at index 6
- Renumbered all subsequent slides (7-33)
- Updated all route paths

### 3. Lazy Loading
**File:** `src/pages/DeckOverviewNew.tsx`
- Added lazy import for `SlideRealityNotChecklists`
- Fallback number placeholder: 6

## Technical Implementation

### Color Palette
- **Primary Blue:** `#0047FF` to `#1E90FF` (gradient)
- **Accent Yellow:** `#FFD400`
- **White:** Text and UI elements
- **Alert Colors:** Red (#EF4444), Orange (#F97316), Yellow (#EAB308)

### Key CSS Features
- Custom animations (`@keyframes fade-in`, `slide-up`, `draw-line`)
- 3D perspective transforms
- Backdrop blur effects
- Pulse animations
- Responsive flexbox layout

### Accessibility
- Semantic HTML structure
- Clear visual hierarchy
- High contrast text (yellow on blue)
- Animated elements have delay for visual flow

## Build Status
✅ **Build successful** - No TypeScript or linter errors
✅ **Asset generated:** `SlideRealityNotChecklists-ChHSzh_E.js` (7.61 kB, 2.02 kB gzipped)

## Testing Recommendations
1. View slide in presentation mode to verify animations
2. Test on different screen sizes
3. Verify slide transitions (from slide 5 to 6 to 7)
4. Check that phone mockup renders correctly with 3D effects
5. Ensure text is readable with high contrast

## Navigation
The slide is now accessible at:
- **Route:** `/investor-deck/slide/6`
- **Slide Grid:** Position 6 in the main deck
- **Next/Previous:** Integrated into deck navigation flow

