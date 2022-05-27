import { boardService } from "../../services/board.service.js";
import { getActionSetBoard } from "./board.action.js";

export function saveGroup(group, boardId, groupId) {    
    return async (dispatch) => {
        try {
            const board = await boardService.saveGroup(group, boardId, groupId)
            //  console.log('board', board)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('err in saving task')
        }
    }
}

export function removeGroup(groupId, boardId) {
    return async (dispatch) => {
        try {
            const board = await boardService.removeGroup(groupId, boardId)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('Cannot remove board', err)
        }
    }
}