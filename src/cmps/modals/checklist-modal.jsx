import { useDispatch } from 'react-redux';
import { useState } from "react";
import { saveChecklist } from '../../store/actions/checklist.action';
import { utilService } from '../../services/util.service';


export const ChecklistModal = ({ modalProps: { boardId, groupId, taskId } }) => {
    const [checklistTitle, setChecklistTitle] = useState({ title: 'Checklist' });
    const dispatch = useDispatch()
    const handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        setChecklistTitle({ [field]: value });
    }

    const onSaveTask = (ev) => {
        ev.preventDefault()
        console.log(checklistTitle);
        const checklist = checklistTitle
        checklist.id = utilService.makeId()
        checklist.todos = []
        dispatch(saveChecklist(checklist, boardId, groupId, taskId));
        setChecklistTitle({ title: 'Checklist' });
        // task.checklists.push(checklist)
    }

    return <div className="checklist-modal-container">

        <form onSubmit={onSaveTask} className=" flex column">
            <label htmlFor='title'>Title</label>

            <input type="text"
                name='title'
                id='title'
                className='add-checklist'
                value={checklistTitle.title}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>


    </div>
}