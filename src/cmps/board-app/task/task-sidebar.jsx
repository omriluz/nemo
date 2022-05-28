export const TaskSidebar = ({ onOpenLabels }) => {
  //later will be object that will contain the function as well
  const buttons = ["Date", "Checklist", "Labels", "Attachment", "Cover"];
  return (
    <>
      <h3 className="task-details-sidebar-section-title">Add to card</h3>
      {/* <div className="task-details-sidebar-section"> */}
        {buttons.map((button) => {
          if (button === "Labels") {
            return (
              <button
                onClick={onOpenLabels}
                className="task-details-sidebar-btn"
              >
                <span className="task-details-sidebar-btn-icon"></span>
                <span className="task-details-sidebar-btn-text">{button}</span>
              </button>
            );
          }
          return (
            <button className="task-details-sidebar-btn">
              <span className="task-details-sidebar-btn-icon"></span>
              <span className="task-details-sidebar-btn-text">{button}</span>
            </button>
          );
        })}
      {/* </div> */}
    </>
  );
};
