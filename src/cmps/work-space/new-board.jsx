
import { useEffect, useRef, useState } from "react";
// import React, { useState } from "react";
import { AddBoard } from "./add-board.jsx";
import { DynamicModalCmp } from "../general/dynamic-modal-cmp.jsx";

export function CreateNewBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalDetails = useRef();
  const modalTitle = useRef();




  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onOpenModal = (ev, txt) => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
    modalTitle.current = txt
    modalDetails.current = ev.target.getBoundingClientRect();
    setIsModalOpen(true);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="new-board-preview" onClick={(ev) => onOpenModal(ev, 'Create Board')}>
      <div className="board-details" onClick={toggleModal}>
        <span className="board-title">Create new board</span>
      </div>
      {isModalOpen && <DynamicModalCmp
        modalDetails={modalDetails.current}
        modalTitle={modalTitle.current}
        onCloseModal={onCloseModal}
        toggleModal={toggleModal} />}
    </div>
  );
}

