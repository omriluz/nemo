const board = {
    "_id": "b101",
    "title": "Robot dev proj",
    "archivedAt": 1589983468418,
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u101",
        "fullname": "Abi Abambi",
        "imgUrl": "http://some-img"
    },
    "style": {},
    "labels": [
        {
            "id": "l101",
            "title": "Done",
            "color": "#61bd4f"
        },
        {
            "id": "l102",
            "title": "Progress",
            "color": "#61bd33"
        }
    ],
    "members": [
        {
            "_id": "u101",
            "fullname": "Tal Tarablus",
            "imgUrl": "https://www.google.com"
        }
    ],
    "groups": [
        {
            "id": "g101",
            "title": "Group 1",
            "archivedAt": 1589983468418,
            "tasks": [
                {
                    "id": "c101",
                    "title": "Replace logo"
                },
                {
                    "id": "c102",
                    "title": "Add Samples"
                }
            ],
            "style": {} // why is there style on a group? does not seem relevant
        },
        {
            "id": "g102",
            "title": "Group 2",
            "tasks": [
                {
                    "id": "c103",
                    "title": "Do that",
                    "archivedAt": 1589983468418,
                },
                {
                    "id": "c104",
                    "title": "Help me",
                    "status": "in-progress",
                    "description": "description",
                    "comments": [
                        {
                            "id": "ZdPnm",
                            "txt": "also @yaronb please CR this",
                            "createdAt": 1590999817436.0,
                            "byMember": {
                                "_id": "u101",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        }
                    ],
                    "checklists": [
                        {
                            "id": "YEhmF",
                            "title": "Checklist",
                            "todos": [
                                {
                                    "id": "212jX",
                                    "title": "To Do 1",
                                    "isDone": false
                                }
                            ]
                        }
                    ],
                    "memberIds": ["u101"],
                    "labelIds": ["l101", "l102"],
                    "createdAt": 1590999730348,
                    "dueDate": 16156215211,
                    "byMember": {
                        "_id": "u101",
                        "username": "Tal",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                    },
                    "style": {
                        "bgColor": "#26de81"
                    }
                }
            ],
            "style": {} // why is there style on a group? does not seem relevant
        }
    ],
    "activities": [
        {
            "id": "a101",
            "txt": "Changed Color",
            "createdAt": 154514,
            "byMember": {
                "_id": "u101",
                "fullname": "Abi Abambi",
                "imgUrl": "http://some-img"
            },
            "task": {
                "id": "c101",
                "title": "Replace Logo"
            }
        }
    ],
    // for monday
    "cmpsOrder": ["status-picker", "member-picker", "date-picker"]
}
const user = {
    "_id": utilService.makeId(), // mongoID
    "fullname": "yonatan ben zeev",
    "username": "ybz6@gmail.com",
    "password": "ybz123",    
    "imgUrl": "unsplash.it/100/100",
    "mentions": [{
        "id": "m101",
        "boardId": "m101",
        "taskId": "t101"
    }]
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
        backgroundImage:url('https://unsplash.it/100/100'),
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
            "title": "Done",
            "color": "#61bd4f"
        },
        {
            "id": utilService.makeId(),// localID
            "title": "Progress",
            "color": "#61bd33"
        }
    ],
    "members": [
        {
            "_id": utilService.makeId(), // mongoID
            "username":'omritheking',// username needs to be added 
            "fullname": "omri luz",
            "imgUrl": "https://www.google.com"
        },
        {
            "_id": utilService.makeId(), //mongoID
            "username":'yonatanbz6',
            "fullname": "yonatan ben zeev",
            "imgUrl": "https://www.google.com"
        },
        {
            "_id": utilService.makeId(), // mongoDB
            "fullname": "shneor rabinovitz",
            "username":'shnrab123',
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
            }
        }
    ],
}

// 