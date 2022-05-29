import { TaskPreview } from "./task-preview";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

export const TaskList = ({ tasks, groupId, boardId }) => {
  const [dTasks, updateDTasks] = useState(tasks);
  let arr = new Array(3).fill(null).map(() => (Math.round(Math.random() * 4) > 3))

  useEffect(() => {
    updateDTasks(tasks)
  }, [tasks])

  const handleOnDragEnd = (result) => {
    const items = Array.from(dTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateDTasks(items);
    // Moving from one list to another
  };



  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="task-list">
        {(provided) => (
          <section
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {dTasks.map((task, index) => {
              const isImgRender = Math.round(Math.random * 3) > 2
              return (
                <TaskPreview
                  key={task.id}
                  task={task}
                  boardId={boardId}
                  index={index}
                  groupId={groupId}
                  arr={arr}
                />
              );
            })}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
};
