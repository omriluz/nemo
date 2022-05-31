import { IoMdClose } from "react-icons/io";
import { LabelModal } from "../modals/label-modal";

export const DynamicModalCmp = ({
  modalDetails: { height, top },
  width,
  onCloseModal,
  modalTitle,
  modalProps,
}) => {
  let modalTypeToOpen
  switch (modalTitle) {
    case "Labels":
      console.log('wiiiiiii');
      modalTypeToOpen = <LabelModal modalProps={modalProps}/>
  }

  return (
    <div
      // tabIndex={"0"}
      // onBlur={onCloseModal}
      className="modal-container"
      style={{
        top: top+ height ,
        // width : width || '304px',
        width: "304px",
      }}
    >
      <div className="modal-header-wrapper">
        <div className="modal-header">
          {modalTitle}
          <span onClick={onCloseModal} className="modal-close-btn">
            <IoMdClose />
          </span>
        </div>
      </div>
      <div className="modal-content-wrapper">
        {modalTypeToOpen}
      </div>
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
