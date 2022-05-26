import { GroupPreview } from './group-preview.jsx'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveGroup } from '../../store/actions/board.action.js'


export const GroupList = ({ groups, boardId }) => {
    const dispatch = useDispatch()
    const [isAddGroup, setIsAddGroup] = useState(false)
    const [groupTitle, setGroupTitle] = useState({ title: '' })

    const handleChange = ev => {
        const field = ev.target.name
        const value = ev.target.value
        setGroupTitle({ [field]: value })
    }

    const onAddGroup = (ev = null) => {
        if (ev) ev.preventDefault()
        dispatch(saveGroup(groupTitle, boardId))
        setIsAddGroup(false)
        setGroupTitle({ title: '' })
    }

    return (
        <section className="board-list flex">
            {groups.map(group => {
                return <GroupPreview key={group.id} group={group} boardId={boardId} />
            })}
            <div className="add-group">
                {!isAddGroup && <button onClick={() => setIsAddGroup(true)}>Add another list</button>}
                {isAddGroup && <form onSubmit={onAddGroup}>
                    <input type="text" name="title" placeholder="Enter list title..." value={groupTitle.title} onChange={handleChange} />
                    <button>Add list</button> <button onClick={() => setIsAddGroup(false)}>X</button>
                </form>}
            </div>
        </section>
    )
}