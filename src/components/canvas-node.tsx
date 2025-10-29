import { useState } from 'react';
import { N8nIcon, Node } from './';
import type { NodeProps } from './node';

interface CanvasNodeProps extends NodeProps {
  name: string;
  subtitle?: string;
}

export const CanvasNode = ({
  name,
  subtitle,
  status = 'active',
  selected = false,
  serviceIcon = <N8nIcon />,
}: CanvasNodeProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleNodeClick = () => {
    setIsSelected(prev => !prev);
  };

  return (
    <div className="canvasNode">
      <Node
        status={status}
        selected={isSelected}
        serviceIcon={serviceIcon}
        onClick={handleNodeClick}
      />
      <div className="canvasNode__description">
        <div className="canvasNode__name">{name}</div>
        <div className="canvasNode__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};
