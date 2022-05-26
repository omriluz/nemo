
import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'
import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/actions/board.action.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'board'
const boardChannel = new BroadcastChannel('boardChannel')
// const listeners = []

export const boardService = {
    // @@@@define board funcs (i.e saveBoard...)
    save,
    query,
    getById,
    remove,
    saveGroup,
    removeGroup,
    // getEmptyBoard,
    removeTask,
    getTaskById,
    subscribe,
    unsubscribe,
    saveTask
}
window.cs = boardService;


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
    // return axios.get(`/api/board/${boardId}`)
}
async function remove(boardId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    await storageService.remove(STORAGE_KEY, boardId)
    boardChannel.postMessage(getActionRemoveBoard(boardId))
}
async function save(board) {
    var savedBoard
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
        boardChannel.postMessage(getActionUpdateBoard(savedBoard))

    } else {
        // Later, owner is set by the backend
        board.owner = userService.getLoggedinUser()
        savedBoard = await storageService.post(STORAGE_KEY, board)
        boardChannel.postMessage(getActionAddBoard(savedBoard))
    }
    return savedBoard
}
async function saveGroup(group, boardId, groupId) {
    console.log('hi!');
    // var savedBoard
    if (groupId) {
        let board = await getById(boardId)
        const idx = board.groups.findIndex(group => groupId === group.id)
        board.groups[idx].title = group.title
        save(board)
        //     boardChannel.postMessage(getActionUpdateBoard(savedBoard))
        return board
    } else {
        // Later, owner is set by the backend
        group.id = utilService.makeId()
        group.tasks = []
        const board = await getById(boardId)
        board.groups.push(group)
        save(board)
        // boardChannel.postMessage(getActionAddBoard(savedBoard))
        return board
    }
}

async function removeGroup(groupId, boardId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    const board = await getById(boardId)
    const idx = board.groups.findIndex(group => group.id === groupId)
    board.groups.splice(idx, 1)
    // boardChannel.postMessage(getActionRemoveBoard(boardId))
    save(board)
    return board
}


// function getEmptyBoard() {
//     return {

//     }
// }




async function saveTask(task, boardId, groupId, activity, taskId) {
    if (taskId) {
        let board = await getById(boardId)
        const idx = board.groups.findIndex(group => groupId === group.id)
        board.groups[idx].title = task.title
        save(board)
        //     boardChannel.postMessage(getActionUpdateBoard(savedBoard))
        return board
    } else {
        // Later, owner is set by the backend
        task.id = utilService.makeId()
        const board = await getById(boardId)
        const idx = board.groups.findIndex(group => groupId === group.id)
        board.groups[idx].tasks.push(task)
        save(board)
        // boardChannel.postMessage(getActionAddBoard(savedBoard))
        return board
    }
}


async function removeTask(boardId, groupId, taskId, activity) {
    //TODO: add try catch

    const board = await getById(boardId)
    const groupIdx = board.groups.findIndex(group => groupId === group.id)
    const taskIdx = board.groups[groupIdx].tasks.findIndex(task => taskId === task.id)
    board.groups[groupIdx].tasks.splice(taskIdx, 1)

    // board.activities.unshift(activity)
    save(board)
    return board
}

async function getTaskById(boardId, groupId, taskId) {
    //TODO: try catch here 
    try {
        const board = await getById(boardId)
        // console.log('board is ', board);
        const groupIdx = board.groups.findIndex(group => groupId === group.id)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(task => taskId === task.id)
        console.log('the task is', board.groups[groupIdx].tasks[taskIdx]);
        return board.groups[groupIdx].tasks[taskIdx]
    } catch (err) {
        console.log(err);
    }
}

function subscribe(listener) {
    boardChannel.addEventListener('message', listener)
}
function unsubscribe(listener) {
    boardChannel.removeEventListener('message', listener)
}




