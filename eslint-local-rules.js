// Export the rules object directly
export const rules = {
  "no-direct-component-import": {
    meta: {
      type: "suggestion",
      docs: {
        description: "Enforce importing components from index files rather than directly",
        category: "Best Practices",
        recommended: true,
      },
      fixable: "code",
      schema: [],
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          const importPath = node.source.value;
          
          // Only check internal imports
          if (importPath.startsWith('.') || importPath.startsWith('src/')) {
            // Check if import is from a component directory but not from an index file
            const isComponentImport = /\/components\/.*\/[^/]+$/.test(importPath);
            const isIndexImport = /\/index$/.test(importPath);
            
            if (isComponentImport && !isIndexImport) {
              const lastSlashIndex = importPath.lastIndexOf('/');
              const directory = importPath.substring(0, lastSlashIndex);
              
              context.report({
                node,
                message: `Import components from index files. Use '${directory}' instead of '${importPath}'`,
                fix(fixer) {
                  return fixer.replaceText(node.source, `'${directory}'`);
                },
              });
            }
          }
        },
      };
    },
  },
};