import { ChecklistPreview } from './checklist-preview'
import { useDispatch } from 'react-redux';
import { removeChecklist } from '../../../../store/actions/checklist.action'
import { useEffect, useState } from 'react';

export const Checklists = ({ task, boardId, groupId }) => {
    const [checklists, setChecklists] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        loadChecklist()
    }, [])

    const loadChecklist = () => {
        setChecklists(task.checklists)
    }

    const onRemoveChecklist = (checklistId) => {
        dispatch(removeChecklist(boardId, groupId, task.id, checklistId))
    }

    return (
        checklists && <section className="checklist-container">
            {checklists.map(checklist =>
                <ChecklistPreview
                    key={checklist.id}
                    checklist={checklist}
                    onRemoveChecklist={onRemoveChecklist}
                    task={task}
                    boardId={boardId}
                    groupId={groupId}

                />)}
        </section>
    )


}