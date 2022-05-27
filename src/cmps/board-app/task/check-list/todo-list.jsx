import { TodoPreview } from './todos-preview.jsx'

export const TodosList = ({ todos }) => {

    return (
        <section className="todos-list">
            {todos.map(todo =>
                <TodoPreview
                    key={todo.id}
                    todo={todo}
                />)}
        </section>
    )


}