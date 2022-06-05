import { GroupList } from "../cmps/board-app/group/group-list.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { handleDrag, loadBoard } from "../store/actions/board.action";
import { useEffect } from "react";
import { ToolBar } from "../cmps/general/toolbar.jsx";
import { loadUsers } from "../store/actions/user.actions.js";
import { DragDropContext } from "react-beautiful-dnd";

export const BoardApp = () => {
  const { boardId } = useParams();
  const { board } = useSelector((storeState) => storeState.boardModule);
  const { users } = useSelector((storeState) => storeState.userModule);
  // const { users } = useSelector((storeState) => storeState.userModule);
  const dispatch = useDispatch();

  useEffect(() => {
    onLoadBoard();
    onLoadUsers();
  }, []);

  const onLoadUsers = () => {
    dispatch(loadUsers());
  };

  const onLoadBoard = () => {
    dispatch(loadBoard(boardId));
  };

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination, type } = result;
    // console.log(source, dxestination, type);
    dispatch(
      handleDrag(
        board,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        type
      )
    );
  };

  if (!board) return <h1>Loading...</h1>;
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={board.style} className="board-app-wrapper">
          <Outlet />
          <div className="board-app">
            <ToolBar boardId={boardId} board={board} users={users} />
            {board && (
              <GroupList
                labelOpenState={board.labelOpenState}
                groups={board.groups}
                boardId={boardId}
              />
            )}
          </div>
        </div>
      </DragDropContext>
    </>
  );
};
