/**
 * Utility to duplicate a slide component
 * This creates a new slide component file based on an existing one
 */

export interface DuplicateSlideParams {
  originalSlideId: string;
  newComponentName: string;
  newSlideTitle: string;
  originalDisplayOrder: number;
}

export interface DuplicateSlideResult {
  success: boolean;
  componentName: string;
  filePath: string;
  displayOrder: number;
  message: string;
}

/**
 * NOTE: This function cannot actually create files in the browser.
 * It returns instructions for manual duplication.
 * 
 * To properly duplicate a slide, you need to:
 * 1. Copy the original slide component file (e.g., src/pages/slides/SlideOriginal.tsx)
 * 2. Rename it to the new component name (e.g., src/pages/slides/SlideNewName.tsx)
 * 3. Update the component name inside the file
 * 4. Add it to slideConfig.ts
 * 5. Add it to the lazy imports in DeckOverviewNew.tsx and PrintableDeck.tsx
 */
export async function duplicateSlide(params: DuplicateSlideParams): Promise<DuplicateSlideResult> {
  const { originalSlideId, newComponentName, newSlideTitle, originalDisplayOrder } = params;
  
  // Calculate new display order (right after the original)
  const newDisplayOrder = originalDisplayOrder + 0.5;
  
  const instructions = `
To complete the slide duplication:

1. Copy src/pages/slides/${originalSlideId}.tsx to src/pages/slides/${newComponentName}.tsx

2. Inside the new file, replace all instances of "${originalSlideId}" with "${newComponentName}"

3. Add to src/pages/slides/slideConfig.ts:
   {
     id: '${newComponentName}',
     name: '${newComponentName}',
     title: '${newSlideTitle}',
     component: '${newComponentName}',
     displayOrder: ${newDisplayOrder},
     route: '/slides/${newComponentName.toLowerCase()}',
   },

4. Add lazy import in src/pages/DeckOverviewNew.tsx:
   ${newComponentName}: lazy(() => import('./slides/${newComponentName}').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">X</div></div> }))),

5. Add lazy import in src/pages/PrintableDeck.tsx:
   const ${newComponentName} = lazy(() => import('./slides/${newComponentName}'));

6. Reload the development server
`;

  return {
    success: false,
    componentName: newComponentName,
    filePath: `src/pages/slides/${newComponentName}.tsx`,
    displayOrder: newDisplayOrder,
    message: instructions,
  };
}

