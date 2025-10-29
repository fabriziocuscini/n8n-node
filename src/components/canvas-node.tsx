import { useState } from 'react';
import { N8nIcon, Node } from './';
import type { NodeProps } from './node';

interface CanvasNodeProps extends NodeProps {
  name: string;
  subtitle?: string;
  serviceName?: string;
}

export const CanvasNode = ({
  name,
  subtitle,
  status = 'active',
  selected = false,
  serviceIcon = <N8nIcon />,
  serviceName,
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
    <div className="canvasNode">
      <Node
        status={status}
        selected={isSelected}
        serviceIcon={serviceIcon}
        onClick={handleNodeClick}
        onKeyDown={handleKeyDown}
        ariaLabel={serviceName}
      />
      <div className="canvasNode__description">
        <div className="canvasNode__name">{name}</div>
        <div className="canvasNode__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};
