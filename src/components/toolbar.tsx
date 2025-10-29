import { PlayIcon, DeactivateIcon, DeleteIcon, MoreIcon } from './';

export const Toolbar = () => {
  return (
    <div className="toolbar">
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