const ourBoard = {
    "_id": utilService.makeId(),//mongoID
    "title": "Demo project",
    "archivedAt": null,
    "createdAt": utilService.makeId(),

    "createdBy": {
        "_id": utilService.makeId(),// mongoID
        "fullname": "Yonatan ben zeev",
        "imgUrl": "http://some-img"
    },
    "style": {
        // if the user chose an image, takes color from the api and sets it as appheader bgc
        // if only bgc picked sets it as the board bgc and darkens it for the appheader
        // will use actual css selectors and will be placed in the css props
        // backgroundImage:url('https://unsplash.it/100/100'),
        backgroundColor: "#026aa7"
    },

    "labels": [
        // first 6 labels will start without title
        {
            "id": utilService.makeId(),// localID
            "color": "#61bd4f"
        },
        {
            "id": utilService.makeId(), // localID
            "color": "#f2d600"
        },
        {
            "id": utilService.makeId(),// localID
            "color": "#ff9f1a"
        },
        {
            "id": utilService.makeId(),// localID
            "color": "#eb5a46"
        }, {
            "id": utilService.makeId(),// localID
            "color": "#eb5a46"
        }, {
            "id": utilService.makeId(),// localID
            "color": "#0079bf"
        }
    ],
    "members": [
        {
            "_id": utilService.makeId(), // mongoID
            "username": 'omritheking',// username needs to be added 
            "fullname": "omri luz",
            "imgUrl": "https://www.google.com"
        },
        {
            "_id": utilService.makeId(), //mongoID
            "username": 'yonatanbz6',
            "fullname": "yonatan ben zeev",
            "imgUrl": "https://www.google.com"
        },
        {
            "_id": utilService.makeId(), // mongoDB
            "fullname": "shneor rabinovitz",
            "username": 'shnrab123',
            "imgUrl": "https://www.google.com"
        }
    ],
    "groups": [
        {
            "id": utilService.makeId(), // localID
            "title": "Group 1",
            "archivedAt": null,
            "tasks": [
                {
                    "id": utilService.makeId(), // localID
                    "title": "Replace logo"
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Add Samples"
                }
            ],
            "style": {} //could add a feature of group background color styling
        },
        {
            "id": utilService.makeId(), // localID
            "title": "Group 2",
            "tasks": [
                {
                    "id": utilService.makeId(), // localID
                    "title": "Do that",
                    "archivedAt": null,
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                }
            ],
            "style": {} //could add a feature of group background color styling
        },
        {
            "id": utilService.makeId(), // localID
            "title": "Group 2",
            "tasks": [
                {
                    "id": utilService.makeId(), // localID
                    "title": "Do that",
                    "archivedAt": null,
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                }
            ],
            "style": {} //could add a feature of group background color styling
        },
        {
            "id": utilService.makeId(), // localID
            "title": "Group 2",
            "tasks": [
                {
                    "id": utilService.makeId(), // localID
                    "title": "Do that",
                    "archivedAt": null,
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                }
            ],
            "style": {} //could add a feature of group background color styling
        },
        {
            "id": utilService.makeId(), // localID
            "title": "Group 2",
            "tasks": [
                {
                    "id": utilService.makeId(), // localID
                    "title": "Do that",
                    "archivedAt": null,
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                }
            ],
            "style": {} //could add a feature of group background color styling
        },
        {
            "id": utilService.makeId(), // localID
            "title": "Group 2",
            "tasks": [
                {
                    "id": utilService.makeId(), // localID
                    "title": "Do that",
                    "archivedAt": null,
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                },
                {
                    "id": utilService.makeId(), // localID
                    "title": "Help me",
                    "status": "in-progress",// what is this necesarry for
                    "description": "description",
                    "comments": [
                        {
                            "id": utilService.makeId(), // localID
                            "txt": "also @yaronb please CR this",
                            "createdAt": utilService.makeId(),
                            "byMember": {
                                "_id": utilService.makeId(), // mongoID
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": utilService.makeId(), // localID
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": utilService.makeId(), // localID
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    // if member ids are extracted from stateStore
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": Date.now(),
                    "dueDate": null,
                    "byMember": "u101",
                    "style": {
                        backgroundColor: "#26de81"// change to backgroundColor to apply inline style
                    }
                }
            ],
            "style": {} //could add a feature of group background color styling
        }
    ],
    "activities": [
        {
            "id": utilService.makeId(), // localID
            "txt": "Changed Color",
            "createdAt": utilService.makeId(),
            "byMember": {
                "_id": utilService.makeId(), // mongoID
                "fullname": "Abi Abambi",
                "imgUrl": "http://some-img"
            },
            "task": {
                "id": utilService.makeId(), // localID
                "title": "Replace Logo"
            },
            "task": {
                "id": utilService.makeId(), // localID
                "title": "filter page"
            },
            "task": {
                "id": utilService.makeId(), // localID
                "title": "react delete component"
            },
            "task": {
                "id": utilService.makeId(), // localID
                "title": "reducer action"
            },
            "task": {
                "id": utilService.makeId(), // localID
                "title": "storeState update"
            }
        }
    ],
}

// TEST DATA
// storageService.post(STORAGE_KEY, ourBoard).then(x => console.log(x))

