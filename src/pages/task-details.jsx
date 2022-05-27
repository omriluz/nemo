import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { taskService } from "../services/task.service";
import { TaskSidebar } from "../cmps/board-app/task/task-sidebar";
import { useSelector } from "react-redux";
import { Labels } from "../cmps/board-app/task/labels.jsx";
import { boardService } from "../services/board.service";
import { labelService } from "../services/label.service";

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

  const onOpenLabels = () => {};

  const onCreateLabel = () => {
    console.log('fdasfds');
  }

  // console.log("task", task);
  // console.log("task labels", task?.labelIds);
  if (task) {
    return (
      <section className="task-details">
        <h1>{task.title}</h1>;
        <h2>label ids:</h2>
        {task.labelIds.map(a => {
          return <p key={a}>{a}</p>
        })}
        <TaskSidebar onOpenLabels={onOpenLabels} />
        <Labels labels={labels} boardId={boardId} groupId={groupId} taskId={taskId}/>
      </section>
    );
  }
};
