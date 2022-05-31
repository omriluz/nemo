import { ChecklistPreview } from './checklist-preview'
import { useDispatch } from 'react-redux';
import { removeChecklist } from '../../../../store/actions/checklist.action'
import { useEffect, useState } from 'react';

export const Checklists = ({ task, boardId, groupId }) => {
    // const [checklists, setChecklists] = useState(task.checklists)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     loadChecklist()
    // }, [])

    // console.log(task.checklists[0])


    // const loadChecklist = () => {
    //     setChecklists(task.checklists)
    // }

    const onRemoveChecklist = (checklistId) => {
        console.log(checklistId, task.checklists);
        dispatch(removeChecklist(boardId, groupId, task.id, checklistId))
        // const checklistsIdx = task.checklists.findIndex(checklist => checklist.id === checklistId)
        // console.log(checklistsIdx);
        // task.checklists.splice(checklistsIdx, 1)
    }

    return (
        !!task.checklists && <section className="checklist-container">
            {task.checklists.map(checklist =>
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