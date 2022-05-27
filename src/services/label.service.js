import { taskService } from "./task.service";

export const labelService = {
    toggleLabel,
    // getLabelsById,
    // getLabelById,
    // addNewLabel
}


async function toggleLabel(boardId,groupId,taskId,labelId) {
    let task = await taskService.getTaskById(boardId, groupId,taskId)
    const isInLabels = task.labelIds.filter(currLabelId => currLabelId === labelId).length
    if (isInLabels) {
        task.labelIds = task.labelIds.filter(currLabelId => currLabelId !== labelId)
    } else {
        task.labelIds.push(labelId)
    }
    return task
}

