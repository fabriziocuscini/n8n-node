import { PlusIcon } from '@phosphor-icons/react';

export const HandleConnector = () => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // Add your connector logic here
  };

  return (
    <button className="handleConnector" role="button" onClick={handleClick}>
      <PlusIcon size={12} weight="bold" className="handleConnector__icon" />
    </button>
  );
};
