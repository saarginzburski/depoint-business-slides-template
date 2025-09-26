import fs from 'fs';
import path from 'path';

const slidesDir = './src/pages/slides';
const slides = fs.readdirSync(slidesDir).filter(file => file.endsWith('.tsx') && file.startsWith('Slide'));

console.log(`Found ${slides.length} slide files to update...`);

slides.forEach(slideFile => {
  const filePath = path.join(slidesDir, slideFile);
  let content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`Updating ${slideFile}...`);
  
  // Replace old dimensions with new ones
  // Old: width: '1280px', height: '720px'
  // New: width: '1344px', height: '816px'
  
  // Replace inline style objects
  content = content.replace(
    /width:\s*['"]1280px['"],?\s*height:\s*['"]720px['"]/g,
    "width: '1344px',\n    height: '816px'"
  );
  
  // Replace style attribute strings
  content = content.replace(
    /style=\{\{\s*width:\s*['"]1280px['"],\s*height:\s*['"]720px['"]\s*\}\}/g,
    "style={{\n    width: '1344px',\n    height: '816px'\n  }}"
  );
  
  // Replace any hardcoded 1280 and 720 values in style objects
  content = content.replace(/1280px/g, '1344px');
  content = content.replace(/720px/g, '816px');
  
  // Replace numeric values in style objects (be more careful here)
  content = content.replace(/width:\s*1280/g, 'width: 1344');
  content = content.replace(/height:\s*720/g, 'height: 816');
  
  // Add import for slide config at the top of files that don't have it
  if (!content.includes('getSlideStyle')) {
    // Find the import section and add our import
    const importRegex = /(import.*?from.*?['"];?\s*\n)/g;
    let lastImportMatch;
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      lastImportMatch = match;
    }
    
    if (lastImportMatch) {
      const insertPoint = lastImportMatch.index + lastImportMatch[0].length;
      const newImport = "import { getSlideStyle } from '@/lib/slideConfig';\n";
      content = content.slice(0, insertPoint) + newImport + content.slice(insertPoint);
    }
  }
  
  // Write the updated content back
  fs.writeFileSync(filePath, content);
  console.log(`✓ Updated ${slideFile}`);
});

console.log('\n🎉 All slide dimensions updated!');
console.log('New dimensions: 1344px × 816px (Legal paper landscape)');
console.log('Don\'t forget to update the SlideViewer and PrintableDeck components!');
