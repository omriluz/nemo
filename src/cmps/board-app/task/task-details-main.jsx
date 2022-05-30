import { TaskDetailsMainCmps } from './task-details-main-cmps.jsx'
export const TaskDetailsMain = ({ task, boardId, groupId }) => {
    return <div className="task-details-main">
        {/* <DataGutter/> */}
        <TaskDetailsMainCmps task={task} boardId={boardId} groupId={groupId} />
    </div>
}


