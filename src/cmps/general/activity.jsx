import { useEffect, useState } from "react"
import { IoListOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { utilService } from "../../services/util.service";

export const Activity = ({ activities, taskId }) => {
    // debugger
    const [taskActivities, setTaskActivities] = useState(null)
    const [toggleShow, setToggleShow] = useState(true)
    const [activityComment, setActivityComment] = useState({ comment: '' })
    const [isEditOpen, setIsEditOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        loadActivities()
    }, [activities]);


    const loadActivities = () => {
        console.log(activities);
        if (!activities) return
        const currActivities = activities.filter(activity => activity.task.id === taskId)
        setTaskActivities(currActivities)
    }

    const handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        setActivityComment({ [field]: value });
    }



    const onSaveActivity = () => {

        console.log('hhh');

    }


    return <section className="activity-container">

        <div className="title-container">
            <IoListOutline className="activity-icon" /> <h3>Activity</h3>
            {taskId && <button className="details-btn"
                onClick={() => setToggleShow(!toggleShow)} >
                {toggleShow ? 'Hide details' : 'Show details'}
            </button>}
        </div>
        {taskId && <div className="text-area-continer">
            <textarea
                onClick={() => setIsEditOpen(true)}
                name='comment'
                className="activity-input"
                placeholder="Write a comment..."
                value={activityComment.comment}
                onChange={handleChange}
                onBlur={() => setIsEditOpen(false)}
            >

            </textarea>
            {isEditOpen &&
                <button className={`save-activity ${activityComment.comment ? 'active' : ''} `}
                    onMouseDown={onSaveActivity}>Save</button>
            }
        </div>}


        {taskActivities && activities && toggleShow && < div className="activity-preview-container">
            {taskId ? taskActivities.map((activity) => {
                return (
                    <div key={activity.id} className="activity-preview">
                        <div className="avatar-member"
                            style={{ background: `url(${activity.byMember.imgUrl}) center center / cover ` }}>
                        </div>
                        <div className="activity-info">
                            <h2> <span>{activity.byMember.fullname}</span> {activity.txt} </h2>
                            <p>{utilService.timeSince(activity.createdAt)}</p>
                        </div>
                    </div>
                );
            }) : activities.map((activity) => {
                return (
                    <div key={activity.id} className="activity-preview">
                        <div className="avatar-member"
                            style={{ background: `url(${activity.byMember.imgUrl}) center center / cover ` }}>
                        </div>
                        <div className="activity-info">
                            <h2> <span>{activity.byMember.fullname}</span> {activity.txt} </h2>
                            <p>{utilService.timeSince(activity.createdAt)}</p>
                        </div>
                    </div>
                );
            })}

        </div>
        }

    </section >
}

// taskId ? taskActivities : activities.map((activity)

// taskId ? taskActivities :