import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeTask } from "../../../store/actions/task.action";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";

export const TaskPreview = ({ task, groupId, boardId, index,  }) => {
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
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
        onClick={onOpenTaskDetails}
          className="task-preview-wrapper"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {Math.round(Math.random() * 2) > 1 && <div className="task-preview-image"></div>}
          <div className="task-preview-container">
            <div className="label-container">
            {Math.round(Math.random() * 2) > 1 && <span className="label-preview"></span>}
            {Math.round(Math.random() * 2) > 1 && <span className="label-preview"></span>}
            {Math.round(Math.random() * 2) > 1 && <span className="label-preview"></span>}
            </div>
            <span className="task-preview-title">{task.title}</span>

            {/* remove for now for styling purposes also this should not be here anyway */}
            {/* <button onClick={onRemoveTask}>Delete task</button> */}
          </div>
        </div>
      )}
    </Draggable>
  );
};
