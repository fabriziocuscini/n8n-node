import type { NodeStatus } from '../types/node-status';
import { PushPinIcon, CheckIcon, WarningIcon, PauseCircleIcon } from '@phosphor-icons/react';

/**
 * Props for the Node component.
 */
export interface NodeProps {
  /** Current status of the node (determines border color and status icon) */
  status?: NodeStatus;
  /** Whether the node is currently selected (shows glow effect) */
  selected?: boolean;
  /** Custom icon component representing the service/integration */
  serviceIcon?: React.ReactNode;
}

/**
 * Node - Pure presentational component for workflow nodes
 *
 * Renders the visual representation of a workflow node with its
 * service icon and optional status indicator. This component is purely
 * presentational and receives all state and behavior from its parent.
 *
 * The component applies visual modifiers based on props:
 * - Selected state adds a glow effect
 * - Status determines border color and displays appropriate icon
 *
 * @example
 * ```tsx
 * <Node
 *   status="success"
 *   selected={true}
 *   serviceIcon={<GmailIcon />}
 * />
 * ```
 */
export const Node = ({ status, selected, serviceIcon }: NodeProps) => {
  return (
    <div className={`node${selected ? ' node--selected' : ''}${status ? ` node--${status}` : ''}`}>
      <div className="node__serviceIcon">{serviceIcon}</div>
      {status && status !== 'active' && (
        <div className={`node__statusIcon node__statusIcon--${status}`} aria-label={status}>
          {status === 'pinned' && <PushPinIcon size={16} weight="fill" />}
          {status === 'success' && <CheckIcon size={16} weight="bold" />}
          {status === 'issues' && <WarningIcon size={16} weight="bold" />}
          {status === 'deactivated' && <PauseCircleIcon size={16} weight="bold" />}
        </div>
      )}
    </div>
  );
};
