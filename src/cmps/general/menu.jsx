import { useState } from "react";
import { MainMenu } from "../menu/main-menu"

export const Menu = ({ activities, boardId }) => {
  const [isColorModalOpen, setIsColorModalOpen] = useState('none');
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState('none');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState('none');
  const [isUniqeModalOpen, setIsUniqeModalOpen] = useState('block');
  const menuStyle = { display: "none" };
  // const onOpenColors = () => {
  //   setIsUniqeModalOpen('none');
  //   setIsColorModalOpen('block')
  // };

  return (
    <>
      <MainMenu activities={activities} boardId={boardId} />
    </>

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