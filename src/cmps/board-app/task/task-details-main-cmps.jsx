import { Description } from "./task-description.jsx"
import { Checklists } from "./check-list/checklist.jsx"


export const TaskDetailsMainCmps = ({ task, boardId, groupId }) => {
    return <>
        {/* will only have one description and one activity */}
        {/* checklist and attachment need to render the amount that exists from model */}
        <Description task={task} boardId={boardId} groupId={groupId} />
        <Checklists task={task} boardId={boardId} groupId={groupId} />
        {/* <Attachment/> */}
        {/* <Activity/> */}
    </>
}