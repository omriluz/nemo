import { TaskList } from '../task/task-list.jsx'
import { MdMoreHoriz } from "react-icons/md";
import { useState } from 'react'
import { removeGroup, saveGroup } from '../../../store/actions/group.action.js';
import {saveTask} from '../../../store/actions/task.action.js'
import { useDispatch } from 'react-redux'
import { IoAdd } from "react-icons/io5";


export const GroupPreview = ({ group, boardId }) => {
    const dispatch = useDispatch()
    const [isAddAction, setIsAddAction] = useState(false)
    const [isEditTitle, setIsEditTitle] = useState(false)
    const [isAddTask, setIsAddTask] = useState(false)
    const [groupTitle, setGroupTitle] = useState({ title: group.title })
    const [taskTitle, setTaskTitle] = useState({ title: '' })



    const onRemoveGroup = () => {
        dispatch(removeGroup(group.id, boardId))
    }

    const handleChange = ev => {
        const field = ev.target.name
        const value = ev.target.value
        setGroupTitle({ [field]: value })
    }

    const onSaveGroup = (ev = null) => {
        if (ev) ev.preventDefault()
        dispatch(saveGroup(groupTitle, boardId, group.id))
    }

    const handleChangeTask = ev => {
        const field = ev.target.name
        const value = ev.target.value
        setTaskTitle({ [field]: value })
    }

    const onSaveTask = (ev = null) => {
        if (ev) ev.preventDefault()
        dispatch(saveTask(taskTitle, boardId, group.id))
        setIsAddTask(false)
        setTaskTitle({ title: '' })

    }

    return <section className="group-preview-wrapper">
        <div className="group-preview">

            <div className='group-preview-header flex space-between '>
                <div className='group-title-container'>
                    <form onSubmit={onSaveGroup}>
                        <input onClick={() => setIsEditTitle(true)}
                            className={` ${isEditTitle ? 'active' : ''}`}
                            type="text" name="title"
                            onBlur={() => setIsEditTitle(false)}
                            value={groupTitle.title}
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <span onClick={() => setIsAddAction(!isAddAction)}><MdMoreHoriz />
                </span>
            </div>
            <TaskList tasks={group.tasks} groupId={group.id} boardId={boardId} />
        </div>

        {isAddAction && <section className="action-modal" >

            <button onClick={onRemoveGroup}>Delete</button>
        </section>}

        <section className='add-task-container' >
            {!isAddTask && <div className='add-task'><button onClick={() => setIsAddTask(true)} ><IoAdd /> Add a card</button></div>}
            {isAddTask && <form onSubmit={onSaveTask}>
                <textarea className='task-txt'
                    name="title"
                    placeholder="Enter a title for this card..."
                    value={taskTitle.title}
                    onChange={handleChangeTask}
                >

                </textarea>
                <button>Add Card</button> <button onClick={() => setIsAddTask(false)}>X</button>
            </form>}
        </section>

    </section>

}