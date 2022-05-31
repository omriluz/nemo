import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { taskService } from "../../../services/task.service";
import { TaskSidebar } from "./task-sidebar";
import { TaskDetailsMain } from "./task-details-main";
import { Checklists } from "./check-list/checklist";
import { useSelector } from "react-redux";
import { boardService } from "../../../services/board.service";
import { labelService } from "../../../services/label.service";
import { useDispatch } from "react-redux";
import { loadBoard } from "../../../store/actions/board.action";
import { GrClose } from 'react-icons/gr'
import { saveTask } from "../../../store/actions/task.action";
import { AiOutlineCreditCard } from "react-icons/ai";
export const TaskDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { boardId, groupId, taskId } = useParams();
  const [task, setTask] = useState(null);
  const [group, setGroup] = useState(null);
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [taskTitle, setTaskTitle] = useState(null);
  const [labels, setLabels] = useState();
  const { board } = useSelector((storeState) => storeState.boardModule)

  useEffect(() => {
    const currGroup = board?.groups.find(group => group.id === groupId);
    const currTask = currGroup?.tasks?.find(task => task.id === taskId);
    setTask(currTask)
    setGroup(currGroup)
    setTaskTitle({ title: currTask.title })
    loadBoardLabels();
  }, [board]);

  const loadBoardLabels = async () => {
    const boardFromService = await boardService.getById(boardId);
    setLabels(boardFromService.labels);
  };

  const onOpenLabels = () => { };

  const onCreateLabel = () => {
    console.log("fdasfds");
  };

  const handleKeyEvent = (e) => {
    if (e.key === "Escape") navigate(-1);
  };

  const handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setTaskTitle({ [field]: value });
  };

  const onSaveTask = (ev = null) => {
    if (ev) ev.preventDefault();
    task.title = taskTitle.title
    dispatch(saveTask(task, boardId, groupId));
    setTaskTitle({ title: taskTitle.title });
  };


  if (task, group) {
    return (
      // <section onClick={() => console.log('fdasiofjd')} className="task-details-wrapper">
      <section
        tabIndex={"0"}
        onKeyDown={handleKeyEvent}
        className="task-details-wrapper"
      >
        <div className="task-details">
          <div className="task-details-back-btn" onClick={() => navigate(-1)}><GrClose /> </div>
          <div className="task-details-header">
            <span className="header-icon"> <AiOutlineCreditCard /></span>
            <form onSubmit={onSaveTask}>
              <input
                onClick={() => setIsEditTitle(true)}
                className="task-details-title"
                type="text"
                name="title"
                onBlur={onSaveTask}
                value={taskTitle.title}
                onChange={handleChange}
              />
            </form>
            {/* <h1 className="task-details-title">{task.title}</h1> */}
            {/* <textarea className="task-details-title">{task.title}</textarea> */}
            <p>
              In list <span className="task-title-group">{group.title}</span>
            </p>
          </div>
          <div className="helper-container">
            <TaskDetailsMain task={task} boardId={boardId} groupId={groupId} />
            <TaskSidebar
              boardId={boardId}
              groupId={groupId}
              taskId={taskId}
              labels={labels}
              onOpenLabels={onOpenLabels}
              task={task}
            />
          </div>
        </div>
      </section>
    );
  }
};

