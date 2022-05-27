import { boardService } from "./board.service"
import { utilService } from "./util.service"

export const taskService = {
    removeTask,
    getTaskById,
    saveTask
}

async function saveTask(task, boardId, groupId, activity) {
    if (task.id) {
        console.log('task', task)
        let board = await boardService.getById(boardId)
        console.log('board', board)
        const groupIdx = board.groups.findIndex(group => groupId === group.id)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(currTask => currTask.id === task.id)
        board.groups[groupIdx].tasks[taskIdx] = task
        boardService.save(board)
        return board
    } else {
        // Later, owner is set by the backend
        task.id = utilService.makeId()
        const board = await boardService.getById(boardId)
        const idx = board.groups.findIndex(group => groupId === group.id)
        board.groups[idx].tasks.push(task)
        boardService.save(board)
        // boardChannel.postMessage(getActionAddBoard(savedBoard))
        return board
    }
}


async function removeTask(boardId, groupId, taskId, activity) {
    //TODO: add try catch

    const board = await boardService.getById(boardId)
    const groupIdx = board.groups.findIndex(group => groupId === group.id)
    const taskIdx = board.groups[groupIdx].tasks.findIndex(task => taskId === task.id)
    board.groups[groupIdx].tasks.splice(taskIdx, 1)

    // board.activities.unshift(activity)
    boardService.save(board)
    return board
}

async function getTaskById(boardId, groupId, taskId) {
    //TODO: try catch here 
    try {
        const board = await boardService.getById(boardId)
        const groupIdx = board.groups.findIndex(group => groupId === group.id)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(task => taskId === task.id)
        return board.groups[groupIdx].tasks[taskIdx]
    } catch (err) {
        console.log(err);
    }
}
