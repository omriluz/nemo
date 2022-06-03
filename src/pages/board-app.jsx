import { GroupList } from "../cmps/board-app/group/group-list.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { loadBoard } from "../store/actions/board.action";
import { useEffect } from "react";
import { ToolBar } from "../cmps/general/toolbar.jsx";
import { TiStarOutline } from "react-icons/ti";
import avatar from "../assets/svg/avatar.svg";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import { loadUsers } from "../store/actions/user.actions.js";

export const BoardApp = () => {
  const { boardId } = useParams();
  const { board } = useSelector((storeState) => storeState.boardModule);
  const { users } = useSelector((storeState) => storeState.userModule)
  // const { users } = useSelector((storeState) => storeState.userModule);
  const dispatch = useDispatch();

  useEffect(() => {
    onLoadBoard();
    onLoadUsers();
  }, []);

const onLoadUsers = () => {
  dispatch(loadUsers())
}

  const onLoadBoard = () => {
    dispatch(loadBoard(boardId));
  };

  console.log('users',users);
  if (!board) return <h1>Loading...</h1>;
  return (
    // <div style={board.style} className="board-app-wrapper">
    <div style={{ background: `url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1152/6820193445dcff991b2b12f41916deea/photo-1537486336219-a3dd8e2dc6b5.jpg) center center / cover` }} className="board-app-wrapper">
      <Outlet />
      <div className="board-app">
        <div className="board-header">
          <div className="main-nav flex align-center space-between">
            <div className="nav-left flex">
              <h1 className="header-title">{board.title}</h1>
              <div className="nav-left-action flex">
                <div className="nav-btn fav">
                  <TiStarOutline />
                </div>
                <div className="nav-member">
                  <img className="member-avatar" src={avatar} />
                </div>
                <div className="nav-btn add-member">
                  <IoPersonAddOutline />
                </div>
              </div>
            </div>
            <div className="nav-right flex">
              <button className="nav-btn show-menu">
                <MdMoreHoriz />
                <p>Show Menu</p>
              </button>
            </div>
          </div>
        </div>
        {/* <ToolBar/> */}
        {board && <GroupList groups={board.groups} boardId={boardId} />}
      </div>
    </div>
  );
};
