export const MemberModal = ({users}) => {
    console.log('users',users);
    return <div className="member-modal">
        <input type="text" className="search-member-input" placeholder="Search Members" />
        <div className="member-section">
        <h4 className="modal-small-title">Board members</h4>
        {users.map(user => {
            <div className="modal-member-item">
                
            </div>
        })}
        </div>
    </div>   
}