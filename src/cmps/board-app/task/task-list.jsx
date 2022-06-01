import { TaskPreview } from "./task-preview";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { memo, useEffect, useState } from "react";
import { setTasks } from "../../../store/actions/task.action";
import { useDispatch } from "react-redux";
import { utilService } from "../../../services/util.service";
export const TaskList = ({ tasks, groupId, boardId }) => {
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    console.log(result);
    const [reorderedItem] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderedItem);
    dispatch(setTasks(boardId, groupId, tasks));
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={groupId}  >
        {(provided) => (
          <section
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {tasks.map((task, index) => {
              return (
                <TaskPreview
                  key={task.id}
                  task={task}
                  boardId={boardId}
                  index={index}
                  groupId={groupId}
                />
              );
            })}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
}