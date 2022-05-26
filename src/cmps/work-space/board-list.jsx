import React from 'react'
import { BoardPreview } from './board-preview.jsx'


export function BoardList({ boards, updateBoard, onToggleStar }) {
    return (
        <section className='board-list-container'>
            {boards.map(board =>
                <BoardPreview
                    key={board._id}
                    board={board}
                    updateBoard={updateBoard}
                    onToggleStar={onToggleStar}

                />
            )}
        </section>
    )
}