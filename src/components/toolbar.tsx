import { PlayIcon, DeactivateIcon, DeleteIcon, MoreIcon } from './';

/**
 * Toolbar - Floating action buttons for node operations
 *
 * Displays a horizontal toolbar with action buttons that appears on node hover/focus.
 * Contains common node operations like execute, deactivate, delete, and more options.
 *
 * Features:
 * - Appears on node hover/focus with a smooth transition
 * - Prevents click propagation to parent (doesn't trigger node selection)
 * - All buttons excluded from tab order for cleaner keyboard navigation
 * - Individual button actions to be implemented based on requirements
 *
 * @example
 * ```tsx
 * <Toolbar />
 * ```
 */
export const Toolbar = () => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // Toolbar button actions will be handled by individual buttons
  };

  return (
    <div className="toolbar" onClick={handleClick}>
      <button className="toolbar__button" tabIndex={-1}>
        <PlayIcon />
      </button>
      <button className="toolbar__button" tabIndex={-1}>
        <DeactivateIcon />
      </button>
      <button className="toolbar__button" tabIndex={-1}>
        <DeleteIcon />
      </button>
      <button className="toolbar__button" tabIndex={-1}>
        <MoreIcon />
      </button>
    </div>
  );
};
