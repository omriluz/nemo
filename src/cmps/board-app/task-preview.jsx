import { useDispatch, useSelector } from "react-redux"

export const TaskPreview = ({task}) => {

    // dispatch = useDispatch()

    return <div className="task-preview">
        {task.title}
        <button>delete task</button>
    </div>
}