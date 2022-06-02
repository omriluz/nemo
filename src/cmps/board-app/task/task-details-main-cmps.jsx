import { Description } from "./task-description.jsx"
import { Checklists } from "./check-list/checklist.jsx"
import { DatePreview } from './dates/date-preview'
import { TaskAttachment } from './attachment/task-attachment'


export const TaskDetailsMainCmps = ({ task, boardId, groupId }) => {
    return <>
        {/* will only have one description and one activity */}
        {/* checklist and attachment need to render the amount that exists from model */}

        {task.dueDate && <section className="type-container"><span className="title-due-date">
            <h4>Due date</h4></span><div className="items-container flex align-center" >
                <DatePreview task={task} dueDate={task.dueDate} boardId={boardId} groupId={groupId} /></div></section>}
        <Description task={task} boardId={boardId} groupId={groupId} />
        {task.attachments && (<TaskAttachment task={task} boardId={boardId} groupId={groupId} />)}
        <Checklists task={task} boardId={boardId} groupId={groupId} />
        {/* <Attachment/> */}
        {/* <Activity/> */}
    </>
}
