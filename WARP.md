# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

React + TypeScript + Vite starter project using **Rolldown** (an experimental Rust-based bundler) instead of standard Vite. This is a minimal setup with React 19, strict TypeScript configuration, and ESLint.

## Package Manager

This project uses **pnpm**. Always use `pnpm` commands, not `npm` or `yarn`.

## Common Commands

### Development
```bash
pnpm dev              # Start dev server with HMR
pnpm build            # Type-check and build for production
pnpm preview          # Preview production build locally
pnpm lint             # Run ESLint on all files
```

### Type Checking
```bash
pnpm exec tsc -b                    # Type-check entire project
pnpm exec tsc -b tsconfig.app.json  # Type-check app code only
```

## Architecture

### Build System
- **Bundler**: Uses `rolldown-vite@7.1.14` (Rolldown, not standard Vite) via package.json overrides
- **Module system**: ESNext modules with bundler resolution
- **Build target**: ES2022 for app code, ES2023 for config files

### TypeScript Configuration
The project uses a **project references** setup with three tsconfig files:
- `tsconfig.json` - Root config that references other configs
- `tsconfig.app.json` - Application code in `src/` (strict mode, React JSX transform)
- `tsconfig.node.json` - Build config files like `vite.config.ts`

Key compiler options enabled:
- Strict mode with `noUnusedLocals`, `noUnusedParameters`
- `verbatimModuleSyntax` - import/export statements preserved exactly
- `erasableSyntaxOnly` - Only allows types that can be safely erased
- `noUncheckedSideEffectImports` - Warns about imports that may have side effects
- `allowImportingTsExtensions` - Allows importing `.ts`/`.tsx` files directly

### Linting
ESLint configured with:
- TypeScript ESLint recommended rules
- React Hooks recommended-latest rules  
- React Refresh for Vite HMR
- Flat config format (eslint.config.js, not .eslintrc)
- Ignores `dist/` directory

### Source Structure
```
src/
├── main.tsx      # Entry point with React StrictMode
├── App.tsx       # Root component
└── index.css     # Global styles
```

## Development Guidelines

### When Adding Dependencies
Use `pnpm add <package>` or `pnpm add -D <package>` for dev dependencies.

### When Modifying Build Config
- Changes to Vite config go in `vite.config.ts`
- If modifying TypeScript for app code, edit `tsconfig.app.json`
- If modifying TypeScript for build tools, edit `tsconfig.node.json`

### Before Committing Changes
Always run:
```bash
pnpm lint         # Check for linting errors
pnpm build        # Verify type checking and build succeeds
```

### React Patterns
- Use functional components with hooks (no class components)
- Strict mode is enabled - components mount/unmount twice in dev
- React 19 is used - be aware of breaking changes from React 18
