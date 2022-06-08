import { useRef, useState } from "react";
import { Menu } from "./menu";
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { FaEllipsisH } from "react-icons/fa"
import { useSelector } from "react-redux";
import { userService } from "../../services/user.service";
import { MdOutlineFilterList } from "react-icons/md"
import { BsPersonPlus } from "react-icons/bs"
import { DynamicModalCmp } from "./dynamic-modal-cmp";

export const ToolBar = ({ boardId, board, users }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalDetails = useRef();
  const modalTitle = useRef();


  const user = userService.getLoggedinUser()

  const onOpenMenu = () => {
    setIsMenuOpen(true)
  }
  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const onOpenModal = (ev, txt) => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
    modalDetails.current = ev.target.getBoundingClientRect();
    modalTitle.current = txt;
    setIsModalOpen(true);
  }

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="toolbar">

      {isModalOpen && (
        <DynamicModalCmp
          modalDetails={modalDetails.current}
          modalTitle={modalTitle.current}
          users={users}
          boardMembers={board.members}
          onCloseModal={onCloseModal}
          boardId={boardId}
          board={board}
        />
      )}

      <Menu isMenuOpen={isMenuOpen} onCloseMenu={onCloseMenu} board={board} activities={board.activities} />
      <div className="toolbar-left">
        <span className="board-toolbar-title-container">
          <h1 className="board-toolbar-title">{board.title}</h1>
        </span>
        <span className="toolbar-btn star-btn">{board.isStar ? <AiFillStar color={'gold'} size={17} /> : <AiOutlineStar size={17} />}</span>
        <span className="toolbar-divider"></span>
        <div className="toolbar-members">
          {board.members.map((member) => {
            return <div key={member._id} style={{ background: `url(${member?.imgUrl}) center center / cover ` }} className="user-avatar"></div>
          })}
        </div>
        <button onClick={(ev) => onOpenModal(ev, "Invite to board")} className="share-btn"><BsPersonPlus /> Share</button>
      </div>
      <div className="toolbar-right">
        <div>
          <span className="toolbar-btn filter-btn" onClick={(ev) => onOpenModal(ev, "Filter")}>
            <MdOutlineFilterList /> <span className="tool-title">Filter</span>
          </span>
          <span className="toolbar-divider"></span>

          <span onClick={onOpenMenu} className="toolbar-btn toolbar-menu-btn">
            <FaEllipsisH /> <span className="tool-title">Show menu</span>
          </span>
        </div>
      </div>
    </div>
  );
};
