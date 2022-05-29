import {TiTag} from 'react-icons/ti'
import {BsCheck2Square, BsClock} from 'react-icons/bs'
import {FiPaperclip} from 'react-icons/fi'
import {MdOutlineScreenShare} from 'react-icons/md'

export const TaskSidebar = () => {
  //later will be object that will contain the function as well
  const buttons = [{txt:"Labels", icon:<TiTag/>},
                  {txt:"Checklist", icon:<BsCheck2Square/>},
                    {txt:"Dates", icon:<BsClock/>}, 
                    {txt:"Attachment", icon:<FiPaperclip/>}, 
                    {txt:"Cover", icon: <MdOutlineScreenShare/>}];
  return (
    <div className="task-details-sidebar-container">
      <h3 className="task-details-sidebar-section-title">Add to card</h3>
      <div className="task-details-sidebar-button-container">
        {/* <div className="task-details-sidebar-section"> */}
        {buttons.map((button) => {
          return (
            <button key={button.txt} className="task-details-sidebar-btn">
              {/* {button.icon} */}
              <span className="task-details-sidebar-btn-icon">{button.icon}</span>
              <span className="task-details-sidebar-btn-text">{button.txt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
