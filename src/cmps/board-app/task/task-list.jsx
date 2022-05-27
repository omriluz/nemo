import { TaskPreview } from './task-preview'
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { saveTask } from '../../../store/actions/task.action.js'



export const TaskList = ({ tasks, groupId, boardId }) => {
    // const [isAddTask, setIsAddTask] = useState(false)
    // const dispatch = useDispatch()

    // const handleChangeTask = ev => {
    //     const field = ev.target.name
    //     const value = ev.target.value
    //     setTaskTitle({ [field]: value })
    // }

    // const onSaveTask = (ev = null) => {
    //     if (ev) ev.preventDefault()
    //     dispatch(saveTask(taskTitle, boardId, group.id))
    //     setIsAddTask(false)
    //     setTaskTitle({ title: '' })

    // }

    return <section className="task-list">
        {tasks.map(task => {
            return <TaskPreview key={task.id} task={task} groupId={groupId} boardId={boardId} />

        })}
        {/* {!isAddTask && <div className='add-task-container flex' onClick={() => setIsAddTask(true)} ><IoAdd /><p>Add a card</p> </div>}

        {isAddTask && <div className="add-task-open"> <form onSubmit={onSaveTask}>
            <textarea className='task-txt'
                name="title"
                placeholder="Enter a title for this card..."
                value={taskTitle.title}
                onChange={handleChangeTask}
            >

            </textarea>
            <div className='btn-add-task '> <button >Add card</button> <span className='' onClick={() => setIsAddTask(false)}><IoMdClose /></span></div>
        </form> </div>} */}
    </section>
}