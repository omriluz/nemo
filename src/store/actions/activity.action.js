import { activityService } from "../../services/activity.service.js";
import { getActionSetBoard } from "./board.action.js";

export function saveActivity(activity, boardId) {
    return async (dispatch) => {
        try {
            const board = await activityService.saveTask(task, boardId, groupId, activity)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('err in saving task');
        }
    }
}
