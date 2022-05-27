export const TaskSidebar = ({onOpenLabels}) => {
  return (
    <div className="task-sidebar">
      <button>Date</button>
      <button>Checklist</button>
      <button onClick={onOpenLabels}>Labels</button>
      <button>Attachment</button>
      <button>Cover</button>
    </div>
  );
};
