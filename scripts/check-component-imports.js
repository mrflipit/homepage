#!/usr/bin/env node

/**
 * This script checks for direct imports from component files instead of index files.
 * It's used as a pre-commit hook to enforce proper component architecture.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Get staged files from lint-staged
const stagedFiles = process.argv.slice(2);

// Filter for TypeScript/JavaScript files
const tsFiles = stagedFiles.filter(file => 
  /\.(ts|tsx|js|jsx)$/.test(file) && 
  !file.includes('node_modules') && 
  !file.includes('dist')
);

let hasErrors = false;

for (const file of tsFiles) {
  const filePath = path.join(rootDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Regular expression to find direct component imports
  // Looks for imports from component directories that aren't index files
  const directImportRegex = /from\s+['"](.+\/components\/[^'"]+\/[^/'"\s]+)['"]/g;
  
  let match;
  while ((match = directImportRegex.exec(content)) !== null) {
    const importPath = match[1];
    
    // Skip if it's an index import
    if (importPath.endsWith('/index')) continue;
    
    // Check if this is a component directory with an index file
    const lastSlashIndex = importPath.lastIndexOf('/');
    const directory = importPath.substring(0, lastSlashIndex);
    const potentialIndexPath = path.join(rootDir, directory, 'index.ts');
    const potentialIndexPathTsx = path.join(rootDir, directory, 'index.tsx');
    
    if (fs.existsSync(potentialIndexPath) || fs.existsSync(potentialIndexPathTsx)) {
      console.error(`\x1b[31mError in ${file}:\x1b[0m`);
      console.error(`  Direct component import: ${importPath}`);
      console.error(`  Should import from: ${directory}`);
      console.error();
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\x1b[31mDirect component imports found. Please fix the issues above.\x1b[0m');
  console.error('Import components from index files, not directly from component files.');
  process.exit(1);
}

process.exit(0);