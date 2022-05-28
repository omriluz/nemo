

import React, { useState } from "react";
import { AddBoard } from "./add-board.jsx";

export function CreateNewBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="new-board-preview">
      <div className="board-details" onClick={toggleModal}>
        <span className="board-title">Create new board</span>
      </div>
      {isModalOpen && <AddBoard toggleModal={toggleModal} />}
    </div>
  );
}