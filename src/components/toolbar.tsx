import { PlayIcon, DeactivateIcon, DeleteIcon, MoreIcon } from './';

export const Toolbar = () => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // Toolbar button actions will be handled by individual buttons
  };

  return (
    <div className="toolbar" onClick={handleClick}>
      <button className="toolbar__button">
        <PlayIcon />
      </button>
      <button className="toolbar__button">
        <DeactivateIcon />
      </button>
      <button className="toolbar__button">
        <DeleteIcon />
      </button>
      <button className="toolbar__button">
        <MoreIcon />
      </button>
    </div>
  );
};
