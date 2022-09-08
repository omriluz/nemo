import { TaskList } from "../task/task-list.jsx";
import { MdMoreHoriz } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { removeGroup, saveGroup } from "../../../store/actions/group.action.js";
import { saveTask } from "../../../store/actions/task.action.js";
import { useDispatch, useSelector } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { userService } from "../../../services/user.service.js";
import { useForm } from "../../../hooks/useForm.js";

export const GroupPreview = ({ group, boardId, index, labelOpenState }) => {
  let { filterBy } = useSelector((storeState) => storeState.boardModule);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddTask, setIsAddTask] = useState(false);
  const [fields, handleChange, clearFields] = useForm({
    newTaskTitle: "",
    groupTitle: group.title,
  });

  const addTaskRef = useRef();
  function handleBackClick() {
    console.log("hi");
    addTaskRef.current?.focus();
    if (addTaskRef.current) addTaskRef.current.scrollIntoView();
  }

  useEffect(() => {}, [filterBy]);

  const onRemoveGroup = () => {
    dispatch(removeGroup(group.id, boardId));
  };

  const onSaveGroup = (ev = null) => {
    dispatch(saveGroup(fields.groupTitle, boardId, group.id));
  };

  const onHandleKeySubmit = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      onSaveTask();
    }
  };

  const onSaveTask = (ev = null) => {
    if (ev) ev.preventDefault();
    if (fields.newTaskTitle) {
      const activity = {
        txt: "added this card to " + group.title,
        boardTxt: "added " + fields.newTaskTitle + " to " + group.title,
        byMember: userService.getLoggedinUser() || {
          username: "guest",
          fullname: "guest",
          imgUrl: "https://www.computerhope.com/jargon/g/guest-user.jpg",
        },
      };
      const taskToAdd = { title: fields.newTaskTitle };
      dispatch(saveTask(taskToAdd, boardId, group.id, activity));
      clearFields("newTaskTitle");
    }
    handleBackClick();
  };

  const tasksToShow = () => {
    let taskToShow = group.tasks;
    if (filterBy.txt) {
      taskToShow = group.tasks.filter((task) =>
        task.title.toLowerCase().includes(filterBy.txt.toLowerCase())
      );
    }

    if (filterBy.labelIds.length > 0) {
      filterBy.labelIds.forEach(
        (id) =>
          (taskToShow = taskToShow.filter((task) => task.labelIds.includes(id)))
      );
    }

    if (filterBy.members?.length) {
      taskToShow = taskToShow.filter((task) =>
        task.members.some((member) => filterBy.members.includes(member._id))
      );
    }

    return taskToShow;
  };

  return (
    <>
      <div className="group-preview-wrapper">
        <Draggable draggableId={group.id} index={index}>
          {(provided) => (
            <section
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className="group-preview"
            >
              <div className="group-preview-header">
                <input
                  className="group-preview-title"
                  type="text"
                  name="groupTitle"
                  onBlur={onSaveGroup}
                  value={fields.groupTitle}
                  onChange={handleChange}
                />
                <div className="add-action">
                  <MdMoreHoriz />
                </div>
              </div>
              <div className="task-wrapper">
                <div className="group-preview-main">
                  <TaskList
                    tasks={tasksToShow()}
                    groupId={group.id}
                    boardId={boardId}
                    labelOpenState={labelOpenState}
                  />
                  {isAddTask && (
                    <div className="add-task-open">
                      <form onSubmit={onSaveTask}>
                        <textarea
                          className="task-txt"
                          name="newTaskTitle"
                          placeholder="Enter a title for this card..."
                          value={fields.newTaskTitle}
                          onChange={handleChange}
                          onKeyDown={onHandleKeySubmit}
                          autoFocus
                        ></textarea>
                        <div ref={addTaskRef} className="btn-add-task ">
                          <button>Add card</button>
                          <span onClick={() => setIsAddTask(false)}>
                            <IoMdClose />
                          </span>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
              <div className="add-task-wrapper">
                {!isAddTask && (
                  <div
                    className="add-task-container flex"
                    onClick={() => {
                      setIsAddTask(true);
                      handleBackClick();
                    }}
                  >
                    <IoAdd />
                    <p>Add a card</p>
                  </div>
                )}
              </div>
            </section>
          )}
        </Draggable>
      </div>
    </>
  );
};
