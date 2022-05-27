import { boardService } from "./board.service"
import { taskService } from "./task.service"
import { utilService } from "./util.service"


export const checklistService = {
    removeChecklist,
    // getTaskById,
    // saveTask
}

async function removeChecklist(boardId, groupId, taskId, checklistId, activity) {
    const taskToUpdate = await taskService.getTaskById(boardId, groupId, taskId)
    console.log('checklistId', checklistId, taskToUpdate.checklists[0].id)
    const updateChecklists = taskToUpdate.checklists.filter(checklist => checklistId !== checklist.id)
    taskToUpdate.checklists = updateChecklists
    return taskService.saveTask(taskToUpdate, boardId, groupId, activity)
}


