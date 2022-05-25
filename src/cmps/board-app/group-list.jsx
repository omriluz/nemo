import {GroupPreview} from './group-preview.jsx'
export const GroupList = ({groups}) => {
    return (
        <section className="board-list flex">
            {groups.map(group => {
                return <GroupPreview key={group.id} group={group}/>
            })}
        </section>
        )
}