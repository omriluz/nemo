import { Description } from "./task-description.jsx"


export const TaskDetailsMainCmps = ({ task, boardId, groupId }) => {
    return <>
        {/* will only have one description and one activity */}
        {/* checklist and attachment need to render the amount that exists from model */}
        <Description task={task} boardId={boardId} groupId={groupId} />
        {/* <Checklist/> */}
        {/* <Attachment/> */}
        {/* <Activity/> */}
    </>
}