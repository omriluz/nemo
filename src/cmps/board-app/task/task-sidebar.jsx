import { TiTag } from "react-icons/ti";
import { BsCheck2Square, BsClock } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineScreenShare } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { DynamicModalCmp } from "../../general/dynamic-modal-cmp";

export const TaskSidebar = ({ boardId, groupId, task, labels, task: { attachments } }) => {
  const { id } = task
  const taskId = id
  //later will be object that will contain the function as well
  const buttons = [
    { txt: "Labels", icon: <TiTag />, props: { boardId, groupId, taskId, labels } },
    { txt: "Checklist", icon: <BsCheck2Square />, props: { boardId, groupId, taskId } },
    { txt: "Dates", icon: <BsClock />, props: { boardId, groupId, task } },
    { txt: "Attachment", icon: <FiPaperclip />, props: { boardId, groupId, task, attachments } },
    { txt: "Cover", icon: <MdOutlineScreenShare />, props: { boardId, groupId, task } },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalDetails = useRef();
  const modalTitle = useRef();
  const modalProps = useRef()

  // useEffect(() => {}, [isModalOpen]);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onOpenModal = (ev, txt, props) => {
    console.log("fdsafdas", isModalOpen);
    // check if i need this
    // ev.stopPropagation();
    if (isModalOpen) {

      setIsModalOpen(false);
    }
    modalTitle.current = txt
    modalProps.current = props
    modalDetails.current = ev.target.getBoundingClientRect();
    setIsModalOpen(true);
  };

  return (
    <div className="task-details-sidebar-container">
      {isModalOpen && (

        <DynamicModalCmp
          modalDetails={modalDetails.current}
          modalTitle={modalTitle.current}
          modalProps={modalProps.current}
          onCloseModal={onCloseModal}
        />
      )}
      <h3 className="task-details-sidebar-section-title">Add to card</h3>
      <div className="task-details-sidebar-button-container">
        {/* <div className="task-details-sidebar-section"> */}
        {buttons.map((button) => {
          return (
            <button
              onClick={(ev) => onOpenModal(ev, button.txt, button.props)}
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
