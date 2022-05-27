import { GroupList } from '../cmps/board-app/group/group-list.jsx'
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
        dispatch(loadBoard(boardId))
    }


    return (
        <section className="board-app-wrapper">
            <h1>haha</h1>
            <div className='board-app'>
                {board && <GroupList groups={board.groups} boardId={boardId} />}
            </div>
        </section>
    )
}