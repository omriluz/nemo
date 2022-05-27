import React from "react";
import { NavLink, } from 'react-router-dom';
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

export function BoardPreview({ board, onToggleStar }) {

  return (
    <div>
      <NavLink to={`/board/${board._id}`}>
        <div className="board-preview-container"
          style={{ background: `url(${"https://unsplash.it/100/100"})` }}>
          {board.title}
          <span className="starred-container">
            {(board.isStar) ?
              <TiStarFullOutline className="star-icon star" onClick={ev => onToggleStar(ev, board._id)} /> :
              <TiStarOutline className="star-icon" onClick={ev => onToggleStar(ev, board._id)} />
            }
          </span>
        </div>
      </NavLink>
    </div>
  )
}