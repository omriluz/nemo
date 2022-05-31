import { TaskList } from "../task/task-list.jsx";
import { MdMoreHoriz } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { removeGroup, saveGroup } from "../../../store/actions/group.action.js";
import { saveTask } from "../../../store/actions/task.action.js";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

export const GroupPreview = ({ group, boardId, index }) => {
  const dispatch = useDispatch();
  const [isAddAction, setIsAddAction] = useState(false);
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isAddTask, setIsAddTask] = useState(false);
  const [groupTitle, setGroupTitle] = useState({ title: group.title });
  const [taskTitle, setTaskTitle] = useState({ title: "" });

  const onRemoveGroup = () => {
    dispatch(removeGroup(group.id, boardId));
  };

  const handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setGroupTitle({ [field]: value });
  };

  const onSaveGroup = (ev = null) => {
    if (ev) ev.preventDefault();
    dispatch(saveGroup(groupTitle, boardId, group.id));
  };

  const handleChangeTask = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setTaskTitle({ [field]: value });
  };

  const onSaveTask = (ev = null) => {
    if (ev) ev.preventDefault();
    dispatch(saveTask(taskTitle, boardId, group.id));
    setTaskTitle({ title: "" });
  };

  // const handleMouse = (ev) => {
  // ev.preventDefault()
  // console.log('ev',ev);
  // console.log('ev',ev.target);
  // ev.target.unbind()
  // }

  return (
    <div className="group-preview-wrapper">
      <Draggable draggableId={group.id} index={index}>
        {(provided) => (
          <section
            className="group-preview"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          // onMouseDown={handleMouse}
          >
            <div className="group-preview-header flex justify-space-between algin-center ">
              <form onSubmit={onSaveGroup}>
                <input
                  onClick={() => setIsEditTitle(true)}
                  className="group-preview-title"
                  type="text"
                  name="title"
                  onBlur={onSaveGroup}
                  value={groupTitle.title}
                  onChange={handleChange}
                />
              </form>
              <div
                className="add-action"
                onClick={() => setIsAddAction(!isAddAction)}
              >
                <MdMoreHoriz />
              </div>
            </div>
            <div className="task-wrapper">
              <div className="group-preview-main">
                <TaskList
                  tasks={group.tasks}
                  groupId={group.id}
                  boardId={boardId}
                />
              </div>
              {/* </div> */}

              {isAddAction && (
                <section className="action-modal">
                  <button onClick={onRemoveGroup}>Delete</button>
                </section>
              )}

              {!isAddTask && (
                <div
                  className="add-task-container flex"
                  onClick={() => setIsAddTask(true)}
                >
                  <IoAdd />
                  <p>Add a card</p>
                </div>
              )}

              {isAddTask && (
                <div className="add-task-open">
                  <form onSubmit={onSaveTask}>
                    <textarea
                      className="task-txt"
                      name="title"
                      placeholder="Enter a title for this card..."
                      value={taskTitle.title}
                      onChange={handleChangeTask}
                    ></textarea>
                    <div className="btn-add-task ">
                      <button>Add card</button>
                      <span className="" onClick={() => setIsAddTask(false)}>
                        <IoMdClose />
                      </span>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </section>
        )}
      </Draggable>
    </div>
  );
};
