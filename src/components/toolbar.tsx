import { PlayIcon, DeactivateIcon, DeleteIcon, MoreIcon } from './';

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
