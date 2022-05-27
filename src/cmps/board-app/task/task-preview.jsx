import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeTask } from "../../../store/actions/task.action";

export const TaskPreview = ({ task, groupId, boardId }) => {
  // boardId comes from props, later can be refactored to storeState
  // const {_id:boardId} = useSelector((storeState) => storeState.boardModule.board)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onOpenTaskDetails = () => {
    console.log(`/board/${boardId}/${groupId}/${task.id}`);
    navigate(`/board/${boardId}/${groupId}/${task.id}`);
  };

  const onRemoveTask = (ev) => {
    ev.stopPropagation();
    dispatch(removeTask(boardId, groupId, task.id));
  };

  return (
    <div onClick={onOpenTaskDetails} className="task-preview-wrapper">
      <div className="task-preview-container">
        {task.title}
        {/* remove for now for styling purposes also this should not be here anyway */}
        {/* <button onClick={onRemoveTask}>Delete task</button> */}
      </div>
    </div>
  );
};
