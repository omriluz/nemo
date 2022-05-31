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
import {GrClose} from 'react-icons/gr'

export const TaskDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { boardId, groupId, taskId } = useParams();
  const [task, setTask] = useState();
  const [labels, setLabels] = useState();
  const { board } = useSelector((storeState) => storeState.boardModule)

  //getting the board for the labels
  // const { board } = useSelector((storeState) => storeState.boardModule);

  useEffect(() => {
    loadTask();
    loadBoardLabels();
  }, [board]);

//    useEffect(() => {
//      onLoadBoard()
//  }, [board])

const onLoadBoard = () => {
  dispatch(loadBoard(boardId))
}

  const loadTask = async () => {
    const taskFromService = await taskService.getTaskById(
      boardId,
      groupId,
      taskId
    );
    setTask(taskFromService);
  };

  const loadBoardLabels = async () => {
    const boardFromService = await boardService.getById(boardId);
    setLabels(boardFromService.labels);
  };

  const onOpenLabels = () => {};

  const onCreateLabel = () => {
    console.log("fdasfds");
  };

  const handleKeyEvent = (e) => {
    if (e.key === "Escape") navigate(-1);
  };

  
  if (task) {
    return (
      // <section onClick={() => console.log('fdasiofjd')} className="task-details-wrapper">
      <section
        tabIndex={"0"}
        onKeyDown={handleKeyEvent}
        className="task-details-wrapper"
      >
        <div className="task-details">
          <div className="task-details-back-btn" onClick={() => navigate(-1)}><GrClose/> </div>
          <div className="task-details-header">
            <h1 className="task-details-title">{task.title}</h1>
            {/* <textarea className="task-details-title">{task.title}</textarea> */}
            <p>
              In list <span className="task-title-group">TODO</span>
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
            />
          </div>
        </div>
      </section>
    );
  }
};

{
  /* 
          <h2>label ids:</h2>
          {task.labelIds.map((a) => {
            return <p key={a}>{a}</p>;
          })} */
}
{
  /* <Checklists checklists={task.checklists} boardId={boardId} groupId={groupId} taskId={taskId} /> */
}
{
  /* <Labels
            labels={labels}
            boardId={boardId}
            groupId={groupId}
            taskId={taskId}
          /> */
}
