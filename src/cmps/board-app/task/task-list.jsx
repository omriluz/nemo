import { TaskPreview } from './task-preview'




export const TaskList = ({ tasks, groupId, boardId }) => {


    return <section className="task-list">
        {tasks.map(task => {
            return <TaskPreview key={task.id} task={task} groupId={groupId} boardId={boardId} />

        })}

    </section>
}