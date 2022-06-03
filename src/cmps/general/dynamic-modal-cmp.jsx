import { IoMdClose } from "react-icons/io";
import { LabelModal } from "../modals/label-modal";
import { ChecklistModal } from "../modals/checklist-modal";
import { CoverModal } from "../modals/cover-modal.jsx";
import { ActionModal } from "../modals/action-modal.jsx";
import { TaskDateModal } from "../board-app/task/dates/task-date-modal";
import { AttachmentModal } from "../board-app/task/attachment/attachment-modal";
import { AddBoard } from "../work-space/add-board";
import { MemberModal } from "../modals/member-modal.jsx";
import { Menu } from "./menu";

export const DynamicModalCmp = ({
  modalDetails: { bottom, right, left },
  width,
  onCloseModal,
  modalTitle,
  onRemoveTodo,
  boardId,
  groupId,
  task,
  labels,
  users,
  modalClasses,
}) => {
  let modalTypeToOpen;
  switch (modalTitle) {
    case "Members":
      if (bottom >= 200) bottom -= 70;
      if (bottom >= 240) bottom -= 150;
      modalTypeToOpen = (
        <MemberModal
          boardId={boardId}
          groupId={groupId}
          task={task}
          onCloseModal={onCloseModal}
          users={users}
        />
      );
      break;
    case "Labels":
      if (bottom >= 200 && bottom < 240) bottom -= 70;
      if (bottom >= 240) bottom -= 150;
      modalTypeToOpen = (
        <LabelModal
          boardId={boardId}
          groupId={groupId}
          task={task}
          labels={labels}
          onCloseModal={onCloseModal}
        />
      );
      break;
    case "Checklist":
      if (bottom >= 390) bottom -= 70;
      modalTypeToOpen = (
        <ChecklistModal
          onCloseModal={onCloseModal}
          boardId={boardId}
          groupId={groupId}
          taskId={task.id}
        />
      );
      break;
    case "Dates":
      if (bottom >= 170 && bottom < 200) bottom -= 50;
      if (bottom >= 200 && bottom < 270) bottom -= 100;
      if (bottom >= 270 && bottom < 330) bottom -= 160;
      if (bottom >= 330) bottom -= 200;

      modalTypeToOpen = (
        <TaskDateModal boardId={boardId} groupId={groupId} task={task} />
      );
      break;
    case "Attachment":
      if (bottom >= 330) bottom -= 50;
      modalTypeToOpen = (
        <AttachmentModal
          boardId={boardId}
          groupId={groupId}
          task={task}
          attachments={task.attachments}
        />
      );
      break;
    case "Cover":
      bottom -= 100;
      if (bottom >= 210 && bottom < 250) bottom -= 50;
      if (bottom >= 300 && bottom < 330) bottom -= 100;
      if (bottom >= 330 && bottom < 380) bottom -= 160;
      if (bottom >= 380) bottom -= 200;
      modalTypeToOpen = (
        <CoverModal boardId={boardId} groupId={groupId} task={task} />
      );
      break;
    case "Actions":
      modalTypeToOpen = <ActionModal onRemoveTodo={onRemoveTodo} />;
      break;
    case "Create Board":
      if (bottom >= 170 && bottom < 230) bottom -= 60;
      if (bottom >= 230 && bottom < 260) bottom -= 100;
      if (bottom >= 260) bottom -= 140;
      modalTypeToOpen = <AddBoard onCloseModal={onCloseModal} />;
      break;
    case "Menu":
    modalTypeToOpen = <Menu/>
  }

  return (
    <div
      // tabIndex={"0"}
      // onBlur={onCloseModal}
      className={`modal-container ${modalClasses}`}
      style={
        modalTitle === "Menu"
          ? {
              top: bottom,
              right:0, // when menu open
              // right: -340, //when closed
              width: width || "304px",
            }
          : {
              top: bottom,
              left,
              width: width || "304px",
            }
      }
    >
      <div className="modal-header-wrapper">
        <div className="modal-header">
          {modalTitle}
          <span onClick={onCloseModal} className="modal-close-btn">
            <IoMdClose />
          </span>
        </div>
      </div>
      <div style={modalTitle === 'Menu' ? {maxHeight:'448px'} : {}} className="modal-content-wrapper">{modalTypeToOpen}</div>
    </div>
  );
};

// props:
// {
//   component functions and props
//   component(s) to render
//   modalTitle
// height, width, modal size
// button size: to subtract half of the button size from the top so it will open under the button
//   *** assuming the event opens in the middle of the button
//  top subtract button size from it and make it the start point
// }

// add title, add title style
//

// DEFAULT WIDTH SHOULD BE 304PX
