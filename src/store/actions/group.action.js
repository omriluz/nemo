import { groupService } from "../../services/group.service.js";
import { getActionSetBoard } from "./board.action.js";

export function saveGroup(group, boardId, groupId) {
    return async (dispatch) => {
        try {
            const board = await groupService.saveGroup(group, boardId, groupId)
            //  console.log('board', board)
             console.log('got here')
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('err in saving task')
        }
    }
}

export function removeGroup(groupId, boardId) {
    // console.log(groupId, boardId)
    return async (dispatch) => {
        try {
            const board = await groupService.removeGroup(groupId, boardId)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('Cannot remove board', err)
        }
    }
}