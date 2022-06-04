import { useState } from "react";

export const Menu = () => {
  const [isColorModalOpen, setIsColorModalOpen] = useState('none');
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState('none');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState('none');
  const [isUniqeModalOpen, setIsUniqeModalOpen] = useState('block');
  const menuStyle = { display: "none" };
  const onOpenColors = () => {
    setIsUniqeModalOpen('none');
    setIsColorModalOpen('block')
  };

  return (
    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit temporibus, similique reiciendis vitae, nihil illum nam voluptate minima iste ullam ea accusamus deleniti maxime voluptas illo quos necessitatibus quibusdam doloremque.
    Eligendi quasi error necessitatibus ullam eaque consequuntur, atque quo voluptas at, nulla vel nam magni laudantium! Dicta obcaecati eos accusantium, reprehenderit in placeat delectus? Alias tempore provident dolor corrupti perferendis.
    Quidem veniam necessitatibus ipsam cum vero adipisci sit itaque, quas possimus atque eaque cumque tempora ullam voluptas explicabo similique aperiam debitis. In dolores tempore quod at! Maiores sit soluta nobis!</h1>
    // <>
    //   <h1 style={{display:isUniqeModalOpen}}>filter</h1>
    //   <h1 style={{display:isUniqeModalOpen}}>archive</h1>
    //   <h1 style={{display:isUniqeModalOpen}} onClick={onOpenColors}>colors</h1>
    //   <h1 style={{display:isUniqeModalOpen}}>activity</h1>
    //   <h1 style={{ display:isColorModalOpen }}>color open</h1>
    //   <h1 style={{ display:isFilterModalOpen }}>filter open</h1>
    //   <h1 style={{ display:isArchiveModalOpen }}>archive open</h1>
    // </>
    // <ColorMenuModal/>
    // <Activity/>
  );
};
