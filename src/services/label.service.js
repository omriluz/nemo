import { boardService } from "./board.service";
import { taskService } from "./task.service";

export const labelService = {
    toggleLabel,
    getLabelsById,
    // getLabelById,
    // addNewLabel
    // editLabel
}


async function toggleLabel(boardId, groupId, taskId, labelId) {
    try {
        let task = await taskService.getTaskById(boardId, groupId, taskId)
        const isInLabels = task?.labelIds.filter(currLabelId => currLabelId === labelId).length
        if (isInLabels) {
            task.labelIds = task.labelIds.filter(currLabelId => currLabelId !== labelId)
        } else {
            task.labelIds.push(labelId)
        }
        return task
    } catch (error) {
        console.log('in label service:', error);
    }
}



//async function getLabelsById(boardId, groupId, task) {

async function getLabelsById(boardId, task) {
    const board = await boardService.getById(boardId)
    const labels = board.labels.filter(label => task.labelIds.includes(label.id))
    return labels
}