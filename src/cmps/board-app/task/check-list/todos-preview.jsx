import { useEffect, useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { saveTodo } from '../../../../store/actions/checklist.action.js';
import { useDispatch } from "react-redux";


export const TodoPreview = ({ todo, checklistId, taskId, boardId, groupId }) => {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [todoTitle, setTodoTitle] = useState({ title: todo.title });
    const dispatch = useDispatch()



    const handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        setTodoTitle({ [field]: value });
    }

    const onSaveTask = () => {
        todo.title = todoTitle.title
        dispatch(saveTodo(todo, checklistId, boardId, groupId, taskId))
        setIsEditOpen(false)
    }

    const onIsDone = () => {
        todo.isDone = !todo.isDone
        dispatch(saveTodo(todo, checklistId, boardId, groupId, taskId))
    }


    return (
        <section className="todo-preview">
            <div className="todo-check-box-blank flex">
                {!todo.isDone && <div onClick={onIsDone} className="todo-check-box">
                </div>} {todo.isDone && <div className="todo-check-box-checked" onClick={onIsDone}><IoCheckbox /></div>}
                <form >
                    <textarea onClick={() => setIsEditOpen(true)}
                        name="title"
                        className={`todo-title ${todo.isDone ? 'checked' : ''}`}
                        value={todoTitle.title}
                        onChange={handleChange}
                        onBlur={() => setIsEditOpen(false)}
                    >
                    </textarea>
                    {isEditOpen && <div className="edit-checklist-title">
                        <button onMouseDown={onSaveTask}>Save</button>
                        <span className="cancel" onClick={() => setIsEditOpen(false)}>
                            <IoMdClose />
                        </span>
                    </div>}
                </form>
            </div>

        </section >
    )


}

