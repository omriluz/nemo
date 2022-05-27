import { labelService } from "../../services/label.service.js";
import { taskService } from "../../services/task.service.js";
import { getActionSetBoard } from "./board.action.js";


export function toggleLabel(boardId, groupId, taskId, labelId, activity) {
    // neeeds to testttt
    return async (dispatch) => {
        try {
            const task = await labelService.toggleLabel(boardId, groupId, taskId, labelId, activity)
           const board = await taskService.saveTask(task,boardId,groupId)
           console.log(board,'board@@@');
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('Err could not delete task', err);
        }
    }
}


export function saveTask(task, boardId, groupId, activity) {
    return async (dispatch) => {
        try {
            const board = await taskService.saveTask(task, boardId, groupId, activity)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('err in saving task');
        }
    }
}