import { useEffect, useState } from "react";
import { MainMenu } from "../menu/main-menu"
import { ColorMenuModal } from "../menu/color-menu"
import { FilterMenu } from "../menu/filter-menu.jsx"
import { IoMdClose } from "react-icons/io";
import { FiChevronLeft } from "react-icons/fi";

export const Menu = ({ isMenuOpen, onCloseMenu, activities, board }) => {
  const [isColorModalOpen, setIsColorModalOpen] = useState('none');
  // const [isArchiveModalOpen, setIsArchiveModalOpen] = useState('none');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState('none');
  // const [isUniqeModalOpen, setIsUniqeModalOpen] = useState('block');
  const [isMainMenuOpen, setIsMainMenuOpen] = useState('block');
  // const menuStyle = { display: "none" };



  const onOpenColors = () => {
    setIsMainMenuOpen('none')
    setIsColorModalOpen('block')

  }
  const onOpenMenu = () => {
    setIsMainMenuOpen('block')
    setIsColorModalOpen('none')

  }

  return (
    <div className={`pop-up-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="modal-header-wrapper">
        <div className="modal-header">
          {isMainMenuOpen === 'block' && 'Menu'}
          {isColorModalOpen === 'block' && 'Colors'}
          <span
            onClick={onOpenMenu}
            style={{ display: isMainMenuOpen === 'none' ? 'inline-block' : 'none' }}
            className="back-menu">
            <FiChevronLeft /></span>
          <span onClick={onCloseMenu} className="modal-close-btn">
            <IoMdClose />
          </span>
        </div>
      </div>
      <div className="menu-content-wrapper">
        <ColorMenuModal board={board} isColorModalOpen={isColorModalOpen} />
        <MainMenu isMainMenuOpen={isMainMenuOpen}
          onOpenColors={onOpenColors}
          activities={activities}
          boardId={board.id} />
        <FilterMenu isFilterModalOpen={isFilterModalOpen} />
      </div>
    </div>
  );
};






{/* <h1 style={{display:isUniqeModalOpen}}>filter</h1>
      <h1 style={{display:isUniqeModalOpen}}>archive</h1>
      <h1 style={{display:isUniqeModalOpen}} onClick={onOpenColors}>colors</h1>
      <h1 style={{display:isUniqeModalOpen}}>activity</h1>
      <h1 style={{ display:isColorModalOpen }}>color open</h1>
      <h1 style={{ display:isFilterModalOpen }}>filter open</h1>
      <h1 style={{ display:isArchiveModalOpen }}>archive open</h1> */}
    // </>
    // <ColorMenuModal/>
    // <Activity/>