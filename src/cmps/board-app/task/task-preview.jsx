import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeTask } from "../../../store/actions/task.action";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState, memo } from "react";
import { labelService } from "../../../services/label.service";
import { BsPencil } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";

export const TaskPreview = ({ boardId, groupId, task, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [labels, setLabels] = useState([]);
  let sumTodos;
  let sumTodosDone;
  if (task.checklists.length) {
    sumTodos = task.checklists.reduce(
      (accumulator, checklist) => accumulator + checklist.todos.length,
      0
    );
    // sumTodosDone = task.checklists.reduce((accumulator, checklist) => accumulator + checklist.todos.length, 0)
    sumTodosDone = task.checklists.map((checklist) => {
      return checklist.todos.reduce(
        (accumulator, todo) => accumulator + todo.isDone,
        0
      );
    });
    sumTodosDone = sumTodosDone.reduce(
      (accumulator, todo) => accumulator + todo,
      0
    );
  }
  // console.log(sumTodosDone);

  useEffect(() => {
    onSetLabels();
    onSetBadges();
  }, [task]);

  const onSetBadges = () => {};

  const onSetLabels = async () => {
    const newLabels = await labelService.getLabelsById(boardId, task);
    setLabels(newLabels);
  };

  const onOpenTaskDetails = () => {
    navigate(`/board/${boardId}/${groupId}/${task.id}`);
  };

  const onRemoveTask = (ev) => {
    ev.stopPropagation();
    dispatch(removeTask(boardId, groupId, task.id));
  };

  const onToggleLabelPreview = (ev) => {
    ev.stopPropagation();
    console.log(ev.target);
  };

  if (task.id === "TlqoQb") {
    console.log(task.coverSize);
    console.log(typeof task.style);
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
          {task?.style?.backgroundColor && task.coverSize === "uncover" && (
            <div style={task.style} className="task-preview-color-top"></div>
          )}

          {/* {task?.style?.backgroundColor && task.coverSize === "cover" && <div style={task.style} className="task-preview-cover-container">} */}
            <div style={task.coverSize === "cover" ? task.style : {}} className="task-preview-container">
              <div className="task-preview-edit-icon">
                <BsPencil />
              </div>
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
              <div className="badges">
                {!!sumTodos && (
                  <div className="badge">
                    <div>
                      <FiCheckSquare />
                    </div>
                    <div>
                      {sumTodosDone}/{sumTodos}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        // { </div>
      )}
    </Draggable>
  );
};
