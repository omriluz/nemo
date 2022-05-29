import { GrTextAlignLeft } from "react-icons/gr";

export const Description = () => {
    return <section className="task-description flex column ">
        <div className="title-container flex">
            < GrTextAlignLeft className="svg-icon" /> <h3>Description</h3>
        </div>
        <textarea className="text-desc" >

        </textarea>

    </section>


}