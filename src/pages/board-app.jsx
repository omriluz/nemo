import { GroupList } from '../cmps/board-app/group-list.jsx'
import { useDispatch, useSelector } from "react-redux"

import { useParams } from "react-router"
import { loadBoard } from "../store/actions/board.action"
import { useEffect } from "react"

export const BoardApp = () => {
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()

    useEffect(() => {
        onLoadBoard()
    }, [])

    const onLoadBoard = () => {
        //later switch to boardid from params
        dispatch(loadBoard('jgyQIg'))
    }

    console.log('we got', board);
    // get specific board
    // implement drag and drop
    // if (board) return <h1>no board</h1>
    return (
        <section className="board-app">
            <h1>haha</h1>
            {board && <GroupList groups={board.groups} />}
        </section>
    )
}