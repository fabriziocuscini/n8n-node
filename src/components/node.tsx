import type { NodeStatus } from '../types/node-status';
import { PushPinIcon, CheckIcon, WarningIcon, PauseCircleIcon } from '@phosphor-icons/react';

export interface NodeProps {
  status?: NodeStatus;
  selected?: boolean;
  serviceIcon?: React.ReactNode;
  onClick?: () => void;
}

export const Node = ({ status, selected, serviceIcon, onClick }: NodeProps) => {
  return (
    <div className={`node ${selected ? 'node--selected' : ''} node--${status}`} onClick={onClick}>
      <div className="node__serviceIcon">{serviceIcon}</div>
      <div className={`node__statusIcon node__statusIcon--${status}`} aria-label={status}>
        {status === 'pinned' && <PushPinIcon size={16} weight="fill" />}
        {status === 'success' && <CheckIcon size={16} weight="bold" />}
        {status === 'issues' && <WarningIcon size={16} weight="bold" />}
        {status === 'deactivated' && <PauseCircleIcon size={16} weight="bold" />}
      </div>
    </div>
  );
};
