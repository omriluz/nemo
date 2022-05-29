import { useEffect, useState } from "react";
import { GrTextAlignLeft } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { saveTask } from "../../../store/actions/task.action.js";



export const Description = ({ task, boardId, groupId }) => {
    console.log(task.description);
    const [isDescOpen, setIsDescOpen] = useState(false)
    const [descTitle, setDescTitle] = useState({ title: task.description ? task.description : "" });
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(isDescOpen);
    }, [isDescOpen])

    const handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        setDescTitle({ [field]: value });
    };

    const onSaveTask = (ev = null) => {
        console.log('hhhh');
        ev.stopPropagation()
        if (ev) ev.preventDefault();

        task.description = descTitle.title
        console.log(task);
        dispatch(saveTask(task, boardId, groupId));
        setIsDescOpen(false);
        setDescTitle({ title: task.description ? task.description : "" });

    }

    return <section className="task-description flex column ">
        <div className="title-container flex row">
            <span className="svg-icon-desc">< GrTextAlignLeft /></span>   <h3 className="desc-title">Description</h3>
        </div>
        <form onSubmit={onSaveTask}>
            <textarea onClick={() => setIsDescOpen(true)}
                name="title"
                className="text-desc"
                placeholder="Add a more detailed description..."
                value={descTitle.title}
                onChange={handleChange}
                onBlur={() => setIsDescOpen(false)}
            >
            </textarea>
            {isDescOpen && <div className="open-desc-btns">
                <button>Save</button>
                <span className="cancel" onClick={() => setIsDescOpen(false)}>
                    Cancel
                </span>
            </div>}
        </form>
    </section>

}