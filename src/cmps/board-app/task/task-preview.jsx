import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeTask } from "../../../store/actions/task.action";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { labelService } from "../../../services/label.service";
import { BsPencil } from "react-icons/bs";

// import { labelService } from "../../../services/label.service";

export const TaskPreview = ({ boardId, groupId, task, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // boardId comes from props, later can be refactored to storeState
  // const {_id:boardId} = useSelector((storeState) => storeState.boardModule.board)
  // const { labels } = useSelector((storeState) => storeState.boardModule.board)
  // const [taskLabels, setTaskLabels] = useState()
  // get label ids
  const [labels, setLabels]= useState([])
  

  // const labels = useRef();
  useEffect(() => {
    onSetLabels()
    // (async () => {
    //   labels.current = await labelService.getLabelsById(boardId, task);
    //   console.log(labels.current);
    // })();
  }, [task]);

  const onSetLabels = async () =>{
    const newLabels = await labelService.getLabelsById(boardId, task);
    setLabels(newLabels)
  }
  console.log('task.labelIds', task.labelIds)

  const onOpenTaskDetails = () => {
    console.log(`/board/${boardId}/${groupId}/${task.id}`);
    navigate(`/board/${boardId}/${groupId}/${task.id}`);
  };

  const onRemoveTask = (ev) => {
    ev.stopPropagation();
    dispatch(removeTask(boardId, groupId, task.id));
  };

  const onToggleLabelPreview = (ev) => {
    ev.stopPropagation();
    console.log(ev.target);
  }

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
          {/* <div style={{backgroundImage: "url(https://i.picsum.photos/id/373/500/500.jpg?hmac=VqMSKR_Y5zUJm4IEBUjpK6NI7ZdiT7ePMwevp_MDgeQ)"}} className="task-preview-image"></div> */}
          <div className="task-preview-container">
          {/* <div className="task-preview-edit-icon"><BsPencil /></div> */}
            {!!labels?.length && (
              <div className="label-container">
                {labels.map((label) => {
                  return (
                    <span
                    onClick={onToggleLabelPreview}
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
