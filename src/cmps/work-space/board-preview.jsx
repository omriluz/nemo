import React from "react";
import { Link, } from 'react-router-dom';
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";


export function BoardPreview({ board, onToggleStar }) {

  return (
    <div>
      <Link to={`/board/${board._id}`}>
        <div className="board-preview-container"
          style={board.style}>
          <h3> {board.title}</h3>
          <span className="starred-container">
            {(board.isStar) ?
              <TiStarFullOutline className="star-icon star" onClick={ev => onToggleStar(ev, board._id)} /> :
              <TiStarOutline className="star-icon" onClick={ev => onToggleStar(ev, board._id)} />
            }
          </span>
        </div>
      </Link>
    </div>
  )
}