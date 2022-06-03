import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../../store/actions/board.action";
import boardPreview from "../../assets/svg/board-preview.svg"


export const AddBoard = ({ onCloseModal }) => {
  const dispatch = useDispatch({ addBoard });
  const [boardTitle, setBoardTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState('#b04632')

  console.log(onCloseModal);
  const coverColors = [
    { id: 'c1', color: '#0079bf' },
    { id: 'c2', color: '#d29034' },
    { id: 'c3', color: '#519839' },
    { id: 'c4', color: '#b04632' },
    { id: 'c5', color: '#89609e' }
  ]
  // const inputModal = useRef(true);
  const chooseColor = (color) => {
    setSelectedColor(color.color)
  }

  const createNewBoard = () => {
    if (boardTitle) {
      const board = { title: boardTitle, style: { backgroundColor: selectedColor } };
      dispatch(addBoard(board));
      onCloseModal()
    } else return
  }

  return (
    <section className="add-board">
      <div className="board-preview-wrapper">
        <div className="board-preview-container" style={{ background: selectedColor }}>
          <img src={boardPreview} />
        </div>
      </div>
      <div className="background-container">
        <h4>Background</h4>
        <div className="choose-color-list flex">
          {coverColors.map((color) => {
            return (
              <div key={color.id} className="choose-color-list ">
                <div
                  style={{ backgroundColor: color.color }}
                  className="color-selected"
                  onClick={() => chooseColor(color)}
                >
                </div>
              </div>
            )
          })}
        </div>
        <h4 className="title">Board title</h4>
        <input
          type="text"
          className="add-board-title"
          required=""
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        ></input>
        <button className={`create-btn ${boardTitle ? 'full' : ''}`} onClick={createNewBoard}>
          Create New Board
        </button>
      </div>
    </section>
  )
}


