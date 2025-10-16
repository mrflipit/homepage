#!/usr/bin/env node

/**
 * Component Generator Script
 * 
 * Usage: node scripts/create-component.js ComponentName [directory]
 * Example: node scripts/create-component.js Button ui
 * 
 * This will create:
 * - src/components/ui/Button/index.tsx
 * - src/components/ui/Button/Button.tsx (if needed)
 * - Update src/components/ui/index.ts to export the new component
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get command line arguments
const componentName = process.argv[2];
const directory = process.argv[3] || 'ui'; // Default to ui directory

if (!componentName) {
  console.error('Please provide a component name');
  process.exit(1);
}

// Ensure first letter is capitalized
const formattedComponentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Define paths
const componentsDir = path.join(__dirname, '..', 'src', 'components');
const targetDir = path.join(componentsDir, directory, formattedComponentName);
const indexFile = path.join(targetDir, 'index.tsx');
const componentFile = path.join(targetDir, `${formattedComponentName}.tsx`);
const directoryIndexFile = path.join(componentsDir, directory, 'index.ts');

// Create directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

// Create index.tsx
const indexContent = `export * from './${formattedComponentName}';
`;

fs.writeFileSync(indexFile, indexContent);
console.log(`Created file: ${indexFile}`);

// Create ComponentName.tsx
const componentContent = `import React from 'react';

interface ${formattedComponentName}Props {
  children?: React.ReactNode;
  className?: string;
}

export function ${formattedComponentName}({ children, className = '' }: ${formattedComponentName}Props) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
`;

fs.writeFileSync(componentFile, componentContent);
console.log(`Created file: ${componentFile}`);

// Update directory index.ts
if (fs.existsSync(directoryIndexFile)) {
  let indexContent = fs.readFileSync(directoryIndexFile, 'utf8');
  
  // Check if component is already exported
  if (!indexContent.includes(`export * from './${formattedComponentName}'`)) {
    // Add export statement
    indexContent += `export * from './${formattedComponentName}';\n`;
    fs.writeFileSync(directoryIndexFile, indexContent);
    console.log(`Updated: ${directoryIndexFile}`);
  }
} else {
  // Create directory index.ts if it doesn't exist
  const newIndexContent = `export * from './${formattedComponentName}';\n`;
  fs.writeFileSync(directoryIndexFile, newIndexContent);
  console.log(`Created file: ${directoryIndexFile}`);
}

console.log(`\n✅ Component ${formattedComponentName} created successfully in ${directory} directory!`);
console.log(`\nImport it using: import { ${formattedComponentName} } from '../components/${directory}';`);