import { useState } from 'react';
import type { NodeStatus } from '../types/node-status';
import { Node, Toolbar, HandleConnector, N8nIcon } from './';

interface CanvasNodeProps {
  name: string;
  subtitle?: string;
  serviceName: string;
  status?: NodeStatus;
  selected?: boolean;
  serviceIcon?: React.ReactNode;
}

export const CanvasNode = ({
  name,
  subtitle,
  serviceName,
  status = 'active',
  selected = false,
  serviceIcon = <N8nIcon />,
}: CanvasNodeProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleNodeClick = () => {
    setIsSelected(prev => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Toggle selection on Space or Enter
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault(); // Prevent default scrolling behavior for Space
      setIsSelected(prev => !prev);
    }
    // Deselect on Escape
    else if (event.key === 'Escape') {
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
