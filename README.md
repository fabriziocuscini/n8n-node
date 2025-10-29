# n8n Node Component System

A React-based workflow node component system built with TypeScript, featuring comprehensive accessibility support and clean architecture patterns.

## Project Structure

```
src/
├── components/          # React components
│   ├── service-icons/  # Third-party service icons (Gmail, Telegram, etc.)
│   ├── toolbar-icons/  # UI action icons (Play, Delete, etc.)
│   ├── canvas-node.tsx # Stateful container component
│   ├── node.tsx        # Presentational node component
│   ├── toolbar.tsx     # Action toolbar component
│   ├── handle-connector.tsx # Node connection point
│   └── index.ts        # Barrel exports
├── theme/              # CSS and design tokens
│   ├── tokens/         # CSS custom properties
│   │   ├── colors.css
│   │   ├── spacing.css
│   │   ├── shadows.css
│   │   └── ...
│   └── index.css       # Main styles
├── types/              # Shared TypeScript types
├── data/               # Mock data
├── constants/          # Application constants
├── App.tsx             # Main application
└── main.tsx            # Entry point
```

## Architecture

### Component Hierarchy

The node system follows a clear component hierarchy with separation of concerns:

```
CanvasNode (Container)
├── Node (Presentational)
│   ├── Service Icon
│   └── Status Icon (conditional)
├── Description
│   ├── Name
│   └── Subtitle
├── Toolbar
│   └── Action Buttons (4)
└── HandleConnector
```

### Component Responsibilities

#### **CanvasNode** (Stateful Container)
- **State Management**: Manages selection state with React hooks
- **Event Handling**: Processes clicks and keyboard events
- **Accessibility**: Implements ARIA attributes and keyboard navigation
- **Composition**: Orchestrates all child components
- **Props**: Receives name, subtitle, serviceName, status, serviceIcon

#### **Node** (Pure Presentational)
- **Display Only**: Renders the visual node element
- **No State**: Completely controlled by parent props
- **Visual Modifiers**: Applies CSS classes based on status and selection
- **Status Icons**: Conditionally shows status indicators

#### **Toolbar** (Interactive UI)
- **Action Buttons**: Provides node operation controls
- **Event Isolation**: Stops click propagation to prevent node selection
- **Visibility**: Appears on hover/focus

#### **HandleConnector** (Connection Point)
- **Node Linking**: Provides UI for creating connections
- **Event Isolation**: Independent click handling

### Design Patterns

1. **Container/Presentational Pattern**: CanvasNode (smart) wraps Node (dumb)
2. **Composition over Inheritance**: Components composed from smaller pieces
3. **Single Responsibility**: Each component has one clear purpose
4. **Props Down, Events Up**: Unidirectional data flow
5. **Design Tokens**: CSS custom properties for theming

### State Management

- **Local State**: Using React `useState` hook in CanvasNode
- **Props**: Status and configuration passed down from App
- **No Global State**: Simple enough for component-level state

### Styling Architecture

- **CSS Modules Pattern**: BEM-like naming (`.node`, `.node--selected`)
- **Design Tokens**: Centralized in `/theme/tokens/`
- **CSS Custom Properties**: Used for theming and consistency

## Accessibility Implementation

This project implements comprehensive accessibility features to ensure the node components are usable by all users, including those using assistive technologies and keyboard navigation.

### Keyboard Navigation

**Implementation:**
- All node components are keyboard-focusable with `tabIndex={0}`
- **Space** and **Enter** keys toggle node selection (same behavior as mouse click)
- **Escape** key deselects the currently focused node
- Visual focus indicator matches the hover state for consistency using `:focus-visible` pseudo-selector

**User Experience:**
Users can fully navigate and interact with nodes using only the keyboard, without requiring a mouse.

### ARIA Attributes

**Implementation:**
- `role="button"` - Identifies nodes as interactive button elements for screen readers
- `aria-label` - Provides descriptive labels (e.g., "Gmail", "Telegram") for each node
- `aria-pressed` - Announces selection state (`true`/`false`) to screen readers

**User Experience:**
Screen reader users receive complete information about each node's identity and state, enabling them to understand and interact with the interface effectively.

### Reduced Motion Support

**Implementation:**
- Respects `prefers-reduced-motion` system setting via CSS media query
- Disables CSS transitions and transform animations for users who have enabled reduced motion
- Maintains all functionality while removing potentially problematic motion effects

**User Experience:**
Users with vestibular disorders or motion sensitivity can use the interface without triggering discomfort, while users without these needs still enjoy the full animated experience.

### Testing Accessibility Features

**Keyboard Navigation:**
1. Press Tab to navigate between nodes
2. Press Space or Enter to select/deselect
3. Press Escape to deselect the focused node

**Screen Reader:**
- Test with VoiceOver (macOS), NVDA (Windows), or JAWS
- Each node announces its service name and pressed state

**Reduced Motion:**
- macOS: Enable "Reduce motion" in System Settings → Accessibility → Display
- Verify that hover/focus animations are disabled

### Standards Compliance

This implementation follows:
- WCAG 2.1 Level AA guidelines for keyboard accessibility
- WAI-ARIA 1.2 best practices for button widgets
- WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions)

## Development

### Prerequisites
- Node.js 18+ 
- pnpm (package manager)

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

### Code Quality

This project maintains high code quality through:
- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with React and TypeScript rules
- **Component Documentation**: JSDoc comments on all public interfaces
- **Consistent Naming**: kebab-case for files, PascalCase for components
- **Code Organization**: Clear separation of concerns and folder structure

## Technology Stack

- **React 19**: Latest React with new features
- **TypeScript 5**: Strict mode enabled
- **Vite**: Fast build tool with HMR
- **Phosphor Icons**: Icon system
- **CSS**: Modern CSS with custom properties
- **pnpm**: Fast, disk-efficient package manager