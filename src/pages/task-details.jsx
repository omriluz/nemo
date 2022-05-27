import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { taskService } from "../services/task.service";
import { TaskSidebar } from "../cmps/board-app/task/task-sidebar";

export const TaskDetails = () => {
  const { boardId, groupId, taskId } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const taskFromService = await taskService.getTaskById(
      boardId,
      groupId,
      taskId
    )
    setTask(taskFromService);
  };

  if (task) {
      return <section className="task-details">
        <h1>{task.title}</h1>;
        <TaskSidebar/>
      </section> 
  }
};
