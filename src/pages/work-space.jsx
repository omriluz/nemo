
import { loadBoards } from '../store/actions/board.action'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BoardList } from "../cmps/user-boards/board-list.jsx";


export const WorkSpace = () => {

  const { boards } = useSelector((storeState) => storeState.boardModule)

  const dispatch = useDispatch()

  useEffect(() => {
    onLoadBoards()
    console.log(boards)
  }, [])

  const onLoadBoards = () => {
    dispatch(loadBoards())
  }



  return (

    <div className="user-boards-container">
      <section className="user-boards-list">

        <div className="board-cards-container">
          <section className="starred-boards-header">
            <h3>Starred boards</h3>
            <BoardList boards={boards} />
          </section>

          <div className="boards-list">
          </div>
        </div>


        <div className="board-cards-container">
          <div className="my-boards-header">
            <h3>Recently viewed</h3>
            <BoardList boards={boards} />

          </div>
          <div className="boards-list">
          </div>
        </div>
      </section>
    </div>
  )
}