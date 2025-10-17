# Sections Management Feature

## Overview
This feature allows users to create, manage, and reorder custom sections within deck variations. The default sections (Main, Hidden, Archived) are locked and cannot be deleted or reordered past their initial positions.

## Features

### 1. **Dynamic Section Creation**
- Click the **+** button in the Sections sidebar header
- Enter a section name and optional description
- Color and icon are automatically assigned from predefined lists
- Section is added to the current variant

### 2. **Section Reordering**
- **Drag Handle**: Hover over any unlocked section to see the drag handle (⋮⋮)
- **Drag & Drop**: Click and drag sections to reorder them
- **Locked Sections**: Main, Hidden, and Archived sections show a lock icon and cannot be reordered

### 3. **Section Deletion**
- **Right-click** on any custom section to open the context menu
- Select **Delete Section**
- All slides in the deleted section are automatically moved to the Main section
- Default sections cannot be deleted

### 4. **Visual Indicators**
- **Random Colors**: Each custom section gets a random color from the design tokens
- **Random Icons**: Each custom section gets a random icon from the predefined list
- **Slide Count**: Shows the number of visible slides in each section
- **Active State**: Highlighted when selected
- **Locked State**: Lock icon for Main, Hidden, and Archived

## Technical Implementation

### Files Created/Modified

#### New Files:
1. **`src/hooks/useSections.ts`**
   - Manages section CRUD operations
   - Fetches custom sections from Firestore
   - Merges default and custom sections
   - Provides section reordering logic

2. **`src/components/AddSectionDialog.tsx`**
   - Dialog for creating new sections
   - Simple form with name and description fields
   - Validates input and calls hook methods

#### Modified Files:
1. **`src/components/SectionsNav.tsx`**
   - Updated to support dynamic sections
   - Added drag-and-drop reordering for sections
   - Added context menu for custom sections
   - Added visual indicators for locked sections
   - Integrated with the `useSections` hook

2. **`src/pages/DeckOverviewNew.tsx`**
   - Integrated `useSections` hook
   - Passes section management handlers to `SectionsNav`
   - Handles slide relocation when sections are deleted

### Database Schema

#### Collection: `deck_variation_custom_sections`
```typescript
{
  id: string;                    // Auto-generated document ID
  deck_variation_id: string;     // Reference to deck variation
  name: string;                  // Section name
  description: string;           // Optional description
  color: string;                 // Color from predefined list
  icon: string;                  // Icon name from lucide-react
  order_index: number;           // Position in section list
  is_default: boolean;           // Always false for custom
  created_at: string;            // ISO timestamp
  updated_at: string;            // ISO timestamp
}
```

### Predefined Colors
- blue, green, purple, orange, red, pink, yellow, cyan, indigo, slate

### Predefined Icons
- Layers, Monitor, BookOpen, Target, Briefcase, Users
- TrendingUp, BarChart3, PieChart, Activity, Zap, Star
- Heart, Flag, Award, Shield

### Default Sections (Locked)
1. **Main Deck** (blue, Layers icon)
2. **Demo** (green, Monitor icon)
3. **Appendices** (slate, BookOpen icon)
4. **Hidden** (gray, EyeOff icon) - Locked
5. **Archived** (slate, Archive icon) - Locked

## User Workflow

### Creating a Section
1. Navigate to any deck variant
2. Click the **+** button in the Sections header
3. Enter section name (required)
4. Optionally add description
5. Click "Create Section"
6. Section appears in the list with random color/icon

### Reordering Sections
1. Hover over a section to reveal the drag handle
2. Click and hold the drag handle
3. Drag to desired position
4. Release to drop
5. Order is saved automatically to database

### Deleting a Section
1. Right-click on a custom section
2. Confirm deletion
3. Slides are moved to Main section
4. Section is removed from database

### Moving Slides Between Sections
- Drag slides from the grid to any section label
- Works for both default and custom sections
- Slide's section assignment is updated in database

## Design Principles

### 1. **Safety First**
- Default sections cannot be deleted
- Slides are never lost (moved to Main on deletion)
- Clear visual indicators for locked items

### 2. **Consistency**
- Follows existing Material 3 design system
- Uses existing color palette and typography
- Maintains visual hierarchy

### 3. **Flexibility**
- Unlimited custom sections per variant
- Variant-specific section configuration
- Easy reordering and management

### 4. **Performance**
- Optimistic UI updates
- Efficient Firestore queries
- Minimal re-renders

## Future Enhancements

1. **Custom Colors/Icons**
   - Allow users to choose from full palette
   - Icon picker dialog

2. **Section Templates**
   - Predefined section sets for common use cases
   - Quick setup for new variants

3. **Section Descriptions**
   - Show description in tooltip
   - Use in search/filter

4. **Bulk Operations**
   - Move multiple slides at once
   - Duplicate sections with slides

5. **Section Analytics**
   - Track most-used sections
   - Slide distribution visualizations

