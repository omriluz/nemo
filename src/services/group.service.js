import { boardService } from "./board.service";
import { utilService } from "./util.service";

export const groupService = {
    saveGroup,
    removeGroup,
}


async function saveGroup(group, boardId, groupId) {
    console.log('hi!');
    // var savedBoard
    if (groupId) {
        let board = await boardService.getById(boardId)
        const idx = board.groups.findIndex(group => groupId === group.id)
        board.groups[idx].title = group.title
        boardService.save(board)
        //     boardChannel.postMessage(getActionUpdateBoard(savedBoard))
        return board
    } else {
        // Later, owner is set by the backend
        group.id = utilService.makeId()
        group.tasks = []
        const board = await boardService.getById(boardId)
        board.groups.push(group)
        boardService.save(board)
        // boardChannel.postMessage(getActionAddBoard(savedBoard))
        return board
    }
}

async function removeGroup(groupId, boardId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    const board = await boardService.getById(boardId)
    const idx = board.groups.findIndex(group => group.id === groupId)
    board.groups.splice(idx, 1)
    // boardChannel.postMessage(getActionRemoveBoard(boardId))
    boardService.save(board)
    return board
}
