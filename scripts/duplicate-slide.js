#!/usr/bin/env node

/**
 * Script to duplicate a slide component
 * Usage: node scripts/duplicate-slide.js <originalSlideId> <newSlideName>
 * Example: node scripts/duplicate-slide.js SlideJollibeeCase "Custom Jollibee Slide"
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/duplicate-slide.js <originalSlideId> <newSlideName>');
  console.error('Example: node scripts/duplicate-slide.js SlideJollibeeCase "Custom Jollibee Slide"');
  process.exit(1);
}

const [originalSlideId, rawNewSlideName] = args;

// Generate component name from the new slide name
const newComponentName = 'Slide' + rawNewSlideName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('')
  .replace(/[^a-zA-Z0-9]/g, '');

console.log(`\n🔄 Duplicating slide: ${originalSlideId} -> ${newComponentName}`);
console.log(`📝 New slide title: ${rawNewSlideName}\n`);

const slidesDir = path.join(__dirname, '..', 'src', 'pages', 'slides');
const originalFilePath = path.join(slidesDir, `${originalSlideId}.tsx`);
const newFilePath = path.join(slidesDir, `${newComponentName}.tsx`);
const slideConfigPath = path.join(slidesDir, 'slideConfig.ts');

// Step 1: Check if original file exists
if (!fs.existsSync(originalFilePath)) {
  console.error(`❌ Error: Original slide file not found: ${originalFilePath}`);
  process.exit(1);
}

// Step 2: Check if new file already exists
if (fs.existsSync(newFilePath)) {
  console.error(`❌ Error: File already exists: ${newFilePath}`);
  process.exit(1);
}

// Step 3: Read the original file
let originalContent = fs.readFileSync(originalFilePath, 'utf-8');

// Step 4: Replace component name in the content
const newContent = originalContent
  .replace(new RegExp(originalSlideId, 'g'), newComponentName)
  .replace(/title="[^"]*"/, `title="${rawNewSlideName}"`);

// Step 5: Write the new file
fs.writeFileSync(newFilePath, newContent, 'utf-8');
console.log(`✅ Created new component file: ${newFilePath}`);

// Step 6: Read slideConfig.ts
let slideConfigContent = fs.readFileSync(slideConfigPath, 'utf-8');

// Step 7: Find the original slide entry to get its display order
const originalSlideMatch = slideConfigContent.match(
  new RegExp(`{[^}]*id:\\s*['"]${originalSlideId}['"][^}]*displayOrder:\\s*(\\d+)[^}]*}`, 's')
);

if (!originalSlideMatch) {
  console.error(`❌ Error: Could not find original slide in slideConfig.ts`);
  fs.unlinkSync(newFilePath); // Clean up the created file
  process.exit(1);
}

const originalDisplayOrder = parseInt(originalSlideMatch[1]);
const newDisplayOrder = originalDisplayOrder + 0.5; // Will be renumbered later

// Step 8: Create new slide config entry
const newSlideEntry = `  {
    id: '${newComponentName}',
    name: '${newComponentName}',
    title: '${rawNewSlideName}',
    component: '${newComponentName}',
    displayOrder: ${newDisplayOrder},
    route: '/slides/${newComponentName.toLowerCase()}',
  },`;

// Find the position to insert (after the original slide)
const insertPosition = slideConfigContent.indexOf(originalSlideMatch[0]) + originalSlideMatch[0].length;
slideConfigContent = slideConfigContent.slice(0, insertPosition) + '\n' + newSlideEntry + slideConfigContent.slice(insertPosition);

// Step 9: Write updated slideConfig.ts
fs.writeFileSync(slideConfigPath, slideConfigContent, 'utf-8');
console.log(`✅ Added entry to slideConfig.ts`);

// Step 10: Instructions for manual steps
console.log(`\n📋 Manual steps remaining:`);
console.log(`\n1. Add lazy import to src/pages/DeckOverviewNew.tsx:`);
console.log(`   ${newComponentName}: lazy(() => import('./slides/${newComponentName}').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">X</div></div> }))),`);
console.log(`\n2. Add lazy import to src/pages/PrintableDeck.tsx:`);
console.log(`   const ${newComponentName} = lazy(() => import('./slides/${newComponentName}'));`);
console.log(`\n3. Rebuild the app: npm run dev or npm run build`);
console.log(`\n✅ Slide duplication complete!\n`);

