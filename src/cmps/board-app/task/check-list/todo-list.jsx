import { useState } from 'react';
import { utilService } from '../../../../services/util.service.js';
import { TodoPreview } from './todos-preview.jsx'
import { saveTodo } from '../../../../store/actions/checklist.action.js';
import { useDispatch } from 'react-redux';

export const TodosList = ({ todos, checklistId, taskId, boardId, groupId }) => {
    const [isAddOpen, setIsAddOpen] = useState()
    const [todoTitle, setTodoTitle] = useState({ title: '' });
    const dispatch = useDispatch()



    const handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        setTodoTitle({ [field]: value });
    }


    const onAddTodo = () => {
        const updateTodo = { ...todoTitle, id: utilService.makeId(), isDone: false }
        // todos.push(updateTodo)
        dispatch(saveTodo(updateTodo, checklistId, boardId, groupId, taskId));
        setIsAddOpen(false)
        setTodoTitle({ title: "" });
    }


    return (
        <section className="todos-list">
            {todos.map(todo =>
                <TodoPreview
                    key={todo.id}
                    todo={todo}
                    checklistId={checklistId}
                    taskId={taskId}
                    boardId={boardId}
                    groupId={groupId}

                />)}
            {isAddOpen && <form className='todo-form' >
                <textarea
                    name="title"
                    className="add-todo-title"
                    value={todoTitle.title}
                    onChange={handleChange}
                    onBlur={() => setIsAddOpen(false)}
                    placeholder='Add an item'
                >
                </textarea>
                <div className="add-todo-btns">
                    <button onMouseDown={onAddTodo}>Add</button>
                    <span className="cancel" onClick={() => setIsAddOpen(false)}>
                        Cancel
                    </span>
                </div>
            </form>}

            {!isAddOpen &&
                <div className='todo-add'>
                    <button onClick={() => setIsAddOpen(true)}>Add an item</button>
                </div>}

        </section>
    )


}