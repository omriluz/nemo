import { useState } from "react";
import { Menu } from "./menu";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"

export const ToolBar = ({ board }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onOpenMenu = () => {
    setIsMenuOpen(true)
  }
  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="toolbar">
      <Menu isMenuOpen={isMenuOpen} onCloseMenu={onCloseMenu} board={board} activities={board.activities} />
      <div className="toolbar-left">
        {/* <input type="text"  /> */}
        <div className="board-toolbar-title-container">
        <h1 className="board-toolbar-title">{board.title}</h1>
        </div>
        {/* <button className="toolbar-btn">star</button> */}
        <span className="toolbar-btn star-btn">{board.isStar ? <AiFillStar color={'gold'} size={17}/> :<AiOutlineStar size={17}/>}</span>
        <span className="toolbar-divider"></span>
        <div className="toolbar-members">
          <div style={{ backgroundColor: "red" }} className="user-avatar"></div>
          <button>share</button>
        </div>
      </div>
      {/* <button className="toolbar-btn">ws-name</button> */}
      {/* <button className="toolbar-btn">avatar</button> */}
      {/* <button className="toolbar-btn">share-btn</button> */}
      {/* </div> */}
      <div className="toolbar-right">
        {/* <button className="toolbar-btn">filter</button> */}
        <button onClick={onOpenMenu} className="toolbar-btn toolbar-menu-btn">
          showmenu
        </button>
      </div>
    </div>
  );
};
