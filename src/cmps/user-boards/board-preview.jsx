import { Link } from 'react-router-dom';

export function BoardPreview({ board }) {
  return (
    <Link to={`/board/${board._id}`}>
      <div className="board-preview-container"
        style={{ background: `url(${"https://unsplash.it/100/100"})` }}>
        {board.title}
      </div>
    </Link>
  )
}

