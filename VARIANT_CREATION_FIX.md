# Variant Creation & Sections Architecture Fix

## Issues Fixed

### 1. **Variant Creation Not Working**
**Problem:** When clicking the "+" button to create a new variant, it only showed a toast message "Creating new variant..." but nothing actually happened.

**Root Cause:** The `onCreate` handler in `DeckOverviewNew.tsx` was not calling the `createVariation` function from the hook. It was just an empty stub.

**Solution:**
- Added a proper dialog UI for variant creation
- Implemented form with:
  - Variant name input field
  - Section selection checkboxes
  - Create/Cancel buttons
- Connected the dialog to the `createVariation` function
- Also fixed broken `onRename` and `onDuplicate` handlers

### 2. **Sections Architecture - Variant-Specific vs Global**
**Problem:** Custom sections were stored per-variant (with `deck_variation_id`), meaning each variant could have completely different sections. This violated the principle that sections should be global and shared.

**Root Cause:** The `useSections` hook was loading sections from `deck_variation_custom_sections` collection filtered by variant ID.

**Solution:** Refactored sections to be globally shared:
- Changed custom sections to be stored in a global `custom_sections` collection (no `deck_variation_id`)
- Removed the `variationId` parameter from `useSections()` hook
- Now all variants see the same list of sections
- Each variant controls which sections are **visible/included** via the `deck_variation_sections` table

## Architecture

### Before (Incorrect)
```
deck_variation_custom_sections
  - id
  - deck_variation_id  ❌ (sections were per-variant)
  - name
  - description
  ...

Variant A: Could have sections [X, Y, Z]
Variant B: Could have completely different sections [A, B, C]
```

### After (Correct)
```
custom_sections (global)
  - id
  - name
  - description
  - color
  - icon
  - order_index
  ...

deck_variation_sections (controls visibility)
  - deck_variation_id
  - section_id
  
All variants see the same sections: [Main Deck, Demo, Appendix, ...]
Each variant controls which sections to include/show
```

## Files Changed

1. **`src/hooks/useSections.ts`**
   - Removed `variationId` parameter from hook
   - Changed collection from `deck_variation_custom_sections` to `custom_sections`
   - Removed all variant-specific filtering
   - Sections are now loaded globally on mount
   - Updated all CRUD operations to work with global sections

2. **`src/pages/DeckOverviewNew.tsx`**
   - Added variant creation dialog with UI
   - Imported necessary UI components (Dialog, Input, Button, Label, Checkbox)
   - Added state for dialog and form inputs
   - Implemented proper `onCreate` handler that opens the dialog
   - Implemented proper `onRename` and `onDuplicate` handlers
   - Updated `useSections()` call to not pass `variationId`
   - Added comprehensive variant creation form with section selection

## Benefits

1. **Consistent Experience:** All variants see the same sections (main, demo, appendix, etc.)
2. **Easier Management:** When you add/edit/delete a section, it affects all variants
3. **Better UX:** Users can easily create variants by selecting which sections to include
4. **Correct Architecture:** Sections are content structure (global), variants are different combinations of that structure

## Database Migration Notes

If there are existing records in `deck_variation_custom_sections`, they should be migrated to the new `custom_sections` collection. Since custom sections were variant-specific before, you may need to:

1. Review existing custom sections across all variants
2. Deduplicate any sections with the same name/purpose
3. Move unique sections to the global `custom_sections` collection
4. Update `deck_variation_sections` to reference the new global section IDs

## Testing

- ✅ Build succeeds with no errors
- ✅ TypeScript compilation passes
- ✅ No linter errors
- 🔄 Manual testing needed:
  - Create a new variant
  - Select sections for the variant
  - Verify the variant is created with correct sections
  - Verify all variants see the same section list
  - Rename/duplicate variants

