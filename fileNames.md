# Flipit Home Page Project Structure

## Root Directory Files

- `.env` - Environment variables configuration for Supabase authentication
- `.gitignore` - Git ignore rules for node_modules, build files, and IDE settings
- `cspell.json` - Spell checker configuration with custom words and ignore paths
- `eslint.config.js` - ESLint configuration with TypeScript and React rules
- `eslint-local-rules.js` - Custom ESLint rules for component imports
- `index.html` - Main HTML entry point with root div and Vite script
- `NETLIFY_DEPLOYMENT.md` - Instructions for deploying to Netlify
- `netlify.toml` - Netlify configuration for builds and redirects
- `package.json` - Project dependencies and npm scripts
- `postcss.config.js` - PostCSS configuration for Tailwind
- `tailwind.config.js` - Tailwind CSS configuration with custom theme
- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - App-specific TypeScript settings
- `tsconfig.node.json` - Node-specific TypeScript settings
- `vite.config.ts` - Vite build and development configuration

## Source Directory (src/)

### Core Files

- `App.tsx` - Main application component with routing setup
- `index.css` - Global CSS imports
- `main.tsx` - Application entry point with React rendering
- `vite-env.d.ts` - Vite environment type declarations

### Components (/src/components)

- `/layout` - Layout components
  - `Footer/` - Site footer with scroll-to-top functionality
  - `Navigation/` - Main navigation with mobile and desktop versions
  - `PageHeader/` - Page header with back navigation
- `/sections` - Page section components
  - `BeFirst/` - "Be First" section components
  - `Demo/` - Demo section with interactive features
- `/support` - Support-related components
- `/ui` - Reusable UI components

### Constants (/src/constants)

- `animations.ts` - Animation timing constants
- `theme.ts` - Theme colors and breakpoint definitions

### Hooks (/src/hooks)

- `useActiveSection.ts` - Track active section in viewport
- `useAppEnvironment.ts` - Environment detection and configuration
- `useEnvironment.ts` - Basic environment checks
- `useIframe.ts` - iframe detection
- `useIframeInteraction.ts` - Handle iframe interactions
- `useScrollNavigation.ts` - Scroll-based navigation
- `useWindowSize.ts` - Window size tracking

### Pages (/src/pages)

- `EarningsPage.tsx` - Earnings information and benefits
- `ExtensionPage.tsx` - Chrome extension installation
- `FoundersPage.tsx` - Founder benefits and information
- `LandingPage.tsx` - Main landing page
- `LoginPage.tsx` - User login form
- `SignupPage.tsx` - User registration form

### Services (/src/services)

- `auth.ts` - Authentication service with Supabase

### Styles (/src/styles)

- `animations.css` - Custom animation keyframes and classes
- `base.css` - Base styles and Tailwind imports
- `components.css` - Component-specific styles
- `utilities.css` - Utility classes and Tailwind utilities
- `index.css` - Style imports orchestration

### Types (/src/types)

- `index.ts` - Shared TypeScript interfaces and types
  - Component props
  - Authentication types
  - Environment types
  - Form types
