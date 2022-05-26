import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BoardList } from "../cmps/user-boards/board-list.jsx";
import { CreateNewBoard } from "../cmps/user-boards/new-board"
import { loadBoards, updateBoard } from '../store/actions/board.action'

import { TiStarOutline } from "react-icons/ti";
import { AiOutlineClockCircle } from 'react-icons/ai';





export const WorkSpace = () => {
  const dispatch = useDispatch()
  const { boards } = useSelector((storeState) => storeState.boardModule)



  useEffect(() => {
    onLoadBoards()
  }, [])

  const onLoadBoards = () => {
    dispatch(loadBoards())
  }

  const getStarredBoards = () => {
    return boards?.filter(board => board.isStar)
  }

  const onToggleStar = (ev, boardId) => {
    ev.preventDefault()
    console.log('hhhh')
    const board = boards.find(board => board._id === boardId)
    board.isStar = !board.isStar
    dispatch(updateBoard(board))
  }

  return (
    <div className="workspace-page">
      <section className="all-boards-list">
        <div className="content-all-boards">

          <section className="starred-boards-section">
            <div className="title-header">
              <div className="title-header-icon-container">
                <TiStarOutline stroke="#42526e" className="header-icon star-icon" />
              </div>
              <h3>Starred boards</h3>
            </div>
            <div className="primary-boards-container-section">
              <BoardList
                boards={getStarredBoards()}
                updateBoard={updateBoard}
                onToggleStar={onToggleStar}
              />
            </div>
          </section>
          <section className="recent-boards-section">
            <div className="title-header">
              <div className="title-header-icon-container">
                <AiOutlineClockCircle className="header-icon star-icon" />
              </div>
              <h3>Recently viewed</h3>
            </div>
            <div className="primary-boards-container-section">
              <BoardList
                boards={boards}
                updateBoard={updateBoard}
                onToggleStar={onToggleStar}
              />
            </div>
          </section>
        </div>
      </section>
      <CreateNewBoard />
    </div >
  )
}