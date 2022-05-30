import { boardService } from "./board.service"
import { taskService } from "./task.service"
import { utilService } from "./util.service"


export const checklistService = {
    removeChecklist,
    saveChecklist,
    saveTodo
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
async function saveChecklist(checklist, boardId, groupId, taskId) {
    const checklistId = checklist.id
    console.log(boardId, groupId, taskId, '!!!!!!');
    const taskToUpdate = await taskService.getTaskById(boardId, groupId, taskId)
    console.log('taskToUpdate', taskToUpdate)
    // console.log('checklistId', checklistId, taskToUpdate.checklists[0].id)
    const checklistIdx = taskToUpdate.checklists.findIndex(checklist => checklistId === checklist.id)
    taskToUpdate.checklists[checklistIdx] = checklist
    console.log('taskToUpdate', taskToUpdate)
    return taskService.saveTask(taskToUpdate, boardId, groupId)
}
async function saveTodo(todo, checklistId, boardId, groupId, taskId) {
    const todoId = todo.id
    console.log(boardId, groupId, taskId, '!!!!!!');
    const taskToUpdate = await taskService.getTaskById(boardId, groupId, taskId)
    console.log('taskToUpdate', taskToUpdate)
    // console.log('checklistId', checklistId, taskToUpdate.checklists[0].id)
    const checklistIdx = taskToUpdate.checklists.findIndex(checklist => checklistId === checklist.id)
    const todoIdx = taskToUpdate.checklists[checklistIdx].todos.findIndex(todo => todoId === todo.id)
    if (todoIdx === -1) taskToUpdate.checklists[checklistIdx].todos.push(todo)
    else taskToUpdate.checklists[checklistIdx].todos[todoIdx] = todo
    console.log('taskToUpdate', taskToUpdate)
    return taskService.saveTask(taskToUpdate, boardId, groupId)
}


