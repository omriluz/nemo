import { TodosList } from './todo-list.jsx'
import { IoMdCheckboxOutline } from "react-icons/io";


export const ChecklistPreview = ({ checklist, onRemoveChecklist }) => {


    return (
        <section className="checklist-preview ">
            <div className='flex '>
                <div className='checklist-logo'><IoMdCheckboxOutline /></div>
                <div className='checklist-title'> {checklist.title}</div>
                <div className='checklist-delete'><button onClick={() => onRemoveChecklist(checklist.id)}>Delete</button></div>
            </div>
            <TodosList todos={checklist.todos} />
        </section>
    )

}