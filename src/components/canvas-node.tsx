import { useState } from 'react';
import type { NodeStatus } from '../types/node-status';
import { Node, Toolbar, HandleConnector, N8nIcon } from './';
import { KEYBOARD_KEYS } from '../constants';

/**
 * Props for the CanvasNode component.
 */
interface CanvasNodeProps {
  /** The display name of the node */
  name: string;
  /** Optional subtitle showing operation details (e.g., "getAll: message") */
  subtitle?: string;
  /** Service name used for accessibility labels and identification */
  serviceName: string;
  /** Current status of the node (affects visual appearance) */
  status?: NodeStatus;
  /** Whether the node starts in selected state */
  selected?: boolean;
  /** Custom icon component for the service */
  serviceIcon?: React.ReactNode;
}

/**
 * CanvasNode - Stateful container component for workflow nodes
 *
 * This is the main container component that manages all state, user interactions,
 * and composition of a workflow node on the canvas. It orchestrates the Node
 * visual representation, description text, Toolbar, and HandleConnector.
 *
 * **Responsibilities:**
 * - State management (selection state)
 * - Event handling (click, keyboard navigation)
 * - Accessibility (ARIA attributes, keyboard support)
 * - Composition of child components
 *
 * **Keyboard Navigation:**
 * - Space/Enter: Toggle selection
 * - Escape: Deselect
 * - Tab: Navigate to next node
 *
 * **Accessibility:**
 * - Uses role="button" with proper ARIA attributes
 * - Announces service name and selection state to screen readers
 * - Fully keyboard accessible with visual focus indicators
 *
 * @example
 * ```tsx
 * <CanvasNode
 *   name="Get many messages"
 *   subtitle="getAll: message"
 *   serviceName="Gmail"
 *   status="success"
 *   serviceIcon={<GmailIcon />}
 * />
 * ```
 */
export const CanvasNode = ({
  name,
  subtitle,
  serviceName,
  status = 'active', // Default to active for new nodes
  selected = false, // Nodes start unselected
  serviceIcon = <N8nIcon />, // Default to n8n icon
}: CanvasNodeProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleNodeClick = () => {
    setIsSelected(prev => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Toggle selection on Space or Enter
    if (event.key === KEYBOARD_KEYS.SPACE || event.key === KEYBOARD_KEYS.ENTER) {
      event.preventDefault(); // Prevent default scrolling behavior for Space
      setIsSelected(prev => !prev);
    }
    // Deselect on Escape
    else if (event.key === KEYBOARD_KEYS.ESCAPE) {
      setIsSelected(false);
    }
  };

  return (
    <div
      className="canvasNode"
      onClick={handleNodeClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={serviceName}
      aria-pressed={isSelected}
    >
      <Node status={status} selected={isSelected} serviceIcon={serviceIcon} />
      <div className="canvasNode__description">
        <div className="canvasNode__name">{name}</div>
        <div className="canvasNode__subtitle">{subtitle}</div>
      </div>
      <Toolbar />
      <HandleConnector />
    </div>
  );
};
