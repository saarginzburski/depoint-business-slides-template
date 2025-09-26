import fs from 'fs';
import path from 'path';

// Read the original InvestorDeck.tsx file
const filePath = './src/pages/InvestorDeck.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Extract imports from the original file
const importMatches = content.match(/^import.*?from.*?;$/gm);
const imports = importMatches ? importMatches.join('\n') : '';

// Find slide boundaries
const slidePattern = /\/\/ Slide (\d+): (.+?)$/gm;
let matches = [];
let match;

while ((match = slidePattern.exec(content)) !== null) {
  matches.push({
    number: parseInt(match[1]),
    title: match[2],
    startIndex: match.index
  });
}

// Extract each slide's JSX content
for (let i = 0; i < matches.length; i++) {
  const current = matches[i];
  const next = matches[i + 1];
  
  // Find the start of the JSX (after the comment)
  const jsxStart = content.indexOf('<div', current.startIndex);
  
  // Find the end of this slide's JSX
  let jsxEnd;
  if (next) {
    // Find the end before the next slide comment
    jsxEnd = content.lastIndexOf(',', next.startIndex);
  } else {
    // For the last slide, find the end of the slides array
    jsxEnd = content.indexOf('];', current.startIndex);
  }
  
  if (jsxStart === -1 || jsxEnd === -1) {
    console.error(`Could not extract slide ${current.number}`);
    continue;
  }
  
  // Extract the JSX content
  let jsxContent = content.substring(jsxStart, jsxEnd);
  
  // Remove the trailing comma if it exists
  jsxContent = jsxContent.replace(/,$/, '');
  
  // Generate component name
  const componentName = `Slide${current.number.toString().padStart(2, '0')}${current.title
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^\w/, c => c.toUpperCase())}`;
  
  // Create the component file content
  const componentContent = `import React from 'react';
${imports}

const ${componentName} = () => {
  return (
    ${jsxContent}
  );
};

export default ${componentName};`;
  
  // Write the component file
  const fileName = `${componentName}.tsx`;
  const filePath = path.join('./src/pages/slides', fileName);
  
  fs.writeFileSync(filePath, componentContent);
  console.log(`Created: ${fileName}`);
}

console.log('All slides extracted successfully!');
