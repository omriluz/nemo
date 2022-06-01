import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { addBoard } from "../../store/actions/board.action";

export const AddBoard = ({ toggleModal }) => {
  const dispatch = useDispatch({ addBoard });
  const [boardTitle, setBoardTitle] = useState("");

  const inputModal = useRef(true);

  const createNewBoard = () => {
    if (boardTitle) {
      //should get either background image or color on start
      const board = { title: boardTitle, style:{backgroundColor:'blue'} };
      dispatch(addBoard(board));
      toggleModal();
    } else return;
  };

  return (
    <div ref={inputModal} className="add-board-pop">
      <div className="add-board-header flex">
        <div className="add-board-title">Create board</div>
        <button onClick={toggleModal}>x</button>
      </div>
      <hr />
      <div
        style={{ background: `url(${"https://unsplash.it/100/100"})` }}
      ></div>
      <div className="add-title">
        <label>
          <h5>Board Title</h5>
          <input
            type="text"
            required=""
            value={boardTitle}
            onChange={(e) => setBoardTitle(e.target.value)}
          ></input>
        </label>
      </div>
      <span>Title is required!!!</span>
      <button className="btn create-board" onClick={createNewBoard}>
        Create New Board
      </button>
    </div>
  );
};
