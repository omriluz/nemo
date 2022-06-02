import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../../store/actions/board.action";
import boardPreview from "../../assets/svg/board-preview.svg"
export const AddBoard = ({ toggleModal }) => {
  const dispatch = useDispatch({ addBoard });
  const [boardTitle, setBoardTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(null)

  const coverColors = [
    { id: 'c1', color: '#61bd4f' },
    { id: 'c2', color: '#f2d600' },
    { id: 'c3', color: '#ff9f1a' },
    { id: 'c4', color: '#ed5a46' },
    { id: 'c5', color: '#c377e0' }
  ]
  // const inputModal = useRef(true);
  const chooseColor = (color) => {
    setSelectedColor(color)
    console.log(color);
    // saveColor(color.color)
  }

  const createNewBoard = () => {
    if (boardTitle) {
      //should get either background image or color on start
      const board = { title: boardTitle, style: { backgroundColor: selectedColor.color } };
      dispatch(addBoard(board));
      toggleModal();
    } else return;
  }

  return (
    <section className="add-board">
      <div className="board-preview-wrapper">
        <div className="board-preview-container" style={{ background: selectedColor?.color }}>
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
            );
          })}
        </div>
        <h4 className="title">Board title</h4>
        <input
          type="text"
          required=""
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        ></input>
        <button className="btn create-board" onClick={createNewBoard}>
          Create New Board
        </button>
      </div>
    </section>
  );
};


// <div ref={inputModal} className="add-board-pop">
//       <div className="add-board-header flex">
//         <div className="add-board-title">Create board</div>
//         {/* <button onClick={toggleModal}>x</button> */}
//       </div>
//       <hr />
//       <div
//         style={{ background: `url(${"https://unsplash.it/100/100"})` }}
//       ></div>
//       <div className="add-title">
//         <label>
//           <h5>Board Title</h5>
//
//         </label>
//       </div>
//       <span>Title is required!!!</span>
//
//     </div>