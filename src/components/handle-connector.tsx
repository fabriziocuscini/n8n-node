import { PlusIcon } from '@phosphor-icons/react';

/**
 * HandleConnector - Connection point for creating node links
 *
 * Renders a circular button with a plus icon that appears on hover.
 * Used to initiate connections between workflow nodes.
 *
 * Features:
 * - Appears on node hover
 * - Prevents click propagation to parent (doesn't trigger node selection)
 * - Excluded from tab order (tabIndex={-1}) to maintain clean keyboard navigation
 *
 * @example
 * ```tsx
 * <HandleConnector />
 * ```
 */
export const HandleConnector = () => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // Add your connector logic here
  };

  return (
    <button className="handleConnector" role="button" onClick={handleClick} tabIndex={-1}>
      <PlusIcon size={12} weight="bold" className="handleConnector__icon" />
    </button>
  );
};
