import { GroupList } from "../cmps/board-app/group/group-list.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { loadBoard } from "../store/actions/board.action";
import { useEffect } from "react";
import { ToolBar } from "../cmps/general/toolbar.jsx";
import { loadUsers } from "../store/actions/user.actions.js";

export const BoardApp = () => {
  const { boardId } = useParams();
  const { board } = useSelector((storeState) => storeState.boardModule);
  const { users } = useSelector((storeState) => storeState.userModule)
  // const { users } = useSelector((storeState) => storeState.userModule);
  const dispatch = useDispatch();
  console.log(board);

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


  if (!board) return <h1>Loading...</h1>;
  return (
    // <div style={board.style} className="board-app-wrapper">
    <div style={board.style} className="board-app-wrapper">
      <Outlet />
      <div className="board-app">
        <ToolBar board={board}/>
        {board && <GroupList labelOpenState={board.labelOpenState} groups={board.groups} boardId={boardId} />}
      </div>
    </div>
  );
};
