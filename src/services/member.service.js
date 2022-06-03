import { taskService } from "./task.service"

export const memberService = {
    toggleMember,
    // getMembersById,
    // getMemberById,
    // addNewMember
    // editMember
}

async function toggleMember(boardId, groupId, taskId, user) {
    try {
        let task = await taskService.getTaskById(boardId, groupId, taskId)
        
        const isInMembers = task?.members.filter(currMember => currMember._id === user._id).length
        if (isInMembers) {
            task.members = task.members.filter(currMember => currMember._id !== user._id)
        } else {
            task.members.push(user)
        }
        return task
    } catch (error) {
        console.log('in member service:', error);
    }
}