import { useDispatch } from "react-redux";
import { toggleLabel } from "../../../store/actions/label.action";


export const Labels = ({labels, boardId, groupId, taskId}) => {

    const dispatch = useDispatch()

    const onToggleLabel = (labelId) => {
        dispatch(toggleLabel(boardId,groupId,taskId,labelId))
    };

    const onCreateLabel = () => {
        console.log('fdasfds');
      }

    if (labels) {
    return <div className="labels-container">
        {labels.map(label => {
            return <h1 key={label.id} onClick={() => onToggleLabel(label.id)} style={{color:label.color}}>{label.id}</h1>
        })}
        <button onClick={onCreateLabel}>create new label</button>
    </div>
    }
}