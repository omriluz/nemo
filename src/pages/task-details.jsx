import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { boardService } from "../services/board.service";

export const TaskDetails = () => {
  const { boardId, groupId, taskId } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const taskFromService = await boardService.getTaskById(
      boardId,
      groupId,
      taskId
    )
    setTask(taskFromService);
  };

  if (task) {
      return <h1>{task.title}</h1>;
  }
};
