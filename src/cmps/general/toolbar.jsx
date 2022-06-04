import { useRef, useState } from "react";
import { Menu } from "./menu";

export const ToolBar = ({ board }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuDetails = useRef();
  const onOpenMenu = () => {
    setIsMenuOpen(true)
  }
  // const onOpenMenu = (ev) => {
  //   if (isMenuOpen) {
  //     setIsMenuOpen(false);
  //   }
  //   console.log(ev.target.getBoundingClientRect());
  //   menuDetails.current = ev.target.getBoundingClientRect();
  //   setIsMenuOpen(true);
  // };

  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="toolbar">
              {/* {isMenuOpen && (
        <DynamicModalCmp
          modalDetails={menuDetails.current}
          modalTitle={'Menu'}
          onCloseModal={onCloseMenu}
          width={340}
        />
      )} */}

      <Menu isMenuOpen={isMenuOpen} onCloseMenu={onCloseMenu} boardId={board._id} activities={board.activities}/>

      <div className="toolbar-left">
        {/* <input type="text"  /> */}
        <h1 className="board-toolbar-title">{board.title}</h1>
        <button className="toolbar-btn">star</button>
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
// import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
// import avatar from "../../assets/svg/avatar.svg";
// import { IoPersonAddOutline, IoFilter } from "react-icons/io5";
// import { MdMoreHoriz } from "react-icons/md";
// import { loadBoard, updateBoard } from "../../store/actions/board.action";
// import { useDispatch } from "react-redux";

// export const ToolBar = ({board}) => {

//     const dispatch = useDispatch()

//     const onToggleStar = () => {
//         board.isStar = !board.isStar
//         dispatch(updateBoard(board))
//       }

//     return (
//     <div className="board-header">
//       <div className="main-nav flex align-center space-between">
//         <div className="nav-left flex">
//           <h1 className="nav-btn header-title">{board.title}</h1>
//           <div className="nav-left-action flex">
//             <div className="nav-btn fav">
//               <span className="star-icon">
//                 {board.isStar ? (
//                   <TiStarFullOutline
//                     className="star-icon star"
//                     onClick={onToggleStar}
//                   />
//                 ) : (
//                   <TiStarOutline className="star-icon" onClick={onToggleStar} />
//                 )}
//               </span>
//             </div>
//             <div className="nav-member">
//               <img className="member-avatar" src={avatar} />
//             </div>
//             <div className="nav-btn add-member">
//               <IoPersonAddOutline />
//             </div>
//           </div>
//         </div>
//         <div className="nav-right flex">
//           <span className="nav-btn filter">
//             {" "}
//             <IoFilter />
//             <p>Filter</p>
//           </span>
//           <button className="nav-btn show-menu">
//             <MdMoreHoriz />
//             <p>Show Menu</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
