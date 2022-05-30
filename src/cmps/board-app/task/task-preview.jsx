import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeTask } from "../../../store/actions/task.action";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { labelService } from "../../../services/label.service";
// import { labelService } from "../../../services/label.service";

export const TaskPreview = ({ boardId, groupId, task, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // boardId comes from props, later can be refactored to storeState
  // const {_id:boardId} = useSelector((storeState) => storeState.boardModule.board)
  // const { labels } = useSelector((storeState) => storeState.boardModule.board)
  // const [taskLabels, setTaskLabels] = useState()
  // get label ids
  

  const labels = useRef();
  useEffect(() => {
    (async () => {
      labels.current = await labelService.getLabelsById(boardId, task);
      console.log(labels.current);
    })();
  }, []);

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
          {/* <div style={{backgroundImage: `url(https://source.unsplash.com/random?sig=${(Math.random() + 1).toString(36).substring(7)})`}} className="task-preview-image"></div> */}
          <div className="task-preview-container">
            {!!labels.current?.length && (
              <div className="label-container">
                {labels.current.map((label) => {
                  return (
                    <span
                      key={label.id}
                      style={{ backgroundColor: label.color }}
                      className="label-preview"
                    ></span>
                  );
                })}
              </div>
            )}
            <span className="task-preview-title">{task.title}</span>

            {/* remove for now for styling purposes also this should not be here anyway */}
            {/* <button onClick={onRemoveTask}>Delete task</button> */}
          </div>
        </div>
      )}
    </Draggable>
  );
};
