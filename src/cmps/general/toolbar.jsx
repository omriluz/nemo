import { useState } from "react";
import { Menu } from "./menu";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"
import {FaEllipsisH} from "react-icons/fa"
import { useSelector } from "react-redux";
import { userService } from "../../services/user.service";
import {MdOutlineFilterList} from "react-icons/md"
import {BsPersonPlus} from "react-icons/bs"

export const ToolBar = ({ board }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = userService.getLoggedinUser()


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
        <span className="board-toolbar-title-container">
        <h1 className="board-toolbar-title">{board.title}</h1>
        </span>
        <span className="toolbar-btn star-btn">{board.isStar ? <AiFillStar color={'gold'} size={17}/> :<AiOutlineStar size={17}/>}</span>
        <span className="toolbar-divider"></span>
        <div className="toolbar-members">
          <div style={{background: `url(${user?.imgUrl}) center center / cover ` }} className="user-avatar"></div>
            {/* <h1>connected user, {user.username}</h1> */}
        </div>
          <button className="share-btn"><BsPersonPlus/> Share</button>
      </div>
      <div className="toolbar-right">
        <div>
        <span className="toolbar-btn filter-btn"><MdOutlineFilterList/> Filter</span>
        <span className="toolbar-divider"></span>

        <span onClick={onOpenMenu} className="toolbar-btn toolbar-menu-btn">
         <FaEllipsisH/> <span>Show menu</span>
        </span>
        </div>
      </div>
    </div>
  );
};
