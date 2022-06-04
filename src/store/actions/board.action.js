import { boardService } from "../../services/board.service.js";
import { userService } from "../../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'

// Action Creators:
export function getActionRemoveBoard(boardId) {
    return {
        type: 'REMOVE_BOARD',
        boardId
    }
}
export function getActionAddBoard(board) {
    return {
        type: 'ADD_BOARD',
        board
    }
}
export function getActionUpdateBoard(board) {
    return {
        type: 'UPDATE_BOARD',
        board
    }
}
export function getActionSetBoard(board) {
    return {
        type: 'SET_BOARD',
        board
    }
}

var subscriber

export function loadBoard(boardId) {
    return (dispatch) => {
        boardService.getById(boardId)
            .then(board => {
                dispatch({
                    type: 'SET_BOARD',
                    board
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load boards')
                console.log('Cannot load boards', err)
            })

        if (subscriber) boardService.unsubscribe(subscriber)
        subscriber = (ev) => {
            console.log('Got notified', ev.data)
            dispatch(ev.data)
        }
        boardService.subscribe(subscriber)
    }
}

export function loadBoards() {
    return (dispatch) => {
        boardService.query()
            .then(boards => {
                dispatch({
                    type: 'SET_BOARDS',
                    boards
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load boards')
                console.log('Cannot load boards', err)
            })

        if (subscriber) boardService.unsubscribe(subscriber)
        subscriber = (ev) => {
            dispatch(ev.data)
        }
        boardService.subscribe(subscriber)
    }
}

export function removeBoard(boardId) {
    return async (dispatch) => {
        try {
            await boardService.remove(boardId)
            dispatch(getActionRemoveBoard(boardId))
            showSuccessMsg('Board removed')
        } catch (err) {
            showErrorMsg('Cannot remove board')
            console.log('Cannot remove board', err)
        }
    }
}

export function addBoard(board) {
    return (dispatch) => {
        boardService.save(board)
            .then(savedBoard => {
                dispatch(getActionAddBoard(savedBoard))
            })
            .catch(err => {
                console.log('Cannot add board', err)
            })
    }
}

export function updateBoard(board) {
    console.log('board')
    return (dispatch) => {
        boardService.save(board)
            .then(savedBoard => {
                console.log('Updated Board:', savedBoard);
                dispatch(getActionUpdateBoard(savedBoard))
            })
            .catch(err => {
                console.log('Cannot save board', err)
            })
    }
}


export function saveBg(boardId, color) {
    return async (dispatch) => {
        try {
            const savedBoard = await boardService.getById(boardId)
            savedBoard.style.backgroundColor = color
            dispatch(getActionSetBoard(savedBoard))
        } catch (err) {
            console.log('err in saving task');
        }
    }
}




// Demo for Optimistic Mutation (IOW - Assuming the server call will work,
//  so updating the UI first)
export function onRemoveBoardOptimistic(boardId) {

    return (dispatch, getState) => {

        dispatch({
            type: 'REMOVE_BOARD',
            boardId
        })
        showSuccessMsg('Board removed')

        boardService.remove(boardId)
            .then(() => {
                console.log('Server Reported - Deleted Succesfully');
            })
            .catch(err => {
                showErrorMsg('Cannot remove board')
                console.log('Cannot load boards', err)
                dispatch({
                    type: 'UNDO_REMOVE_BOARD',
                })
            })
    }
}