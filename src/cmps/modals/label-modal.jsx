import { useDispatch } from "react-redux";
import { toggleLabel } from "../../store/actions/label.action";
import { BsPencil } from "react-icons/bs";
import {FiCheck} from 'react-icons/fi'

// export const LabelModal = ({labels, boardId, groupId, taskId}) => {

//     const dispatch = useDispatch()

//     const onToggleLabel = (labelId) => {
//         dispatch(toggleLabel(boardId,groupId,taskId,labelId))
//     };

//     const onCreateLabel = () => {
//         console.log('fdasfds');
//       }

//     if (labels) {
//     return <div className="labels-container">
//         {labels.map(label => {
//             return <h1 key={label.id} onClick={() => onToggleLabel(label.id)} style={{color:label.color}}>{label.id}</h1>
//         })}
//         <button onClick={onCreateLabel}>create new label</button>
//     </div>
//     }
// }

// export const LabelModal = ({modalProps: { boardId, groupId, task, labels }}) => {
  export const LabelModal = ({ boardId, groupId, task, labels }) => {
  const dispatch = useDispatch();

  const onToggleLabel = (labelId) => {
    // on toggling, should add label to task, present it in:
    //3) label modal item will have a V
    dispatch(toggleLabel(boardId, groupId, task.id, labelId));
  }


  return (
    <div className="label-modal-container">
      <input
        placeholder="Search labels..."
        className="label-modal-main-input"
        type="text"
      />
      <h4 className="modal-small-title">Labels</h4>
      <div className="edit-modal-labels">
        <div>
          {labels.map((label) => {
            return (
              <div key={label.id} className="edit-label-container">
                <button className="edit-label-btn">
                  <BsPencil />
                </button>
                <div
                  style={{ backgroundColor: label.color }}
                  className="task-label"
                  onClick={() => onToggleLabel(label.id)}
                >
                  {label.title && (
                    <span className="edit-label-title">{label.title}</span>
                  )}
                {task.labelIds.includes(label.id) && <span className="label-check-icon"><FiCheck/></span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
