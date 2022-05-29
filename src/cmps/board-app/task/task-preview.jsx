import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeTask } from "../../../store/actions/task.action";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { labelService } from "../../../services/label.service";

export const TaskPreview = ({ task, groupId, boardId, index }) => {
  // boardId comes from props, later can be refactored to storeState
  // const {_id:boardId} = useSelector((storeState) => storeState.boardModule.board)
  const {labels} = useSelector((storeState) => storeState.boardModule.board)
  const [taskLabels, setTaskLabels] = useState()
  // get label ids

  useEffect(() => {
    // labelService.getLabelsById(boardId, task.labels)
    getLabels()
    // const labelsToRender = labels.filter((label,index) => label.id === task.labelIds[index])
    // console.log(labelsToRender);
  },[]) 
  
  const getLabels = () => {
    // cannot work right now needs to generate labelids on add new task
    // which will come from addnewboard which also needs a data model 
    // which it currently does not have

    if (task.labelIds) {
      //for testing purposes
      setTaskLabels([labels[0],labels[1]])

      // console.log('@@@@@@',labels, task.labelIds);
      // const labelsToRender = labels.filter((label,index) => label.id === task.labelIds[index])
    }
  }

  console.log(taskLabels);
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
          {/* <div style={{backgroundImage: `url(https://source.unsplash.com/random?sig=${(Math.random() + 1).toString(36).substring(7)})`}} className="task-preview-image"></div> */}
          {/* {randRender && <div className="task-preview-image"></div>} */}
          {Math.round(Math.random() * 2) > 1 && <div className="task-preview-image"></div>}
          <div className="task-preview-container">
            <div className="label-container">
              {taskLabels && taskLabels.map(label => {
                return <span style={{backgroundColor:label.color}} className="label-preview"></span> 
              })}
               {/* <span className="label-preview"></span> */}
               {/* <span className="label-preview"></span> */}
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
