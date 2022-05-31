import { TodosList } from './todo-list.jsx'
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { saveChecklist } from '../../../../store/actions/checklist.action.js';



export const ChecklistPreview = ({ checklist, onRemoveChecklist, task, boardId, groupId }) => {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [checklistTitle, setChecklistTitle] = useState({ title: checklist.title });

    const dispatch = useDispatch()

    const handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        setChecklistTitle({ [field]: value });
    }

    const onSaveTask = () => {
        console.log(checklistTitle);
        checklist.title = checklistTitle.title
        dispatch(saveChecklist(checklist, boardId, groupId, task.id));
        // setIsEditOpen(false)
        // setChecklistTitle({ title: task.description ? task.description : "" });
    }

    return (
        <section className="checklist-preview ">
            <div className='title-container  '>
                <div className='checklist-title'><span className='icon-check'><IoMdCheckboxOutline /></span>
                    <form >
                        <textarea onClick={() => setIsEditOpen(true)}
                            name="title"
                            className="check-title"
                            value={checklistTitle.title}
                            onChange={handleChange}
                            onBlur={() => setIsEditOpen(false)}
                        >
                        </textarea>
                        {isEditOpen && <div className="edit-checklist-title">
                            <button onMouseDown={onSaveTask}>Save</button>
                            <span className="cancel" onClick={() => setIsEditOpen(false)}>
                                <IoMdClose />
                            </span>
                        </div>}
                    </form>
                    {!isEditOpen &&
                        <div className='checklist-delete'>
                            <button onClick={() => onRemoveChecklist(checklist.id)}>Delete</button>
                        </div>}
                </div>

            </div>
            <div className="todo-progress">
                <span className="todo-progress-present">0%</span>
                <div className="todo-progress-bar"></div>

            </div>

            <TodosList
                checklistId={checklist.id}
                todos={checklist.todos}
                taskId={task.id}
                boardId={boardId}
                groupId={groupId}
            />
        </section>
    )

}