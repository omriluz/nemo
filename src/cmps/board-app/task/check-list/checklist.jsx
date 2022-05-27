import { ChecklistPreview } from './checklist-preview'
import { useDispatch } from 'react-redux';
import { removeChecklist } from '../../../../store/actions/checklist.action'

export const Checklists = ({ checklists, boardId, groupId, taskId }) => {
    const dispatch = useDispatch()



    const onRemoveChecklist = (checklistId) => {
        dispatch(removeChecklist(boardId, groupId, taskId, checklistId))
    }

    return (
        <section className="checklist">
            {checklists.map(checklist =>
                <ChecklistPreview
                    key={checklist.id}
                    checklist={checklist}
                    onRemoveChecklist={onRemoveChecklist}

                />)}
        </section>
    )


}