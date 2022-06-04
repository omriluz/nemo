// import { useState } from "react";

// export const Menu = () => {
//   const [isColorModalOpen, setIsColorModalOpen] = useState('none');
//   const [isArchiveModalOpen, setIsArchiveModalOpen] = useState('none');
//   const [isFilterModalOpen, setIsFilterModalOpen] = useState('none');
//   const [isUniqeModalOpen, setIsUniqeModalOpen] = useState('block');
//   const menuStyle = { display: "none" };
//   const onOpenColors = () => {
//     setIsUniqeModalOpen('none');
//     setIsColorModalOpen('block')
//   };

//   return (

// <ColorMenuModal/>
// <Activity/>
// );
// };

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export const Menu = ({ isMenuOpen, onCloseMenu }) => {
  const [isColorModalOpen, setIsColorModalOpen] = useState("none");
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState("none");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState("none");
  const [isUniqeModalOpen, setIsUniqeModalOpen] = useState("block");
  const menuStyle = { display: "none" };
  const onOpenColors = () => {
    setIsUniqeModalOpen("none");
    setIsColorModalOpen("block");
  };


  return (
    <div className={`pop-up-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="modal-header-wrapper">
        <div className="modal-header">
          Menu
          <span onClick={onCloseMenu} className="modal-close-btn">
            <IoMdClose />
          </span>
        </div>
      </div>
      <div className="menu-content-wrapper"><h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam doloremque quidem esse vitae voluptatum assumenda ad, rem quisquam eligendi nobis voluptatem, perspiciatis animi maxime temporibus sed ab repudiandae recusandae.
      Soluta dolorem doloremque minus molestiae rem impedit repellat ipsam tempora. Ducimus pariatur dolor beatae, amet dignissimos deserunt quibusdam molestiae laborum ex vel perferendis reprehenderit quas! Maxime alias totam perspiciatis fugiat.
      Perspiciatis natus excepturi enim minus laboriosam libero vero aperiam rerum fuga veniam velit corrupti cupiditate repellendus soluta magni laborum, omnis culpa itaque at accusamus tenetur est, amet consequatur? Suscipit, iure!</h1></div>
    </div>
  );
};
