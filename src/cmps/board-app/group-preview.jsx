import {TaskList} from './task-list.jsx'

export const GroupPreview = ({group}) => {
    console.log('woohoo', group);
    return <section className="group-preview-wrapper">
        <div className="group-preview">
            <input type="text" className="group-preview-title" value={group.title} />
            <TaskList tasks={group.tasks}/>
        </div>
    </section>
}