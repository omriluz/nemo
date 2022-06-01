import { TaskDetailsMainCmps } from './task-details-main-cmps.jsx'
import {DataGutter} from './data-gutter.jsx'

export const TaskDetailsMain = ({ task, boardId, groupId }) => {
    return <div className="task-details-main">
        {/* <DataGutter/> */}
        <TaskDetailsMainCmps task={task} boardId={boardId} groupId={groupId} />
    </div>
}


