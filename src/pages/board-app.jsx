import { GroupList } from '../cmps/board-app/group/group-list.jsx'
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router"
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

    if (!board) return <h1>Loading...</h1>
    return (
        <div style={board.style} className="board-app-wrapper">
            <Outlet />
            <div className='board-app'>
                {board && <GroupList groups={board.groups} boardId={boardId} />}
            </div>
        </div>
    )
}