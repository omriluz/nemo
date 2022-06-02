

export const ActionModal = ({ onRemoveTodo }) => {
    console.log(onRemoveTodo);



    return <section className="action-modal">
        <button onClick={onRemoveTodo}>Delete </button>
    </section>

}