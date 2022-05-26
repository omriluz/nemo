import { TaskList } from './task-list.jsx'
import { MdMoreHoriz } from "react-icons/md";
import { useState } from 'react'


export const GroupPreview = ({ group }) => {
    const [isAddAction, setIsAddAction] = useState(false)

    const onRemoveGroup = () => {
        console.log('hii');
    }

    return <section className="group-preview-wrapper">
        <div className="group-preview">

            <div className='group-preview-header flex space-between '>
                <h3>{group.title} </h3>
                <span onClick={() => setIsAddAction(!isAddAction)}><MdMoreHoriz />
                </span>
            </div>
            {/* <input type="text" className="group-preview-title" value={group.title} /> */}
            <TaskList tasks={group.tasks} />
        </div>

        {isAddAction && <section className="action-modal" >

            <button onClick={onRemoveGroup}>Delete</button>
        </section>}

    </section>

}