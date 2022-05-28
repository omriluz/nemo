import { GroupPreview } from './group-preview.jsx'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoAdd } from "react-icons/io5"
import { saveGroup } from '../../../store/actions/group.action.js'
import { IoMdClose } from "react-icons/io"



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
        <section className="group-list-container flex">
            {groups && groups.map(group => {
                return <GroupPreview groupTitle={groupTitle} key={group.id} group={group} boardId={boardId} />
            })}
            {!isAddGroup && <div className="add-group flex" onClick={() => setIsAddGroup(true)} > <IoAdd /> <p >Add another list</p></div>}
            {isAddGroup && <div className="add-group-open">
                <form onSubmit={onAddGroup}>
                    <input type="text" name="title" placeholder="Enter list title..." value={groupTitle.title} onChange={handleChange} />
                    <div className='add-group-btn group-btn flex align-center'> <button className='save-group '>Add list</button>
                        <button className='close-group group-btn' onClick={() => setIsAddGroup(false)}><IoMdClose /></button></div>
                </form>
            </div>}
        </section>
    )
}