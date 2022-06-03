import { TiTag } from "react-icons/ti";
import { BsCheck2Square, BsClock } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineScreenShare } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { DynamicModalCmp } from "../../general/dynamic-modal-cmp";

export const TaskSidebar = ({ boardId, groupId, task, labels, users }) => {
  const buttons = [
    { txt: "Members", icon: <BsPerson /> },
    { txt: "Labels", icon: <TiTag /> },
    { txt: "Checklist", icon: <BsCheck2Square /> },
    { txt: "Dates", icon: <BsClock /> },
    { txt: "Attachment", icon: <FiPaperclip /> },
    { txt: "Cover", icon: <MdOutlineScreenShare /> },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalDetails = useRef();
  const modalTitle = useRef();

  // useEffect(() => {}, [isModalOpen]);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onOpenModal = (ev, txt) => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
    modalTitle.current = txt;
    modalDetails.current = ev.target.getBoundingClientRect();
    setIsModalOpen(true);
  };
  return (
    <div className="task-details-sidebar-container">
      {isModalOpen && (
        <DynamicModalCmp
          modalDetails={modalDetails.current}
          modalTitle={modalTitle.current}
          boardId={boardId}
          groupId={groupId}
          task={task}
          type={modalTitle}
          labels={labels}
          users={users}
          attachments={task.attachments}
          onCloseModal={onCloseModal}
        />
      )}
      <h3 className="task-details-sidebar-section-title">Add to card</h3>
      <div className="task-details-sidebar-button-container">
        {/* <div className="task-details-sidebar-section"> */}
        {buttons.map((button) => {
          return (
            <button
              onClick={(ev) => {
                onOpenModal(ev, button.txt);
              }}
              key={button.txt}
              className="task-details-sidebar-btn"
            >
              {button.icon}
              <span className="task-details-sidebar-btn-text">
                {button.txt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
