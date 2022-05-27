import { checklistService } from "../../services/checklist.service.js";
import { getActionSetBoard } from "./board.action.js";

export function removeChecklist(boardId, groupId, taskId, checklistId, activity) {
    return async (dispatch) => {
        try {
            const board = await checklistService.removeChecklist(boardId, groupId, taskId, checklistId, activity)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('Err could not delete task', err);
        }
    }
}


// export function saveTask(task, boardId, groupId, activity) {
//     return async (dispatch) => {
//         try {
//             const board = await taskService.saveTask(task, boardId, groupId, activity)
//             dispatch(getActionSetBoard(board))
//         } catch (err) {
//             console.log('err in saving task');
//         }
//     }
// }