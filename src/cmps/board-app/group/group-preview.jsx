import { TaskList } from "../task/task-list.jsx";
import { MdMoreHoriz } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, memo, useRef, useEffect } from "react";
import { removeGroup, saveGroup } from "../../../store/actions/group.action.js";
import { saveTask } from "../../../store/actions/task.action.js";
import { useDispatch, useSelector } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { userService } from "../../../services/user.service.js";

export const GroupPreview = ({ group, boardId, index, labelOpenState }) => {
  // console.log('rendered group');
  let { filterBy } = useSelector((storeState) => storeState.boardModule);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddTask, setIsAddTask] = useState(false);
  const [groupTitle, setGroupTitle] = useState({ title: group.title });
  const [newTask, setNewTask] = useState({ title: "" });

  const addTaskRef = useRef();
  function handleBackClick() {
    if (addTaskRef.current) addTaskRef.current.scrollIntoView()
  }

  useEffect(() => {

  }, [filterBy]);

  const onRemoveGroup = () => {
    dispatch(removeGroup(group.id, boardId));
  };

  const handleChange = (ev, setStateFunc) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setStateFunc({ [field]: value });
  };

  const onSaveGroup = (ev = null) => {
    if (ev) ev.preventDefault();
    dispatch(saveGroup(groupTitle, boardId, group.id));
  };

  const onHandleKeySubmit = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      onSaveTask();
    }
  };

  const onSaveTask = (ev = null) => {
    if (ev) ev.preventDefault();
    handleBackClick()
    if (newTask.title) {
      const activity = {
        txt: "added this card to " + group.title,
        boardTxt: "added " + newTask.title + " to " + group.title,
        byMember: userService.getLoggedinUser(),
      };
      dispatch(saveTask(newTask, boardId, group.id, activity));
      setNewTask({ title: "" });
    }
  };

  const tasksToShow = () => {
    var taskToShow = group.tasks
    if (filterBy.txt) {
      taskToShow = group.tasks.filter(task => task.title.toLowerCase().includes(filterBy.txt.toLowerCase()))
    }
    if (filterBy.labelIds.length > 0) {
      filterBy.labelIds.forEach(id => taskToShow = taskToShow.filter(task => task.labelIds.includes(id)))
    }
    return taskToShow
  }
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
            <div className="group-preview-header">
              <input
                className="group-preview-title"
                type="text"
                name="title"
                onBlur={onSaveGroup}
                value={groupTitle.title}
                onChange={(ev) => handleChange(ev, setGroupTitle)}
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
                        name="title"
                        placeholder="Enter a title for this card..."
                        value={newTask.title}
                        onChange={(ev) => handleChange(ev, setNewTask)}
                        onKeyDown={onHandleKeySubmit}
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
                  onClick={() => { setIsAddTask(true); handleBackClick() }}
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
  );
};
