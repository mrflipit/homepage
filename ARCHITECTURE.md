# Component Architecture Guidelines

## Overview

This document outlines the component architecture and best practices for our application. Following these guidelines ensures consistency, maintainability, and scalability of our codebase.

## Component Structure

### Directory Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation/
│   │   │   ├── index.tsx         # Main export
│   │   │   ├── NavLogo.tsx       # Sub-component
│   │   │   ├── MobileMenuButton.tsx
│   │   │   └── ...
│   │   ├── Footer/
│   │   │   ├── index.tsx
│   │   │   └── ...
│   │   └── index.ts              # Barrel file
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── index.tsx
│   │   │   ├── HeroContent.tsx
│   │   │   └── ...
│   │   └── index.ts
│   └── ui/
│       ├── Button/
│       │   ├── index.tsx
│       │   └── ...
│       └── index.ts
├── pages/
│   ├── LandingPage/
│   │   ├── index.tsx
│   │   └── ...
│   └── index.ts
└── ...
```

## Best Practices

### 1. Component Organization

- **Atomic Design Principles**: Follow atomic design methodology (atoms, molecules, organisms, templates, pages)
- **Feature-Based Organization**: Group related components by feature or section
- **Separation of Concerns**: Each component should have a single responsibility

### 2. Component Refactoring Rules

- **ALWAYS import from index files**: Never import directly from component files
- **NEVER add code to main component files**: Always update the refactored sub-components
- **ALWAYS update barrel files**: When creating new components, add them to the appropriate index.ts

### 3. Component Composition

- **Prefer composition over inheritance**: Build complex components by composing smaller ones
- **Use props for configuration**: Make components configurable through props
- **Implement prop validation**: Use TypeScript interfaces for prop validation

### 4. State Management

- **Local state**: Use React's useState for component-specific state
- **Shared state**: Use context or other state management for shared state
- **Minimize prop drilling**: Use context or composition to avoid excessive prop drilling

## Enforcement

### Code Reviews

During code reviews, ensure:

1. No direct imports from component files (only from index files)
2. New functionality is added to appropriate sub-components
3. Barrel files are updated when new components are added

### ESLint Rules

We use custom ESLint rules to enforce:

1. No direct imports from component files
2. Proper component organization
3. Consistent naming conventions

## Component Refactoring Process

When refactoring a component:

1. Create a directory with the component name
2. Move the component to index.tsx in that directory
3. Break down the component into smaller sub-components
4. Update the barrel file to export the component
5. Update imports in other files to use the barrel import

## Examples

### ❌ Incorrect

```tsx
// Importing directly from component file
import { Button } from '../components/ui/Button';

// Adding code to main component file instead of sub-components
function Navigation() {
  // Complex implementation with multiple responsibilities
}
```

### ✅ Correct

```tsx
// Importing from index file
import { Button } from '../components/ui';

// Using composition of sub-components
function Navigation() {
  return (
    <nav>
      <NavLogo />
      <NavLinks />
      <MobileMenu />
    </nav>
  );
}
```