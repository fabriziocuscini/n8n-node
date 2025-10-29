# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

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