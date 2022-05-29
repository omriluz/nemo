import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { taskService } from "../../../services/task.service";
import { TaskSidebar } from "./task-sidebar";
import { Checklists } from "./check-list/checklist";
import { useSelector } from "react-redux";
import { Labels } from "./labels.jsx";
import { boardService } from "../../../services/board.service";
import { labelService } from "../../../services/label.service";

export const TaskDetails = () => {
  const { boardId, groupId, taskId } = useParams();
  const [task, setTask] = useState();
  const [labels, setLabels] = useState();
  //getting the board for the module
  // const { board } = useSelector((storeState) => storeState.boardModule);
  useEffect(() => {
    loadTask();
    loadBoardLabels();
  }, []);

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

  const onOpenLabels = () => { };

  const onCreateLabel = () => {
    console.log("fdasfds");
  };

  // console.log("task", task);
  // console.log("task labels", task?.labelIds);
  if (task) {
    return (
      <section className="task-details-wrapper">
        <div className="task-details">
          <div className="task-details-header">
            <h1>{task.title}</h1>
            <p>
              In list <span className="task-title-group">TODO</span>
            </p>
          </div>
          <div className="task-details-sidebar">
            <TaskSidebar onOpenLabels={onOpenLabels} />
          </div>
          <h2>label ids:</h2>
          {/* {task.labelIds.map((a) => {
            return <p key={a}>{a}</p>;
          })} */}
          {/* <Checklists checklists={task.checklists} boardId={boardId} groupId={groupId} taskId={taskId} /> */}
          <Labels
            labels={labels}
            boardId={boardId}
            groupId={groupId}
            taskId={taskId}
          />
        </div>
      </section>
    );
  }
};
